# 🎨 Bezalel Skills Codex

> **Skills para o Ministério Bezalel** — planejamento, criação e revisão da comunicação da Igreja Metodista em Palmas.

O **bezalel-skills-codex** reúne **27 skills** para apoiar os departamentos de **videomaking, design, fotografia, stories e social media**. Cada skill organiza entradas, procedimentos, entregas e critérios de revisão para tornar o trabalho da equipe mais consistente e preservar os arquivos editáveis.

Desenvolvido inicialmente para a liderança do Bezalel, o pacote permite que os integrantes utilizem os mesmos procedimentos no Codex em seus computadores e reaproveitem as orientações como referências no ChatGPT pelo celular. O **manual vigente e os logos oficiais** orientam as decisões de identidade visual.

A prioridade de ferramentas é **ArtCraft, Canva e CapCut**, com **HyperFrames** para prévias quando útil e **Google Agenda** para demandas e escalas. Adobe e CorelDRAW são alternativas conforme a necessidade e a capacidade disponível.

---

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
- [📱 ChatGPT no celular](#celular)
- [📚 Documentação](#documentacao)
- [👨‍💻 Autor](#autor)

---

<a id="recursos"></a>

## ✨ Principais recursos

### 🎯 Planejamento e conteúdo

- ✅ **Brief criativo** — objetivo, público, conceito, etapas, prioridades e critérios de aceite.
- ✅ **Planejamento editorial** — canais, formatos, prazos e capacidade da equipe, com Google Agenda como sistema adotado para demandas e escalas.
- ✅ **Copy e legendas** — textos de publicação, transcrição, legendas editáveis e SRT/VTT conforme o pedido, com conferência de fatos e referências bíblicas.
- ✅ **Estratégia social sob demanda** — adequação a Instagram, TikTok e YouTube, com fontes atuais, hipóteses explícitas e análise de métricas quando fornecidas ou autorizadas.

### 🎬 Produção criativa

- ✅ **Design gráfico** — artes, carrosséis, stories e layouts com hierarquia, identidade visual e texto editável.
- ✅ **Vídeo e cortes verticais** — roteiro, montagem, reenquadramento, color grading, legendas dinâmicas, áreas seguras e tratamento de áudio.
- ✅ **Motion design** — storyboard, composição, timing e keyframes, com prévia de conceito quando necessária.
- ✅ **Fotografia e presets** — cobertura, seleção e tratamento; importação de XMP/DNG no LightCraft e orientação para Lightroom, com limites de compatibilidade explícitos.

### 🔎 Continuidade e revisão

- ✅ **Acervos de mídia** — inventariar pastas do Google Drive e ZIPs locais, organizar fotos e vídeos e conferir migrações com evidências.
- ✅ **Projetos editáveis** — preservar originais, mídia, camadas, objetos, textos e dependências conforme o aplicativo.
- ✅ **Intercâmbio entre editores** — cópia adicional quando suportada e útil, com perdas e testes no destino identificados.
- ✅ **Evidências de entrega** — distinguir plano, intermediário, projeto conferido e export realmente revisado.
- ✅ **Procedimentos independentes** — instalar apenas as skills necessárias e executá-las no chat principal; elas não criam subagentes.

> 🎬 **Edição de vídeo sem exportação automática:** editar, ajustar, finalizar ou validar significa trabalhar no projeto editável. MP4/MOV, renders de teste, proxies e cópias de intercâmbio exigem pedido explícito da saída correspondente. Consulte os critérios em [Revisão e validação](#validacao).

---

<a id="kit-edicao-de-cortes"></a>

## Kit de edição de cortes

Use o [kit de edição de cortes](skills/bezalel-edicao-video/references/kit-edicao-de-cortes.md) como método padrão para cortes curtos de conteúdo falado, como entrevistas, aulas, podcasts e pregações. O kit usa exemplos sintéticos e pode ser aplicado no editor escolhido. Adapte o ritmo, a composição e os efeitos à fala, à identidade e ao briefing.

Consulte os guias de [sincronismo de legendas](skills/bezalel-legendas/references/sincronismo-de-legendas.md) e [motion para cortes](skills/bezalel-motion-design/references/motion-para-cortes.md) para detalhar o timing e as composições.

---

<a id="tecnologias"></a>

## 🛠️ Tecnologias e formatos

| Tecnologia ou formato | Uso no projeto |
| --- | --- |
| **Markdown + metadados YAML** | Cada `SKILL.md` contém `name`, `description` e o procedimento principal. Guias opcionais ficam em `references/`. |
| **Node.js 24.13.0+ / JavaScript ESM** | Instalador opcional com módulos nativos; versão mínima também declarada em `engines` do `package.json`. |
| **JSON / JSONL** | Registros de produção e comandos estruturados quando o aplicativo oferecer esse suporte. |
| **HTML / JavaScript** | Fonte de composições HyperFrames quando esse fluxo for escolhido. |
| **JSX / ExtendScript** | Automação específica de aplicativos Adobe quando compatível com a versão disponível. |
| **SRT / WebVTT** | Legendas temporizadas separadas, quando solicitadas ou necessárias à integração. |
| **XMP / DNG / `.lcpreset`** | Ajustes, imagens portadoras e pacotes de presets, com funções e compatibilidade distintas. |

O pacote contém documentação de procedimentos e um instalador local. O instalador usa apenas módulos nativos do Node; não há etapa de `npm install` ou build para copiar as skills.

Para colaboradores, o `package.json` organiza **ESLint com regras de segurança, markdownlint-cli2, commitlint, Husky, Secretlint e validação YAML** como dependências de desenvolvimento fixadas no lockfile. Essas ferramentas não são necessárias para a instalação manual ou para executar `node install.mjs`.

---

<a id="ferramentas"></a>

## 🧰 Ferramentas e integrações

| Ferramenta | Finalidade | O que preparar |
| --- | --- | --- |
| **Codex** | Descoberta e aplicação das skills locais | Acesso ao Codex e instalação no escopo desejado. |
| **ArtCraft** | EffectCraft: motion; FilmCraft: vídeo; PhotoCraft: raster; VectorCraft: vetores; LightCraft: fotografia | Aplicativo correspondente, licença/capacidade e versão/GUI/CLI conferidas na máquina. |
| **Canva** | Artes, carrosséis, stories e templates recorrentes | Editor/conta; para ação integrada, plugin/conector habilitado e acesso ao design. |
| **CapCut** | Montagem, cortes e legendas | Desktop/Web/Mobile compatível e mídia autorizada; não presume plugin nem controle automático. |
| **Google Agenda** | Demandas, prazos e escalas | Conector Google Calendar e calendário/operação autorizados; sem conexão, somente proposta com os dados fornecidos. |
| **Google Drive** | Inventário e migração de acervos | Conector com acesso à conta e às pastas autorizadas. Para o fluxo local, forneça as pastas ou ZIPs de trabalho. |
| **HyperFrames** | Prévia e motion em HTML/JS | Neste ambiente: Node.js 24.13.0+, CLI, FFmpeg e browser/renderer compatíveis. GSAP somente se usado pela composição. |
| **Adobe / CorelDRAW** | Alternativas e intercâmbio de editáveis | Aplicativo correspondente, licença, fontes e APIs compatíveis com a versão-alvo. |
| **Transcrição local** | Rascunho de fala com tempos quando o editor não oferecer o recurso | Motor/modelo disponível; a skill de legendas documenta uma alternativa com `faster-whisper` em ambiente Python isolado. |

Para planejamento, copy e revisão documental, bastam contexto e fontes acessíveis. Regras mutáveis de redes sociais exigem pesquisa atual; métricas privadas dependem de dados fornecidos ou leitura autorizada.

As skills e o instalador não baixam aplicativos, instalam plugins ou conectam contas. Sem a ferramenta necessária, o procedimento pode produzir um plano ou intermediário com as limitações identificadas. A preparação de novos motores/modelos de transcrição depende de autorização para essa etapa.

---

<a id="skills"></a>

## 🧩 Skills disponíveis

O catálogo contém **27 skills**, organizadas por finalidade. Os links abaixo abrem os procedimentos principais de cada skill.

### 🧭 Planejamento, texto e revisão — 5 skills

| Skill | O que faz |
| --- | --- |
| [bezalel-planejamento-criativo](skills/bezalel-planejamento-criativo/SKILL.md) | Organiza brief, conceito, etapas, prioridades e critérios de aceite. |
| [bezalel-planejamento-editorial](skills/bezalel-planejamento-editorial/SKILL.md) | Planeja canais, formatos, pauta, prazos e avaliação, com demandas vinculáveis ao Google Agenda. |
| [bezalel-legendas](skills/bezalel-legendas/SKILL.md) | Produz copy, transcrição local e legendas editáveis/SRT/VTT; orienta remapeamento após cortes e revisão textual/bíblica. |
| [bezalel-estrategia-social](skills/bezalel-estrategia-social/SKILL.md) | Adequa títulos, palavras-chave, hashtags e CTA a Instagram, TikTok e YouTube; analisa desempenho sob demanda. |
| [bezalel-revisao-tecnica](skills/bezalel-revisao-tecnica/SKILL.md) | Confere conteúdo, formato, evidências e editabilidade; devolve achados e limitações sem alterar a produção por iniciativa própria. |

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

---

<a id="estrutura"></a>

## 📁 Estrutura do projeto

```text
📦 bezalel-skills-codex/
├── 📁 .github/
│   ├── 📄 workflows/check.yml    → Auditoria, Gitleaks, lint, testes e privacidade
│   └── 📄 PULL_REQUEST_TEMPLATE.md → Modelo de revisão da alteração
├── 📁 .husky/                    → Pre-commit, commit-msg e pre-push
├── 📁 scripts/                   → Validação de skills, arquivos, índice e histórico
├── 📁 tests/                     → Testes de barreiras com dados sintéticos
├── 📄 .editorconfig              → Encoding, indentação e finais de linha
├── 📄 .gitattributes             → Normalização de texto para LF
├── 📄 .gitignore                 → Dependências, temporários e materiais privados
├── 📄 .gitleaks.toml             → Regras padrão do scanner de secrets
├── 📄 commitlint.config.mjs      → Conventional Commits
├── 📄 eslint.config.mjs          → JavaScript e regras de segurança
├── 📄 README.md                  → Visão geral, catálogo, instalação e uso
├── 📄 package.json               → Ferramentas de desenvolvimento; pacote privado no npm
├── 📄 package-lock.json          → Resolução e integridade das dependências
├── 📄 install.mjs                → Instalador local opcional, sem dependências npm
└── 📁 skills/                    → 27 pastas independentes
    ├── 📁 bezalel-design-grafico/
    │   └── 📄 SKILL.md           → Metadados, procedimento e critérios de entrega
    ├── 📁 bezalel-edicao-video/
    │   ├── 📄 SKILL.md
    │   └── 📁 references/
    │       └── 📄 kit-edicao-de-cortes.md
    ├── 📁 bezalel-lightcraft-foto/
    │   └── 📄 SKILL.md
    └── 📁 bezalel-…/             → Demais skills listadas no catálogo
        └── 📄 SKILL.md
```

Cada pasta distribuída contém seu `SKILL.md` e pode incluir guias Markdown em `references/`. Materiais de marca, fotos, produções e dados da equipe ficam na pasta de trabalho privada, descrita em [Materiais e entregas](#entregas).

---

<a id="requisitos"></a>

## 📦 Pré-requisitos

| Forma de uso | Requisitos |
| --- | --- |
| **Cópia manual** | Codex e acesso à pasta de destino; dispensa Node.js, Python e npm. |
| **Instalador opcional** | Node.js 24.13.0 ou superior e terminal aberto na pasta deste pacote. |
| **Contribuição com lint e hooks** | Git, Node.js 24.13.0 ou superior e npm. A CI verifica a versão mínima 24.13.0. |
| **Produção nos editores** | Aplicativo/conta e materiais necessários à atividade; consultar a skill correspondente. |
| **Referência no celular** | ChatGPT e acesso aos textos/materiais enviados ao projeto. |

Manual vigente, logos oficiais, textos/fatos aprovados e direitos sobre os materiais são entradas da produção, conforme a demanda.

---

<a id="preparacao"></a>

## ⬇️ Preparação e downloads

1. Baixe e extraia este repositório. Para usar o instalador, mantenha `install.mjs`, `scripts/` e `skills/` na estrutura do pacote.
2. Escolha a instalação manual ou o instalador opcional.
3. Para usar o instalador, obtenha [Node.js](https://nodejs.org/en/download) em versão 24.13.0 ou superior e confira:

```powershell
node --version
```

Prepare apenas os editores e as integrações necessários ao seu departamento. Instalar uma skill não instala o aplicativo que ela descreve.

---

<a id="instalacao"></a>

## 🚀 Como instalar

### 📋 1. Escolha o destino

| Alcance | Local de instalação |
| --- | --- |
| **Somente no projeto** | `<seu-projeto>/.agents/skills/bezalel-<nome>/SKILL.md` |
| **Pessoal, entre projetos** | `~/.agents/skills/bezalel-<nome>/SKILL.md` |

No Windows, `~` representa sua pasta de usuário, como `C:/Users/SEU_USUARIO`. A pasta `.agents` é uma convenção de descoberta de skills e não cria subagentes. Os locais são descritos na [documentação oficial de skills da OpenAI](https://learn.chatgpt.com/docs/build-skills).

### 📁 2. Opção manual

Copie a pasta de cada skill desejada para o destino escolhido. Para instalar todas, copie as **27 subpastas** de `skills/`, sem criar uma segunda pasta `skills` dentro do destino.

Também é possível copiar o texto: crie a pasta correspondente e salve o arquivo como **`SKILL.md`**, mantendo o cabeçalho com `name` e `description`. Confira se a extensão não ficou `SKILL.md.txt`. Se a skill tiver `references/`, copie também essa pasta para o mesmo destino.

### ⌨️ 3. Opção com Node.js

Na pasta extraída do repositório, consulte o catálogo e escolha o que instalar:

```powershell
# Consultar sem instalar
node install.mjs --list

# Instalar uma skill no destino pessoal
node install.mjs --skill bezalel-design-grafico

# Ou instalar todas em um projeto, informando caminho absoluto
node install.mjs --all --project "C:/projetos/Bezalel"
```

O instalador escolhe o destino nesta ordem: `--dest` ou `--project`, quando informado; caso contrário, `CODEX_HOME/skills` se a variável `CODEX_HOME` estiver definida; na ausência dela, `~/.agents/skills`. Esse é o comportamento deste instalador, e os destinos explícitos ajudam a evitar dúvidas sobre onde a cópia será gravada.

O instalador copia `SKILL.md` e as referências Markdown da skill. Arquivos idênticos são preservados. Conteúdo diferente, pastas personalizadas e caminhos com links simbólicos causam interrupção; o instalador não oferece `--force`.

### 🔎 4. Confira a descoberta

Abra sua pasta de trabalho no Codex e procure a skill pelo nome. Se ela não aparecer após a instalação, reinicie o Codex, conforme a [orientação oficial](https://learn.chatgpt.com/docs/build-skills).

---

<a id="comandos"></a>

## ⌨️ Comandos úteis

Execute na pasta deste pacote. Os comandos de instalação copiam arquivos para o destino indicado.

| Comando | Finalidade |
| --- | --- |
| `node install.mjs --list` | Listar as 27 skills sem instalar. |
| `node install.mjs --help` | Consultar opções e comportamento do destino. |
| `node install.mjs --skill bezalel-design-grafico` | Instalar uma skill. |
| `node install.mjs --skill bezalel-edicao-video --skill bezalel-legendas` | Selecionar várias skills repetindo `--skill`. |
| `node install.mjs --all` | Instalar todas no destino pessoal definido pelo instalador. |
| `node install.mjs --all --project "C:/projetos/Bezalel"` | Instalar em `.agents/skills/` do projeto indicado. |
| `node install.mjs --all --dest "C:/caminho/skills"` | Escolher outro destino absoluto. |
| `node --check install.mjs` | Conferir a sintaxe JavaScript, sem instalar. |
| `npm run check` | Para colaboradores: segurança, lint de código/Markdown, contratos das skills e testes. |
| `npm run lint:staged` | Conferir o conteúdo do índice Git, inclusive arquivos adicionados à força. |
| `npm run lint:history` | Conferir arquivos e mensagens dos commits alcançáveis nas referências locais. |
| `npm run audit:deps` | Consultar vulnerabilidades conhecidas das dependências de desenvolvimento. |
| `npm run reset-project` | Reinstalar ferramentas pelo lockfile, preparar hooks e executar checks/auditoria. |

Escolha **`--all` ou `--skill`**; **`--project` ou `--dest`**. Não combine `--list` com uma seleção de instalação. `--project` e `--dest` exigem caminhos absolutos.

---

<a id="uso"></a>

## 💬 Como usar

Peça a atividade normalmente ou mencione **`$bezalel-design-grafico`**, por exemplo. Na CLI/extensão, use `/skills` ou `$` conforme a interface; o Codex também pode selecionar a skill pela descrição. Veja [como skills são ativadas](https://learn.chatgpt.com/docs/build-skills).

### 📝 Informações para a demanda

| Informação | O que informar |
| --- | --- |
| **Objetivo e público** | O que a peça deve comunicar e para quem. |
| **Conteúdo confirmado** | Texto, fatos, datas, referências bíblicas e CTA aprovados. |
| **Canal e formato** | Story, carrossel, Reel, projeção, impressão ou outro destino; dimensões quando definidas. |
| **Materiais** | Manual/logos vigentes, imagens, mídia, fontes e direitos de uso. |
| **Prazo e entrega** | Data, aplicativo, destino dos arquivos e elementos que precisam permanecer editáveis. |
| **Vídeo/motion** | Duração, proporção, fps, áudio, trecho solicitado ou liberdade de seleção. |
| **Acervo de mídia** | Origem, referência vigente, recorte por ano ou evento, destino e operações autorizadas. |

### 🎯 Exemplos de pedidos

```text
Use $bezalel-design-grafico e $bezalel-canva-design para preparar um carrossel
com o texto aprovado e os materiais indicados em Assets/.
Preserve o design editável e revise a leitura de cada página.
```

```text
Use $bezalel-edicao-video, $bezalel-filmcraft-video e $bezalel-legendas
para editar o trecho e os timecodes que forneci, com legendas editáveis.
Salve o projeto e suas dependências em Produções/<ID>/, sem exportar vídeo.
```

```text
Use $bezalel-lightcraft-foto para importar os presets XMP/DNG fornecidos
na biblioteca isolada indicada. Preserve os originais e informe campos
não mapeados e o que foi testado, sem presumir equivalência com Lightroom.
```

```text
Use $bezalel-organizar-drive-e-midias para inventariar os ZIPs locais do
acervo de um evento. Prepare uma prévia da organização por subevento em
FOTOS e VIDEOS, identifique possíveis duplicatas e preserve os originais.
Nesta etapa, autorizei somente a leitura e o relatório.
```

Para otimizar descoberta, alcance ou engajamento, acrescente **`$bezalel-estrategia-social`** e informe plataforma, formato e objetivo. Correção simples e subtítulos dispensam essa análise. A skill separa orientação oficial, observação da conta e hipótese editorial; não promete viralização.

O trabalho ocorre no chat principal. Para produções complexas, validar conceito/storyboard antes do acabamento conforme a skill; pedidos simples recebem tratamento proporcional. Revisão feita pela mesma sessão é **autorrevisão**.

---

<a id="entregas"></a>

## 📂 Materiais e entregas

### 🗂️ Pasta de trabalho privada

Estrutura sugerida pelas skills, separada do repositório distribuído e da pasta de instalação:

```text
📁 Sua pasta de trabalho/
├── 📁 Assets/                    → Manual, logos, referências e mídia autorizada
│   └── 📁 imep/                 → Materiais da IMEP, no ambiente original
└── 📁 Produções/
    └── 📁 <ID>/
        ├── 📁 editaveis/         → Projetos e fontes preservadas
        ├── 📁 assets/            → Dependências necessárias à produção
        ├── 📁 previa/            → Storyboard ou fonte da prévia, quando usada
        ├── 📁 revisao/           → Provas e registros de conferência
        └── 📁 exports/           → Somente saídas solicitadas/autorizadas
```

Crie apenas as subpastas necessárias. Abra a pasta de trabalho no Codex e indique as fontes reais; um `AGENTS.md` privado pode registrar os caminhos do manual/logos e os destinos. Para outra equipe, consulte a identidade dela.

### 🗃️ Organização de acervos

Use a [skill de organização de Drive e mídias](skills/bezalel-organizar-drive-e-midias/SKILL.md) para trabalhar com a estrutura do acervo, nomes, duplicatas e coleções temáticas. Para cobertura, seleção narrativa e tratamento de fotos, use [Fotografia](skills/bezalel-fotografia/SKILL.md). Para captação ou montagem, consulte [Produção de vídeo](skills/bezalel-producao-video/SKILL.md) e [Edição de vídeo](skills/bezalel-edicao-video/SKILL.md) conforme a tarefa.

Mantenha os ZIPs, originais, inventários, mapas de nomes, galerias e registros de reversão na área privada. Se a organização local passar a ser a referência, use a árvore atualizada para preparar o próximo lote ou comparar com o destino. Antes de enviar ao Drive, confira a autorização de upload e a seleção exata de arquivos.

### 🖋️ Tipografia e identidade

O manual oficial prevalece sobre resumos e referências. Para texto de artes, títulos, cartelas e vídeos, **exceto legendas**, preferir fontes licenciadas compatíveis com o CorelDRAW de destino, preservando texto editável. Conferir acentos, pesos, quebras e licença no aplicativo real; não converter a única cópia em curvas nem substituir tipografia normativa silenciosamente.

### 🔁 Original e intercâmbio

| Origem | O que preservar e conferir |
| --- | --- |
| **PhotoCraft** | Original PCRAFT; cópia PSD/PSB quando suportada, verificando texto, camadas, máscaras e efeitos no receptor. |
| **VectorCraft** | Original `.vectorcraft`; AI ou outro vetor de intercâmbio acordado. SVG com texto vivo pode servir ao CorelDRAW, sujeito a teste de importação/edição. |
| **LightCraft** | Originais, biblioteca e ajustes; `.lcpreset` é pacote próprio e não substitui XMP/DNG para Lightroom. |
| **FilmCraft / EffectCraft** | FCPROJ/ECPROJ e mídia; intercâmbio somente com rota suportada e saída solicitada. MP4 não preserva timeline ou keyframes. |
| **Canva e serviços web** | URL real do projeto/resultado e capacidade de acesso/edição conferida; assets acessíveis no editor. |
| **CapCut** | Projeto real quando criado no aplicativo e mídia vinculada; pacote de montagem isolado é intermediário. |

Em produções ArtCraft, entregar cópia adicional para outro editor quando houver suporte útil e autorização para essa saída. Registrar perdas e testes; sem teste no receptor, marcar compatibilidade como não verificada. Não há conversor automático HyperFrames → ArtCraft/After Effects/CapCut neste pacote.

---

<a id="validacao"></a>

## 🧪 Revisão e validação

### 🎬 Edição sem exportar por rotina

As skills de [edição de vídeo](skills/bezalel-edicao-video/SKILL.md), [FilmCraft](skills/bezalel-filmcraft-video/SKILL.md) e [CapCut](skills/bezalel-capcut-video/SKILL.md) estabelecem que **edição, ajuste, finalização e validação não autorizam exportação**. O padrão é salvar o projeto editável e deixar a exportação manual com o usuário.

Revisar pela timeline, reprodução/prévia do editor, parâmetros, reabertura e edição de elementos. Não gerar MP4/MOV, renders de teste, sequências de imagens, proxies ou intercâmbios por rotina. Em vídeo/motion, a saída correspondente precisa ser solicitada explicitamente; salvar o projeto nativo não é exportação.

### 🔎 Como identificar a evidência

| Registro | O que significa |
| --- | --- |
| `projeto_editavel_verificado` | Projeto salvo/reaberto e edição conferida com evidência; não afirma validação do vídeo exportado. |
| `exportacao_nao_solicitada` | Nenhum export foi solicitado; não exportar para cumprir um teste. |
| `native_validated` | Fonte criada/salva, reaberta e editada no aplicativo, com teste de export e inspeção da saída quando autorizados. |
| `editable_intermediate` | Fonte como SVG, HTML/JS, JSX, SRT/VTT ou pacote de montagem; não equivale automaticamente a projeto nativo. |
| `render_only` | Arquivo renderizado, como MP4, sem a estrutura editável do projeto. |
| `nao_validado` | A etapa relevante ainda não tem comprovação no aplicativo/destino. |
| `blocked` | A etapa depende de fonte, ferramenta ou condição ainda ausente. |

Conferir texto, acentos, datas, fatos, marca, direitos, legibilidade e recortes; para audiovisual, também timing, áudio e sincronismo. Transcrição automática é rascunho: comparar com a fala real. Depois de cortes/remoção de pausas, remapear os tempos e revisar as legendas na timeline. Sintaxe SRT válida não comprova sincronismo.

O registro pode ser uma nota curta ou `manifest.json` da produção: aplicativo/versão, arquivos existentes, dependências, testes executados/pendentes e limitações. As verificações locais datadas nos `SKILL.md` descrevem os casos observados e precisam ser reconfirmadas na versão usada; não comprovam compatibilidade universal.

Para acervos, informe a cobertura do inventário, da comparação de conteúdo e da revisão visual. Compare caminhos, tipos, tamanhos, contagens e pastas vazias para conferir a estrutura e os metadados. Para verificar conteúdo em uma migração, compare hashes compatíveis ou os bytes recuperados dentro do acesso autorizado. Registre os arquivos cobertos e as divergências pendentes.

### ⌨️ Verificações locais do pacote

```powershell
node --check install.mjs
node install.mjs --list
node install.mjs --help
```

Esses comandos verificam sintaxe, catálogo e ajuda sem instalar skills. Não validam aplicativos, contas, projetos nativos ou qualidade de uma produção. Também confira metadados, links e correspondência entre catálogo e pastas ao atualizar a documentação.

Para manutenção do repositório, `npm run check` executa os controles de segurança, lint de JavaScript/Markdown, validação YAML, catálogo, links locais e testes sintéticos. Esses testes cobrem bloqueios, leitura de entradas Git simuladas e detecção real pelo Secretlint; não simulam uma produção nos editores.

### 🔐 Materiais e operações externas

Manual, logos, fotos, produções, credenciais e dados da equipe permanecem privados. Verificar finalidade e direitos das fotos, especialmente de crianças, e o escopo de upload/sincronização. Google Agenda é o sistema adotado para demandas e escalas; não criar planilhas paralelas.

Aprovação de conceito ou peça não autoriza publicação, convites ou compartilhamento. Alterações de eventos, permissões e outras operações externas dependem de pedido específico com alvo e escopo definidos.

---

<a id="contribuicao"></a>

## 🤝 Como contribuir

No clone local deste repositório, prepare as ferramentas de desenvolvimento:

```powershell
npm ci --ignore-scripts
npm run prepare
npm run check
```

O primeiro comando baixa as dependências do lockfile sem executar lifecycle scripts. `prepare` usa o **Husky diretamente**, como nos templates Avodah, para configurar `core.hooksPath` local como `.husky/_`. Se já houver hooks personalizados, confira e integre essa configuração antes de executar. Sem `.git` no diretório do pacote, o Husky informa a ausência e não inicializa um repositório.

### 📝 Fluxo de contribuição

1. Edite a skill pertinente, preservando `name` igual ao nome da pasta e usando exemplos sintéticos.
2. Atualize o catálogo quando mudar quantidade, escopo ou dependência; confira as fontes da versão-alvo.
3. Execute `npm run check` e revise o diff completo, incluindo arquivos novos.
4. Faça o commit padronizado e submeta a alteração à revisão humana no fluxo adotado pela equipe.

Quem apenas instala as skills pode continuar usando a cópia manual ou `node install.mjs`, sem instalar ferramentas de desenvolvimento. Os agentes não executam commit, push ou outras operações externas como consequência desses checks; cada ação depende de pedido específico do usuário.

### ⌨️ Comandos de manutenção

| Comando | O que verifica |
| --- | --- |
| `npm run check` | Segurança dos arquivos atuais, lint e testes. |
| `npm run prepare` | Configurar os hooks locais com Husky. |
| `npm run lint` | JavaScript, Markdown, metadados, catálogo e links. |
| `npm run lint:js` | ESLint nos arquivos JavaScript ESM. |
| `npm run lint:md` | Markdown com as regras configuradas no `package.json`. |
| `npm run lint:skills` | Metadados YAML, estrutura das skills, catálogo e links locais. |
| `npm run lint:security` | Arquivos permitidos, padrões de dados pessoais e Secretlint. |
| `npm run lint:staged` | Conteúdo exato de todo o índice Git, incluindo adições forçadas. |
| `npm run lint:history` | Arquivos e mensagens dos commits alcançáveis nas referências locais. |
| `npm run lint:commits -- --from SHA_BASE --to SHA_HEAD` | Conventional Commits no intervalo local, usando a CLI oficial em modo silencioso. |
| `npm test` | Cenários sintéticos dos validadores e do gate do workflow. |
| `npm run audit:deps` | Avisos de dependências, com falha a partir de severidade alta. |
| `npm run skills:list` | Catálogo sem instalar skills. |
| `npm run reset-project` | Reinstalar dependências, preparar hooks, validar o pacote e auditar dependências. |

Os scripts de análise Git fazem leitura e não executam `fetch`; clones rasos precisam do histórico relevante obtido manualmente. `prepare` configura hooks locais, conforme descrito acima. `npm ci` e `npm audit` usam o registro npm. Para adicionar ou atualizar ferramentas com versões exatas, use `npm install --save-dev --save-exact <pacote@versão>` e revise o lockfile.

### 🔄 Reset do ambiente local

```powershell
npm run reset-project
```

O comando usa `npm ci --ignore-scripts` para substituir `node_modules/` com as versões do lockfile; depois executa `prepare`, `check` e `audit:deps`, interrompendo na primeira falha. O lockfile é preservado. O Husky prepara os hooks conforme descrito acima; se não houver `.git` neste diretório, informa a ausência. As skills instaladas em outros projetos ou no perfil pessoal não são reinstaladas por esse comando.

### 🧩 O que foi mantido na estrutura

| Recurso | Por que existe |
| --- | --- |
| `scripts/check-skills.mjs` | O lint genérico não confere nome da pasta, frontmatter, catálogo e links do pacote. |
| `scripts/skill-layout.mjs` | Compartilha as regras de organização das referências Markdown entre instalador e validadores. |
| `scripts/check-security.mjs` | Um único comando para arquivos atuais, índice, histórico e mensagem de commit, com diagnósticos sem valores sensíveis. |
| `scripts/repository.mjs` | Centraliza leitura de arquivos/blobs Git, encoding, tamanho e identificação de links. |
| `scripts/security-policy.mjs` | Mantém caminhos permitidos e padrões de privacidade separados da execução. |
| `tests/` | Protege essas validações próprias, a detecção de credenciais e o gate contra regressões. Não testa a qualidade criativa das skills. |

As regras de commitlint, ESLint e `.gitignore` adaptam os templates Avodah ao JavaScript deste pacote. Regras de TypeScript e de aplicação não são necessárias aqui. O Markdown continua sendo validado, com configuração no próprio `package.json`; a [CLI aceita essa organização](https://github.com/DavidAnson/markdownlint-cli2#configuration).

Secretlint permanece como ferramenta local de credenciais em texto, incluindo Markdown e testes; Gitleaks acrescenta a análise na CI. Sua configuração mínima fica no comando do scanner, dispensando `.secretlintrc.json`. A versão mínima fica em `engines` e na verificação do instalador; a CI escolhe 24.13.0 diretamente, dispensando `.nvmrc`. `.npmrc` também não é necessário para as dependências já fixadas no lockfile.

---

<a id="commits"></a>

## 📐 Conventional Commits

Use `tipo(escopo opcional): descrição`, com até 100 caracteres no cabeçalho. Exemplos:

```text
feat(skills): adicionar procedimento de cobertura fotográfica
fix(installer): preservar pasta personalizada
docs(readme): atualizar catálogo e requisitos
chore(deps): atualizar ferramentas de validação
```

Tipos permitidos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore` e `revert`. Escopo é opcional; assunto e tipo são obrigatórios. As regras de caixa seguem o template Avodah: evitar assunto inteiro em maiúsculas, Start Case ou PascalCase.

O hook `commit-msg` primeiro confere privacidade da mensagem e depois executa a CLI oficial do commitlint em modo silencioso. A padronização segue a especificação [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

| Hook | Verificação |
| --- | --- |
| `pre-commit` | Índice Git completo, com política de arquivos e detecção de conteúdo privado. |
| `commit-msg` | Privacidade da mensagem e Conventional Commits, sem ecoar o texto do commit. |
| `pre-push` | Histórico alcançável, índice e `npm run check`. |

Hooks podem ser desativados pelo ambiente ou por opções do Git. Exigir PR e o status **Repository Check** no servidor é uma camada adicional, configurada pelo mantenedor.

---

<a id="seguranca"></a>

## 🔐 Segurança e privacidade

| Controle | Finalidade |
| --- | --- |
| **`.gitignore` e política de caminhos** | Evitar versionamento de ambientes, credenciais, materiais privados e formatos fora do escopo; a política também verifica adições forçadas. |
| **Secretlint** | Procurar credenciais em texto, incluindo Markdown e testes, sem exceção geral para documentação. |
| **Gitleaks na CI** | Executar `gacts/gitleaks@v1`, conforme o template Avodah, com regras padrão e valores redigidos. |
| **Checks de privacidade** | Sinalizar padrões como e-mails não reservados, CPF válido, alguns telefones brasileiros, caminhos pessoais, credenciais e URLs de acesso a recursos internos. |
| **Hooks locais** | Conferir índice, mensagem do commit e histórico antes do envio, quando ativos. |
| **CI e revisão humana** | Repetir verificações no GitHub e avaliar mudanças que os padrões automáticos não reconhecem. |

Os validadores Node informam caminho/regra/linha, sem reproduzir o valor detectado. A análise de conteúdo executa no computador ou runner que chama o comando; `npm ci` e `npm audit` acessam o registro npm. O pacote é `private: true` para prevenir publicação npm acidental; isso não define a visibilidade do repositório no GitHub.

**Lint não garante ausência de vazamentos nem conformidade com a LGPD.** Nomes, fotos, contexto religioso, informações de saúde e outros dados podem exigir avaliação humana. Use somente exemplos sintéticos e mantenha dados da equipe e da produção fora do repositório.

### 📂 Política de conteúdo

O [validador](scripts/security-policy.mjs) permite procedimentos genéricos, referências públicas, documentação, ferramentas e testes sintéticos nos caminhos previstos. Exemplos de contato usam domínios reservados, como `pessoa@example.invalid`. Autoria pública intencional do projeto é avaliada pelo responsável.

Mantenha fora do repositório `.env`, tokens, chaves, configurações pessoais, bancos, logs reais, fotos, presets de produção, exports e projetos nativos. Manual e logos da equipe também ficam privados. Relatos, pedidos de oração, escalas e informações de crianças podem revelar pessoas e contextos sensíveis; registre somente a orientação genérica na skill.

`.gitignore` reduz inclusão acidental, mas não impede adição forçada nem remove arquivos já rastreados. A política de caminhos também analisa o índice e o histórico; recusa links simbólicos, submódulos, binários, conteúdo não UTF-8 e arquivos acima de 2 MiB. Uma nova categoria de recurso exige ajuste consciente da política e revisão.

Os scans do diretório ignoram `.git`, `node_modules` e `.husky/_`; se esses diretórios forem rastreados, a política os recusa. A análise histórica cobre commits alcançáveis pelas referências locais, incluindo arquivos apagados da versão atual; não examina reflogs, objetos órfãos ou cópias em outros computadores.

### 🔎 Acessos e revisão humana

Antes de publicar, confira visibilidade e acessos mínimos, regras de branch com PR/revisão e o check **Repository Check**. Ative secret scanning e [push protection](https://docs.github.com/en/code-security/concepts/secret-security/push-protection) conforme a disponibilidade da conta/repositório. Confira nome/e-mail de autoria do Git e use endereço de privacidade quando apropriado.

Revise explicitamente alterações em scanners, política, workflow, hooks e dependências. Não desative uma regra nem exclua pastas inteiras para contornar um achado; trate falsos positivos de forma pontual e justificada. Parecer técnico não substitui decisão humana nem comprova conformidade legal.

### 🚨 Suspeita de vazamento

1. Interrompa o envio e avise o mantenedor pelo canal privado acordado; não abra issue pública com dados, segredo ou captura.
2. Para credenciais, encaminhe revogação/rotação ao responsável pelo serviço. Apagar a linha não invalida a credencial.
3. Avalie titulares, exposição, cópias e medidas com os responsáveis por segurança e privacidade.
4. Corrija conteúdo e histórico somente com plano e autorização específicos; os scripts não reescrevem Git nem forçam push.
5. Valide novamente e registre evidências sanitizadas no ambiente privado apropriado.

Finalidade, hipótese legal, retenção, atendimento a titulares e eventual comunicação de incidente cabem aos responsáveis competentes. Referência: [guia de segurança da informação da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-sobre-seguranca-da-informacao-para-agentes-de-tratamento-de-pequeno-porte).

---

<a id="workflows"></a>

## ⚙️ GitHub Actions

O arquivo [check.yml](.github/workflows/check.yml) executa **cinco jobs independentes** em pull requests, pushes e execução manual, seguidos pelo gate **Repository Check**:

| Job | Verificação |
| --- | --- |
| **Auditoria de Dependências** | `npm audit`, incluindo ferramentas de desenvolvimento; falha para severidade alta ou crítica. |
| **Detecção de Secrets (Gitleaks)** | `gacts/gitleaks@v1`, com `fail-on-error: true`, `path: "."` e `.gitleaks.toml`, após checkout completo do histórico. |
| **Lint e Contratos das Skills** | ESLint, Markdown, YAML, nomes/descrições, catálogo, links, sintaxe do instalador e Conventional Commits do PR. |
| **Testes dos Controles** | `npm test`, com entradas Git simuladas e testes sintéticos de segurança. |
| **Arquivos e Privacidade** | Política de arquivos, padrões de dados pessoais e Secretlint, nos arquivos atuais e no histórico/mensagens. |

O resumo apresenta o status de cada job e **falha se qualquer um falhar, for cancelado ou não executar**. Não há skips por labels ou inputs. Contratos e catálogo cobrem a validação deste pacote; ele não exige build de aplicação nem meta percentual de cobertura.

Os jobs Node usam `npm ci --ignore-scripts`. O job Gitleaks segue o action utilizado no Avodah; a instalação e a escolha da versão do scanner ficam a cargo do action, sem download manual ou checksum no workflow. Ele usa saída redigida e gera SARIF temporário; não há etapa de upload desse relatório. Consulte os [inputs e o comportamento do action](https://github.com/gacts/gitleaks). Secretlint permanece disponível nos controles locais e no job de privacidade.

Checkout e setup-node usam a tag `v6`; Gitleaks usa a tag `v1`, como no template de referência. O workflow tem permissões de leitura, sem credenciais de produção, deploy ou publicação.

O mantenedor pode ativar **Dependabot alerts e security updates** pela [configuração do GitHub](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-security-updates). Não há `dependabot.yml` neste pacote: atualizações periódicas de versões e agendas personalizadas são uma configuração separada que exige esse arquivo. Confira o diff, scripts e lockfile antes de aceitar atualizações.

Exigir PR, revisão e esse check para merge, além de habilitar secret scanning/push protection quando disponíveis, depende da configuração do repositório no GitHub. Esses controles remotos não são ativados pela preparação local. CI ocorre após envio e não substitui a prevenção local.

A validação local de YAML, scripts e testes não comprova a execução dos jobs no GitHub. Confira o resultado de uma execução do workflow para verificar o funcionamento na CI.

---

<a id="manutencao"></a>

## 🔄 Atualização e manutenção

1. Edite o **`SKILL.md` na fonte**, preservando `name`, `description` e os limites da atividade.
2. Atualize o catálogo deste README quando mudar escopo, dependência, formato de entrega ou quantidade de skills.
3. Para adicionar uma skill, crie sua pasta em `skills/` com `SKILL.md` válido e `name` igual ao nome da pasta; o instalador descobre as pastas sem uma lista fixa no código.
4. Para guias de apoio, use `references/<nome-em-minusculas>.md` na pasta da skill e vincule cada guia no `SKILL.md`. Execute `npm run check` e confira o diff, metadados e links. Ao alterar ferramentas, revise também dependências e lockfile.
5. Compare as cópias instaladas antes de atualizar. O instalador interrompe diante de conteúdo diferente ou personalizado; mescle as alterações antes de substituir manualmente.

Cópias já instaladas e arquivos anexados a projetos do ChatGPT **não se atualizam automaticamente quando a fonte muda**. Mantenha as referências de cada integrante vigentes e preserve personalizações.

### 🔧 Overrides de segurança das ferramentas

Os três overrides ainda são necessários para manter a árvore atual sem os avisos conhecidos abaixo. Eles corrigem dependências transitivas do lint, não mudam a instalação das skills:

| Dependência | Versão fixada | Aviso corrigido |
| --- | --- | --- |
| `katex` | `0.18.2` | [GHSA-238p-pmpm-9mq7](https://github.com/advisories/GHSA-238p-pmpm-9mq7). |
| `minimatch` | `11.0.4` | [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249). |
| `re2js` | `2.8.7` | [GHSA-gg6h-894w-4m9c](https://github.com/advisories/GHSA-gg6h-894w-4m9c). |

KaTeX e minimatch ultrapassam o intervalo declarado pelos consumidores, por isso sua compatibilidade exige nova conferência ao atualizar o lint. Remova os overrides quando as ferramentas adotarem versões corrigidas e auditoria/testes confirmarem o resultado; não use `npm audit fix --force` como rotina.

---

<a id="celular"></a>

## 📱 ChatGPT no celular

O instalador deste repositório copia skills locais para o Codex. No ChatGPT móvel, os procedimentos podem ser usados como **referências de um projeto**, sem executar o instalador no celular. Este pacote não inclui um plugin para distribuição móvel.

### ⚙️ Configuração inicial

1. Crie ou abra o projeto **Bezalel — Comunicação IMEP** na conta usada pelo ministério. Se necessário, configure pelo navegador e continue no aplicativo.
2. Adicione manual vigente, logos e referências autorizadas, identificando versões superadas.
3. Adicione os `SKILL.md` relevantes ao departamento e os guias de `references/` úteis à demanda. Se for preciso, forneça o conteúdo como referência textual.
4. Ajuste a base de instruções abaixo e inicie a demanda dentro do projeto, indicando o procedimento e os materiais.
5. Execute no editor disponível e forneça uma prova acessível para revisão. Preserve o editável; confira o export quando solicitado.

Projetos compartilham fontes e instruções entre seus chats, mas não dão acesso direto à pasta `Assets/` do PC. Disponibilidade de controles varia conforme a interface. Consulte a [documentação oficial de projetos](https://learn.chatgpt.com/docs/projects).

### 📝 Base de instruções do projeto

```text
Bezalel é o ministério de comunicação da Igreja Metodista em Palmas.
Responder em português brasileiro e aplicar o procedimento indicado para a demanda.
Consultar manual vigente e logos oficiais enviados ao projeto nas decisões de marca;
identificar documento/versão e página ou arquivo usados. O manual prevalece sobre
resumos. Se uma fonte não estiver acessível, informar a lacuna antes de afirmar
conformidade. Não presumir leitura integral de todos os arquivos.
Não redesenhar logos nem inventar cores, fontes, fatos, eventos ou textos bíblicos.
Priorizar Canva/CapCut no fluxo móvel e ArtCraft no computador conforme capacidade.
Preservar editável e saídas autorizadas; não inventar arquivos, links ou testes.
Para vídeo/motion, editar ou validar não autoriza exportar; exigir pedido explícito de exportação.
Google Agenda para demandas/escalas, com alvo e operação autorizados.
Google Drive para acervos, com origem, recorte e destino definidos.
Upload de acervo, publicação, convites e compartilhamento somente com pedido específico.
```

### 🧭 Procedimentos por departamento

| Demanda | Procedimentos sugeridos |
| --- | --- |
| **Design** | `bezalel-design-grafico` + `bezalel-canva-design`. |
| **Vídeo** | `bezalel-edicao-video` ou `bezalel-producao-video`, com `bezalel-capcut-video` e `bezalel-legendas` quando úteis. |
| **Fotografia** | `bezalel-fotografia`; `bezalel-lightroom-foto` para tratamento/presets no aplicativo compatível. |
| **Acervos de fotos e vídeos** | `bezalel-organizar-drive-e-midias`, com as fontes acessíveis e o escopo autorizado. |
| **Stories / social media** | `bezalel-planejamento-editorial` e `bezalel-legendas`. |
| **Descoberta / engajamento** | `bezalel-estrategia-social`, com plataforma, formato e objetivo definidos. |

As referências orientam a execução; a capacidade real depende das ferramentas e dos acessos disponíveis. A distribuição de skills por plugins é descrita no [guia oficial de skills](https://learn.chatgpt.com/docs/build-skills).

---

<a id="documentacao"></a>

## 📚 Documentação

| Fonte | Conteúdo |
| --- | --- |
| [Catálogo de skills](#skills) | Links para os 27 procedimentos, suas entradas, dependências e critérios de entrega. |
| [install.mjs](install.mjs) | Opções, destinos, cópia local e preservação de conflitos. |
| [Como contribuir](#contribuicao) | Ferramentas locais, commits, hooks e justificativa dos validadores/testes. |
| [Segurança e privacidade](#seguranca) | Arquivos permitidos, prevenção, limites e resposta a achados. |
| [Skills na OpenAI](https://learn.chatgpt.com/docs/build-skills) | Metadados, descoberta, ativação e distribuição. |
| [Projetos no ChatGPT](https://learn.chatgpt.com/docs/projects) | Organização de chats, instruções e fontes. |

Os `SKILL.md` incluem referências oficiais e, quando disponíveis, registros datados de verificações locais. Consulte a documentação e a ajuda da versão-alvo antes de adaptar comandos ou afirmar compatibilidade.

---

<a id="autor"></a>

## 👨‍💻 Autor

Ministério Bezalel — Igreja Metodista em Palmas

---

🎨 **bezalel-skills-codex** — Planejamento, criação e revisão com identidade visual, fontes editáveis e evidências de entrega.
