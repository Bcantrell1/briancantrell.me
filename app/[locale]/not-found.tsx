'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { Link } from '@/i18n/navigation';
import styles from './notfound.module.scss';

export default function NotFound() {
    const pathname = usePathname();
    const t = useTranslations('NotFound');

    return (
        <div className={styles.notFound}>
            <h1 className={styles.text}>404</h1>
            <p>
                {t('pageNotFound')} <strong>{pathname}</strong>
            </p>
            <Link
                aria-label={t('backToMainArea')}
                href="/"
                className={styles.goBack}
            >
                <span>{t('backToMain')}</span>
            </Link>
        </div>
    );
}
