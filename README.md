# 🎨 Bezalel Skills Codex

O **bezalel-skills-codex** reúne **30 skills** para o Ministério Bezalel da Igreja Metodista em Palmas. O catálogo atende Videomaker, Design, Fotografia, Story, Social Media e Podimep.

- **Codex** · [Instale as skills](#instalacao) e use o procedimento adequado à sua demanda.
- **ChatGPT** · [Configure o projeto Bezalel](docs/chatgpt/CONFIG-GPT.md) com as instruções e fontes do ministério.

## 📑 Sumário

- [✨ Principais recursos](#recursos)
- [Kit de edição de cortes](#kit-edicao-de-cortes)
- [🛠️ Tecnologias e formatos](#tecnologias)
- [🧰 Ferramentas e integrações](#ferramentas)
- [🧩 Skills disponíveis](#skills)
- [📁 Estrutura do projeto](#estrutura)
- [📦 Pré-requisitos](#requisitos)
- [⬇️ Preparação e downloads](#preparacao)
- [🚀 Como instalar](#instalacao)
- [⌨️ Comandos úteis](#comandos)
- [💬 Como usar](#uso)
- [📂 Materiais e entregas](#entregas)
- [🧪 Revisão e validação](#validacao)
- [🤝 Como contribuir](#contribuicao)
- [📐 Conventional Commits](#commits)
- [🔐 Segurança e privacidade](#seguranca)
- [⚙️ GitHub Actions](#workflows)
- [🔄 Atualização e manutenção](#manutencao)
- [💬 Projeto Bezalel no ChatGPT](#chatgpt)
- [📚 Documentação](#documentacao)
- [👨‍💻 Autor](#autor)

<a id="recursos"></a>

## ✨ Principais recursos

As skills apoiam o trabalho do briefing à revisão. Você pode planejar uma pauta, criar uma peça, editar um vídeo, organizar um acervo ou conferir uma entrega. Cada skill descreve as entradas, o procedimento e o que precisa ser verificado.

<a id="kit-edicao-de-cortes"></a>

## Kit de edição de cortes

Use o [kit de edição de cortes](skills/bezalel-edicao-video/references/kit-edicao-de-cortes.md) como método padrão para cortes curtos de conteúdo falado, como entrevistas, aulas, podcasts e pregações. O kit usa exemplos sintéticos e pode ser aplicado no editor escolhido. Adapte o ritmo, a composição e os efeitos à fala, à identidade e ao briefing.

Consulte os guias de [sincronismo de legendas](skills/bezalel-legendas/references/sincronismo-de-legendas.md) e [motion para cortes](skills/bezalel-motion-design/references/motion-para-cortes.md) para detalhar o timing e as composições.

<a id="tecnologias"></a>

## 🛠️ Tecnologias e formatos

Cada skill tem um `SKILL.md` com metadados YAML e pode incluir guias Markdown em `references/`. O instalador opcional usa módulos nativos do Node.js. Os formatos de trabalho e de entrega estão nas skills de cada editor.

<a id="ferramentas"></a>

## 🧰 Ferramentas e integrações

ArtCraft, Canva e CapCut são as ferramentas prioritárias do Bezalel. HyperFrames atende a prévias conforme a demanda, e Adobe e CorelDRAW são alternativas. A equipe usa Google Agenda para demandas e escalas e Google Drive para acervos.

O usuário prepara o editor e autoriza as próprias conexões. Confira na skill quais recursos do aplicativo são necessários para executar e validar a tarefa.

<a id="skills"></a>

## 🧩 Skills disponíveis

O catálogo contém **30 skills**, organizadas por finalidade. Cada arquivo é independente; os procedimentos e as dependências completas estão nos links abaixo.

### 🧭 Planejamento, texto e revisão — 8 skills

| Skill | O que faz |
| --- | --- |
| [bezalel-planejamento-criativo](skills/bezalel-planejamento-criativo/SKILL.md) | Organiza brief, conceito, etapas, prioridades e critérios de aceite. |
| [bezalel-planejamento-editorial](skills/bezalel-planejamento-editorial/SKILL.md) | Planeja canais, formatos, pauta, prazos e avaliação, com demandas vinculáveis ao Google Agenda. |
| [bezalel-legendas](skills/bezalel-legendas/SKILL.md) | Produz copy, transcrição local e legendas editáveis/SRT/VTT; orienta remapeamento após cortes e revisão textual/bíblica. |
| [bezalel-analise-live](skills/bezalel-analise-live/SKILL.md) | Analisa lives de culto sob demanda e entrega no chat anotações, título, frase marcante, marcadores do culto e sugestões de corte e áudio. |
| [bezalel-estrategia-social](skills/bezalel-estrategia-social/SKILL.md) | Adequa títulos, palavras-chave, hashtags e CTA a Instagram, TikTok e YouTube; analisa desempenho sob demanda. |
| [bezalel-metricas-redes-sociais](skills/bezalel-metricas-redes-sociais/SKILL.md) | Consulta Instagram, YouTube, Facebook e TikTok da IMEP; confere ganhos, perdas e saldo de seguidores/inscritos; cria dashboard web por período, Podimep e demais conteúdos, com resultados orgânicos/pagos e sugestões exclusivamente orgânicas. |
| [bezalel-revisao-tecnica](skills/bezalel-revisao-tecnica/SKILL.md) | Confere conteúdo, formato, evidências e editabilidade; devolve achados e limitações sem alterar a produção por iniciativa própria. |
| [bezalel-revisao-privacidade](skills/bezalel-revisao-privacidade/SKILL.md) | Revisa diffs, links, acessos, integrações e materiais antes de anexar, compartilhar ou versionar. |

### 🎨 Competências de produção — 5 skills

| Skill | O que faz |
| --- | --- |
| [bezalel-design-grafico](skills/bezalel-design-grafico/SKILL.md) | Define hierarquia, tipografia, identidade visual, layouts e fontes editáveis. |
| [bezalel-producao-video](skills/bezalel-producao-video/SKILL.md) | Planeja captação, roteiro, narrativa, montagem, áudio e entrega editável. |
| [bezalel-edicao-video](skills/bezalel-edicao-video/SKILL.md) | Edita gravações existentes, especialmente cortes de pregação e podcast, com ritmo, cor, reenquadramento, legendas dinâmicas e mixagem. |
| [bezalel-motion-design](skills/bezalel-motion-design/SKILL.md) | Planeja storyboard, composição, timing e animação com keyframes editáveis. |
| [bezalel-fotografia](skills/bezalel-fotografia/SKILL.md) | Orienta cobertura, seleção e tratamento documental, preservando originais e direitos de uso. |

### 🧰 Ferramentas prioritárias e organização — 9 skills

| Skill | O que faz |
| --- | --- |
| [bezalel-effectcraft-motion](skills/bezalel-effectcraft-motion/SKILL.md) | Cria motion no EffectCraft, preservando composições, textos, keyframes e projeto ECPROJ. |
| [bezalel-filmcraft-video](skills/bezalel-filmcraft-video/SKILL.md) | Monta timeline no FilmCraft, com cortes, transições, efeitos de áudio, legendas nativas e projeto FCPROJ; export somente quando solicitado. |
| [bezalel-photocraft-design](skills/bezalel-photocraft-design/SKILL.md) | Compõe e retoca imagens com camadas, máscaras e fonte PCRAFT; orienta intercâmbio PSD conforme suporte. |
| [bezalel-vectorcraft-vetores](skills/bezalel-vectorcraft-vetores/SKILL.md) | Preserva objetos, textos e pranchetas no VectorCraft; orienta intercâmbio vetorial e conferência no receptor. |
| [bezalel-lightcraft-foto](skills/bezalel-lightcraft-foto/SKILL.md) | Seleciona e trata fotos; importa presets XMP/DNG e organiza pacotes `.lcpreset`, preservando biblioteca e originais. |
| [bezalel-canva-design](skills/bezalel-canva-design/SKILL.md) | Produz artes, carrosséis, stories e templates com design real na conta e prova visual quando disponível. |
| [bezalel-capcut-video](skills/bezalel-capcut-video/SKILL.md) | Prepara pacote de montagem; valida projeto nativo somente quando criado e conferido no CapCut. |
| [bezalel-google-agenda](skills/bezalel-google-agenda/SKILL.md) | Consulta demandas e escalas; altera eventos somente com operação, calendário e alvo definidos. |
| [bezalel-organizar-drive-e-midias](skills/bezalel-organizar-drive-e-midias/SKILL.md) | Inventaria e organiza acervos de fotos e vídeos no Drive e no computador. Orienta renomeação, curadoria e verificação de migração. |

### 🎞️ Prévias e reconstrução — 3 skills

| Skill | O que faz |
| --- | --- |
| [bezalel-previa-conceito](skills/bezalel-previa-conceito/SKILL.md) | Prepara storyboard ou prévia para validar a ideia antes do projeto final. |
| [bezalel-hyperframes-motion](skills/bezalel-hyperframes-motion/SKILL.md) | Prepara motion HTML/JS, com preview/render quando o runtime e a saída autorizada permitirem. |
| [bezalel-hyperframes-after-effects-handoff](skills/bezalel-hyperframes-after-effects-handoff/SKILL.md) | Planeja ou executa reconstrução experimental parcial no After Effects, explicitando elementos preservados, rasterizados e perdidos. |

### 🖥️ Alternativas Adobe e Corel — 5 skills

| Skill | O que faz |
| --- | --- |
| [bezalel-after-effects-motion](skills/bezalel-after-effects-motion/SKILL.md) | Prepara motion por JSX/ExtendScript e valida AEP no After Effects quando disponível. |
| [bezalel-photoshop-design](skills/bezalel-photoshop-design/SKILL.md) | Prepara composição raster e confere camadas, textos e PSD no Photoshop. |
| [bezalel-illustrator-vetores](skills/bezalel-illustrator-vetores/SKILL.md) | Cria vetores e layouts, com AI validado somente no Illustrator. |
| [bezalel-coreldraw-vetores](skills/bezalel-coreldraw-vetores/SKILL.md) | Prepara materiais vetoriais e testa importação, texto e CDR no CorelDRAW-alvo. |
| [bezalel-lightroom-foto](skills/bezalel-lightroom-foto/SKILL.md) | Orienta seleção, tratamento e presets XMP/DNG no Lightroom Web/Mobile, incluindo extração de ajustes embutidos e intercâmbio com LightCraft. |

<a id="estrutura"></a>

## 📁 Estrutura do projeto

| Caminho | Conteúdo |
| --- | --- |
| `skills/` | Uma pasta e um `SKILL.md` por procedimento, com `references/` quando houver guias de apoio. |
| `docs/chatgpt/` | Configuração, instruções e fontes do projeto no ChatGPT. |
| `docs/manutencao.md` | Contribuição, privacidade, validações e CI. |
| `install.mjs` | Instalador local opcional. |
| `scripts/`, `tests/`, `.husky/` e `.github/` | Validação, testes, hooks e automação do repositório. |

<a id="requisitos"></a>

## 📦 Pré-requisitos

- **Cópia manual** · Codex e acesso à pasta de destino.
- **Instalador opcional** · Node.js 24.13.0 ou superior. O instalador dispensa dependências npm.
- **Produção em editor** · Aplicativo compatível e materiais autorizados, conforme a skill.

<a id="preparacao"></a>

## ⬇️ Preparação e downloads

Baixe ou clone o repositório. O instalador usa `install.mjs`, `scripts/` e `skills/` na estrutura do pacote. Para executá-lo, [obtenha o Node.js](https://nodejs.org/en/download) e confira a versão com `node --version`.

<a id="instalacao"></a>

## 🚀 Como instalar

### 📋 1. Escolha o destino

| Alcance | Pasta |
| --- | --- |
| **Somente no projeto** | `<seu-projeto>/.agents/skills/` |
| **Pessoal, entre projetos** | `~/.agents/skills/` |

### 📁 2. Opção manual

Copie cada pasta `bezalel-<nome>` escolhida para o destino, preservando o `SKILL.md` e a pasta `references/` quando existir.

### ⌨️ 3. Opção com Node.js

Na pasta do repositório, escolha o comando correspondente à instalação desejada.

```powershell
node install.mjs --skill bezalel-design-grafico
node install.mjs --all --project "C:/projetos/Bezalel"
```

Sem destino explícito, o instalador usa `CODEX_HOME/skills` se a variável estiver definida, ou `~/.agents/skills`. Os argumentos `--project` e `--dest` recebem caminhos absolutos. O instalador copia o `SKILL.md` e suas referências Markdown, preserva cópias idênticas e interrompe ao encontrar conflitos ou pastas personalizadas.

### 🔎 4. Confira a descoberta

Abra a pasta de trabalho no Codex e procure a skill pelo nome. Se necessário, reinicie o Codex.

<a id="comandos"></a>

## ⌨️ Comandos úteis

| Comando | Finalidade |
| --- | --- |
| `node install.mjs --list` | Listar as skills sem instalar. |
| `node install.mjs --help` | Consultar opções do instalador. |
| `npm run check` | Validar o repositório após instalar as ferramentas de desenvolvimento. |

Veja os demais comandos no [guia de manutenção](docs/manutencao.md#comandos).

<a id="uso"></a>

## 💬 Como usar

Descreva a demanda ou mencione uma skill pelo nome. Informe objetivo, público, conteúdo confirmado, canal, prazo e o que precisa continuar editável. Indique apenas os materiais pertinentes.

- **Design** · “Use `$bezalel-design-grafico` para criar um carrossel a partir do texto aprovado e da identidade visual que forneci. Preserve o editável.”
- **Vídeo** · “Use `$bezalel-edicao-video` para editar o trecho indicado e revisar as legendas. Salve o projeto editável.”

<a id="entregas"></a>

## 📂 Materiais e entregas

Abra no Codex uma pasta de trabalho privada, fora do clone. Use `Assets/` para originais e referências autorizados e `Produções/<ID>/` para os editáveis e as entregas da demanda. Informe os destinos e as referências na conversa ou em um `AGENTS.md` privado.

Para aplicar a identidade visual da IMEP, forneça o link público do manual vigente. Se o link estiver indisponível ou ilegível, use o PDF ou outra referência oficial em formato textual ou visual que o assistente consiga interpretar.

<a id="validacao"></a>

## 🧪 Revisão e validação

Confirme o texto, a identidade visual, a legibilidade e o formato no editor de destino. Registre o que foi efetivamente conferido. Em vídeo e motion, preserve o projeto editável e exporte apenas mediante pedido explícito.

Consulte a [skill de revisão técnica](skills/bezalel-revisao-tecnica/SKILL.md) para os critérios por formato e o registro de evidências.

<a id="contribuicao"></a>

## 🤝 Como contribuir

Edite o `SKILL.md` correspondente, atualize o catálogo se necessário e execute `npm run check`. Use exemplos sintéticos. A preparação das ferramentas e o fluxo de revisão estão no [guia de manutenção](docs/manutencao.md#contribuicao).

<a id="commits"></a>

## 📐 Conventional Commits

Use `tipo(escopo): descrição`, com escopo opcional. Consulte as [regras e os hooks](docs/manutencao.md#commits).

<a id="seguranca"></a>

## 🔐 Segurança e privacidade

Mantenha credenciais, links internos, dados pessoais e materiais de produção fora do repositório. Guarde os arquivos na pasta privada e configure acessos no serviço de origem. Use a [skill de revisão de privacidade](skills/bezalel-revisao-privacidade/SKILL.md) antes de anexar, compartilhar ou versionar esses materiais.

Se suspeitar de vazamento, interrompa o envio e avise o mantenedor em privado. Veja [os controles e o procedimento de resposta](docs/manutencao.md#seguranca).

<a id="workflows"></a>

## ⚙️ GitHub Actions

O workflow consolida auditoria de dependências, Gitleaks, lint, testes e privacidade no check **Repository Check**. Veja os [detalhes da CI](docs/manutencao.md#workflows).

<a id="manutencao"></a>

## 🔄 Atualização e manutenção

Atualize os procedimentos na fonte e compare as cópias instaladas antes de substituí-las. Consulte o [guia de manutenção](docs/manutencao.md#atualizacao) para atualizar o pacote e o [guia do ChatGPT](docs/chatgpt/CONFIG-GPT.md#5-atualize-o-projeto) para atualizar instruções e fontes do projeto.

<a id="celular"></a>

<a id="chatgpt"></a>

## 💬 Projeto Bezalel no ChatGPT

O instalador copia as 30 skills para uso local no Codex. No ChatGPT, a configuração usa um projeto individual com instruções e fontes, disponível pelo navegador e pelos aplicativos compatíveis.

1. Siga o [CONFIG-GPT.md](docs/chatgpt/CONFIG-GPT.md) para criar o projeto **Bezalel**.
2. Cole [BEZALEL.md](docs/chatgpt/BEZALEL.md) em **Instruções do projeto**.
3. Adicione [FONTES.md](docs/chatgpt/FONTES.md) como referência. Forneça ao projeto individual apenas os links internos pertinentes que a liderança disponibilizar em privado.
4. Conecte os serviços disponíveis com suas contas autorizadas e teste a configuração conforme o guia.

<a id="documentacao"></a>

## 📚 Documentação

| Documento | Quando consultar |
| --- | --- |
| [CONFIG-GPT.md](docs/chatgpt/CONFIG-GPT.md) | Configurar, testar e atualizar o projeto no ChatGPT. |
| [BEZALEL.md](docs/chatgpt/BEZALEL.md) | Obter o texto das instruções do projeto. |
| [FONTES.md](docs/chatgpt/FONTES.md) | Identificar as referências de trabalho que o usuário deve fornecer. |
| [Guia de manutenção](docs/manutencao.md) | Contribuir, executar validações ou revisar os controles de segurança. |

<a id="autor"></a>

## 👨‍💻 Autor

### Matheus Pimentel Do Couto

- [GitHub](https://github.com/matheuspcouto)
- [LinkedIn](https://www.linkedin.com/in/matheuspcouto/)
- [Portfólio](https://matheuspcouto-dev.vercel.app/)

---

🎨 **Bezalel Skills Codex** — Ministério de Comunicação da Igreja Metodista em Palmas
