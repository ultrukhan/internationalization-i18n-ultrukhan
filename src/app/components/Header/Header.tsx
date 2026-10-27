import LangSwitcher from '../LangSwitcher';
import styles from './Header.module.css';

// Use the locale-aware Link from next-intl navigation (routing.ts), not next/link.

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          to translate: home
        </Link>
        <Link href="/about" className={styles.link}>
          to translate: about
        </Link>
        <LangSwitcher caption={"to translate: changeLanguage"} />
      </nav>
    </header>
  );
}
