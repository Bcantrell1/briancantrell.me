'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useMessages } from 'next-intl';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import styles from './personal.module.scss';

export default function PersonalPage() {
	const t = useTranslations('AboutPage.personal.bio');
	const messages = useMessages();

	const codeBlock = useRef<HTMLElement>(null);
	const bioContainer = useRef<HTMLDivElement>(null);

	const startDate = new Date('2021-11-08');
	const currentDate = new Date();
	const diffInMs = currentDate.getTime() - startDate.getTime();
	const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));
	const diffInMonths = Math.floor(
		(diffInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44),
	);

	useEffect(() => {
		if (codeBlock.current) {
			hljs.highlightElement(codeBlock.current);
		}
	}, []);

	const subDescriptionKeys = Object.keys(messages.AboutPage.personal.bio.subDescription);

	return (
		<div className={styles.bioContainer}>
			<h1>{t('title')}</h1>
			<div className={styles.splitInHalf}>
				<div
					ref={bioContainer}
					className={styles.personalBio}
				>
					<p>{t('description', { diffInYears, diffInMonths })}</p>
					<p>{t('subTitle')}</p>
					{subDescriptionKeys.map((key) => (
						<p key={key}>{t(`subDescription.${key}`)}</p>
					))}
				</div>

				<div className={styles.codeSnippet}>
					<div className={styles.codeAuthor}>
						<Image
							src="/me.png"
							alt="personal-img"
							width={40}
							height={40}
							className={styles.miImagen}
						/>
						<div className={styles.authAside}>
							<p>@bcantrell1</p>
						</div>
					</div>
					<pre>
						<code
							ref={codeBlock}
							className="javascript"
						>
							{`const golfShot = (planet: Planet, toHole: Yards): string => {
  const gravity: number = getGravity(planet);
  const distance: number = toHole / gravity * Math.random();
  
  const trouble: Trouble = {
    Earth: 'lake',
    Moon: 'crater',
    Mars: 'canyon'
  };

  return distance >= toHole ?
    \`Shoot! We didnt clear the \${trouble[planet]}!\` 
    : \`Welp! My ball could be lost to \${planet}'s \${trouble[planet]}!\`;
};`}
						</code>
					</pre>
				</div>
			</div>
		</div>
	);
}