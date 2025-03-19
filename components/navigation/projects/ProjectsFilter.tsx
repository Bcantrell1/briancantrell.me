import React, { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import styles from './ProjectsFilter.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface FilteredProjectsProps {
  activeItems: string[];
}

interface Project {
  title: string;
  url: string;
  img: string;
  imgAlt: string;
  desc: string;
  tags: string[];
}

const FilteredProjects: React.FC<FilteredProjectsProps> = ({ activeItems }) => {
  const t = useTranslations('ProjectsPage');
  const projects: Project[] = t.raw('projects') as Project[];

  const filteredProjects = useMemo(() => {
    if (activeItems.length === 0) return projects;
    return projects.filter(project => 
      project.tags.some(tag => activeItems.includes(tag))
    );
  }, [projects, activeItems]);

  return (
    <div>
      {filteredProjects.length === 0 ? (
        <div className={styles.emptyMessage}>
          <p>No projects found</p>
        </div>
      ) : (
        <div className={styles.filteredProjects}>
            {filteredProjects.map((project: Project) => (
            <div key={project.title} className={styles.projectCard}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <div className={styles.cardContent}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {
                        project.img && (
                          <div className={styles.imageContainer}>
                            <Image 
                              src={project.img} 
                              alt={project.title} 
                              fill 
                              style={{ objectFit: 'cover', objectPosition: 'top' }}
                            />
                          </div>
                        )
                    }
                </a>
                <p>{project.desc}</p>
                <Link target="_blank" rel="noopener noreferrer" href={project.url}>
                    <button className={`${styles.projectLink} ${styles.buttonStyle} ${styles.default}`}>
                        view-project
                    </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredProjects;