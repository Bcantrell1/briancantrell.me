'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { useRouter, usePathname } from '../i18n/navigation';
import styles from './LangToggle.module.scss';

export default function LangToggle() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const toggleLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    const languages = [
        { code: 'en', name: 'English', flag: 'us' },
        { code: 'es', name: 'Español', flag: 'es' },
    ];

    const getFlag = (countryCode: string) => {
        if (!countryCode) return '';
        return String.fromCodePoint(
            ...[...countryCode.toUpperCase()].map(
                c => 0x1f1e6 + c.charCodeAt(0) - 65,
            ),
        );
    };

    return (
        <div className={styles.language_switcher}>
            <select
                className={styles.langToggle}
                onChange={toggleLocale}
                disabled={isPending}
                value={locale}
                aria-label={`Switch to ${locale === 'en' ? 'Español' : 'English'}`}
            >
                {languages.map(language => {
                    // Find the current language to get its flag code
                    const flag = language.flag || language.code;
                    return (
                        <option key={language.code} value={language.code}>
                            {getFlag(flag)} {language.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
