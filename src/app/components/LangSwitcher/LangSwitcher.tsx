'use client';

import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import styles from './LangSwitcher.module.css';

export default function LangSwitcher({ caption }: { caption: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <label>
      <span className={styles.label}>{caption}</span>
      <select
        className={styles.select}
        value={locale}
        onChange={handleChange}
      >
        <option value="en">English</option>
        <option value="uk">Українська</option>
      </select>
    </label>
  );
}
