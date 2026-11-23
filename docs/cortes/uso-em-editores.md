# Aplicação no editor da equipe

Este padrão descreve decisões de montagem e camadas. Os fontes Remotion são uma implementação de referência; não são um preset nativo universal. Use a ferramenta já escolhida pela equipe e confirme os recursos disponíveis na versão instalada.

## Estrutura de camadas

| Camada | Conteúdo | O que precisa continuar editável |
| --- | --- | --- |
| Voz | Fala e ambiente da seleção | Entrada/saída, ganho e emendas sem sílabas cortadas. |
| Imagem | Câmera principal e reenquadramentos | Escala, posição e pontos de corte. |
| Tratamento | Cor corrigida e P&B pontual | Intensidade e intervalo, separados do texto colorido. |
| Cartelas | Fundos sólidos e cruz quando fizer sentido | Cor, duração, forma e cobertura da tela. |
| Legendas | Palavras temporizadas | Texto, tempos, estilo e revelação de cada palavra. |
| Letterings | Apoios e palavras principais em camadas separadas | Fonte, corpo, espaçamento, âncora e animação. |
| Trilha | Música | Entrada na sequência, ponto inicial da faixa, duração e volume. |
| SFX | Camera shutter e outras escolhas autorizadas | Ataque, ganho e cauda do som. |

## Rota por ferramenta

| Ambiente | Como usar o pacote | Não presumir |
| --- | --- | --- |
| FilmCraft / CapCut | Recriar a montagem e os grupos de texto conforme o guia. Se a legenda nativa não revelar por palavra, usar unidades editáveis com os mesmos tempos. Salvar uma composição reutilizável quando o aplicativo oferecer esse recurso. | Importar SRT não preserva automaticamente cores, fontes e animações da galeria. |
| EffectCraft / After Effects | Montar uma composição de título por arranjo com apoio e palavra principal separados. Reaproveitar keyframes de entrada e substituir os textos, ajustando duração e tamanho pela nova fala. | Os arquivos ECPROJ e AEP não são intercambiáveis só por mudar a extensão. O kit não inclui esses nativos. |
| Premiere ou outro editor de timeline | Preservar as camadas e pontos de edição. Reproduzir a receita com os controles de texto, opacidade, escala e som disponíveis. Se for usado um template de motion, conferir quais parâmetros continuam editáveis. | Não há MOGRT, projeto Premiere ou plugin instalado por este pacote. |
| Remotion | Materializar o kit, vincular dependências e alterar JSON/CSS. Usar a composição `Moodboard` sem mídia; `PodIMEP` depende dos dois trechos e das faixas descritas no manifesto. | A galeria HTML e o projeto não aplicam o LUT solicitado nem corrigem automaticamente timestamps de outro episódio. |
| Celular / consulta rápida | Consultar o guia e o moodboard para selecionar arranjos e conferir hierarquia. Registrar as ênfases pelo tempo da fala no projeto. | Referência visual não é uma timeline móvel pronta nem valida o áudio do corte. |

## Troca segura de texto

1. Duplique o grupo aprovado na produção atual.
2. Troque o apoio e a palavra principal em seus próprios campos. Preserve a caixa normal do apoio e o tamanho dominante do destaque.
3. Ajuste o ponto de entrada pela nova fala. Não reutilize os tempos do episódio anterior.
4. Confira largura, acentos e linha de base na fonte realmente carregada. Aproxime linhas sem sobrepor os desenhos das letras.
5. Reveja a entrada e a saída da legenda da mesma fala. Entre cartelas contínuas, mantenha uma superfície sólida cobrindo todos os frames.
6. Confira o som com e sem SFX. Salve o projeto. Export ou intercâmbio só quando solicitado para a entrega.

Para variação de ritmo, use a [tabela de dinamismo](receitas-de-animacao.md#como-variar-sem-perder-o-padrao). Para números iniciais e limitações, consulte [parâmetros](parametros.md) e [dependências](dependencias-e-creditos.md).
