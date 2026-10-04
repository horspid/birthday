import styles from "./BirthdayGreeting.module.css";
import qrCode from "@assets/qr.png";

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
          заканчивается любимыми аукционами. Дальше по праймовому контенту ждём
          онлифанс в горячих боди!
        </p>

        <p className={styles.wish}>
          Надеюсь, что найдутся силы и возможности на посещение новых городов,
          стран, которые помогут найти тебе счастье! С днём рождения!!
        </p>
        <p className={styles.wish}>
          Вспоминай меня, как в клипе у немезиса в канале из спортзала, когда
          будешь использовать подарок.
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
          твой Semet15, ой, XCbe
        </p>
        <p></p>

        <div className={styles.bottomOrnament} aria-hidden="true">
          <span className={styles.heart} aria-hidden="true">
            ♥
          </span>
          <img src={qrCode} alt="Birthday Greeting" className={styles.qrCode} />
          <span className={styles.heart} aria-hidden="true">
            ♥
          </span>
        </div>
      </article>
    </div>
  );
}

export default BirthdayGreeting;
