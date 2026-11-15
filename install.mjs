#!/usr/bin/env node
// Local-only optional installer. No packages, downloads, global config or subprocesses.
import { copyFileSync, constants, existsSync, lstatSync, mkdirSync, readFileSync,
  readdirSync, rmdirSync, unlinkSync } from 'node:fs';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const source = join(dirname(fileURLToPath(import.meta.url)), 'skills');
function noLinks(path) {
  for (let current = resolve(path);; current = dirname(current)) {
    if (existsSync(current) && lstatSync(current).isSymbolicLink()) throw Error(`Link preservado: ${current}`);
    if (dirname(current) === current) break;
  }
}
function main() {
  const [major, minor] = process.versions.node.split('.').map(Number);
  if (major < 24 || (major === 24 && minor < 13)) throw Error('Node.js 24.13.0 ou superior e necessario.');
  const available = readdirSync(source, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name).sort();
  let dest = process.env.CODEX_HOME ? join(process.env.CODEX_HOME, 'skills') : join(homedir(), '.agents', 'skills');
  const selected = []; let all = false, list = false;
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      console.log('node install.mjs --list\nnode install.mjs --skill bezalel-design-grafico [--dest CAMINHO]\nnode install.mjs --all [--project PASTA | --dest CAMINHO]\nSem --dest/--project: CODEX_HOME/skills se definido; caso contrario ~/.agents/skills.\nConflitos sao preservados; nao ha --force.'); return;
    }
    if (arg === '--all') all = true;
    else if (arg === '--list') list = true;
    else if (['--skill', '--dest', '--project'].includes(arg)) {
      const value = args[++i];
      if (!value || value.startsWith('--')) throw Error(`Valor ausente: ${arg}`);
      if (arg === '--skill') selected.push(value);
      else {
        if (!isAbsolute(value)) throw Error('Destino/projeto deve ser um caminho absoluto.');
        if (args.includes('--dest') && args.includes('--project')) throw Error('Escolha --dest ou --project.');
        dest = arg === '--project' ? join(value, '.agents', 'skills') : value;
      }
    } else throw Error(`Opcao desconhecida: ${arg}`);
  }
  if (list) { if (all || selected.length) throw Error('--list nao instala.'); console.log(available.join('\n')); return; }
  if (all && selected.length) throw Error('Escolha --all ou --skill.');
  const names = all ? available : [...new Set(selected)];
  if (!names.length) throw Error('Escolha --skill NOME ou --all; use --list para consultar.');
  dest = resolve(dest); noLinks(dest);
  const plan = names.map(name => {
    if (!available.includes(name)) throw Error(`Skill inexistente: ${name}`);
    const input = join(source, name, 'SKILL.md'); noLinks(input);
    const bytes = readFileSync(input);
    const metadata = bytes.toString('utf8').match(/^---\r?\nname: ([a-z0-9-]+)\r?\ndescription: (.+)\r?\n---/);
    if (!metadata || metadata[1] !== name) throw Error(`Metadata invalida: ${name}`);
    const folder = join(dest, name), output = join(folder, 'SKILL.md'); noLinks(output);
    if (existsSync(folder) && readdirSync(folder).some(file => file !== 'SKILL.md')) throw Error(`Pasta personalizada preservada: ${folder}`);
    if (existsSync(output) && !readFileSync(output).equals(bytes)) throw Error(`Conflito preservado: ${output}`);
    return { bytes, input, folder, output, skip: existsSync(output) };
  });
  const createdDirs = [], createdFiles = [];
  function ensureDir(path) {
    if (existsSync(path)) return;
    ensureDir(dirname(path)); noLinks(path); mkdirSync(path); createdDirs.push(path);
  }
  try {
    for (const item of plan) {
      if (item.skip) continue;
      noLinks(item.output); ensureDir(item.folder);
      copyFileSync(item.input, item.output, constants.COPYFILE_EXCL);
      createdFiles.push(item);
    }
  } catch (error) {
    for (const item of createdFiles.reverse()) {
      try { noLinks(item.output); if (readFileSync(item.output).equals(item.bytes)) unlinkSync(item.output); } catch { /* preserve externally changed files */ }
    }
    for (const path of createdDirs.reverse()) { try { rmdirSync(path); } catch { /* only empty newly created directories */ } }
    throw error;
  }
  console.log(`Skills copiadas: ${plan.filter(i => !i.skip).length}; identicas preservadas: ${plan.filter(i => i.skip).length}.\nDestino: ${dest}\nReinicie o Codex se nao aparecerem. Nenhum aplicativo, conector ou configuracao global foi instalado.`);
}
try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
