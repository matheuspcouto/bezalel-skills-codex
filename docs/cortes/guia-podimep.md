# Cortes PodIMEP — guia do ministério

Padrão editorial derivado do corte sobre o véu do templo, revisado em 23/11/2026. A mensagem conduz a edição: pergunta compreensível, contexto, tensão, explicação e conclusão. A aparência deste exemplo é um ponto de partida para cortes de podcast e pregação; não substitui o manual visual vigente nem obriga todos os temas a usar cruz, dourado ou preto e branco.

## Comece por aqui

1. Abra o episódio e escute antes e depois do trecho. Selecione uma ideia completa e preserve a ordem das falas. O gancho deve ser sustentado pelo restante da mensagem. Não retire negativas, condições, contexto bíblico ou a pergunta que dá sentido à resposta.
2. Monte a fala e confira o corte sem títulos. Corrija entradas truncadas, sílabas cortadas, saltos de ambiente e conclusões incompletas antes de acrescentar efeitos.
3. Marque palavras no áudio, não apenas na transcrição automática. Registre os tempos na fonte e na sequência final. Use a legenda animada como base e reserve os títulos para as viradas da mensagem.
4. Escolha um dos arranjos do moodboard. Mantenha a mesma âncora central, apoio branco menor e palavra principal significativamente maior. Revele cada unidade na fala correspondente.
5. Alterne legenda, título sobre imagem e cartela de fundo sólido. Dentro de uma cadeia de cartelas, faça sólido → sólido, sem revelar a câmera entre elas. Preserve a voz contínua sob todas essas mudanças.
6. Ajuste música e SFX em faixas independentes. O efeito de câmera pontua poucos títulos importantes; a voz deve continuar clara. Deixe a trilha livre para mover entrada, ponto inicial, duração e volume.
7. Reabra o projeto, confira os trechos alterados com som e revise no tamanho de celular. Entregue o editável. Exportações, proxies e renders de teste seguem a regra da skill: somente quando a saída for solicitada explicitamente.

## Referências e fontes editáveis

| Material | Uso |
| --- | --- |
| [Parâmetros do estilo](parametros.md) | Tamanhos, paleta, margens, sombra, câmera e tempos. |
| [Receitas de animação](receitas-de-animacao.md) | Legenda palavra a palavra, títulos, cartelas, cruz e ênfase dramática. |
| [Uso em editores](uso-em-editores.md) | Organização em camadas e adaptação para as ferramentas da equipe. |
| [Pedidos e decisões](pedidos-e-decisoes.md) | 39 registros do histórico fornecido, incluindo revisões que substituíram pedidos anteriores. |
| [Revisão e medidas](revisao-e-medidas.md) | Critérios verificáveis, métricas do exemplo e limites da validação. |
| [Dependências e créditos](dependencias-e-creditos.md) | O que foi usado, o que precisa ser vinculado e o que ficou pendente. |
| [Fontes editáveis](fontes-editaveis.md) | Código do corte, dados de montagem, legenda e fontes da galeria. |

Para abrir o moodboard e experimentar as animações sem instalar um editor, materialize o kit em uma pasta de trabalho fora deste repositório:

```sh
node scripts/cortes/materializar-kit.mjs --dest ../podimep-kit
```

Abra `../podimep-kit/referencias/index.html` no navegador. A galeria funciona sem rede, permite avançar quadro a quadro e contém seis composições. Os tempos da demonstração são didáticos; ela não contém áudio nem comprova sincronismo com a pregação. A opção de animação é acionada pelo usuário e começa pausada.

O mesmo comando prepara `../podimep-kit/projeto/` com os fontes do corte de referência. O materializador não instala dependências, não baixa mídia, não abre aplicativos e não exporta vídeo. Ele recusa sobrescrever arquivos diferentes. Mantenha os materiais de produção na pasta de trabalho; este repositório compartilha código e documentação textual.

## Como reutilizar no próximo corte

