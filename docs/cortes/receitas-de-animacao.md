# Receitas de animação para cortes

Use junto ao [guia](guia-podimep.md) e aos [parâmetros](parametros.md). Os fontes e a galeria estão em [fontes editáveis](fontes-editaveis.md). O tempo deve vir da nova fala; copiar a animação não autoriza copiar seus timecodes para outro episódio.

## Legenda palavra a palavra

1. Corrija a transcrição e marque o ataque real das palavras. No modelo, os tempos estão em milissegundos da fonte. O mapa de montagem converte fonte em sequência.
2. Antes do ataque, use opacidade zero. No ataque, revele a palavra e aplique deslocamento curto de 7 px até a posição final em 3 frames. A palavra ativa recebe a cor de acento; as anteriores continuam visíveis até o fim do bloco.
3. Não use apenas `visibility: hidden` quando o renderizador utilizado não preservar a propriedade. O problema observado neste projeto foi texto entrando antes da hora no export; a implementação passou a controlar opacidade por frame.
4. Nos momentos de título, o título substitui visualmente a legenda da mesma fala. As palavras anteriores e posteriores precisam continuar corretas. SRT/VTT separado deve preservar a fala completa, inclusive os intervalos ocupados pelos títulos.
5. Se a exportação for solicitada, confira o arquivo produzido: todas as palavras devem realmente ser reveladas, e não aparecer juntas apenas subindo. Inspeção do código ou SRT não comprova essa animação.

## Apoio menor e palavra dominante

Use apoio em caixa normal e palavra principal itálica aproximadamente três a quatro vezes maior. O grupo permanece centralizado. Entre linhas, preserve proximidade e os acentos; a caixa do texto pode se encostar, os desenhos das letras não.

Exemplos usados: “Quando o véu” / **foi rasgado** / “no templo?”; “Jesus morreu” / **na cruz**; “E você vai ver” / **a glória** / “de Deus”. Um título editorial pode abrir a peça sobre uma saudação menos forte, desde que não seja apresentado como transcrição literal da saudação.

## Três linhas dramáticas

“porque elas” / “não querem” / **morrer**. Apoios pequenos, última linha dominante e próxima da anterior. Revele as três entradas nos momentos falados. O título, o corte de câmera e o P&B começam no mesmo frame marcado; não espere o zoom chegar durante a frase.

Mantenha o rosto visível, com imagem a 72% de opacidade como ponto de partida. Ao terminar a frase, volte por corte seco ao plano colorido de base. Não usar fade de cor nem um movimento de afastamento para este arranjo. O término deve ser conferido no áudio, preservando a última sílaba.

## Pergunta e resposta em cartelas

- “E o que é que é” / **o véu?**: carvão sólido, apoio menor e nenhuma linha horizontal.
- “E o que tinha” / “do outro lado” / **do véu?**: marfim sólido, apoio escuro, destaque castanho e passagem lateral discreta. O traço pode ligar esta cartela à próxima.
- “O Santo” / **dos Santos**: carvão sólido e destaque claro. A cartela anterior termina exatamente no frame em que esta começa. Se o título precisar esperar a fala, sustente o fundo anterior ou use uma camada de fundo contínua; nunca exponha o apresentador por alguns frames no intervalo.

A seta/passagem literal do véu foi sugerida durante a edição. O projeto final contém deslocamento lateral e traço, não uma animação figurativa completa do véu. A galeria apresenta a receita efetivamente usada.

## Cruz atrás do título

Crie a cruz como forma editável grande atrás do texto, em fundo castanho escuro sólido. No código, a forma é uma máscara CSS (`clip-path`), sem imagem externa. Posicione texto e cruz em camadas independentes para ajustar contraste. A cartela entra e sai suavemente em 7 frames; a voz segue contínua.

## Pontuação sonora

Associe shutter ao ataque de poucas palavras que já recebem destaque. Não usar SFX em toda legenda e não cortar o som no meio da cauda. Crie entrada curta, sustentação e saída gradual; compare com o efeito desativado. A escolha final deve ser feita ouvindo a voz e o efeito juntos. Um som diferente pede nova automação; copiar apenas o volume do exemplo não garante o resultado.

<a id="como-variar-sem-perder-o-padrao"></a>

## Como variar sem perder o padrão

| Intenção | Variação possível | Manter |
| --- | --- | --- |
| Pergunta | Claro ou escuro; duas ou três linhas | Pergunta inteligível e apoio subordinado. |
| Conclusão | Palavra maior, quadro mais estável ou respiro | Última frase completa e legível. |
| Emoção | Uma intervenção de cor/câmera no ponto da fala | Pele e voz naturais fora da ênfase. |
| Maior energia | Entrada mais curta e alternância de arranjos entre ideias | Estabilidade durante a leitura. |
| Mensagem contemplativa | Menos títulos e mais tempo de leitura | Legenda sincronizada e contexto. |

Não aumentar automaticamente quantidade de cortes, SFX, zooms ou famílias tipográficas. A variação precisa explicar, pontuar ou tornar a mensagem mais fácil de acompanhar.
