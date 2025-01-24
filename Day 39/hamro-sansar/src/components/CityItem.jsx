import styles from './CityItem.module.css';

function CityItem({ cityName, id, emoji, date }) {
  return (
    <li>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{date}</time>
      <button className={styles.deleteBtn}>X</button>
    </li>
  );
}

export default CityItem;
