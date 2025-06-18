'use client';

import { useTranslations } from 'next-intl';
import styles from './ValuesSection.module.scss';

interface Value {
    title: string;
    description: string;
    icon: string;
}

export default function ValuesSection() {
    const t = useTranslations('ProfessionalPage.valuesSection');
    
    return (
        <section className={styles.valuesSection}>
            <h2 className={styles.sectionTitle}>{t('title')}</h2>
            <p className={styles.sectionSubtitle}>
                {t('subtitle')}
            </p>
            
            <div className={styles.valuesGrid}>
                {t.raw('values').map((value: Value) => (
                    <div key={value.title} className={styles.valueCard}>
                        <div className={styles.valueIcon}>{value.icon}</div>
                        <h3 className={styles.valueTitle}>{value.title}</h3>
                        <p className={styles.valueDescription}>{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
} 