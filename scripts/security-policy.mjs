import { maxFileBytes } from './repository.mjs';
import { skillReferenceName } from './skill-layout.mjs';

const rootFiles = new Set([
  'README.md', 'AGENTS.md',
  'package.json', 'package-lock.json', 'install.mjs', 'eslint.config.mjs',
  'commitlint.config.mjs', '.gitignore', '.gitattributes', '.editorconfig',
  '.gitleaks.toml'
]);

const chatgptDocs = new Set([
  'docs/chatgpt/CONFIG-GPT.md',
  'docs/chatgpt/BEZALEL.md',
  'docs/chatgpt/FONTES.md'
]);

export function permittedPath(name) {
  if (!/^[A-Za-z0-9._/-]+$/.test(name) || name.split('/').some(p => p === '..' || p === '.')) return false;
  if (/(?:^|\/)(?:private|privado|\.private|\.local)(?:\/|$)/i.test(name)) return false;
  return rootFiles.has(name)
    || chatgptDocs.has(name)
    || /^skills\/bezalel-[a-z0-9-]+\/SKILL\.md$/.test(name)
    || (/^skills\/bezalel-[a-z0-9-]+\/references\/[^/]+$/.test(name) && skillReferenceName.test(name.split('/').at(-1)))
    || /^(scripts|tests)\/[a-z0-9/-]+(?:\.test)?\.mjs$/.test(name)
    || /^docs\/[a-z0-9/-]+\.md$/.test(name)
    || /^\.husky\/(pre-commit|pre-push|commit-msg)$/.test(name)
    || /^\.github\/workflows\/[a-z0-9-]+\.yml$/.test(name)
    || ['.github/dependabot.yml', '.github/PULL_REQUEST_TEMPLATE.md'].includes(name);
}

function hasPrivateReference(line) {
  for (const [candidate] of line.matchAll(/https?:\/\/[^\s<>"'`\\)]+/gi)) {
    const url = URL.parse(candidate);
    if (!url) continue;
    const host = url.hostname.toLowerCase();
    const path = url.pathname.toLowerCase();

    if (url.username || url.password) return true;
    if (host === 'drive.google.com' && /\/(?:file|folders|shared-with-me)\/|^\/(?:open|uc|folderview)$/.test(path)) return true;
    if (host === 'docs.google.com' && /^\/(?:document|spreadsheets|presentation|forms|drawings)\//.test(path)) return true;
    if (host === 'calendar.google.com' && (/\/(?:embed|event|ical)\b/.test(path) || url.searchParams.has('cid'))) return true;
    if ((host === 'canva.com' || host.endsWith('.canva.com')) && /^\/(?:design|folder|brand)\//.test(path)) return true;
    if (['canva.link', 'forms.gle', '1drv.ms', 'chat.whatsapp.com'].includes(host)) return true;
    if (host === 'chatgpt.com' && /^\/(?:share\/|g\/g-)/.test(path)) return true;
    if (host.endsWith('.sharepoint.com') || host === 'onedrive.live.com') return true;
    if (host === 'hooks.slack.com' || ((host === 'discord.com' || host === 'discordapp.com') && path.startsWith('/api/webhooks/'))) return true;
    if ([...url.searchParams.keys()].some(key => /^(?:access_token|refresh_token|api_key|client_secret|x-amz-signature|x-goog-signature)$/i.test(key))) return true;
  }
  return false;
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
      if (hasPrivateReference(line)) hit('url-de-recurso-interno-ou-acesso');
      if (/\b(?:senha|password|passwd|api[_-]?key|client[_-]?secret|access[_-]?token|refresh[_-]?token)\b["']?\s*[:=]\s*["']?(?!<|\$|process\.|ctx\.|EXAMPLE|PLACEHOLDER|REDACTED|seu[_-]|sua[_-])[A-Za-z0-9_+/=-]{12,}/i.test(line)) hit('credencial-atribuida');
    });
  }
  return findings;
}
