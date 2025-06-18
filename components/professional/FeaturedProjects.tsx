'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './FeaturedProjects.module.scss';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    url: string;
}

export default function FeaturedProjects() {
    const t = useTranslations('ProfessionalPage.featuredProjects');
    
    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>{t('title')}</h2>
            <p className={styles.sectionSubtitle}>
                {t('subtitle')}
            </p>
            
            <div className={styles.projectsGrid}>
                {t.raw('projects').map((project: Project, index: number) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.projectImage}>
                            <Image 
														src={project.image} 
														alt={project.title} 
														fill
													/>
                            <div className={styles.projectOverlay}>
                                <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.projectLink}
                                >
                                    {t('viewProject')}
                                </a>
                            </div>
                        </div>
                        
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <div className={styles.projectTechnologies}>
                                {project.technologies.map((tech: string) => (
                                    <span key={tech} className={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 