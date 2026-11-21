import assert from 'node:assert/strict';
import test from 'node:test';
import { inspectEntries, permittedPath } from '../scripts/security-policy.mjs';
import { textEntry } from '../scripts/repository.mjs';

const entry = text => textEntry('README.md', Buffer.from(text));

test('permite apenas os três novos nomes em maiúsculas nos caminhos previstos', () => {
  for (const name of ['CONFIG-GPT.md', 'BEZALEL.md', 'FONTES.md']) {
    assert.equal(permittedPath(`docs/chatgpt/${name}`), true);
    assert.equal(permittedPath(name), false);
    assert.equal(permittedPath(`docs/outro/${name}`), false);
  }
  assert.equal(permittedPath('docs/chatgpt/INTERNO.md'), false);
});

test('recusa materiais privados, ambientes, binários e links mesmo com nome de documentação', () => {
  for (const name of [
    '.env', '.env.example', 'Assets/manual.pdf', 'Producoes/video.mp4', 'tests/token.json',
    'node_modules/pacote/index.js', 'docs/privado/fontes.md', 'docs/private/fontes.md',
    'docs/fontes.local.md', 'docs/.local/config.mjs', 'mcp.json', '.mcp.json'
  ]) {
    assert.equal(permittedPath(name), false);
    assert(inspectEntries([textEntry(name, Buffer.from('placeholder'))]).some(item => item.rule === 'arquivo-nao-permitido'));
  }
  for (const kind of ['link', 'binary', 'oversize']) assert(inspectEntries([{ ...entry('texto'), kind }]).length > 0);
});

test('distingue referências públicas de links de recursos internos e URLs com credenciais', () => {
  const publicLinks = ['https://support.google.com/drive/', 'https://www.canva.com/', 'https://chatgpt.com/'];
  assert.deepEqual(inspectEntries([entry(publicLinks.join(' '))]), []);

  const links = [
    ['drive.google.com', '/drive/u/0/folders/recurso-sintetico'],
    ['docs.google.com', '/spreadsheets/d/recurso-sintetico/edit'],
    ['calendar.google.com', '/calendar/u/0/r/event?eid=recurso-sintetico'],
    ['www.canva.com', '/design/recurso-sintetico/edit'],
    ['canva.link', '/recurso-sintetico'],
    ['equipe.example.sharepoint.com', '/sites/interno'],
    ['chatgpt.com', '/share/recurso-sintetico'],
    ['hooks.slack.com', '/services/recurso-sintetico'],
    ['example.invalid', '/download?X-Amz-Signature=assinatura-sintetica'],
    ['usuario:segredo@example.invalid', '/privado']
  ];
  for (const [host, path] of links) {
    const findings = inspectEntries([entry(`Linha neutra\n[Referência](https://${host}${path})`)]);
    assert.deepEqual(findings.map(({ rule, line }) => ({ rule, line })), [
      { rule: 'url-de-recurso-interno-ou-acesso', line: 2 }
    ]);
    assert(!JSON.stringify(findings).includes(path));
  }
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
