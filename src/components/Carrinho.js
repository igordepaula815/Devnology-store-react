import React from 'react';

export default function Carrinho({ carrinho, removerDoCarrinho, onFinalizar }) {
  const total = carrinho.reduce((sum, item) => sum + Number(item.preco), 0);

  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {carrinho.map((item) => (
              <li key={item.id}>
                {item.nome} - R$ {Number(item.preco).toFixed(2)}
                <button 
                  onClick={() => removerDoCarrinho(item.id)}
                  className="btn-remover"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <p><strong>Total: R$ {total.toFixed(2)}</strong></p>
          <button 
            onClick={onFinalizar}
            className="btn-finalizar"
          >
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
}
