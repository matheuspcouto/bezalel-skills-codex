import assert from 'node:assert/strict';
import test from 'node:test';
import { readHistory, readIndex, textEntry } from '../scripts/repository.mjs';
import { inspectEntries } from '../scripts/security-policy.mjs';

test('lê o blob do índice, incluindo arquivo privado forçado, sem consultar sua cópia de trabalho', () => {
  const id = 'a'.repeat(40);
  const input = ['pessoa', 'provedor.com.br'].join('@');
  const calls = [];
  const run = (command, args) => {
    assert.equal(command, 'git'); calls.push(args);
    if (args[0] === 'ls-files') return Buffer.from(`100644 ${id} 0\t.env\0`);
    if (args[1] === '-s') return Buffer.from(String(Buffer.byteLength(input)));
    assert.deepEqual(args, ['cat-file', 'blob', id]);
    return Buffer.from(input);
  };
  const entries = readIndex('synthetic', run);
  assert.equal(entries[0].text, input);
  assert(inspectEntries(entries).some(item => item.rule === 'email-real'));
  assert(inspectEntries(entries).some(item => item.rule === 'arquivo-nao-permitido'));
  assert.equal(calls.length, 3);
});

test('bloqueia índice com conflito e não segue symlink ou submódulo', () => {
  const id = 'a'.repeat(40);
  assert.throws(() => readIndex('synthetic', () => Buffer.from(`100644 ${id} 2\tREADME.md\0`)), /conflitos/);
  for (const mode of ['120000', '160000']) {
    const entries = readIndex('synthetic', () => Buffer.from(`${mode} ${id} 0\tREADME.md\0`));
    assert.equal(entries[0].kind, 'link');
  }
  assert.equal(textEntry('README.md', Buffer.from([0xff])).kind, 'binary');
});

test('histórico inclui blob removido em commit anterior e mensagem de commit', () => {
  const first = 'a'.repeat(40), second = 'b'.repeat(40), object = 'c'.repeat(40);
  const text = 'conteudo sintetico';
  const run = (_command, args) => {
    if (args[0] === 'rev-list') return Buffer.from(`${second}\n${first}\n`);
    if (args[0] === 'show') return Buffer.from('docs: exemplo\n');
    if (args[0] === 'ls-tree') return Buffer.from(args.at(-1) === first ? `100644 blob ${object}\t.env\0` : '');
    if (args[1] === '-s') return Buffer.from(String(text.length));
    return Buffer.from(text);
  };
  const history = readHistory('synthetic', run);
  assert.equal(history.commits, 2);
  assert.equal(history.entries.filter(item => item.name === 'docs/commit-message.md').length, 2);
  assert(inspectEntries(history.entries).some(item => item.rule === 'arquivo-nao-permitido'));
});
