import styles from "../main.module.css";
const Card = ({ value, unit }) => {
  return (
    <div className={styles.smallCard}>
      <p className={styles.number}>{value}</p>
      <p>{unit}</p>
    </div>
  );
};

export default Card;
