# 🛠️ Manutenção do Bezalel Skills Codex

Guia para quem mantém o repositório público. Para instalar e usar as skills, consulte o [README](../README.md).

- [🤝 Contribuição](#contribuicao)
- [⌨️ Comandos de manutenção](#comandos)
- [📐 Conventional Commits e hooks](#commits)
- [🔐 Segurança e privacidade](#seguranca)
- [⚙️ GitHub Actions](#workflows)
- [🔄 Atualização do pacote](#atualizacao)

<a id="contribuicao"></a>

## 🤝 Contribuição

Use um clone local com Git, npm e Node.js 24.13.0 ou superior. Execute a partir da raiz do pacote.

```powershell
npm ci --ignore-scripts
npm run prepare
npm run check
```

`npm ci --ignore-scripts` instala as versões do lockfile sem executar scripts de ciclo de vida. `npm run prepare` configura os hooks locais via Husky, com `core.hooksPath` apontando para `.husky/_`. Confira a configuração antes de executar se o clone já tiver hooks personalizados.

1. Edite a skill pertinente. Mantenha o `name` igual ao nome da pasta e use exemplos sintéticos.
2. Atualize o catálogo no README se o escopo, as dependências ou a quantidade de skills mudarem. O validador lê a contagem da introdução e os links entre as âncoras `skills` e `estrutura`.
3. Execute `npm run check` e revise o diff e os arquivos novos. Antes do commit, confira o conteúdo do índice com `npm run lint:staged`.
4. Submeta a mudança ao fluxo de revisão humana do projeto.

<a id="comandos"></a>

## ⌨️ Comandos de manutenção

| Comando | O que verifica ou altera |
| --- | --- |
| `npm run check` | Segurança dos arquivos atuais, lint e testes. |
| `npm run lint` | JavaScript, Markdown, metadados das skills, catálogo e links verificados pelo validador. |
| `npm run lint:security` | Política de caminhos, padrões de privacidade e Secretlint nos arquivos atuais. |
| `npm run lint:staged` | Todo o índice Git, incluindo adições forçadas. |
| `npm run lint:history` | Arquivos e mensagens dos commits alcançáveis pelas referências locais. |
| `npm run lint:commits -- --from SHA_BASE --to SHA_HEAD` | Conventional Commits no intervalo indicado. |
| `npm test` | Testes com entradas sintéticas dos validadores e do gate de CI. |
| `npm run audit:deps` | Vulnerabilidades conhecidas das dependências, com falha a partir de severidade alta. |
| `npm run reset-project` | Reinstala `node_modules/` pelo lockfile, prepara hooks, valida e audita o pacote. |

Os comandos de leitura Git não fazem `fetch`. Clones rasos precisam ter o histórico relevante disponível para a análise. As validações do pacote cobrem o instalador e seus arquivos. Aplicativos, contas e projetos nativos são verificados conforme cada skill.

<a id="commits"></a>

## 📐 Conventional Commits e hooks

Use `tipo(escopo): descrição`, com escopo opcional e cabeçalho de até 100 caracteres. Exemplo: `docs(readme): resumir instruções de instalação`. Os tipos permitidos são `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore` e `revert`. Evite escrever o assunto inteiro em maiúsculas, Start Case ou PascalCase. [Especificação Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

| Hook | Verificação |
| --- | --- |
| `pre-commit` | Política de caminhos e conteúdo do índice Git. |
| `commit-msg` | Privacidade da mensagem e formato do commit, sem reproduzir a mensagem no diagnóstico. |
| `pre-push` | Histórico alcançável, índice e `npm run check`. |

<a id="seguranca"></a>

## 🔐 Segurança e privacidade

Mantenha credenciais, dados da equipe, relatos, escalas identificáveis, mídia, arquivos nativos, links, IDs e convites internos fora do Git. Use referências públicas destinadas à divulgação e exemplos sintéticos. Guarde materiais autorizados em uma pasta local fora do clone e configure acessos no aplicativo ou no mecanismo seguro da integração. Antes de enviar dados pessoais, confirme a finalidade, os destinatários e a permissão. A [skill de revisão de privacidade](../skills/bezalel-revisao-privacidade/SKILL.md) orienta essa triagem.

- O [`.gitignore`](../.gitignore) reduz inclusões acidentais. A [política de segurança](../scripts/security-policy.mjs) também verifica arquivos adicionados à força, caminhos, tipo de arquivo, tamanho e padrões conhecidos de dados pessoais, credenciais e links internos.
- O Secretlint examina credenciais em texto. Os diagnósticos locais indicam arquivo, linha e regra sem reproduzir o valor encontrado. A revisão humana cobre casos que os scanners podem deixar passar, como dados em texto livre ou links de provedores desconhecidos.
- A análise do diretório ignora `.git`, `node_modules` e `.husky/_`. O histórico cobre dados alcançáveis pelas referências locais, incluindo arquivos apagados da versão atual. Reflogs, objetos órfãos e cópias em outros computadores estão fora desse alcance.
- Revise os diffs de scanners, política, hooks, workflows e dependências. Trate falsos positivos de forma pontual e justificada.

### 🚨 Suspeita de vazamento

1. Interrompa o envio e avise o mantenedor pelo canal privado acordado. Evite reproduzir a informação em issues, capturas e logs.
2. Encaminhe a revogação ou rotação de credenciais ao responsável pelo serviço. Revise os compartilhamentos e as cópias expostas.
3. Avalie titulares, impacto e medidas com os responsáveis por segurança e privacidade.
4. Corrija o conteúdo e, quando necessário, o histórico com plano e autorização específicos. Valide novamente e registre evidências sanitizadas no ambiente privado apropriado.

As verificações identificam riscos dentro da cobertura testada. Finalidade, hipótese legal, retenção, direitos e eventual comunicação de incidente cabem aos responsáveis pela operação. [Guia de segurança da informação da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-sobre-seguranca-da-informacao-para-agentes-de-tratamento-de-pequeno-porte)

<a id="workflows"></a>

## ⚙️ GitHub Actions

O [workflow de verificação](../.github/workflows/check.yml) roda em pull requests, pushes e execução manual, com permissões de leitura. Os jobs Node usam `npm ci --ignore-scripts`. O Gitleaks verifica o histórico completo com saída redigida. O workflow não publica o relatório SARIF temporário.

| Job | Verificação |
| --- | --- |
| Auditoria de dependências | Avisos conhecidos na árvore de desenvolvimento. |
| Gitleaks | Detecção de segredos no histórico Git. |
| Lint e contratos | JavaScript, Markdown, estrutura das skills, catálogo, sintaxe do instalador e commits do PR. |
| Testes | Validadores e gate da CI com dados sintéticos. |
| Arquivos e privacidade | Política de arquivos, padrões de privacidade e Secretlint no diretório e no histórico. |

O check **Repository Check** consolida os cinco resultados e falha se algum job falhar, for cancelado ou ficar sem execução. A exigência desse check, a revisão de PR e a proteção contra envio de segredos dependem das configurações remotas. Confira a execução no GitHub para validar o resultado da CI. [Proteção contra envio de segredos](https://docs.github.com/en/code-security/concepts/secret-security/push-protection)

<a id="atualizacao"></a>

## 🔄 Atualização do pacote

- Para adicionar uma skill, crie `skills/bezalel-<nome>/SKILL.md` com `name` igual ao nome da pasta. Atualize o catálogo e a contagem no README.
- Para guias de apoio, use `references/<nome-em-minusculas>.md` diretamente na pasta da skill e vincule cada guia no `SKILL.md`. O instalador e os validadores incluem esses arquivos.
- Antes de atualizar uma cópia instalada, compare os arquivos. Resolva manualmente diferenças e personalizações antes de substituir a cópia.
- Ao atualizar dependências, revise scripts e lockfile. As versões fixadas abaixo tratam avisos de dependências transitivas. Revalide lint, testes e auditoria ao alterar os overrides.

| Dependência | Override atual | Aviso associado |
| --- | --- | --- |
| `katex` | `0.18.2` | [GHSA-238p-pmpm-9mq7](https://github.com/advisories/GHSA-238p-pmpm-9mq7) |
| `minimatch` | `11.0.4` | [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249) |
| `re2js` | `2.8.7` | [GHSA-gg6h-894w-4m9c](https://github.com/advisories/GHSA-gg6h-894w-4m9c) |

KaTeX e minimatch ultrapassam as faixas declaradas por seus consumidores. Confira a compatibilidade ao atualizar o lint. Remova cada override quando a cadeia de dependências adotar a correção e os testes e a auditoria passarem.
