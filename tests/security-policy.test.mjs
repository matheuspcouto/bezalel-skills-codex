import assert from 'node:assert/strict';
import test from 'node:test';
import { inspectEntries, permittedPath } from '../scripts/security-policy.mjs';
import { textEntry } from '../scripts/repository.mjs';

const entry = text => textEntry('README.md', Buffer.from(text));

test('recusa materiais privados, ambientes, binários e links mesmo com nome de documentação', () => {
  for (const name of ['.env', '.env.example', 'Assets/manual.pdf', 'Producoes/video.mp4', 'tests/token.json', 'node_modules/pacote/index.js']) {
    assert.equal(permittedPath(name), false);
    assert(inspectEntries([textEntry(name, Buffer.from('placeholder'))]).some(item => item.rule === 'arquivo-nao-permitido'));
  }
  for (const kind of ['link', 'binary', 'oversize']) assert(inspectEntries([{ ...entry('texto'), kind }]).length > 0);
});

test('aceita documentação e exemplos reservados, recusando contatos e caminhos pessoais', () => {
  assert.deepEqual(inspectEntries([entry('pessoa@example.invalid; pessoa@example.com; C:/Users/SEU_USUARIO/.agents/skills')]), []);
  const contact = ['pessoa', 'provedor.com.br'].join('@');
  const personalPath = ['C:', 'Users', 'pessoa-sintetica', 'arquivo'].join('/');
  const findings = inspectEntries([entry(`${contact}\n${personalPath}`)]);
  assert(findings.some(item => item.rule === 'email-real' && item.line === 1));
  assert(findings.some(item => item.rule === 'caminho-pessoal' && item.line === 2));
  assert(!JSON.stringify(findings).includes(contact));
  assert(!JSON.stringify(findings).includes(personalPath));
});

test('identifica CPF com dígitos verificadores, telefone e credencial em URL sem revelar valores', () => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const length of [9, 10]) {
    const total = digits.reduce((sum, digit, index) => sum + digit * (length + 1 - index), 0);
    digits.push(total * 10 % 11 % 10);
  }
  const phone = ['+55', '63', '90000', '0000'].join(' ');
  const url = ['postgresql://', 'exemplo:', 'sintetico', '@localhost/base'].join('');
  const findings = inspectEntries([entry(`${digits.join('')}\n${phone}\n${url}`)]);
  for (const rule of ['cpf-valido', 'telefone-brasileiro', 'credencial-em-url']) assert(findings.some(item => item.rule === rule));
  assert.deepEqual(inspectEntries([entry('00000000000; prazo 05/11/2026; 254016000000 ticks')]), []);
});
