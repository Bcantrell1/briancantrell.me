import styles from './ValuesSection.module.scss';

interface Value {
    title: string;
    description: string;
    icon: string;
}

export default function ValuesSection() {
    const values: Value[] = [
        {
            title: 'Problem Solving',
            description: 'I approach every challenge with analytical thinking and creative solutions.',
            icon: '🧩'
        },
        {
            title: 'Clean Code',
            description: 'Writing maintainable, readable, and well-documented code is my standard.',
            icon: '✨'
        },
        {
            title: 'Continuous Learning',
            description: 'Doing my best to stay current with the latest technologies and best practices.',
            icon: '📚'
        },
        {
            title: 'User-Focused',
            description: 'Building solutions that provide real world value and excellent UI/UX.',
            icon: '🎯'
        },
        {
            title: 'Collaboration',
            description: 'Thriving in team environments and sharing my knowledge with others.',
            icon: '🤝'
        },
        {
            title: 'Performance',
            description: 'Optimizing for speed, efficiency, and scalability in everything I build.',
            icon: '⚡'
        }
    ];
    
    return (
        <section className={styles.valuesSection}>
            <h2 className={styles.sectionTitle}>My Values & Approach</h2>
            <p className={styles.sectionSubtitle}>
                The principles that guide my work and development philosophy
            </p>
            
            <div className={styles.valuesGrid}>
                {values.map((value) => (
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