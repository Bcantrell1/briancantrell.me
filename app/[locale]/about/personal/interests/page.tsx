'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './interests.module.scss';

export default function InterestsPage() {
	const t = useTranslations('AboutPage.personal.interests');

	const interestKeys = [
		'golf',
		'lakeLife',
		'motorsports', 
		'traveling',
		'winterSports',
		'spaceExploration'
	];

	return (
		<div className={styles.interestsContainer}>
			<div className={styles.interestsContent}>
				<h1>{t('title')}</h1>
				<p className={styles.mainDescription}>{t('description')}</p>

				<div className={styles.interestsList}>
					{interestKeys.map((key, index) => (
						<InterestSection 
							key={key} 
							interestKey={key} 
							isEven={index % 2 === 0}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function InterestSection({ interestKey, isEven }: { interestKey: string; isEven: boolean }) {
	const t = useTranslations(`AboutPage.personal.interests.${interestKey}`);
	
	return (
		<section className={`${styles.interestSection} ${isEven ? styles.evenSection : styles.oddSection}`}>
			<div className={styles.interestContent}>
				<h2>{t('title')}</h2>
				<p>{t('description')}</p>
			</div>
			<div className={styles.imageContainer}>
				<Image 
					src={t('image')}
					alt={t('title')}
					width={500}
					height={300}
					className={styles.interestImage}
					loading="lazy"
					style={{ objectFit: 'contain' }}
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</div>
		</section>
	);
}