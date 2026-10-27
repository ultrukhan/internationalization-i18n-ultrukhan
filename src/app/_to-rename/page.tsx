// your code here: make updates to apply translations
import styles from "./page.module.css";

export default function HomePage() {

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>to translate: title</h1>
      <p className={styles.subtitle}>to translate: subtitle</p>
      <div className={styles.contentSection}>
        <h2>to translate: welcomeHeader</h2>
        <p>to translate: welcomeText</p>
      </div>
    </div>
  );
}
