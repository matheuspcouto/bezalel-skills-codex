// Executado por npm run lint:skills para conferir estrutura, metadados YAML,
// catálogo do README e links locais. Os testes também importam os validadores
// de metadados e catálogo para exercitar casos sintéticos.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseDocument } from 'yaml';
import { root } from './repository.mjs';
import { skillFiles } from './skill-layout.mjs';

export function validateSkill(name, text) {
  const errors = [];
  const match = text.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return ['frontmatter-ausente'];
  const document = parseDocument(match[1], { uniqueKeys: true });
  if (document.errors.length) return ['yaml-invalido'];
  const metadata = document.toJS();
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) return ['metadados-invalidos'];
  if (!/^bezalel-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) || metadata.name !== name || name.length > 64) errors.push('nome-invalido');
  if (typeof metadata.description !== 'string' || !metadata.description.trim() || metadata.description.length > 1024) errors.push('descricao-invalida');
  if (!/^#\s+\S/m.test(match[2]) || match[2].trim().length < 100) errors.push('procedimento-ausente');
  return errors;
}

export function validateCatalog(readme, names) {
  const catalog = readme.split('<a id="skills"></a>')[1]?.split('<a id="estrutura"></a>')[0] ?? '';
  const links = [...catalog.matchAll(/\]\(skills\/([^/]+)\/SKILL\.md\)/g)].map(match => match[1]);
  if (links.length !== names.length || new Set(links).size !== links.length || names.some(name => !links.includes(name))) return ['catalogo-divergente'];
  const count = readme.match(/reúne \*\*(\d+) skills\*\*/u);
  return Number(count?.[1]) === names.length ? [] : ['contagem-divergente'];
}

// As mensagens indicam somente arquivo/regra, nunca texto potencialmente privado.
export function checkSkills() {
  const errors = [];
  const directory = join(root, 'skills');
  const entries = readdirSync(directory, { withFileTypes: true });
  const names = entries.map(entry => entry.name);
  for (const entry of entries) {
    const { name } = entry;
    const folder = join(directory, name);
    if (!entry.isDirectory() || !/^[a-z0-9-]+$/.test(name)) {
      errors.push('skills/: estrutura-invalida'); continue;
    }
    let files;
    try {
      files = skillFiles(folder);
    } catch {
      errors.push(`${name}: estrutura-invalida`);
      continue;
    }
    if (!files.includes('SKILL.md')) {
      errors.push(`${name}: skill-ausente`);
      continue;
    }
    for (const file of files) {
      const text = readFileSync(join(folder, file), 'utf8');
      if (file === 'SKILL.md') errors.push(...validateSkill(name, text).map(error => `${name}: ${error}`));
      checkLinks(`skills/${name}/${file}`, text, errors);
    }
  }
  const readme = readFileSync(join(root, 'README.md'), 'utf8');
  errors.push(...validateCatalog(readme, names));
  checkLinks('README.md', readme, errors);
  if (errors.length) { errors.forEach(error => console.error(error)); process.exitCode = 1; }
  else console.log(`Skills: ${names.length} metadados, catálogo e links locais conferidos.`);
}

function checkLinks(file, text, errors) {
  const ids = new Set([...text.matchAll(/<a id="([^"]+)"><\/a>/g)].map(match => match[1]));
  for (const match of text.matchAll(/\[[^\]\n]*\]\(([^)\s]+)\)/g)) {
    const link = match[1];
    if (/^(https?:|mailto:)/.test(link)) continue;
    if (link.startsWith('#')) {
      // O README usa âncoras explícitas para evitar diferenças entre renderizadores.
      if (file === 'README.md' && !ids.has(link.slice(1))) errors.push(`${file}: ancora-ausente`);
      continue;
    }
    const target = resolve(root, dirname(file), link.split('#')[0]);
    if (!target.startsWith(root.endsWith(sep) ? root : root + sep) || !existsSync(target)) errors.push(`${file}: link-local-invalido`);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) checkSkills();