| Para mudar… | Altere… | Confira… |
| --- | --- | --- |
| Mensagem e duração | `projeto/montagem.json`: `clips`, entradas/saídas e ordem | Contexto, mapa fonte → sequência e pausas. Os números do exemplo não são um roteiro para outro episódio. |
| Títulos e palavras principais | `titles[].lines`: tempo relativo, texto e classe | Texto literal versus resumo editorial; nenhuma palavra adiantada. |
| Legendas | `projeto/legendas.json`: texto e tempos em milissegundos na fonte | Primeiro frame de cada palavra; também a última antes e a primeira depois das emendas. |
| Cores, fontes e tamanho | `projeto/style.css` | Fonte realmente carregada, contraste, quebras e proporção entre apoio e destaque. |
| Zoom e drama | `clips[].zoom`, `position`, `closeUp` e `monochrome` | Entrada e saída em um frame comum quando a ênfase pedir corte seco. |
| Música | Controles `trilhaNaTimeline`, `pontoDaMusica`, `duracaoDaTrilha`; ganho em `Root.tsx` | Trilha em faixa separada, virada musical e inteligibilidade. Os limites do esquema devem acompanhar a nova duração e a faixa real. |
| SFX | `shutterOn`, `shutterAt` e automação de volume | Ataque no título, cauda sem truncamento e ausência de estalo. |
| Ritmo | Duração dos blocos, quantidade de títulos e momentos de respiro | Toda mudança tem uma função; não aplicar efeito a cada palavra por rotina. |

O exemplo Remotion foi construído em 1080 × 1920, 24 fps, a partir de vídeo horizontal 16:9. Outras proporções, resoluções ou fps exigem recalcular geometria, intervalos e guias. O código usa dois vídeos previamente recortados e voz separada: `public/video/trecho-1.mp4`, `trecho-2.mp4` e `public/audio/voz-1.wav`, `voz-2.wav`. Cada par deve começar no mesmo frame da fonte e ter a mesma duração. A preparação dessas mídias é uma saída específica, sujeita à autorização do trabalho; não ocorre ao materializar o kit.

Para continuar no Remotion, use as dependências declaradas no pacote do exemplo, vincule as mídias e abra `npm run studio` dentro de `projeto/`. O kit não fornece um projeto nativo de CapCut, FilmCraft, Premiere ou After Effects. Para esses editores, use as receitas com camadas separadas de voz, vídeo, legendas, títulos, cartelas, trilha e SFX, preservando o original do aplicativo escolhido.

## Brief que qualquer integrante pode usar

> Edite um corte do episódio indicado, com uma ideia completa e na ordem da fala. Use o padrão PodIMEP: legenda palavra a palavra intercalada com títulos centrais, apoio menor em caixa normal, palavra principal maior e fundos sólidos. Proponha as ênfases a partir da mensagem. Preserve voz e música editáveis, respeite as áreas seguras e entregue o projeto salvo. Informe o que foi conferido e o que ainda depende de mídia, fonte ou revisão. Exportação somente quando eu pedir a saída.

## Disponibilizar para os integrantes

Depois da revisão e integração em `develop`, atualizar o clone pela rotina da equipe e instalar as três skills conforme o instalador existente:

```sh
node install.mjs --skill bezalel-edicao-video --skill bezalel-legendas --skill bezalel-motion-design
```

O instalador preserva conflitos: se uma skill já instalada estiver diferente, comparar e guardar as adaptações locais antes de atualizar pela rotina de manutenção do repositório. Não apagar a cópia personalizada por rotina. O instalador atual copia apenas os `SKILL.md`; por isso as regras essenciais estão neles, e a biblioteca detalhada/galeria permanece no clone. Não declarar que os anexos foram instalados junto automaticamente.

Cada produção deve ter um responsável por conferir mensagem, sincronismo e som. Ao propor melhoria do padrão, registrar o problema observado, o valor alterado e a evidência na mesma estrutura de [pedidos e decisões](pedidos-e-decisoes.md), evitando transformar uma preferência de um único tema em regra geral.
