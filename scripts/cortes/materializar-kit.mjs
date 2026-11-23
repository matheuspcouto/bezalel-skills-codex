import { existsSync, lstatSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repository = fileURLToPath(new URL('../../', import.meta.url));
const source = fileURLToPath(new URL('../../docs/cortes/fontes-editaveis.md', import.meta.url));

function inside(parent, child) {
  const path = relative(parent, child);
  return path === '' || (!isAbsolute(path) && path !== '..' && !path.startsWith(`..${sep}`));
}

function noLinks(path) {
  for (let current = resolve(path);; current = dirname(current)) {
    if (existsSync(current) && lstatSync(current).isSymbolicLink()) throw new Error('Destino contém link simbólico.');
    if (dirname(current) === current) return;
  }
}

export function extractFiles(document) {
  const files = [];
  const paths = new Set();
  const blocks = /<!-- kit-file: ([^\r\n]+) -->\r?\n```[a-z0-9]*\r?\n([\s\S]*?)\r?\n```/g;
  for (const [, name, content] of document.matchAll(blocks)) {
    if (!/^[a-zA-Z0-9._/-]+$/.test(name) || name.startsWith('/') || name.split('/').some(part => ['', '.', '..'].includes(part))) {
      throw new Error('Caminho inválido no pacote.');
    }
    if (paths.has(name)) throw new Error('Caminho duplicado no pacote.');
    paths.add(name);
    files.push({ name, content: `${content}\n` });
  }
  if (!files.length) throw new Error('Nenhum arquivo encontrado no pacote.');
  return files;
}

export function materialize(document, destination) {
  const target = resolve(destination);
  if (inside(repository, target) || inside(target, repository)) throw new Error('Escolha uma pasta de trabalho fora do repositório e que não seja sua ancestral.');
  noLinks(target);
  if (existsSync(target) && !lstatSync(target).isDirectory()) throw new Error('O destino deve ser uma pasta.');
  const files = extractFiles(document);
  const plan = files.map(file => {
    const output = resolve(target, file.name);
    if (!inside(target, output)) throw new Error('Arquivo fora do destino.');
    noLinks(output);
    if (existsSync(output) && (!lstatSync(output).isFile() || readFileSync(output, 'utf8') !== file.content)) {
      throw new Error(`Conflito preservado: ${file.name}`);
    }
    return { ...file, output };
  });
  // Conferir o plano inteiro antes da primeira escrita; nunca sobrescrever.
  let created = 0;
  for (const file of plan) {
    noLinks(file.output);
    if (existsSync(file.output)) continue;
    mkdirSync(dirname(file.output), { recursive: true });
    writeFileSync(file.output, file.content, { flag: 'wx' });
    created += 1;
  }
  return { created, preserved: plan.length - created };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.length !== 2 || args[0] !== '--dest' || !args[1] || args[1].startsWith('--')) {
      throw new Error('Uso: node scripts/cortes/materializar-kit.mjs --dest ../podimep-kit');
    }
    const result = materialize(readFileSync(source, 'utf8'), args[1]);
    console.log(`Kit: ${result.created} arquivos criados; ${result.preserved} idênticos preservados. Abra referencias/index.html no destino. Nenhuma mídia baixada ou exportada.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
