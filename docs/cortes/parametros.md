# Parâmetros do estilo PodIMEP

Os valores abaixo foram lidos do projeto ao final das revisões. São parâmetros do exemplo de 1080 × 1920 a 24 fps, não especificações oficiais de redes sociais. A identidade vigente e o novo briefing prevalecem.

## Tipografia e composição

| Papel | Configuração do exemplo | Adaptação |
| --- | --- | --- |
| Legenda | Inter ou substituta conferida, 53 px, peso 750, entrelinha 1,12 | Blocos de sentido e normalmente até duas linhas; sem caixa de fundo por palavra. |
| Legenda em uma linha | 43 px, sem quebra, para o bloco com “entender” | Usar só quando a largura couber; dividir por sentido antes de tornar ilegível. |
| Apoio de título | 44–47 px; pesos 550–650; caixa normal | Não converter todo apoio branco para maiúsculas. |
| Apoio forte | 58 px, peso 680 | Ainda subordinado à palavra principal. |
| Palavra principal | Baskerville itálica, peso solicitado 500, 164–174 px sobre imagem; base 170 px | Aproximadamente 2,8–4 vezes o corpo de apoio; conferir largura e fonte efetiva. |
| Pergunta sem traço | “o véu?” a 212 px | Fundo escuro sólido; nenhum traço horizontal neste arranjo. |
| Resposta | “dos Santos” a 168 px | Apoio “O Santo” a 58 px. |
| Palavra final dramática | “morrer” a 210 px, margem superior −19 px | Três linhas: “porque elas” / “não querem” / “morrer”. Não sobrepor os desenhos das letras. |
| Cruz | “A CRUZ” a 188 px; “o seu ego” usa a base de 170 px | “A CRUZ” é uma exceção intencional à caixa normal do apoio. |
| Coluna de texto | x = 188 px, largura = 704 px, centro = 540 px | Mesma âncora horizontal para legenda e título. |
| Altura sobre imagem | centro y = 1218 px; ênfase “morrer” y = 1135 px | Reavaliar olhos, boca, mãos, microfone e interface. |
| Cartelas | y = 740 px + 42 px de apoio superior; pergunta sem traço y = 820 px; cruz centrada em y = 1000 px | Conferir centro visual e área ocupada, não só a caixa geométrica. |
| Espaçamento | 2–5 px entre linhas; abertura com margem −12 px no destaque | Espaçamento negativo depende da fonte e não deve causar colisão. |

Se a fonte não estiver disponível, declare a substituta e revise todos os encaixes. Os arquivos das fontes não são distribuídos. Não estreitar ou esticar letras para caber.

## Paleta e sombra

| Uso | Valor |
| --- | --- |
| Marfim / apoio claro | `#fff8ed` |
| Carvão / fundo escuro | `#171614` |
| Fundo da cruz | `#211b17` |
| Cruz desenhada | `#5a4535` |
| Destaque dourado suave | `#eed1a2` |
| Palavra ativa da legenda | `#f5bf72` |
| Texto escuro na cartela clara | `#1d1914` |
| Destaque na cartela clara | `#844814` |
| Sombra dos títulos | `0 3px 18px rgba(0,0,0,.38), 0 0 34px rgba(0,0,0,.16)` |
| Sombra na cartela clara | `0 3px 18px rgba(0,0,0,.10)` |

Fundos sólidos são a escolha final. Texturas geradas foram experimentadas e retiradas. A sombra aprovada é difusa, sem contorno escuro duro. Legendas normais continuam sem fundo individual.

## Animação e câmera

| Recurso | Exemplo a 24 fps | Relação com a fala |
| --- | --- | --- |
| Legenda por palavra | Antes do início: opacidade 0. No início: opacidade 1; subida de 7 px em 3 frames | Entrada `ceil(startMs × fps / 1000)`, sem revelar antes da palavra. |
| Título normal | Opacidade 0 → 1 em 3 frames; subida de 13 px em 5 frames | O relógio é relativo à entrada de cada linha. |
| Título com acento | Entrada direta no frame marcado | O impacto vem do contraste e da hierarquia; não exige movimento longo. |
| Passagem “outro lado” | Deslocamento horizontal de −38 px até 0 em 9 frames | Exemplo de passagem lateral; não é uma simulação literal do véu se rasgando. |
| Linha de cartela clara | Escala horizontal 0,13 até frame 18; expansão até frame 32 | Não usar na pergunta “o que é que é o véu?”. |
| Cruz | Entrada e saída de opacidade em 7 frames, aproximadamente 0,29 s | Suaviza a cartela sem cortar a voz. Não reutilizar esse fade na ênfase em P&B. |
| Movimento suave | Curva Bézier `(0.42, 0, 0.35, 1)` | Aplicada ao movimento de câmera de base. |
| Entrada de título | Curva Bézier `(0.17, 0.72, 0.24, 1)` | Chegada rápida e leitura estável. |
| Ênfase em P&B | Grayscale 100%, contraste 1,10, brilho 0,97, opacidade da imagem 72%, incremento de zoom 0,24 | P&B e zoom entram juntos por corte seco no começo de “porque”; saem juntos depois de “morrer”. |

No exemplo, a ênfase dramática ocupa os frames de sequência `[555, 592)`, ou 23,125–24,667 s. O frame 554 ainda é colorido; 555 já tem zoom e P&B; 591 continua na ênfase; 592 retorna. Isso vale para a montagem de referência, não para outras falas.

## Áudio e áreas seguras

- Voz, música e SFX são faixas independentes. O exemplo usa ganho de voz 1,2, música 0,14 e shutter 0,055; esses fatores lineares não são medições LUFS, true peak nem metas universais.
- Música: entrada de 1,25 s e saída de 2,5 s, com posição na timeline, ponto inicial na faixa e duração editáveis. Localizar a virada musical pela escuta; não presumir sincronismo só porque a música começa cedo.
- Shutter: trecho inicial aparado em 2 frames; envelope em `[0, 1, 12, 21]` com níveis `[0, 1, 1, 0]`; janela de 24 frames. Preservar a cauda e diminuir ou retirar se competir com a voz.
- Guias locais do exemplo: topo 260 px, rodapé 535 px, esquerda 92 px e direita 185 px. A coluna de texto é mais estreita e centralizada. São margens de trabalho conservadoras, não garantia de todas as interfaces, capas ou anúncios.
- Conferir a prévia do posicionamento de destino e registrar plataforma, data e método. Se essa conferência não ocorrer, manter `validacao_na_plataforma_pendente`.
