---
name: bezalel-edicao-video
description: "Editar e finalizar vídeos do Bezalel a partir de mídia existente, especialmente cortes de pregação e podcast, com montagem, color grading, reenquadramento, legendas dinâmicas, áreas seguras e mixagem de áudio."
---

# Edição de vídeo

## Regra permanente: edição sem exportação automática

Por instrução expressa do usuário em 05/11/2026, **nunca exportar sem pedido explícito de exportação**. O padrão é fazer os ajustes no FilmCraft ou no editor solicitado, salvar o projeto editável e preservar suas dependências; o usuário cuida da exportação manual.

- Pedidos de editar, ajustar, finalizar, testar ou validar não autorizam exportar. Não gerar MP4/MOV, renders de teste, sequências de imagens, proxies ou cópias de intercâmbio por rotina. Não oferecer nem solicitar exportação como etapa obrigatória.
- Revisar pela timeline, reprodução/prévia do próprio editor, inspeção de parâmetros, reabertura e edição de elementos. Evitar render externo e processamento de mídia desnecessário; salvar o projeto nativo não é exportação.
- Entregar o caminho do projeto salvo e informar o que foi conferido. Sem export, registrar `projeto_editavel_verificado` quando houver evidência e `exportacao_nao_solicitada`; não afirmar validação do vídeo final nem executar export apenas para obter `native_validated`.
- Esta regra prevalece sobre instruções de export/render/teste de export e intercâmbio abaixo. Esses procedimentos só se aplicam quando o usuário pedir explicitamente a saída correspondente. Exportações realizadas em pedidos anteriores não são autorização permanente para novas versões.


Use para editar gravações existentes, de um Reel a um episódio longo. Aplique cada tratamento conforme a peça. Para planejar captação ou roteiro de produção, use `bezalel-producao-video`. Para transcrição e SRT/VTT, combine com `bezalel-legendas`. Para copy da postagem, use o fluxo de legendas de publicação, com o versículo que embasa a peça.

Para organizar pastas ou comparar cópias do acervo antes da montagem, use `bezalel-organizar-drive-e-midias` quando disponível.

## Entradas

- Mídia original e faixas de áudio disponíveis, idioma, nomes dos participantes e autorização de uso.
- Canal e posicionamento, objetivo, público, duração e formato. Identifique se é corte vertical, episódio horizontal ou ambos.
- Trecho solicitado ou liberdade para selecionar. Receba timecodes, transcrição ou mídia audível. Confirme referências bíblicas, nomes e termos que mudem o sentido.
- Manual e materiais aprovados em `Assets/`, quando aplicáveis. Confirme a necessidade de versões com e sem legenda, trilha e projeto editável.

## Montagem e imagem

1. Preserve originais. Identifique resolução, fps, SDR/HDR/Log, canais de áudio, sincronismo, falhas de captação e diferenças entre câmeras. Em lotes numerados, confirme duplicatas por hash de conteúdo, não por nome ou duração; registre a decisão de uso e mantenha os originais acessíveis. Resolva montagem única versus sequências separadas quando isso mudar a entrega. Trabalhe em cópia ou projeto novo com mídia vinculada.
2. **Pregação.** Escolha um trecho com começo, desenvolvimento e conclusão compreensíveis. Confira a fala antes e depois do recorte. Preserve contexto bíblico, atribuição e pausas expressivas. Use a referência confirmada quando a peça citar um versículo. **Podcast.** Preserve a pergunta ou inclua o contexto necessário para entender a resposta. Mantenha a ordem das falas, os nomes e a intenção de cada participante.
3. Monte pela voz e pela continuidade. Retire repetições, pausas e ruídos entre falas quando a remoção mantiver a cadência. Prefira cortes limpos, cortes em J/L quando ajudarem e fades curtos para evitar estalos. Use dissolvências para mudanças claras de tempo ou assunto. Use imagens de apoio coerentes com o conteúdo.
4. **Enquadramento.** Reenquadre por plano e por falante. Em 9:16, acompanhe quem fala, preserve olhos, gestos relevantes e espaço para legenda. Use plano mais aberto, composição com dois participantes ou cortes entre câmeras quando um recorte único perder informação. Em fontes de resoluções diferentes, confira o ajuste ao canvas por clipe; ampliar para preencher não recupera detalhe. Reveja mudanças de plano e trechos com movimento.
5. **Color grading.** Identifique o perfil antes de aplicar conversão de Log/HDR. Corrija exposição e balanço de branco, iguale câmeras e preserve tons de pele. Aplique o look aprovado após a correção. Use waveform e vectorscope quando disponíveis. Compare planos vizinhos e revise altas luzes, sombras e saturação no export.

