import React from "react";

export default function ProdutosBrasileiros({ produtos, adicionarAoCarrinho, removerDoCarrinho }) {
  // Função para formatar o preço (converte string com vírgula para número)
  const formatarPreco = (preco) => {
    if (typeof preco === 'number') {
      return preco.toFixed(2); // Se já for número, formata com 2 casas decimais
    }
    
    // Se for string, substitui vírgula por ponto e converte para número
    const precoNumerico = parseFloat(preco.replace(',', '.')) || 0;
    return precoNumerico.toFixed(2);
  };

  return (
    <div>
      
      {produtos.map((produto) => (
        <div key={produto.id} className="produto">
          <h3>{produto.nome}</h3>
          <img src={produto.imagem} alt={produto.nome} />
          <p>{produto.descricao}</p>
          <p>
            <strong>Preço:</strong> R$ {formatarPreco(produto.preco)}
          </p>
          <button onClick={() => adicionarAoCarrinho(produto)}>
            Adicionar ao Carrinho
          </button>
          <button onClick={() => removerDoCarrinho(produto.id)}>
            Remover do Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}
