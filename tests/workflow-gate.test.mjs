import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmdirSync, unlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import test from 'node:test';
import { parseDocument } from 'yaml';
import { root } from '../scripts/repository.mjs';

const document = parseDocument(readFileSync(join(root, '.github/workflows/check.yml'), 'utf8'), { uniqueKeys: true });
assert.equal(document.errors.length, 0);
const workflow = document.toJS();

test('gate depende de todos os jobs e os controles não têm skip por job', () => {
  const controls = Object.keys(workflow.jobs).filter(name => name !== 'summary');
  assert.deepEqual([...workflow.jobs.summary.needs].sort(), controls.sort());
  for (const control of controls) {
    assert.equal(workflow.jobs[control].if, undefined);
    assert.equal(workflow.jobs[control]['continue-on-error'], undefined);
  }
  assert.equal(workflow.jobs.summary.if, 'always()');
  assert.equal(workflow.jobs.summary.name, 'Repository Check');
});

test('Bash do resumo aprova somente sucesso total e bloqueia falha, skip, cancelamento ou resultado inválido', () => {
  const bash = process.platform === 'win32'
    ? resolve(execFileSync('git', ['--exec-path'], { encoding: 'utf8' }).trim(), '../../../bin/bash.exe')
    : 'bash';
  const directory = mkdtempSync(join(tmpdir(), 'bezalel-workflow-gate-'));
  const summary = join(directory, 'summary.md');
  const step = workflow.jobs.summary.steps[0];
  const keys = Object.keys(step.env);
  const run = results => spawnSync(bash, ['-c', step.run], {
    env: { ...process.env, ...results, GITHUB_STEP_SUMMARY: summary },
    encoding: 'utf8', windowsHide: true, timeout: 10000
  });
  try {
    const success = Object.fromEntries(keys.map(key => [key, 'success']));
    assert.equal(run(success).status, 0);
    for (const key of keys) {
      for (const state of ['failure', 'skipped', 'cancelled', 'unexpected']) {
        assert.equal(run({ ...success, [key]: state }).status, 1, `${key}: ${state}`);
      }
    }
    const output = readFileSync(summary, 'utf8');
    assert(output.includes('| Verificação | Resultado |'));
  } finally {
    if (existsSync(summary)) unlinkSync(summary);
    rmdirSync(directory);
  }
});