## Pausas, transições e nova temporização

- Para encurtar pausas, use timestamps de palavras como candidatos e confira o áudio nesses intervalos. ASR pode incluir silêncio dentro de uma palavra ou deslocar seu início; VAD pode confundir ambiente com fala. Envelope RMS em janelas curtas, como 20 ms, auxilia a inspeção, mas não substitui escuta nem comprova ausência de voz. Não aplicar um limiar de silêncio universal a fontes com ganhos diferentes.
- Preserve margens ao redor das sílabas e quantize os cortes ao fps real da sequência. Registre, quando houver vários cortes, um mapa com fonte, entrada/saída na fonte, início na timeline e duração em frames. Ele permite recompor a ordem e remapear legendas após a redução de pausas. O método de legendagem está em `bezalel-legendas`.
- Diferencie transição entre vídeos de correção de um corte dentro da mesma fala: dissolvência curta pode unir tomadas; crossfade de áudio pode suavizar a emenda sem exigir uma dissolvência visual em toda pausa removida. Ajuste a duração à cadência, sem sobrepor ou repetir sílabas. No FilmCraft, confira os handles conforme `bezalel-filmcraft-video`.
- Registre a duração anterior/final e o tempo retirado. Preserve uma versão anterior coerente para comparação; conferência de parâmetros ou de texto não equivale a revisão perceptiva de ritmo, som e sincronismo.

## Cortes verticais com referência editorial

Aplique este estilo como padrão quando o usuário pedir edição de um corte curto do Bezalel, incluindo trechos de pregação e podcast para redes sociais. Use a linguagem visual do Reel de Victor Resende como referência de ritmo e hierarquia. Outra direção solicitada pelo usuário prevalece. Em episódios completos, registros integrais de eventos e peças longas, aplique a edição proporcional ao formato e use este estilo nos cortes derivados.

Para cada corte, escolha a fala que abre a peça, as palavras que merecem destaque e os momentos de mudança visual. Trabalhe com o pregador ou falante em evidência, saturação controlada, legendas cinéticas de alto contraste e palavras-chave maiores ou com tipografia distinta. Use monocromia, desfoque, moldura ou CTA quando tiverem função no trecho e couberem no briefing. Adapte a paleta e a tipografia à identidade do Bezalel.

1. **Mapeie a referência.** Veja abertura, desenvolvimento, virada e encerramento. Anote timecodes, função de cada recurso e o que pôde ser conferido em imagem, texto e áudio. Separe observação, hipótese de execução e adaptação proposta. Registre lacunas quando só houver acesso parcial.
2. **Monte pela ideia.** Quando houver liberdade de edição, abra com uma fala curta que apresente a tensão ou a tese. Preserve o contexto necessário e deixe a frase de conclusão respirar antes da cartela ou do CTA. Se o pedido for usar a fala integral, mantenha a duração e a ordem. Crie variação com composição, reenquadramento e tipografia.
3. **Crie uma hierarquia de leitura.** Use texto de apoio compacto, com peso suficiente, e reserve o maior corpo, o itálico ou uma cor de acento para a palavra que muda o sentido da frase. Organize a entrada por palavra ou bloco de sentido nos trechos de ênfase. Nas demais falas, deixe a frase estável o bastante para ler. Para uma repetição intencional, mantenha a oração recorrente como âncora e alterne o complemento. Revise a ordem de leitura quando o texto ocupar mais de uma posição.
4. **Dê função ao movimento e à cor.** Experimente deslocamento curto, opacidade ou desfoque de entrada/saída nos momentos de ênfase. Deixe o texto nítido enquanto precisa ser lido. Use mudança de escala, recuo da imagem em uma moldura ou contraste entre cor e monocromia quando isso sinalizar uma virada, uma ilustração ou o encerramento. Prefira transições sem flashes fortes. Use a paleta e as fontes aprovadas, proteja os tons de pele e confira olhos, microfone e gestos no quadro mais fechado. Aplique zoom sobre a mídia original e verifique a perda de detalhe no export.
5. **Valide o ritmo em movimento.** Reveja o corte no tamanho de celular, com som para conferir o tempo da fala e sem som para conferir leitura e sentido. Passe pela abertura, pelos destaques, pelas transições e pelo CTA. Confira o pico de escala da tipografia e a posição mais afastada do texto nas áreas seguras. Mantenha o CTA subordinado à mensagem e use a identidade do canal de destino.

