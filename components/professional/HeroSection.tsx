import styles from './HeroSection.module.scss';

export default async function HeroSection() {
    
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
										Professional
                </h1>
                <p className={styles.heroSubtitle}>
									Statistics so far...
                </p>
                <div className={styles.heroStats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>5+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>200+</span>
                        <span className={styles.statLabel}>Projects Delivered</span>
                    </div>
										<div className={styles.stat}>
											<span className={styles.statNumber}>100+</span>
											<span className={styles.statLabel}>Clients Served</span>
										</div>
                    <div className={styles.stat}>
                        <span className={styles.statNumberInfinite}>&infin;</span>
                        <span className={styles.statLabel}>Technologies</span>
                    </div>
                </div>
            </div>
        </section>
    );
}