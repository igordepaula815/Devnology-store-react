import React, { useState } from 'react';

export default function FinalizarCompra({ carrinho, onFinalizarCompra, onVoltar }) {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    endereco: '',
    pagamento: 'cartao'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinalizarCompra(cliente);
  };

  const total = carrinho.reduce((sum, item) => sum + Number(item.preco), 0);

  return (
    <div className="finalizar-compra">
      <h2>Finalizar Compra</h2>

      <div className="resumo-carrinho">
        <h3>Resumo do Pedido</h3>
        <ul>
          {carrinho.map((item) => (
            <li key={item.id}>
              {item.nome} - R$ {Number(item.preco).toFixed(2)}
            </li>
          ))}
        </ul>
        <p><strong>Total: R$ {total.toFixed(2)}</strong></p>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Dados do Cliente</h3>

        <div className="form-group">
          <label>Nome Completo:</label>
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group endereco-group">
          <label>Endereço:</label>
          <textarea
            name="endereco"
            value={cliente.endereco}
            onChange={handleChange}
            required
            className="endereco-input"
          />
        </div>

        <div className="form-group">
          <label>Forma de Pagamento:</label>
          <select
            name="pagamento"
            value={cliente.pagamento}
            onChange={handleChange}
          >
            <option value="cartao">Cartão de Crédito</option>
            <option value="boleto">Boleto Bancário</option>
            <option value="pix">PIX</option>
          </select>
        </div>

        <div className="botoes-container">
          <button type="button" onClick={onVoltar} className="btn-voltar">
            Voltar
          </button>
          <button type="submit" className="btn-finalizar">
            Confirmar Compra
          </button>
        </div>
      </form>
    </div>
  );
}
