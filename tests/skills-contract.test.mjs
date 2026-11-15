import assert from 'node:assert/strict';
import test from 'node:test';
import { validateCatalog, validateSkill } from '../scripts/check-skills.mjs';

const skill = `---\nname: bezalel-exemplo\ndescription: "Procedimento de exemplo."\n---\n\n# Exemplo\n\n${'Procedimento sintético com entradas e critérios. '.repeat(5)}`;

test('metadados exigem nome da pasta, descrição útil e YAML sem chaves duplicadas', () => {
  assert.deepEqual(validateSkill('bezalel-exemplo', skill), []);
  assert(validateSkill('bezalel-outro', skill).includes('nome-invalido'));
  assert(validateSkill('bezalel-exemplo', skill.replace('description:', 'name: duplicado\ndescription:')).includes('yaml-invalido'));
  assert(validateSkill('bezalel-exemplo', skill.replace('"Procedimento de exemplo."', '""')).includes('descricao-invalida'));
});

test('catálogo deve conter cada skill uma vez e a contagem deve corresponder', () => {
  const readme = 'reúne **1 skills** <a id="skills"></a> [exemplo](skills/bezalel-exemplo/SKILL.md)<a id="estrutura"></a>';
  assert.deepEqual(validateCatalog(readme, ['bezalel-exemplo']), []);
  assert(validateCatalog(readme.replace('**1 skills**', '**2 skills**'), ['bezalel-exemplo']).includes('contagem-divergente'));
  assert(validateCatalog(readme, ['bezalel-exemplo', 'bezalel-outro']).includes('catalogo-divergente'));
});
