import CSSIcon from '../svg/CSSIcon';
import GoIcon from '../svg/GoIcon';
import HTMLIcon from '../svg/HTMLIcon';
import PHPIcon from '../svg/PHPIcon';
import ReactIcon from '../svg/ReactIcon';
import TSIcon from '../svg/TSIcon';
import styles from './SkillsGrid.module.scss';

interface SkillCategory {
    name: string;
    skills: Array<{
        name: string;
        icon?: React.ComponentType;
        level: number;
    }>;
}

export default function SkillsGrid() {
    const skillCategories: SkillCategory[] = [
        {
            name: 'Frontend',
            skills: [
                { name: 'React', icon: ReactIcon, level: 90 },
                { name: 'TypeScript', icon: TSIcon, level: 85 },
                { name: 'HTML', icon: HTMLIcon, level: 95 },
                { name: 'CSS', icon: CSSIcon, level: 90 }
            ]
        },
        {
            name: 'Backend',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'Go', icon: GoIcon, level: 70 },
                { name: 'PHP', icon: PHPIcon, level: 75 },
            ]
        },
        {
            name: 'Databases',
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'MongoDB', level: 75 },
                { name: 'Turso', level: 70 }
            ]
        },
        {
            name: 'Tools & Platforms',
            skills: [
                { name: 'AWS', level: 80 },
                { name: 'Docker', level: 75 },
                { name: 'Git', level: 90 },
                { name: 'Neovim', level: 85 }
            ]
        }
    ];
    
    return (
        <section className={styles.skillsSection}>
            <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
            <p className={styles.sectionSubtitle}>
                A comprehensive overview of my technical expertise and an idea of my proficiency levels
            </p>
            
            <div className={styles.skillsGrid}>
                {skillCategories.map((category) => (
                    <div key={category.name} className={styles.category}>
                        <h3 className={styles.categoryTitle}>{category.name}</h3>
                        <div className={styles.skillsList}>
                            {category.skills.map((skill) => (
                                <div key={skill.name} className={styles.skillItem}>
                                    <div className={styles.skillHeader}>
                                        {skill.icon && <skill.icon />}
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
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 