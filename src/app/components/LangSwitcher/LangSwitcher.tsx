'use client';

import styles from './LangSwitcher.module.css';

export default function LangSwitcher({ caption }: { caption: string }) {
  return (
    <label>
      <span className={styles.label}>{caption}</span>
      {/* bind the current locale and navigate on change */}
      <select
        className={styles.select}
        defaultValue="en"
      >
        <option value="en">English</option>
        <option value="uk">Українська</option>
      </select>
    </label>
  );
}
