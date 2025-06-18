'use client';

import { useTranslations } from 'next-intl';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
    const t = useTranslations('ProfessionalPage.heroSection');
    
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    {t('title')}
                </h1>
                <p className={styles.heroSubtitle}>
                    {t('subtitle')}
                </p>
                <div className={styles.heroStats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>{t('stats.experience.number')}</span>
                        <span className={styles.statLabel}>{t('stats.experience.label')}</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>{t('stats.projects.number')}</span>
                        <span className={styles.statLabel}>{t('stats.projects.label')}</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>{t('stats.clients.number')}</span>
                        <span className={styles.statLabel}>{t('stats.clients.label')}</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumberInfinite}>{t('stats.technologies.number')}</span>
                        <span className={styles.statLabel}>{t('stats.technologies.label')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}