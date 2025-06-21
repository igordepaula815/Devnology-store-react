import React from 'react';

export default function HistoricoCompras({ historico }) {
  return (
    <div className="historico-compras">
      <h2>Histórico de Compras</h2>

      {historico.length === 0 ? (
        <p>Nenhum pedido registrado.</p>
      ) : (
        <div className="pedidos-lista">
          {historico.map((pedido) => (
            <div key={pedido.id} className="pedido-card">
              <h3>Pedido #{pedido.id}</h3>
              <p><strong>Data:</strong> {pedido.data}</p>
              <p><strong>Cliente:</strong> {pedido.cliente.nome}</p>
              <p><strong>Total:</strong> R$ {Number(pedido.total).toFixed(2)}</p>

              <h4>Itens:</h4>
              <ul>
                {pedido.itens.map((item) => (
                  <li key={item.id}>
                    {item.nome} - R$ {Number(item.preco).toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
