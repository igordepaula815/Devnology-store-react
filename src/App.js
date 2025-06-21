import './App.css';
import React, { useState, useEffect } from "react";
import ProdutosEuropeus from "./components/ProdutosEuropeus";
import ProdutosBrasileiros from "./components/ProdutosBrasileiros";
import Carrinho from "./components/Carrinho";
import FinalizarCompra from "./components/FinalizarCompra";
import HistoricoCompras from "./components/HistoricoCompras";

import { produtosBrasileiros } from "./Data/produtosBrasileiros";
import { produtosEuropeus } from "./Data/produtosEuropeus";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [etapa, setEtapa] = useState('produtos');
  const [mostrarHistorico, setMostrarHistorico] = useState(false);
  const [buscaId, setBuscaId] = useState('');
  const [historicoCompras, setHistoricoCompras] = useState(() => {
    const saved = localStorage.getItem('historicoCompras');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('historicoCompras', JSON.stringify(historicoCompras));
  }, [historicoCompras]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const handleFinalizarCompra = (dadosCliente) => {
    const novoPedido = {
      id: Date.now(),
      data: new Date().toLocaleString(),
      cliente: dadosCliente,
      itens: [...carrinho],
      total: carrinho.reduce((sum, item) => sum + item.preco, 0)
    };

    setHistoricoCompras([...historicoCompras, novoPedido]);
    setCarrinho([]);
    setEtapa('produtos');
    alert(`Compra #${novoPedido.id} realizada com sucesso!`);
  };

  // 🔍 Filtro por ID (valida se está vazio ou filtra por ID exato)
  const filtradosBrasileiros = buscaId
    ? produtosBrasileiros.filter(p => p.id.toString() === buscaId)
    : produtosBrasileiros;

  const filtradosEuropeus = buscaId
    ? produtosEuropeus.filter(p => p.id.toString() === buscaId)
    : produtosEuropeus;

  return (
    <div className="container">
      <div className="menu-navegacao">
        <button onClick={() => setMostrarHistorico(!mostrarHistorico)}>
          {mostrarHistorico ? 'Voltar para Produtos' : 'Ver Histórico'}
        </button>
      </div>

      {mostrarHistorico ? (
        <HistoricoCompras historico={historicoCompras} />
      ) : etapa === 'produtos' ? (
        <>
          <h1 style={{ marginBottom: 24 }}><strong>Devnology Store</strong></h1>

          {/* 🔎 Campo de busca por ID */}
          <div style={{ marginBottom: 24 }}>
            <input
              type="text"
              placeholder="Buscar produto por ID"
              value={buscaId}
              onChange={(e) => setBuscaId(e.target.value)}
              style={{ padding: 8, width: 220 }}
            />
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <h2>Produtos Brasileiros</h2>
              <ProdutosBrasileiros
                produtos={filtradosBrasileiros}
                adicionarAoCarrinho={adicionarAoCarrinho}
                removerDoCarrinho={removerDoCarrinho}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h2>Produtos Europeus</h2>
              <ProdutosEuropeus
                produtos={filtradosEuropeus}
                adicionarAoCarrinho={adicionarAoCarrinho}
                removerDoCarrinho={removerDoCarrinho}
              />
            </div>
          </div>

          <Carrinho
            carrinho={carrinho}
            removerDoCarrinho={removerDoCarrinho}
            onFinalizar={() => setEtapa('finalizar')}
          />
        </>
      ) : (
        <FinalizarCompra
          carrinho={carrinho}
          onFinalizarCompra={handleFinalizarCompra}
          onVoltar={() => setEtapa('produtos')}
        />
      )}
    </div>
  );
}
