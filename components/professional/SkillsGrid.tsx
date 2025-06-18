'use client';

import { useTranslations } from 'next-intl';
import CSSIcon from '../svg/CSSIcon';
import GoIcon from '../svg/GoIcon';
import HTMLIcon from '../svg/HTMLIcon';
import PHPIcon from '../svg/PHPIcon';
import ReactIcon from '../svg/ReactIcon';
import TSIcon from '../svg/TSIcon';
import styles from './SkillsGrid.module.scss';

const iconMap: { [key: string]: React.ComponentType } = {
    React: ReactIcon,
    TypeScript: TSIcon,
    HTML: HTMLIcon,
    CSS: CSSIcon,
    Go: GoIcon,
    PHP: PHPIcon,
};

export default function SkillsGrid() {
    const t = useTranslations('ProfessionalPage.skillsGrid');
    
    const categories = ['frontend', 'backend', 'databases', 'tools'];
    
    return (
        <section className={styles.skillsSection}>
            <h2 className={styles.sectionTitle}>{t('title')}</h2>
            <p className={styles.sectionSubtitle}>
                {t('subtitle')}
            </p>
            
            <div className={styles.skillsGrid}>
                {categories.map((categoryKey) => {
                    const category = t.raw(`categories.${categoryKey}`);
                    return (
                        <div key={categoryKey} className={styles.category}>
                            <h3 className={styles.categoryTitle}>{category.name}</h3>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill: any) => {
                                    const IconComponent = iconMap[skill.name];
                                    return (
                                        <div key={skill.name} className={styles.skillItem}>
                                            <div className={styles.skillHeader}>
                                                {IconComponent && <IconComponent />}
                                                <span className={styles.skillName}>{skill.name}</span>
                                                <span className={styles.skillLevel}>{skill.level}%</span>
                                            </div>
                                            <div className={styles.progressBar}>
                                                <div 
                                                    className={styles.progressFill}
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
} 