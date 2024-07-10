import Profile from "../Profile";
import styles from "./styles.module.css";

export default function Gallery() {
  return (
    <div className={styles.imgContainer}>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}
