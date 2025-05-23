import GameContainer from '@/components/game/GameContainer';
import { Link } from '@/i18n/navigation';
import 'animate.css';
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

export default function HomePage() {
    const t = useTranslations('HomePage');
    
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: t('name'),
        jobTitle: t('role').replace('> ', ''),
        url: 'https://briancantrell.me',
        sameAs: [
            'https://github.com/bcantrell1',
            'https://gitlab.com/bcantrell',
        ],
    };
    
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className={styles.home}>
                <div className={styles.container}>
                    <section>
                        <div className={`${styles.info} animate__animated animate__fadeIn`}>
                            <span>{t('greeting')}</span>
                            <h1 className="animate__animated animate__fadeInUp">{t('name')}</h1>
                            <p className="animate__animated animate__fadeInUp animate__delay-1s">{t('role')}</p>
                        </div>
                        <div className={`${styles.task} animate__animated animate__fadeIn animate__delay-1s`}>
                            <p>{t('github')}</p>
                        </div>
                        <div className={`${styles.github_repo} animate__animated animate__fadeInLeft animate__delay-1s`}>
                            <p>{t('pageMobile')}</p>
                            <span>const</span> <span>githubLink</span> {` = `}
                            <Link
                                target="_blank"
                                aria-label="go to my github page"
                                href="https://github.com/bcantrell1"
                            >
                                {t('profile')}
                            </Link>
                        </div>
                        <div className={`${styles.task} animate__animated animate__fadeIn animate__delay-2s`}>
                            <p>{t('gitlab')}</p>
                        </div>
                        <div className={`${styles.github_repo} animate__animated animate__fadeInLeft animate__delay-2s`}>
                            <span>const</span> <span>gitLabLink</span> {` = `}
                            <Link
                                target="_blank"
                                aria-label="go to my gitlab page"
                                href="https://gitlab.com/bcantrell"
                            >
                                {t('profile1')}
                            </Link>
                        </div>
                    </section>
                    <aside className="animate__animated animate__fadeInRight">
                        <GameContainer />
                    </aside>
                </div>
            </div>
        </>
    );
}
