import styles from "./FloralDecoration.module.css";

const flowers = ["✿", "✽", "❀", "✾", "✿", "❀"];

function FloralDecoration() {
  return (
    <div className={styles.decoration} aria-hidden="true">
      <div className={`${styles.column} ${styles.left}`}>
        {flowers.map((flower, index) => (
          <span className={styles.flower} key={`${flower}-${index}`}>
            {flower}
          </span>
        ))}
      </div>
      <div className={`${styles.column} ${styles.right}`}>
        {[...flowers].reverse().map((flower, index) => (
          <span className={styles.flower} key={`${flower}-${index}`}>
            {flower}
          </span>
        ))}
      </div>
      <span className={`${styles.sparkle} ${styles.sparkleTop}`}>✦</span>
      <span className={`${styles.sparkle} ${styles.sparkleBottom}`}>✦</span>
    </div>
  );
}

export default FloralDecoration;
