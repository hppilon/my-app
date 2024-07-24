import api from "@/services/api";
import { useState, useEffect } from "react";
import styles from "../../styles/Lista.module.css";
import Card from "../../components/CardProduto";

export default function Listagem() {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = () => {
    api
      .get("produtos")
      .then((result) => {
        setProdutos(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <h3>Listagem de Produtos</h3>
      <div className={styles.imgContainer}>
        {produtos?.length > 0 &&
          produtos.map((produto) => <Card produto={produto} />)}
      </div>
    </>
  );
}
