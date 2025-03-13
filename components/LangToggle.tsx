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

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'es' : 'en';

        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    const languages = [
        { code: 'en', name: 'English', flag: 'us' },
        { code: 'es', name: 'Spanish', flag: 'es' },
    ];

    const getRegionCode = (iso: string) => {
        const parts = iso.split('-')
        return parts.length > 1 ? parts[1] : parts[0] // Fallback to the full code if no region is found
    }

    const getFlagEmoji = (countryCode: string) => {
        if (!countryCode) return '' // Return empty string if no country code is found
        // Convert country code to regional indicator symbols
        return String.fromCodePoint(...[...countryCode.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65))
    }

    return (
        <div className={styles.language_switcher}>
            <select
                className={styles.langToggle}
                onChange={toggleLocale}
                disabled={isPending}
                value={locale}
                aria-label={`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`}
            >
                {languages.map((language) => {
                    // Find the current language to get its flag code
                    const flag = language.flag || language.code
                    return (
                        <option key={language.code} value={language.code}>
                            {getFlagEmoji(flag)} {language.name}
                        </option>
                    )
                })}
            </select>
        </div>
    );
}