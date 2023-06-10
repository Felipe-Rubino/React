import { useState } from "react";
import React from "react";
import "../css/styles.css";
const Lista = () => {
  const [dados, setDados] = useState([
    { id: 1, nome: "Mercedes" },
    { id: 2, nome: "BMW" },
    { id: 3, nome: "Hyundai" },
    { id: 4, nome: "Chevrolet" },
    { id: 5, nome: "Fiat" },
    { id: 6, nome: "Audi" },
    { id: 7, nome: "Jaguar" },
    { id: 8, nome: "Cadillac" },
    { id: 9, nome: "Maserati" },
    { id: 10, nome: "Land-Rover" },
  ]);
  const [favoritos, setFavoritos] = useState([]);
  const [dadosFiltrado, setDadosFiltrado] = useState([]);
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState("");
  const Filtro = dados?.filter((carro) =>
    carro.nome.toUpperCase().includes(busca.toUpperCase())
  );

  const handleDelete = (deleteDados) => {
    const novoCarro = dados.filter((dados) => dados !== deleteDados);
    setDados(novoCarro);
  };

  const adicionarFavoritos = (dados) => {
    setFavoritos([...favoritos, dados]);
  };

  const removerFavoritos = (dados) => {
    const novosFavoritos = favoritos.filter(
      (favDados) => favDados.id !== dados.id
    );
    setFavoritos(novosFavoritos);
  };

//   const isFavorito = (dados) =>
//     favoritos.some((favDados) => favDados.id === dados.id);

  return (
    <>
      <div>
        <label>
          <input
            type="text"
            style={{ padding: 10 }}
            placeholder="Digite um carro"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />
        </label>
        <ul>
          {Filtro.map((dados, index) => (
            <li className="lista" key={index}>
              {dados.nome}{" "}
              <button className="deletar" onClick={() => handleDelete(dados)}>
                {" "}
                Deletar{" "}
              </button>{" "}
              <button onClick={() => adicionarFavoritos(dados)}>
                {" "}
                Favoritar Carro {" "}
              </button>{" "}
              <button
                onClick={() => removerFavoritos(dados)}
                className="favorito"
              >
                Remover dos favoritos
              </button>{" "}
            </li>
          ))}
        </ul>
        <ul>
          {favoritos.map((dados) => (
            <li key={dados.id}>{dados.nome} </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Lista;
