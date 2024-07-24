import api from "@/services/api";
import styles from "./styles.module.css";
import router from "next/router";

export default function Card({ produto }) {
  const excluirProduto = (id) => {
    api
      .delete(`produtos/${id}`)
      .then((res) => {
        alert("Produto excluído com sucesso");
        router.reload();
      })
      .catch((err) => alert("Erro ao excluir"));
  };

  const editarProduto = (id) => {
    router.push(`/editar-produto/${id}`);
  };

  return (
    <div className={styles.container}>
      <p>{produto.nome}</p>
      <span>R$ {produto.preco}</span>
      <button
        type="button"
        className={styles.btnEditar}
        onClick={() => editarProduto(produto.id)}
      >
        Editar
      </button>
      <button
        type="button"
        className={styles.btnExcluir}
        onClick={() => excluirProduto(produto.id)}
      >
        Excluir
      </button>
    </div>
  );
}
