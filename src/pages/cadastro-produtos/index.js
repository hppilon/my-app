import api from "@/services/api";
import { useState } from "react";
import router from "next/router";

export default function Cadastro() {
  const [produto, setProduto] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, descricao, preco, lojaId } = e.target;
    var produtoSalvar = {
      nome: nome.value,
      descricao: descricao.value,
      preco: preco.value,
      lojaId: lojaId.value,
    };

    api
      .post("/produtos/", produtoSalvar)
      .then((res) => {
        alert("Produto salvo com sucesso!");
        router.push("/listagem-produtos");
      })
      .catch((err) => {
        alert("Erro ao salvar o produto!");
        alert(err?.response?.data?.message ?? err.message);
      });
  };

  return (
    <>
      <h3>Formulário de Cadastro de Produtos</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" name="nome" /> <br />
        <label htmlFor="descricao">Descrição: </label>
        <input type="text" id="descricao" name="descricao" />
        <br />
        <label htmlFor="preco">Preço: </label>
        <input type="number" id="preco" name="preco" />
        <br />
        <label htmlFor="lojaId">Loja: </label>
        <input type="number" id="lojaId" name="lojaId" />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}
