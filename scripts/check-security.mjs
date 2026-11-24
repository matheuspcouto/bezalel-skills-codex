// Executa a política de arquivos e o Secretlint nos arquivos atuais, no índice
// ou no histórico Git. Use npm run com lint:security, lint:staged ou lint:history
// respectivamente. O hook commit-msg usa --message com o arquivo da mensagem.

import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectWorkingTree, readHistory, readIndex, requireOwnRepository, root, textEntry } from './repository.mjs';
import { inspectEntries, permittedPath } from './security-policy.mjs';

export function scanSecrets(entries, run = spawnSync) {
  const manifestPath = fileURLToPath(import.meta.resolve('secretlint/package.json'));
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const cli = join(dirname(manifestPath), typeof manifest.bin === 'string' ? manifest.bin : manifest.bin.secretlint);
  const lines = [];
  const locations = [];
  for (const entry of entries) {
    if (entry.kind !== 'file') continue;
    const textLines = entry.text.split(/\r?\n/);
    textLines.forEach((text, index) => {
      lines.push(text);
      locations.push({ file: permittedPath(entry.name) ? entry.name : '[caminho fora da política]', line: index + 1 });
    });
    lines.push(''); locations.push({ file: permittedPath(entry.name) ? entry.name : '[caminho fora da política]', line: 1 });
  }
  // Não permitir que um comentário no conteúdo silencie regras do preset.
  // A substituição preserva as linhas usadas no diagnóstico sanitizado.
  const input = lines.join('\n').replace(/\bsecretlint-(?:disable(?:-next-line|-line)?|enable)\b/g, 'scanner-suppression-ignored');
  if (Buffer.byteLength(input) > 16 * 1024 * 1024) throw new Error('Conteúdo excede o limite de análise.');
  // stdin ignora o estado do working tree e as exclusões de globs/gitignore.
  const config = JSON.stringify({ rules: [{ id: '@secretlint/secretlint-rule-preset-recommend' }] });
  const result = run(process.execPath, [cli, '--secretlintrcJSON', config,
    '--format', 'json', '--stdinFileName', 'repository.txt'], {
    cwd: root, input, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024,
    windowsHide: true, timeout: 120000
  });
  if (result.error || ![0, 1].includes(result.status)) throw new Error('Secretlint não concluiu; a validação foi bloqueada.');
  let reports;
  try { reports = JSON.parse(result.stdout); }
  catch { throw new Error('Resposta inválida do scanner; a validação foi bloqueada.'); }
  if (!Array.isArray(reports)) throw new Error('Formato inesperado do scanner.');
  const findings = reports.flatMap(report => report.messages.map(message => ({
    ...(locations[(message.loc?.start?.line ?? message.line ?? 1) - 1] ?? { file: 'repository.txt', line: 1 }),
    rule: `secretlint/${message.ruleId ?? 'credencial'}`
  })));
  if (result.status !== 0 && findings.length === 0) throw new Error('Scanner falhou sem diagnóstico seguro.');
  return findings;
}

export function checkSecurity(entries) {
  return [...inspectEntries(entries), ...scanSecrets(entries)];
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    let entries;
    if (args.length === 2 && args[0] === '--message') {
      entries = [textEntry('docs/commit-message.md', readFileSync(args[1]))];
    } else {
      if (args.length > 1 || (args.length && !['--staged', '--history'].includes(args[0]))) throw new Error('Opção inválida.');
      if (args.length) requireOwnRepository();
      entries = args[0] === '--history' ? readHistory().entries : args[0] === '--staged' ? readIndex() : collectWorkingTree();
    }
    let count = 0;
    let batch = [], bytes = 0;
    const flush = () => {
      const findings = checkSecurity(batch);
      count += findings.length;
      // Nunca imprimir texto, mensagens originais, tokens ou trechos da linha.
      for (const item of findings) console.error(`${item.file}:${item.line} [${item.rule}]`);
      batch = []; bytes = 0;
    };
    for (const entry of entries) {
      if (bytes + entry.size > 4 * 1024 * 1024 && batch.length) flush();
      batch.push(entry); bytes += entry.size;
    }
    if (batch.length) flush();
    if (count) {
      console.error('Validação bloqueada. Corrija os arquivos e confira o histórico; veja README.md#seguranca.');
      process.exitCode = 1;
    } else console.log(`Segurança: ${entries.length} arquivos verificados, sem achados nas regras configuradas.`);
  } catch (error) {
    if (error.message.startsWith('Sem Git')) console.error(error.message);
    else console.error('A verificação de segurança não concluiu. Confira dependências, configuração e estado do Git local.');
    process.exitCode = 1;
  }
}
