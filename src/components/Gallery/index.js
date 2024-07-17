import Profile from "../Profile";
import styles from "./styles.module.css";

export default function Gallery() {
  var lista = [1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 100, 151];
  return (
    <div className={styles.imgContainer}>
      {lista.map((l) => (
        <Profile nome={l} />
      ))}
    </div>
  );
}
