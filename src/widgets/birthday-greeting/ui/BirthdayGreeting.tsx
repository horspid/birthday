import styles from "./BirthdayGreeting.module.css";

function BirthdayGreeting() {
  return (
    <div className={styles.page}>
      <article className={styles.letter}>
        <div className={styles.topOrnament} aria-hidden="true">
          ✦ · ✧ · ✦
        </div>

        <header className={styles.header}>
          <h1>С днём рождения,</h1>
          <p className={styles.name}>Криспуль</p>
          <p className={styles.english}>HAPPY BIRTHDAY, SUCHKA</p>
        </header>

        <div className={styles.rule} aria-hidden="true">
          <span />
          ✦ · ✧ · ✦
          <span />
        </div>

        <p className={styles.poem}>
          Пусть сегодня будет день,
          <br />
          когда кофе вкусный,
          <br />
          люди не бесят,
          <br />а фолловеры становятся донатерами!
        </p>

        <div className={styles.flowerRule} aria-hidden="true">
          <span>✿</span>
          <span>❀</span>
          <span>✿</span>
        </div>

        <p className={styles.message}>
          Пусть день начинается с эмоциональных рилсов, продолжается бизнесом и
          заканчивается любимыми аукционами. Дальше будет ещё больше всего, что
          любишь, и меньше того, что раздражает.
        </p>

        <p className={styles.wish}>
          Впереди ещё много новых городов, стран, вечеров и дней, которые
          принесут тебе то, что пожелаешь. С днём рождения.
        </p>

        <div
          className={`${styles.rule} ${styles.signoffRule}`}
          aria-hidden="true"
        >
          <span />
          ✦ · ✦
          <span />
        </div>

        <p className={styles.signoff}>
          <em>Спасибо за встречу-свидание,</em>
          <br />
          твой Semet, ой, Xcbe
        </p>

        <span className={styles.heart} aria-hidden="true">
          ♥
        </span>
      </article>
    </div>
  );
}

export default BirthdayGreeting;
