import { maxFileBytes } from './repository.mjs';

const rootFiles = new Set([
  'README.md', 'AGENTS.md',
  'package.json', 'package-lock.json', 'install.mjs', 'eslint.config.mjs',
  'commitlint.config.mjs', '.gitignore', '.gitattributes', '.editorconfig',
  '.gitleaks.toml'
]);

export function permittedPath(name) {
  if (!/^[A-Za-z0-9._/-]+$/.test(name) || name.split('/').some(p => p === '..' || p === '.')) return false;
  return rootFiles.has(name)
    || /^skills\/bezalel-[a-z0-9-]+\/SKILL\.md$/.test(name)
    || /^(scripts|tests)\/[a-z0-9/-]+(?:\.test)?\.mjs$/.test(name)
    || /^docs\/[a-z0-9/-]+\.md$/.test(name)
    || /^\.husky\/(pre-commit|pre-push|commit-msg)$/.test(name)
    || /^\.github\/workflows\/[a-z0-9-]+\.yml$/.test(name)
    || ['.github/dependabot.yml', '.github/PULL_REQUEST_TEMPLATE.md'].includes(name);
}

function validCpf(value) {
  const digits = value.replace(/\D/g, '');
  if (digits.length !== 11 || /^(\d)\1+$/.test(digits)) return false;
  return [9, 10].every(length => {
    const total = [...digits.slice(0, length)].reduce((sum, digit, index) => sum + Number(digit) * (length + 1 - index), 0);
    const remainder = total * 10 % 11;
    return (remainder === 10 ? 0 : remainder) === Number(digits[length]);
  });
}

export function inspectEntries(entries) {
  const findings = [];
  for (const entry of entries) {
    const file = permittedPath(entry.name) ? entry.name : '[caminho fora da política]';
    const report = (rule, line = 1) => findings.push({ file, line, rule });
    if (!permittedPath(entry.name)) report('arquivo-nao-permitido');
    if (entry.kind !== 'file') { report('arquivo-nao-textual-ou-link'); continue; }
    if (entry.size > maxFileBytes) { report('arquivo-muito-grande'); continue; }
    entry.text.split(/\r?\n/).forEach((line, index) => {
      const hit = rule => report(rule, index + 1);
      for (const match of line.matchAll(/\b[A-Z0-9._%+-]+@([A-Z0-9.-]+\.[A-Z]{2,})\b/gi)) {
        // Somente domínios reservados para exemplos; contatos reais ficam privados.
        if (!/(^|\.)(example\.(com|net|org)|example|invalid|test)$/i.test(match[1])) hit('email-real');
      }
      for (const match of line.matchAll(/(?<!\d)(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})(?!\d)/g)) {
        if (validCpf(match[0])) hit('cpf-valido');
      }
      if (/(?:\+55[ .-]?(?:\(?\d{2}\)?)[ .-]?9?\d{4}[ .-]?\d{4}|\(\d{2}\)\s*9?\d{4}-\d{4})(?!\d)/.test(line)) hit('telefone-brasileiro');
      if (/(?:[A-Z]:[\\/]Users[\\/]|\/Users\/|\/home\/)(?!SEU_USUARIO\b|seu-usuario\b|USER\b|user\b|<)[^\s/\\`"'<>]+/i.test(line)) hit('caminho-pessoal');
      if (/(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis):\/\/[^\s/:]+:[^\s@]+@/i.test(line)) hit('credencial-em-url');
      if (/\b(?:senha|password|passwd|api[_-]?key|client[_-]?secret|access[_-]?token|refresh[_-]?token)\b["']?\s*[:=]\s*["']?(?!<|\$|process\.|ctx\.|EXAMPLE|PLACEHOLDER|REDACTED|seu[_-]|sua[_-])[A-Za-z0-9_+/=-]{12,}/i.test(line)) hit('credencial-atribuida');
    });
  }
  return findings;
}