**Caso de referência.** O Reel de Victor Resende dura cerca de 45 s. Na abertura (0–5 s), há revelação em etapas e contraste entre texto compacto sem serifa e uma palavra grande, branca e inclinada. Por volta de 7–13 s, a composição mantém uma frase recorrente à esquerda enquanto varia o complemento, e o plano recua para uma moldura com chamada para seguir. Nos quadros de 21–25 s, a imagem aparece em preto e branco, com texto vermelho ainda em cor. Em 29–33 s, volta a composição em cor e reaparecem uma palavra de grande escala e blocos de texto em posições diferentes. A partir de cerca de 37 s, há uma transição para um grafismo sobre fundo preto. A leitura foi visual e por amostragem. Trilha, efeitos sonoros e níveis da mixagem ficaram sem confirmação. [Reel de referência, observado em 04/11/2026](https://www.instagram.com/reel/DZ3DomEN3Qz/)

### Roteiro de retenção para cortes verticais

Use este fluxo ao transformar material existente em um corte vertical com foco em retenção para Instagram Reels, TikTok ou YouTube Shorts. Trabalhe com 30–60 s quando o brief não definir outra duração. Para conteúdo de IA na operação, fale com empresários e profissionais em tom direto e preciso, com valor prático e sem clichês de marketing ou promessas sem respaldo. Em outras pautas, siga o público e o tom do brief.

1. Revise o material e identifique a frase mais forte, surpreendente ou contraintuitiva que sustente a ideia central. Localize a fala na fonte quando houver timecode.
2. Apresente três opções de gancho para os primeiros 2 s. Escolha a que torna a tensão ou a ideia perceptível já no primeiro segundo e que o restante do corte consegue sustentar. Identifique se cada opção usa fala gravada, texto na tela ou fala a gravar.
3. Monte o roteiro com a abertura escolhida, uma virada ou explicação, um exemplo concreto sustentado pelo material e um fechamento com CTA natural. Preserve o sentido das falas e separe propostas de gravação da transcrição.
4. Marque no mapa de cortes os descartes por trecho, incluindo desvios e frases fracas. Mantenha o que acrescenta clareza, prova ou retenção, com o contexto necessário para entender a fala.
5. Proponha as legendas em blocos de sentido de até seis palavras, sem omitir informação necessária para caber no bloco.
6. Associe a cada trecho os recursos que tenham função na edição, como B-roll, print, zoom ou corte. Na mesma passagem, indique o ritmo e onde trilha, efeitos sonoros ou ênfases ajudam a leitura da ideia.
7. Entregue o plano em uma tabela com **Tempo | Fala | Texto na tela | Corte/efeito | Visual de apoio**, usando intervalos da timeline final. Identifique os tempos estimados quando a montagem ainda não estiver temporizada. Aponte por trecho o que falta gravar, enviar ou confirmar e para que será usado.

## Base de referências de pregação — 05/11/2026

Análise visual por amostragem no player público. Timecodes aproximados; não houve inspeção de todos os frames nem confirmação auditiva de trilha, efeitos sonoros ou mixagem. Fontes descritas pela aparência, não identificadas como famílias exatas. Não atribuir alcance à edição a partir de curtidas públicas. Combinar os recursos pela função; não trocar fontes aleatoriamente a cada palavra.

| Referência | Evidência visual | Aplicação editorial |
|---|---|---|
| [LC Frames — DTTFk3xjv8l](https://www.instagram.com/reel/DTTFk3xjv8l/) — 58,57 s | Em ~6 s, palavras distribuídas ao redor do pregador. Em ~8–11 s, reação da plateia e legenda central compacta. Em ~12,5 s, cartela clara com apoio preto e palavra maior amarelo-lima. Em ~15,6 e 32 s, serifada inclinada grande, quebrada em blocos verticais. Em ~20 s, contraste de peso na mesma linha; em ~29 s, duas linhas hierarquizadas. Em ~38–41 s, volta à plateia. | Alternar legenda funcional com intervenções fortes em conceitos decisivos; usar espaço negativo, pesos e encaixes. Reação da plateia exige material real do contexto. Empilhamento extremo exige revisão de leitura. |
| [MEVAM Jovem — DeUpthoMpy2](https://www.instagram.com/reel/DeUpthoMpy2/) — 93 s | Em ~4,5 s, dois grupos separados lateralmente. Em ~6 e 20 s, plano geral monocromático. Em ~9–28, 36–50 e 70–84 s, blocos curtos em caixa alta branca, sem serifa, geralmente no centro inferior; planos abertos/fechados e momentos sem legenda. | Base de leitura consistente, variação de enquadramento e respiro visual. Dinamismo não exige efeitos permanentes. Preservar mãos e gesto quando carregam a fala. |
| [Victor Resende — DTnZQggAGUg](https://www.instagram.com/reel/DTnZQggAGUg/) — 38,83 s | Em ~4 s, legenda branca compacta. Em ~10–13,5 s, imagem em faixas e chamada para seguir. Em ~15–17 s, monocromia com texto amarelo. Em ~24,7 s, imagem recuada com cantos arredondados em fundo claro. Em ~31 s, apoio sem serifa à esquerda e palavra serifada inclinada à direita, escuros sobre roupa clara. | Reservar cor, moldura e contraste tipográfico para viradas. Adaptar contraste ao fundo real. CTA opcional, sem copiar usuário, marca ou identidade da referência. |

### Método para um corte dinâmico

1. **Mapa de intenção.** Dividir a transcrição em abertura, desenvolvimento, contraste, tese e conclusão. Para cada bloco, registrar tempo, texto literal, palavra de ênfase, composição, enquadramento e função do efeito. Quando o usuário pedir integral, preservar ordem e duração; não retirar pausas por iniciativa própria.
2. **Tempo de fala.** Um quadro por segundo serve para a folha de contato, não para detectar silêncio nem marcar cortes. Usar áudio/waveform e escuta para pausas; ajustar entradas no nível de palavra e frame. Preservar respiração, pausa expressiva e contexto. Revisar transições com amostras mais densas que 1 s.
3. **Sistema tipográfico.** Começar com uma sans legível para apoio e uma serifada/itálica para ênfase; uma variante condensada pode servir às frases largas. Diferenciar tamanho e peso antes de adicionar outra família. Em 1080 × 1920, testar apoio de 60–80 px e destaque de 110–180 px, ajustando pela fonte e largura real. São parâmetros de trabalho, não medições das referências.
4. **Composições com intenção.** Alternar frase central compacta, apoio pequeno sobre palavra grande, frase à esquerda com complemento à direita, pilha de duas/três linhas e card pontual. Preservar âncoras dentro de uma frase; mudar o arranjo ao mudar a ideia. Encaixar palavras por alinhamento e largura, sem colisões e sem atravessar olhos/boca. Evitar sílabas isoladas que dificultem leitura.
5. **Movimento legível.** Revelar por blocos de sentido e acumular palavras quando houver tempo de leitura. Experimentar entradas de 3–6 frames a 30 fps, deslocamento curto e desaceleração; deixar o texto nítido e estável após a entrada. Trechos de menos de 0,5 s precisam de entrada mais curta ou agrupamento. Não repetir o mesmo pulso em todas as palavras. Desfoque, escala e saída devem pontuar a fala sem impedir leitura.
6. **Pontuação visual.** Concentrar intervenções fortes em poucas viradas: palavra dominante, passagem monocromática com acento, recuo em moldura ou cartela. Manter voz e continuidade. Não inserir reação de outro evento nem simular segunda câmera. Reenquadramento digital não cria detalhe: comparar o crop no tamanho final e reduzir zoom se degradar rosto/gestos.
7. **Cor discreta como base.** Corrigir HDR/Log antes do look; reduzir dominantes de palco preservando pele. Comparar com a imagem corrigida, não apenas com o bruto HDR exibido incorretamente. Preto e branco é opcional; texto colorido pode continuar em cor. Evitar amarelo-lima sobre branco sem contraste suficiente.
8. **Avaliar retenção.** Conferir abertura compreensível, leitura no celular, progressão da ideia e conclusão inteligível. Após publicação autorizada, avaliar retenção, tempo médio, conclusão, compartilhamentos e salvamentos com dados reais. Comparar versões sem prometer alcance/viralização. Não publicar para testar sem pedido.

### Revisão do estilo

- Ênfase na palavra importante; negativas, acentos e referência bíblica permanecem claros.
- Composição varia entre ideias e permanece previsível dentro de cada frase.
- Trechos tranquilos contrastam com destaques; efeitos não competem continuamente com o pregador.
- Conferir colisões com texto, rosto, microfone e interface, inclusive nos picos de animação.
- Revisar som, cor e export separadamente; declarar análise visual parcial e escuta pendente quando aplicável.
- Preservar texto vivo, keyframes e mídia no editor escolhido. SRT não substitui a composição tipográfica.

## Legendas e áreas seguras

- Transcreva a fala real e confira nomes, acentos, referências bíblicas e sincronismo. Divida por sentido, com linhas curtas, contraste suficiente e leitura no celular. Prefira no máximo duas linhas no vertical como ponto de partida e ajuste pelo tempo real de leitura.
- Destaque palavras-chave com cor, peso ou animação discreta quando isso facilitar acompanhar a fala. Mantenha posição estável dentro de cada frase e varie a composição entre ideias; evite piscadas e confira se o destaque acompanha a palavra certa. Preserve uma trilha editável quando o editor permitir e entregue SRT/VTT quando solicitado. O arquivo de legenda separado preserva texto e tempo, enquanto o vídeo com legenda gravada preserva a aparência.
- **Instagram.** Para Reels verticais, comece com um canvas de trabalho 9:16, como 1080 × 1920, e confira os requisitos atuais do posicionamento antes do export. Diferencie Reels orgânicos, Stories, capa, feed, grade do perfil e anúncios. Para orgânico, use a prévia disponível no Instagram e confira a sobreposição dos botões à direita, informações no rodapé e recortes de capa, feed e perfil. Para anúncios, consulte o guia do posicionamento e confira a prévia com a ferramenta de área segura do Meta Ads Manager, quando disponível. Verifique texto, logos, rostos e CTA no quadro mais apertado e em trechos com movimento.
- Registre posicionamento, data e método de conferência. Se a prévia atual estiver indisponível, use margens conservadoras, mantenha elementos essenciais na região central e marque a validação na plataforma como pendente. Remova as guias antes do export.

Referências para consulta no momento da edição. [Tamanho e proporções de Reels](https://help.instagram.com/1038071743007909) · [Áreas seguras em anúncios para Stories e Reels](https://www.facebook.com/business/help/980593475366490)

## Áudio e música

1. Sincronize as fontes e escolha a voz principal mais limpa. Ajuste ganho por clipe e equilibre os participantes. Corrija ruído, reverberação, plosivas e sibilância com moderação e compare antes/depois. Use equalização corretiva, compressão leve e limitação quando necessárias. Preserve a dinâmica natural e use ambiente ou crossfades para evitar saltos entre cortes.
2. Use música de fundo discreta quando combinar com a peça. Prefira instrumental, com fades e redução de volume sob a voz. Confira a inteligibilidade em fones e no alto-falante do celular. Se a faixa competir com a fala ou não houver permissão verificável, entregue a versão sem trilha.
3. Para música pedida como “sem copyright”, selecione faixa própria, de domínio público com gravação liberada ou com licença que cubra o uso. Confira fonte, atribuição, plataformas e uso em anúncios quando aplicável. Registre a faixa e a permissão. Verifique também música captada na gravação original.
4. Meça loudness integrado e true peak quando houver medidor. Diferencie pico da fonte, ganho aplicado e medição do mix processado: normalizar picos não iguala loudness, e o teto configurado no limiter não é um true peak medido. Aplique a especificação do destino quando fornecida. Confira clipping, equilíbrio entre vozes, ruído residual, sincronismo e reprodução em mono. Registre os valores efetivamente medidos.
5. Ao pedir áudio mais limpo, inspecione a cadeia já existente antes de adicionar efeitos. Reforce ou ajuste a redução de ruído por fonte, sem empilhar cópias do mesmo processador por rotina; confira a persistência em todos os segmentos derivados. Preserve uma comparação anterior e escute consoantes, respirações e artefatos metálicos/pumping. A intensidade do DeNoise é um controle do efeito, não uma porcentagem comprovada de ruído eliminado; valores de outra produção não são preset obrigatório. Sem escuta comparativa, informe o ajuste aplicado e mantenha a eficácia perceptiva pendente.

## Ferramentas e entrega

- Use o editor solicitado. Sem escolha explícita, prefira FilmCraft instalado para montagem e timeline. Use EffectCraft para inserções animadas e CapCut quando fizer sentido para a montagem ou legendas dinâmicas. Combine com a skill do editor escolhido e verifique os recursos disponíveis na versão em uso. Ao importar legendas com estilo, teste um bloco no editor. Se a importação preservar apenas texto e tempo, reaplique os destaques nos blocos editáveis e confira o export. Use prévia em HyperFrames quando for útil para validar ritmo e composição.
- Em `Produções/<projeto>/`, separe exports, projeto editável e dependências. Preserve o original nativo ArtCraft e gere uma cópia editável para outro editor quando houver suporte, registrando o que foi conferido no destino. Para editor online, devolva o link real do projeto com acesso verificado e o export quando obtido.
- Reabra o projeto e confira mídia, cortes, texto e sincronismo. Assista ao export final e revise duração, formato, cores, legibilidade, sobreposições, voz e direitos. Quando alguma etapa estiver pendente, indique exatamente o que falta validar. Preserve mídia privada e materiais de identidade no ambiente autorizado.
