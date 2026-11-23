# Dependências, créditos e estado real

Este pacote publica fontes textuais e referências autorais de composição. O materializador reconstrói arquivos de trabalho sem baixar mídia. Os arquivos pessoais de produção permanecem fora do repositório, conforme sua política existente. Não se deve contornar essa política adicionando mídia em Base64 ou renomeando extensões.

## Inventário do corte de referência

| Item | Uso / estado | Distribuição e próximo passo |
| --- | --- | --- |
| Episódio PodIMEP com Apóstolo Rogério Costa | Fonte horizontal 16:9 a 24 fps, usada na seleção | Não incluído. Vincular cópia autorizada no ambiente da equipe. Não publicar nome de pasta pessoal nem caminho absoluto. |
| Trechos de vídeo numerados | Duas cópias locais em H.264, 1227 e 161 frames | Não incluídos. Não equivalem ao master; preservar originais. Preparar apenas quando a saída correspondente estiver autorizada. |
| Voz separada | Dois WAVs a 48 kHz alinhados aos mesmos limites dos vídeos | Não incluídos. Sem remoção ou deslocamento de sílabas para acompanhar títulos. |
| Legenda com tempos | Blocos e palavras do exemplo no relógio da fonte | Incluída nos fontes para demonstrar o mapeamento. Não é a transcrição integral do episódio: os títulos cobrem parte da fala. SRT acessível completo deve ser conferido e completado quando solicitado. |
| Montagem e títulos | Dois trechos, nove eventos de título e um intervalo compartilhado por P&B, zoom e título | Dados incluídos. |
| Código Remotion e CSS | Revelação por palavra, títulos, câmera, cartelas, cruz, guia e trilha editável | Incluídos em formato textual materializável. Derivados do projeto local; a galeria é uma apresentação didática adicional. |
| Moodboard | Inter e Baskerville, hierarquia e arranjos | Incluído como composição no código e como galeria HTML editável. HTML é referência, não um projeto nativo de outro editor. |
| Inter / Baskerville | Famílias declaradas no projeto | Binários não incluídos. Verificar disponibilidade/licença na máquina; fallback pode alterar quebras e tamanhos. Peso solicitado não comprova peso real carregado. |
| Camera shutter | Usado em quatro destaques; arquivo local de aproximadamente 1 s | Não incluído. Fonte/licença de redistribuição não foi comprovada no histórico; equipe deve vincular um som autorizado. |
| “This Too Shall Pass”, Scott Buckley | Faixa indicada pelo usuário, identificada por um download de BreakingCopyright | Arquivo não incluído. Conferir a fonte oficial, a licença aplicável à gravação e a atribuição antes de publicar. O título “royalty free” do download não prova todas as permissões. |
| LUT 6 — Vintage | Solicitado com intensidade reduzida | Não incluído e não ligado ao vídeo final. Arquivo de conversão local não prova aplicação do look. Não copiar LUT de acervo sem permissão de redistribuição. |
| Quatro fundos gerados | Experimento com textura para véu, cruz, outro lado e santos | Não utilizados na decisão final. A referência distribuída usa fundos sólidos. |
| The Chosen | Consulta durante a conversa | Nenhuma cena incorporada. Não existe dependência da série neste kit. |

## Dependências do exemplo Remotion

O pacote materializado registra as versões usadas: Remotion e CLI/media 4.0.534, React/React DOM 19.2.3, Zod 4.5.4 e a declaração original de `@remotion/effects`. São versões de referência do projeto, não uma recomendação de atualização. O kit não distribui módulos de terceiros nem o lockfile da produção; antes de adoção pela equipe, instalar em ambiente de trabalho e registrar um lockfile próprio conforme as licenças aplicáveis.

O código contém geometria fixa de 1080 × 1920 e pressupõe fonte horizontal 16:9. A composição `PodIMEP` exige as mídias listadas; `Moodboard` e a galeria HTML não exigem vídeo ou som. O pequeno adaptador de Studio restringe o servidor local a `127.0.0.1`, reproduzindo o ambiente do exemplo; ele não é necessário para adaptar a receita em outro editor.

## Registro de adoção por produção

No projeto privado, registrar: arquivo de origem, autorização, licença e atribuição de música/SFX/fontes, versão do editor, duração/fps, responsável pela revisão, posicionamento conferido e limitações. Nenhuma dessas informações precisa incluir contatos privados ou credenciais neste repositório.

Use os níveis `documentacao_conferida`, `galeria_visual_conferida`, `projeto_editavel_verificado` e `exportacao_nao_solicitada` conforme a evidência disponível. Só declarar export final conferido se esse arquivo foi produzido por solicitação e efetivamente revisado com imagem e som.
