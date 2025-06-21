import React from "react";

export default function ProdutosEuropeus({ produtos, adicionarAoCarrinho, removerDoCarrinho }) {
  return (
    <div>
      
      {produtos.map((produto) => (
        <div key={produto.id} className="produto">
          <h3>{produto.nome}</h3>
          <img src={produto.imagem} alt={produto.nome} />
          <p>{produto.descricao}</p>
          <p><strong>Preço:</strong> R$ {produto.preco}</p>
          <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
          <button onClick={() => removerDoCarrinho(produto.id)}>Remover do Carrinho</button>
        </div>
      ))}
    </div>
  );
}

