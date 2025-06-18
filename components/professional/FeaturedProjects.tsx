import styles from './FeaturedProjects.module.scss';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    url: string;
}

export default function FeaturedProjects() {
    const featuredProjects: Project[] = [
        {
            title: 'Pro Motocross API',
            description: 'A comprehensive API supporting Event and Rider information for the Pro Motocross season, serving as a source of truth for attendees per event.',
            technologies: ['Go', 'HTML'],
            image: 'https://res.cloudinary.com/da5dchwkj/image/upload/v1745609232/pro-motocross-api_oyhwsl.png',
            url: 'https://pro-motocross-api.briancantrell.me/swagger/'
        },
        {
            title: 'Cosmic Hall',
            description: 'Virtual classroom intended to teach the basics of the cosmos, covering topics related to common misunderstandings and industry fundamentals.',
            technologies: ['React', 'TypeScript', 'HTML', 'CSS'],
            image: 'https://res.cloudinary.com/da5dchwkj/image/upload/v1741905223/cosmic_thumb_fazf2o.png',
            url: 'https://www.cosmic-hall.com/'
        },
        {
            title: 'SGM Scapes',
            description: 'A website for a local landscaping company featuring standard pages, custom project estimation wizard, news area, and interactive carousel.',
            technologies: ['React', 'HTML', 'CSS'],
            image: 'https://res.cloudinary.com/da5dchwkj/image/upload/v1741905970/sgm_kammbf.png',
            url: 'https://www.sgmscapes.com/'
        }
    ];
    
    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
                A selection of my most impactful and innovative work
            </p>
            
            <div className={styles.projectsGrid}>
                {featuredProjects.map((project) => (
                    <div key={project.title} className={styles.projectCard}>
                        <div className={styles.projectImage}>
                            <img src={project.image} alt={project.title} />
                            <div className={styles.projectOverlay}>
                                <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.projectLink}
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <div className={styles.projectTechnologies}>
                                {project.technologies.map((tech) => (
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