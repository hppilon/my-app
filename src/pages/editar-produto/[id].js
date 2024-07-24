import api from "@/services/api";
import { useEffect, useState } from "react";
import router from "next/router";

export default function Cadastro() {
  const [produto, setProduto] = useState({});
  const [_id, setId] = useState(0);

  const getProduto = (id) => {
    api
      .get(`produtos/${id}`)
      .then((res) => {
        setProduto(res.data);
      })
      .catch((err) => alert("Erro ao recuperar dados do produto"));
  };

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
      .put(`produtos/${_id}`, produtoSalvar)
      .then((res) => {
        alert("Produto editado com sucesso!");
        router.push("/listagem-produtos");
      })
      .catch((err) => {
        alert("Erro ao editar o produto!");
        alert(err?.response?.data?.message ?? err.message);
      });
  };

  useEffect(() => {
    const _id = Number(router.query.id);
    if (!isNaN(_id)) {
      getProduto(_id);
      setId(_id);
    }
  }, []);

  return (
    <>
      <h3>Formulário de Cadastro de Produtos</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" id="nome" name="nome" defaultValue={produto.nome} />
        <br />
        <label htmlFor="descricao">Descrição: </label>
        <input
          type="text"
          id="descricao"
          name="descricao"
          defaultValue={produto.descricao}
        />
        <br />
        <label htmlFor="preco">Preço: </label>
        <input
          type="number"
          id="preco"
          name="preco"
          defaultValue={produto.preco}
        />
        <br />
        <label htmlFor="lojaId">Loja: </label>
        <input
          type="number"
          id="lojaId"
          name="lojaId"
          defaultValue={produto.lojaId}
        />
        <br />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}
