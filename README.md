Decisões técnicas tomadas
Estrutura e arquitetura
O projeto foi desenvolvido com React utilizando hooks (useState, useEffect) para controle de estado e ciclo de vida dos componentes, permitindo uma aplicação funcional e moderna.

O código está organizado em componentes reutilizáveis e modulares para facilitar manutenção e escalabilidade:

ProdutosBrasileiros e ProdutosEuropeus para exibir listas separadas de produtos.

Carrinho para gerenciar itens adicionados, remoção e finalização da compra.

FinalizarCompra para formulário de cadastro do cliente e conclusão da compra.

HistoricoCompras para exibir pedidos finalizados armazenados.

Gerenciamento de estado
O estado do carrinho e histórico de compras é mantido no componente principal App usando useState.

O histórico de compras é persistido usando o localStorage do navegador, garantindo que os dados não sejam perdidos após recarregar a página.

Dados e filtros
Os produtos são carregados localmente a partir de arquivos mock (produtosBrasileiros e produtosEuropeus), simulando um backend simples.

Foi implementado filtro para busca por ID de produto, permitindo ao usuário localizar itens específicos rapidamente.

Persistência e armazenamento
O uso do localStorage para armazenar o histórico de compras é uma solução simples e eficaz para persistência de dados no frontend, sem necessidade de backend.

Imagens dos produtos
As URLs originais das imagens estavam quebradas, então foram alteradas para links válidos (como do LoremFlickr), garantindo que as imagens dos produtos carreguem corretamente e melhorando a apresentação do projeto.

Experiência do usuário
O sistema de navegação entre telas (produtos, finalização, histórico) é controlado por estados, com botões para alternar e voltar facilmente.

Mensagens de feedback, como alertas ao finalizar compra e notificações ao adicionar itens ao carrinho, melhoram a usabilidade.

Filtros e buscas são atualizados em tempo real, garantindo interatividade e rapidez na experiência.
