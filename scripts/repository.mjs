import { execFileSync } from 'node:child_process';
import { existsSync, lstatSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const maxFileBytes = 2 * 1024 * 1024;

export function textEntry(name, bytes, kind = 'file') {
  if (kind !== 'file') return { name, kind, text: '', size: bytes.length };
  try {
    const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    return { name, kind: text.includes('\0') ? 'binary' : kind, text, size: bytes.length };
  } catch {
    return { name, kind: 'binary', text: '', size: bytes.length };
  }
}

export function collectWorkingTree(directory = root) {
  const entries = [];
  function visit(folder) {
    for (const name of readdirSync(folder).sort()) {
      const full = join(folder, name);
      const local = relative(directory, full).replaceAll('\\', '/');
      if (['.git', 'node_modules', '.husky/_'].includes(local)) continue;
      const stat = lstatSync(full);
      if (stat.isSymbolicLink()) entries.push(textEntry(local, Buffer.alloc(0), 'link'));
      else if (stat.isDirectory()) visit(full);
      else if (!stat.isFile()) entries.push(textEntry(local, Buffer.alloc(0), 'special'));
      else if (stat.size > maxFileBytes) entries.push({ name: local, kind: 'oversize', size: stat.size, text: '' });
      else entries.push(textEntry(local, readFileSync(full)));
    }
  }
  visit(directory);
  return entries;
}

export function requireOwnRepository(directory = root) {
  if (!existsSync(join(directory, '.git'))) {
    throw new Error('Sem Git neste diretório. Inicialize/clone o repositório manualmente antes de configurar hooks ou verificar o índice.');
  }
  const top = execFileSync('git', ['rev-parse', '--show-toplevel'], {
    cwd: directory, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe']
  }).trim();
  if (realpathSync(top).toLowerCase() !== realpathSync(directory).toLowerCase()) {
    throw new Error('A raiz Git não corresponde a este pacote.');
  }
}

// Lê TODO o índice: inclui arquivos forçados e usa o blob staged, sem alterar Git.
export function readIndex(directory = root, run = execFileSync) {
  const options = { cwd: directory, maxBuffer: 32 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] };
  const listing = run('git', ['ls-files', '--stage', '-z'], options).toString('utf8');
  return listing.split('\0').filter(Boolean).map(record => {
    const match = record.match(/^(\d{6}) ([a-f0-9]{40,64}) ([0-3])\t([\s\S]+)$/);
    if (!match) throw new Error('Índice Git inválido.');
    const [, mode, object, stage, name] = match;
    if (stage !== '0') throw new Error('Resolva os conflitos do índice antes de validar.');
    if (!['100644', '100755'].includes(mode)) return textEntry(name, Buffer.alloc(0), 'link');
    const size = Number(run('git', ['cat-file', '-s', object], options).toString('utf8').trim());
    if (!Number.isSafeInteger(size) || size < 0) throw new Error('Tamanho de blob inválido.');
    if (size > maxFileBytes) return { name, kind: 'oversize', size, text: '' };
    return textEntry(name, run('git', ['cat-file', 'blob', object], options));
  });
}

export function readHistory(directory = root, run = execFileSync) {
  const options = { cwd: directory, maxBuffer: 32 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] };
  const git = args => run('git', args, options);
  const commits = git(['rev-list', '--all']).toString('utf8').trim().split('\n').filter(Boolean);
  const seen = new Set();
  const entries = [];
  for (const commit of commits) {
    if (!/^[a-f0-9]{40,64}$/.test(commit)) throw new Error('Objeto Git inválido.');
    entries.push(textEntry('docs/commit-message.md', git(['show', '-s', '--format=%B', commit])));
    const tree = git(['ls-tree', '-r', '-z', '--full-tree', commit]).toString('utf8');
    for (const record of tree.split('\0').filter(Boolean)) {
      const match = record.match(/^(\d{6}) (blob|commit) ([a-f0-9]{40,64})\t([\s\S]+)$/);
      if (!match) throw new Error('Árvore Git inválida.');
      const [, mode, type, object, name] = match;
      const key = `${mode}:${object}:${name}`;
      if (seen.has(key)) continue;
      seen.add(key);
      if (type !== 'blob' || !['100644', '100755'].includes(mode)) {
        entries.push(textEntry(name, Buffer.alloc(0), 'link')); continue;
      }
      const size = Number(git(['cat-file', '-s', object]).toString('utf8').trim());
      if (!Number.isSafeInteger(size) || size < 0) throw new Error('Tamanho de blob inválido.');
      if (size > maxFileBytes) entries.push({ name, kind: 'oversize', size, text: '' });
      else entries.push(textEntry(name, git(['cat-file', 'blob', object])));
    }
  }
  return { entries, commits: commits.length };
}
