import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery";

export default function Aula() {
  const [titulo, setTitulo] = useState("Aula 2");

  //function handleSubmit() {}
  const handleSubmit = (evento) => {
    evento.preventDefault();
    setTitulo(evento.target.titulo.value);
    //console.log(evento.target.titulo.value);
  };

  useEffect(() => {
    alert("Variável alterada");
  }, [titulo]);

  return (
    <>
      <h1>{titulo}</h1>
      <h3>Aula sobre React</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          onChange={(e) => setTitulo(e.target.value)}
        />
        <button type="submit">Alterar</button>
      </form>
    </>
  );
}
