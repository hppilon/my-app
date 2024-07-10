import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Profile() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
      .then(function (response) {
        setPokemon(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <div>
      {!!pokemon && (
        <div className={styles.container}>
          <h3>{pokemon.name}</h3>
          <img
            className={styles.cardImg}
            src={pokemon.sprites?.other.home.front_default}
            alt={pokemon.name}
          />
          <span>{pokemon.types?.map((t) => t.type.name).join(", ")}</span>
        </div>
      )}
    </div>
  );
}
