---
name: bezalel-organizar-drive-e-midias
description: "Inventariar, consolidar e organizar acervos de fotos e vídeos no Google Drive e em pastas ou ZIPs locais. Use para renomeação em lote, detecção de duplicatas, curadoria temática ou conferência de migração."
---

# Organização de Google Drive e acervos de mídia

Defina a raiz de origem, a referência vigente para a tarefa, o destino e o recorte
(por exemplo, anos, eventos e coleções próprias). Confirme quais operações estão
autorizadas. Para escrita, use o alvo e o escopo do pedido. Use o conector Google
Drive disponível para a conta e as pastas autorizadas. Trabalhe com o material
local fornecido quando esse for o escopo.

Quando o usuário escolher uma árvore local curada como referência, registre essa
decisão e use o inventário local atualizado para as próximas comparações. Guarde
o inventário remoto anterior como registro da procedência. Mantenha inventários,
diários, fotos, vídeos e galerias na área privada de trabalho, fora do Git.

Use `bezalel-fotografia` para cobertura e tratamento de fotos, `bezalel-producao-video`
para captação e montagem de uma produção e `bezalel-edicao-video` para editar gravações
existentes, quando essas skills estiverem disponíveis.

Consulte a seção correspondente à tarefa.

- [Inventário e consolidação](#inventario) para listar, comparar ou extrair ZIPs.
- [Estrutura e renomeação](#renomeacao) para reorganizar e padronizar o acervo atual.
- [Duplicatas e revisão visual](#duplicatas) para comparar arquivos e apoiar seleção humana.
- [Curadoria temática e sincronização de nomes](#curadoria) para organizar coleções por cópia.
- [Atalhos e conferência de upload](#upload) para preparar ou conferir a migração.

<a id="inventario"></a>

## Inventário e consolidação

- Percorra todas as subpastas e páginas do recorte, incluindo pastas vazias. Registre cada ocorrência com caminho relativo representado por componentes exatos, tipo, tamanho disponível e identificador quando necessário para distinguir itens homônimos. Registre os atalhos como itens próprios. Indique páginas, pastas ou destinos inacessíveis e o efeito na cobertura.
- Consolide fragmentos dos ZIPs pelo caminho completo de origem. Preserve ZIPs e originais e reúna o conteúdo em uma área de trabalho separada. Mantenha a origem de cada ocorrência, inclusive quando dois ZIPs trazem o mesmo caminho. Compare conteúdos e explique como cada colisão foi resolvida, preservando variantes distintas.
- Antes de extrair, verifique contenção na raiz e trate nomes reservados, caracteres inválidos, variantes de caixa, pontos ou espaços finais e barras literais em componentes. Use um mapa reversível entre os componentes de origem e o caminho materializado. Valide os destinos como caminhos absolutos resolvidos sob a raiz e recuse travessia de caminhos, links e pontos de reanálise.
- Depois da consolidação, releia a árvore extraída e compare caminhos, tamanhos e multiplicidade com o plano e o mapa. Quando houver acesso aos bytes de origem, verifique a cópia por hash. Informe divergências e entradas sem representação local.

<a id="renomeacao"></a>

## Estrutura e renomeação

- Organize `FOTOS` e `VIDEOS` sob evento, subevento ou categoria semântica conforme a convenção solicitada. Preserve subeventos e agrupe pela evidência disponível. Quando faltar uma data ou a associação a um evento for incerta, preserve a informação disponível e registre a lacuna.
- Gere o catálogo a partir da árvore atual, inclusive após mudanças manuais. Mostre a prévia com caminhos de origem e destino, regras de agrupamento, ordem e conflitos. O padrão é configurável. Um exemplo, quando todos os campos existirem, é `ANO - EVENTO - SUBEVENTO - FOTO/VIDEO 0001.ext`, com um dos dois tipos por arquivo. Quando pedida, use uma sequência determinística e sem lacunas por evento, subevento e tipo. Fixe um desempate estável e recalcule o lote se o inventário mudar.
- Valide todas as origens e destinos absolutos dentro da raiz, sem atravessar links ou pontos de reanálise. Detecte destinos repetidos, inclusive equivalentes no sistema de arquivos. Use nomes temporários exclusivos para cadeias, ciclos e mudanças só de caixa. Execute sem sobrescrever e registre etapas concluídas e caminhos temporários em diário que permita retomar ou reverter após falha.
- Compare os hashes antes e depois, releia o destino e verifique nomes, sequência e inventário. Para reversão, confira se cada caminho e hash ainda correspondem ao diário antes de mover. Trate edições posteriores como conflitos.

<a id="duplicatas"></a>

## Duplicatas e revisão visual

- Agrupe candidatos a cópias exatas por tamanho e SHA-256. Confirme byte a byte os pares envolvidos em remoção ou sincronização. Preserve a referência escolhida pelo usuário, salvo autorização expressa para alterar a escolha. Verifique o formato pelo conteúdo antes de corrigir extensão ou excluir arquivos de um tipo. Um arquivo chamado `.heic` pode conter JPEG. Trate recodificação como operação própria.
- Para semelhança visual, use sequência de captura e EXIF quando disponíveis. Compare contatos ou pares, com recorte e zoom quando úteis. Observe diferenças de gesto, pose, enquadramento e luz. Preserve momentos complementares. Marque desfoque, movimento, subexposição, estouro e granulado como indícios para revisão. Registre quais arquivos foram vistos e quais ficaram fora da amostra.
- Em vídeos, amostre quadros, registre timestamps e informe trechos, streams decodificados e alcance da revisão de áudio. Diferencie extração de quadros de reprodução integral.
- Quando uma galeria facilitar a decisão, reúna os arquivos comparáveis por grupo, com filtros de possível duplicação ou baixa qualidade. Comece com seleção vazia, deixe a pessoa escolher livremente qual foto fica e avise quando todo o grupo estiver marcado. Para remover, confira a seleção exata e a autorização e use recuperação fora da árvore selecionada para upload. Prefira galeria somente de leitura. Se houver botão de alteração, limite o servidor à interface de loopback e valide autorização local, seleção e contenção na raiz no momento da ação.
- Use somente os arquivos fornecidos ou autorizados. Evite inferir identidades por rostos para localizar ou abrir originais.

<a id="curadoria"></a>

## Curadoria temática e sincronização de nomes

- Monte coleções por cópia. Acorde temas, categorias próprias e exclusões. Use estrutura por tema ou pessoa quando o usuário a definir. Registre caminho atual e proveniência de cada cópia. Preserve os nomes quando solicitado e aplique a convenção local sem inventar data. Arquivos externos podem pertencer à coleção e ficar sem par no acervo de origem.
- Ao sincronizar nomes, recalcule os pares exatos contra a origem atual após mudanças manuais. Registre os estados **par exato**, **próprio**, **sem par** e **vários pares**. Preserve as categorias e aplique o nome da origem à cópia quando houver um único nome possível e o destino estiver livre. Deixe ambiguidade ou colisão pendente para decisão.
- Releia a árvore após sincronizar e atualize o índice ativo com os caminhos que existem. Guarde caminhos ausentes e antigos no histórico, com sua proveniência.

<a id="upload"></a>

## Atalhos e conferência de upload

- Inventarie cada atalho com seu caminho, destino, acesso observado e dependência remanescente. Conte cada ocorrência mesmo quando vários atalhos apontam para o mesmo item. A escolha é entre recriar a referência e copiar o conteúdo para acesso independente. Confira as permissões sem ampliá-las por iniciativa própria. Registre destinos inacessíveis e, se seguir atalhos para copiar conteúdo, controle ciclos.
- Confirme a árvore local final e selecione explicitamente as pastas e arquivos autorizados para upload. Verifique o inventário do destino após a operação, incluindo caminhos, quantidade, multiplicidade, pastas vazias, tipos e o tratamento acordado para atalhos. Em caso de falha parcial, releia o destino antes de repetir.
- Se houver hash remoto dos bytes armazenados, calcule localmente com o mesmo algoritmo e compare para cada arquivo coberto. A correspondência verifica o conteúdo representado por aquele hash, dentro da cobertura e dos limites do algoritmo. Nomes, tamanhos e datas permitem conferir metadados. Quando forem a única evidência, indique que a igualdade de conteúdo segue pendente. A comparação de bytes recuperados permite uma verificação adicional quando a leitura for autorizada.

## Entrega

Informe a referência vigente, o recorte e as operações efetivamente realizadas.
Indique os inventários, prévias ou diários gerados, a cobertura da conferência e
quais divergências ou decisões ficaram pendentes. Distingua consistência de
estrutura, igualdade de conteúdo e avaliação visual.
