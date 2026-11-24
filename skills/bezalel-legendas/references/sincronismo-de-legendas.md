# Sincronismo e hierarquia de legendas

Use quando houver cortes na fala, revelação por palavra, lettering sobre a legenda ou mais de uma voz.

## Da fala ao primeiro frame

1. Remapeie as marcas da fonte para a sequência depois que a montagem estiver definida. Confira os ataques no áudio, principalmente depois de pausas e emendas. Se houver mudança de velocidade, use o mapa de tempo do trecho.
2. Para um trecho de velocidade constante já remapeado, use `ceil(inicioNaSequenciaMs × fps / 1000)` para obter o primeiro frame em que a palavra pode aparecer, considerando o frame zero da sequência e o fps real. Por exemplo, um ataque aos 410 ms em 25 fps entra no frame 11.
3. Se houver animação, mantenha opacidade zero nos frames anteriores à marca. A partir da entrada, use deslocamento curto e deixe o texto estável durante a leitura. Confira a propriedade de visibilidade ou opacidade no editor e, se solicitado, no export. Quando uma linha longa comprometer a leitura, quebre por sentido.
4. Em cada emenda, reveja a última palavra anterior e a primeira posterior com som. Preserve artigos, conjunções e negativas que sustentem o sentido. Se uma marca automática incluir a pausa antes da fala, corrija-a na timeline antes de acionar a animação.

## Quando a legenda alterna com lettering

- Monte primeiro a legenda com a fala conferida. Quando o título repetir o mesmo texto na mesma área, escolha um destaque integrado à legenda ou oculte a camada visual redundante durante o título. Se o título acrescentar contexto em outra região, confira leitura simultânea e ordem visual.
- Mantenha a transcrição completa na trilha de referência ou no SRT/VTT solicitado, inclusive sob cartelas. Identifique paráfrases, perguntas editoriais e citações adicionadas como textos editoriais.
- Se o enquadramento mostrar a reação de outra pessoa, identifique o falante quando a origem da voz puder ficar ambígua. Se duas falas sobrepostas forem essenciais e inteligíveis, preserve a troca com identificação consistente. Quando uma fala importante estiver indistinta, registre o timecode para conferência.
- Confira acentos e glifos na fonte realmente usada, inclusive nos itálicos e na variante de destaque. Se houver efeitos sonoros, ouça o ataque do efeito e o da fala juntos para evitar que uma entrada visual seja percebida cedo demais.
