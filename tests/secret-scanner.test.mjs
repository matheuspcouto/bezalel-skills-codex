import assert from 'node:assert/strict';
import test from 'node:test';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkSecurity, scanSecrets } from '../scripts/check-security.mjs';
import { root, textEntry } from '../scripts/repository.mjs';

test('Secretlint detecta token sintético sem exibir o valor e sem permitir supressão inline', () => {
  const token = ['ghp', 'A'.repeat(36)].join('_');
  const text = ['// secretlint-disable', token].join('\n');
  const result = scanSecrets([textEntry('README.md', Buffer.from(text))]);
  assert(result.some(item => item.rule.includes('github')));
  assert(!JSON.stringify(result).includes(token));
  assert(result.every(item => item.line === 2));
});

test('mensagem válida passa, formato livre e contato privado falham sem ecoar conteúdo', () => {
  const manifestPath = fileURLToPath(import.meta.resolve('@commitlint/cli/package.json'));
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const cli = join(dirname(manifestPath), manifest.bin.commitlint);
  for (const [message, status] of [['docs(skills): atualizar catálogo', 0], ['Atualizando coisas', 1], ['docs: ATUALIZAR CATÁLOGO', 1]]) {
    const result = spawnSync(process.execPath, [cli, '--quiet'], { cwd: root, input: message, encoding: 'utf8', windowsHide: true });
    assert.equal(result.status, status);
    assert.equal(result.stdout, '');
  }
  const contact = ['pessoa', 'provedor.com.br'].join('@');
  const result = checkSecurity([textEntry('docs/commit-message.md', Buffer.from(`docs: incluir ${contact}`))]);
  assert(result.some(item => item.rule === 'email-real'));
  assert(!JSON.stringify(result).includes(contact));
});

test('scanner bloqueia configuração inválida, processo com falha e diagnóstico vazio', () => {
  for (const result of [
    { status: 2, stdout: 'erro' },
    { status: null, error: new Error('falha sintética') },
    { status: 0, stdout: 'json incompleto' },
    { status: 1, stdout: '[]' }
  ]) {
    assert.throws(() => scanSecrets([], () => result));
  }
});
