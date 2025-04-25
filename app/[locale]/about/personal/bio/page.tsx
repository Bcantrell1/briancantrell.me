'use client';

import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
        (diffInMs % (1000 * 60 * 60 * 24 * 365.25)) /
            (1000 * 60 * 60 * 24 * 30.44),
    );

    useEffect(() => {
        if (codeBlock.current) {
            hljs.highlightElement(codeBlock.current);
        }
    }, []);

    const subDescriptionKeys = Object.keys(
        messages.AboutPage.personal.bio.subDescription,
    );

    return (
        <div className={styles.bioContainer}>
            <h1>{t('title')}</h1>
            <div className={styles.splitInHalf}>
                <div ref={bioContainer} className={styles.personalBio}>
                    <p>{t('description')}</p>
                    <p>{t('subTitle', { diffInYears, diffInMonths })}</p>
                    <p className={styles.boldText}>{t('subTitle2')}</p>
										<ul>
                    {subDescriptionKeys.map(key => (
                        <li key={key}>{t(`subDescription.${key}`)}</li>
                    ))}
										</ul>
                    <p>{t('topProject')}</p>
                    <p>{t('moreProjects')}</p>
                    <p>{t('closing')}</p>
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
                        <code ref={codeBlock} className="javascript">
                            {`const usefullCode = (value: T): T => {
  console.log("Starting super useful code with:", value);
    
  const startTime = performance.now();
  
  for (let i = 0; i < 1000000; i++) {
    if (i % 100000 === 0) {
      console.log(\`\${i/10000}% complete...\`);
    }
  }
  
  const endTime = performance.now();
  console.log(\`My super useful function took \${(endTime - startTime).toFixed(2)}ms\`);
  console.log("I am as good as they say. 😉");
    
  return value;
};`}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}
