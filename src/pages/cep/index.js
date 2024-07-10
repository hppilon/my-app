import axios from "axios";
import { useState } from "react";

export default function Cep() {
  const [endereco, setEndereco] = useState({});

  const getEndereco = (e) => {
    e.preventDefault();
    const cep = e.target.cep.value;
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(function (response) {
        console.log(response);
        setEndereco(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <form method="post" onSubmit={getEndereco}>
        <label htmlFor="cep">Cep: </label>
        <input type="text" name="cep" id="cep" /> <br />
        <label htmlFor="rua">Rua: </label>
        <input type="text" id="rua" value={endereco.logradouro} /> <br />
        <label htmlFor="numero">Número: </label>
        <input type="numero" id="numero" />
        <br />
        <label htmlFor="bairro">Bairro: </label>
        <input type="text" id="bairro" value={endereco.bairro} />
        <br />
        <label htmlFor="cidade">Cidade: </label>
        <input type="text" id="cidade" value={endereco.localidade} />
        <br />
        <label htmlFor="uf">UF: </label>
        <input type="text" id="uf" value={endereco.uf} />
        <br />
        <button type="submit">Buscar</button>
        <button type="reset" onClick={() => setEndereco({})}>
          Limpar
        </button>
      </form>
    </div>
  );
}
