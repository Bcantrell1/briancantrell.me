'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import styles from './personal.module.scss';
import { parseBioText } from '@/lib/helpers';

export default function PersonalPage() {
	const t = useTranslations('AboutPage.personal');
	const codeBlock = useRef<HTMLElement>(null);
	const bioContainer = useRef<HTMLDivElement>(null);

	// Calculate duration since start date
	const startDate = new Date('2018-08-16');
	const currentDate = new Date();
	const diffInMs = currentDate.getTime() - startDate.getTime();
	const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));
	const diffInMonths = Math.floor(
		(diffInMs % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44),
	);

	const bio = `
I have been programming for ${diffInYears} years and ${diffInMonths} months 4 of which were spent at Grand Canyon University.

Since then, I've gained solid expertise in:
✅ **Web Development**: Mastered HTML5, CSS3, and JavaScript to build dynamic, responsive websites. I then expanded into **React.js **, to create sophisticated front-end applications.
`;

	const formattedBio = useMemo(() => parseBioText(bio), [bio]);

	// Drag handling state and functions
	const [isDragging, setIsDragging] = useState(false);
	const [startY, setStartY] = useState(0);
	const [scrollTop, setScrollTop] = useState(0);

	const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
		if (window.innerWidth < 768) return;
		setIsDragging(true);
		bioContainer.current?.classList.add(styles.grabbing);
		setStartY(event.pageY);
		setScrollTop(bioContainer.current?.scrollTop || 0);
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (window.innerWidth < 768 || !isDragging || !bioContainer.current) return;
		const y = event.pageY;
		bioContainer.current.scrollTop = scrollTop - (y - startY);
	};

	const handleMouseUp = () => {
		if (window.innerWidth < 768) return;
		setIsDragging(false);
		bioContainer.current?.classList.remove(styles.grabbing);
	};

	useEffect(() => {
		if (codeBlock.current) {
			hljs.highlightElement(codeBlock.current);
		}

		const handleGlobalMouseMove = (e: MouseEvent) => {
			if (isDragging) {
				handleMouseMove(e);
			}
		};

		const handleGlobalMouseUp = () => {
			if (isDragging) {
				handleMouseUp();
			}
		};

		window.addEventListener('mousemove', handleGlobalMouseMove);
		window.addEventListener('mouseup', handleGlobalMouseUp);

		return () => {
			window.removeEventListener('mousemove', handleGlobalMouseMove);
			window.removeEventListener('mouseup', handleGlobalMouseUp);
		};
	}, [isDragging]);

	return (
		<div className={styles.splitInHalf}>
			<div
				ref={bioContainer}
				className={styles.personalBio}
				onMouseDown={handleMouseDown}
			>
				{formattedBio.map((line, index) => (
					<p key={index}>
						{line.map((segment, i) => (
							<span
								key={i}
								className={segment.isBold ? styles.boldText : ''}
							>
								{segment.text}
							</span>
						))}
					</p>
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
						{`const golfShot = (planet: 'Earth' | 'Moon' | 'Mars') => {
  const gravity = { Earth: 9.8, Moon: 1.6, Mars: 3.7 }[planet];
  const distance = 100 / gravity * Math.random();
  
  const trouble = {
    Earth: 'lake',
    Moon: 'crater',
    Mars: 'canyon'
  };
  
  return distance > 10 
    ? \`Of course I cleared the \${trouble[planet]}!\` 
    : \`Welp! My ball is lost to \${planet}'s \${trouble[planet]}!\`;
};`}
					</code>
				</pre>
			</div>
		</div>
	);
}