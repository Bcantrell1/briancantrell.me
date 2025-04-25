import { useTranslations } from 'next-intl';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import styles from './ProjectsFilter.module.scss';

interface FilteredProjectsProps {
    activeItems: string[];
}

interface Project {
    title: string;
    url: string;
		repo?: string;
    img: string;
    imgAlt: string;
    desc: string;
    tags: string[];
		imgPos?: string;
}
interface LoadingImageProps extends Omit<ImageProps, 'style'> {
    src: string;
    alt: string;
    style?: React.CSSProperties;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ src, alt, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={styles.imageContainer}>
            {!isLoaded && <div className={styles.spinner}></div>}
            <Image
                src={src}
                alt={alt}
                fill
                onLoad={() => setIsLoaded(true)}
                style={{
                    ...props.style,
                    display: isLoaded ? 'block' : 'none',
                }}
                {...props}
            />
        </div>
    );
};

const FilteredProjects: React.FC<FilteredProjectsProps> = ({ activeItems }) => {
    const t = useTranslations('ProjectsPage');
    const projects: Project[] = t.raw('projects') as Project[];

    const filteredProjects = useMemo(() => {
        if (activeItems.length === 0) return projects;
        return projects.filter(project =>
            project.tags.some(tag => activeItems.includes(tag)),
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
										<p className={styles.projectSub}>Here, I showcases some of my personal projects. I`ve contributed to hundreds of varying projects and features I would love to discuss with you.</p>
                    {filteredProjects.map((project: Project) => (
                        <div key={project.title} className={styles.projectCard}>
                            <h3 className={styles.cardTitle}>
                                {project.title}
                            </h3>
                            <div className={styles.cardContent}>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.img && (
                                        <LoadingImage
                                            src={project.img}
                                            alt={project.title}
                                            style={{
																								objectFit: 'cover',
                                                objectPosition: project.imgPos ? project.imgPos : 'top',
                                            }}
                                        />
                                    )}
                                </a>
                                <p>{project.desc}</p>
																<div className={styles.projectLinks}>
																	<Link
																			target="_blank"
																			rel="noopener noreferrer"
																			href={project.url}
																	>
																			<button
																					className={`${styles.projectLink} ${styles.buttonStyle} ${styles.default}`}
																			>
																					view-project
																			</button>
																	</Link>
																	{
																		project.repo ? (
																		<Link
																				target="_blank"
																				rel="noopener noreferrer"
																				href={project.repo}
																		>
																				<button
																						className={`${styles.projectLink} ${styles.buttonStyle} ${styles.default}`}
																				>
																						view-repo
																				</button>
																		</Link>
																		) : null
																	}
																</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilteredProjects;
