// src/components/ProdutosFiltro.js
import React, { useState } from "react";

export default function ProdutosFiltro({ produtos }) {
  const [idBusca, setIdBusca] = useState("");
  const [resultado, setResultado] = useState(null);

  const buscarProduto = () => {
    const produto = produtos.find((p) => p.id === idBusca);
    setResultado(produto || "Produto não encontrado");
  };

  return (
    <div>
      <h2>Buscar Produto por ID</h2>
      <input
        type="text"
        placeholder="Digite o ID do produto"
        value={idBusca}
        onChange={(e) => setIdBusca(e.target.value)}
      />
      <button onClick={buscarProduto}>Buscar</button>

      <div>
        {resultado ? (
          typeof resultado === "string" ? (
            <p>{resultado}</p>
          ) : (
            <div>
              <h3>{resultado.nome}</h3>
              <p>{resultado.descricao}</p>
              <img src={resultado.imagem} alt={resultado.nome} width={320} />
              <p>Preço: R$ {resultado.preco}</p>
              <p>Categoria: {resultado.categoria}</p>
              <p>Material: {resultado.material}</p>
              <p>Departamento: {resultado.departamento}</p>
            </div>
          )
        ) : (
          <p>Nenhum produto buscado ainda.</p>
        )}
      </div>
    </div>
  );
}
