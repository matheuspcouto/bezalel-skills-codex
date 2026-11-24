import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const repository = fileURLToPath(new URL('../', import.meta.url));
const editing = 'bezalel-edicao-video';
const guide = 'references/kit-edicao-de-cortes.md';

function destination(t) {
  const temp = realpathSync(tmpdir());
  const path = mkdtempSync(join(temp, 'bezalel-install-'));
  assert.equal(dirname(path), temp);
  t.after(() => rmSync(path, { recursive: true, force: true }));
  return path;
}

function install(path, ...skills) {
  const result = spawnSync(process.execPath, [
    join(repository, 'install.mjs'), '--dest', path, ...skills.flatMap(skill => ['--skill', skill])
  ], { encoding: 'utf8', windowsHide: true });
  assert.ifError(result.error);
  return result;
}

test('instala e repõe referências sem alterar uma cópia idêntica da skill', t => {
  const dest = destination(t);
  const skill = join(dest, editing, 'SKILL.md');
  const source = join(repository, 'skills', editing);

  const first = install(dest, editing);
  assert.equal(first.status, 0, first.stderr);
  assert.deepEqual(readFileSync(skill), readFileSync(join(source, 'SKILL.md')));
  assert.deepEqual(readFileSync(join(dest, editing, guide)), readFileSync(join(source, guide)));

  const repeat = install(dest, editing);
  assert.equal(repeat.status, 0, repeat.stderr);
  assert.match(repeat.stdout, /identicas preservadas: 1/);

  rmSync(join(dest, editing, guide));
  const repair = install(dest, editing);
  assert.equal(repair.status, 0, repair.stderr);
  assert.deepEqual(readFileSync(join(dest, editing, guide)), readFileSync(join(source, guide)));
});

test('um conflito em referência impede todas as cópias da mesma operação', t => {
  const dest = destination(t);
  const first = install(dest, editing);
  assert.equal(first.status, 0, first.stderr);
  const localGuide = join(dest, editing, guide);
  writeFileSync(localGuide, 'personalização local');

  const captions = 'bezalel-legendas';
  const conflict = install(dest, captions, editing);
  assert.equal(conflict.status, 1);
  assert.match(conflict.stderr, /Conflito preservado/);
  assert.equal(readFileSync(localGuide, 'utf8'), 'personalização local');
  assert.equal(existsSync(join(dest, captions)), false);
});

test('recusa pasta de referências que redireciona para outro destino', t => {
  const dest = destination(t);
  const folder = join(dest, editing);
  const redirected = join(dest, 'outra-pasta');
  mkdirSync(folder);
  mkdirSync(redirected);
  symlinkSync(redirected, join(folder, 'references'), process.platform === 'win32' ? 'junction' : 'dir');

  const result = install(dest, editing);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /Pasta personalizada preservada/);
  assert.equal(existsSync(join(folder, 'SKILL.md')), false);
  assert.equal(existsSync(join(redirected, 'kit-edicao-de-cortes.md')), false);
});
