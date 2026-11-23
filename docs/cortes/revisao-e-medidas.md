# Revisão e medidas dos cortes

## Medidas extraídas da montagem de referência

Medição estrutural feita sobre os dados de montagem e os fontes consolidados em 23/11/2026. Não é análise de desempenho nas redes nem prova de escuta integral.

| Medida | Resultado | Significado |
| --- | --- | --- |
| Sequência | 1080 × 1920, 24 fps | Geometria e fps do exemplo. |
| Duração | 1388 frames / 57,833 s | Soma dos dois trechos, com saídas exclusivas. |
| Trechos de origem | 2, na ordem da fonte | 1227 frames + 161 frames. A remoção intermediária precisa preservar a ideia. |
| Eventos de título | 9 | Não é recomendação de nove títulos por minuto. |
| Tempo ocupado por títulos | 519 frames / 21,625 s / 37,39% | Janelas visuais dos títulos; inclui entradas e momentos de leitura. |
| Tempo fora dos títulos | 869 frames / 36,208 s / 62,61% | Disponível à legenda e respiros. Não equivale a 36,208 s de legenda efetivamente visível. |
| Legenda de base | 17 blocos no JSON | Não contém a transcrição integral das falas substituídas visualmente por títulos. |
| Shutters | 4 eventos | “foi rasgado”, “morrer”, “A CRUZ” e “dos Santos”. |
| P&B + zoom dramático | 37 frames / 1,542 s | Intervalo compartilhado `[555, 592)`; corte seco na entrada e na saída. |
| Emenda entre sólidos | Frame 1190 da sequência | A pergunta termina exatamente quando “O Santo dos Santos” começa. |
| Lacuna nessa emenda | 0 frames | Não há janela sem cartela expondo a câmera. |
| Referências animadas da galeria | 6 composições, 120 frames didáticos | Sem vídeo/áudio, com pausa, avanço/retorno de um frame e slider. |
| Histórico editorial | 39 pedidos registrados | Inclui decisões finais, substituições, consulta e implementação pendente. |

## Critérios de aceite por corte

| Área | Critério verificável | Método |
| --- | --- | --- |
| Contexto | Pergunta e resposta fazem sentido sem o episódio inteiro | Escutar início/fim na fonte e a montagem sem grafismos. |
| Ordem | Os trechos seguem a ordem da fonte; exceções exigem decisão editorial explícita | Conferir mapa fonte → sequência. |
| Abertura | Primeiro segundo oferece motivo claro para acompanhar | Rever em velocidade normal; não prometer retenção só pela presença de título. |
| Legenda | Zero palavras deliberadamente antecipadas; primeira exposição no frame calculado a partir do áudio | Conferir ataque por palavra e reprodução. Em 24 fps, a precisão visual é limitada a frames de aproximadamente 41,7 ms. |
| Emendas | Nenhuma sílaba necessária truncada, duplicada ou adiantada para acomodar um título | Escuta comparativa com a fonte, antes e depois de cada emenda. |
| Hierarquia | Palavra principal claramente maior que o apoio, sem colisão | Conferir tamanho efetivo, picos de animação e leitura no celular. |
| Legenda × título | Não há duas camadas disputando a mesma fala na mesma região | Conferir troca nos dois lados do destaque. |
| Cartelas | Zero frames de câmera entre cartelas que devem ser contínuas | Inspecionar frame anterior, frame de troca e seguinte. |
| Drama | P&B, zoom e início do título compartilham o mesmo limite quando a receita exigir | Comparar intervalos de frames; rever com áudio. |
| Áudio | Voz contínua, inteligível e sem estalos; efeito com cauda completa | Escutar em fones/celular e medir quando houver ferramenta. |
| Música | Entrada, offset, duração e ganho podem ser ajustados separadamente | Mover o clipe/controles no editor; conferir virada por escuta. |
| Cor | Pele preservada, sem clipping novo de tratamento | Comparação antes/depois e scopes quando disponíveis. |
| Segurança visual | Texto/rosto/CTA não colidem com a interface do posicionamento conferido | Prévia da plataforma; registrar data, posicionamento e limites. |
| Editável | Mídias vinculadas e texto/keyframes ainda alteráveis | Reabrir uma cópia e editar uma palavra/controle. |
| Export, se solicitado | A revelação por palavra e os intervalos coincidem com a timeline | Ver o arquivo exportado com som, inclusive as transições. |

## Registro de evidência

Separar o que foi medido no dado, visto no editor, ouvido e conferido em export. Por exemplo:

```json
{
  "documentacao_conferida": true,
  "intervalos_de_frames_conferidos": true,
  "galeria_visual_conferida": false,
  "sincronismo_por_escuta_integral": false,
  "fontes_na_maquina_de_destino": "pendente",
  "licencas_de_midia": "pendente",
  "lut_aplicado": false,
  "validacao_na_plataforma": "pendente",
  "exportacao": "nao_solicitada"
}
```

Esse registro é um exemplo preenchível; os valores não certificam uma produção. A animação HTML não demonstra fidelidade de um export em outro editor. Os testes automatizados deste pacote conferem a extração dos fontes, os limites compartilhados e a preservação de arquivos locais; não assistem à mensagem nem escutam a mixagem.

## Depois de publicar, quando houver dados

Registrar duração, retenção nos primeiros segundos, tempo médio, conclusão, compartilhamentos e salvamentos com período e fonte dos dados. Comparar peças semelhantes e registrar mudanças de conteúdo, público e distribuição. Sem esses dados, não atribuir ganho de retenção ao preset nem estimar alcance.
