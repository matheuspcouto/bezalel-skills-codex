import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { extractFiles, materialize } from '../scripts/cortes/materializar-kit.mjs';

const document = readFileSync(new URL('../docs/cortes/fontes-editaveis.md', import.meta.url), 'utf8');
const files = extractFiles(document);
const fixture = (name, text = 'exemplo') => `<!-- kit-file: ${name} -->\n\`\`\`txt\n${text}\n\`\`\``;

test('o pacote materializa os fontes e a galeria e preserva alterações locais', t => {
  const directory = mkdtempSync(join(realpathSync(tmpdir()), 'bezalel-kit-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  assert.equal(materialize(document, directory).created, 9);
  for (const file of files) assert.equal(readFileSync(join(directory, file.name), 'utf8'), file.content);
  assert.deepEqual(materialize(document, directory), { created: 0, preserved: 9 });
  writeFileSync(join(directory, 'projeto/style.css'), 'alteracao-local');
  assert.throws(() => materialize(document, directory), /Conflito preservado/);
  assert.equal(readFileSync(join(directory, 'projeto/style.css'), 'utf8'), 'alteracao-local');
});

test('conflito é detectado antes de criar outro arquivo do plano', t => {
  const directory = mkdtempSync(join(realpathSync(tmpdir()), 'bezalel-kit-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  writeFileSync(join(directory, 'ocupado.txt'), 'preservar');
  assert.throws(() => materialize(`${fixture('novo.txt')}\n${fixture('ocupado.txt')}`, directory), /Conflito/);
  assert(!existsSync(join(directory, 'novo.txt')));
});

test('recusa travessia, destinos no repositório, duplicação e links', t => {
  for (const path of ['../fora.txt', '/absoluto.txt', 'a/../../fora.txt', 'a//b.txt']) {
    assert.throws(() => extractFiles(fixture(path)), /Caminho inválido/);
  }
  assert.throws(() => extractFiles(`${fixture('a.txt')}\n${fixture('a.txt')}`), /duplicado/);
  assert.throws(() => materialize(document, fileURLToPath(new URL('../', import.meta.url))), /fora do repositório/);
  const directory = mkdtempSync(join(realpathSync(tmpdir()), 'bezalel-kit-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  mkdirSync(join(directory, 'real'));
  symlinkSync(join(directory, 'real'), join(directory, 'atalho'), 'dir');
  assert.throws(() => materialize(document, join(directory, 'atalho')), /link simbólico/);
  assert(!existsSync(join(directory, 'real/projeto')));
});

test('a referência conserva corte de drama comum e cobertura sólida na emenda corrigida', () => {
  const edit = JSON.parse(files.find(file => file.name === 'projeto/montagem.json').content);
  const frames = seconds => Math.round(seconds * 24);
  assert.equal(edit.clips.reduce((total, clip) => total + frames(clip.out) - frames(clip.in), 0), 1388);
  const clip = edit.clips[0];
  const title = edit.titles.find(item => item.lines.some(line => line[1] === 'morrer'));
  assert.deepEqual(clip.monochrome[0].map(frames), [frames(clip.closeUp.in), frames(clip.closeUp.out)]);
  assert.deepEqual([frames(title.in), frames(title.out)], clip.monochrome[0].map(frames));
  for (const [sourceFrame, active] of [[frames(clip.closeUp.in) - 1, false], [frames(clip.closeUp.in), true], [frames(clip.closeUp.out) - 1, true], [frames(clip.closeUp.out), false]]) {
    assert.equal(sourceFrame >= frames(title.in) && sourceFrame < frames(title.out), active);
  }
  const question = edit.titles.find(item => item.theme === 'paper');
  const answer = edit.titles.find(item => frames(item.in) >= frames(question.out) && item.theme === 'ink');
  assert.equal(frames(question.out), frames(answer.in));
  for (let frame = frames(question.out) - 1; frame <= frames(answer.in) + 1; frame += 1) {
    const active = [question, answer].filter(item => frame >= frames(item.in) && frame < frames(item.out));
    assert.equal(active.length, 1, 'uma cartela opaca deve cobrir cada frame da emenda');
  }
});
