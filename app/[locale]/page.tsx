import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './page.module.scss';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <section>
          <div className={styles.info}>
            <span>{t('greeting')}</span>
            <h1>{ t('name') }</h1>
            <p>{ t('role') }</p>
          </div>
          <div className={styles.task}>
            <p>{t('task')}</p>
            <p>{t('github')}</p>
          </div>
          <div className={styles.github_repo}>
            <p>{ t('pageMobile') }</p>
            <span>const</span> <span>githubLink</span> =
            <Link
              aria-label="go to my github page"
              href="https://github.com/bcantrell1"
            >
              { t('profile') }
            </Link>
          </div>
        </section>
        <aside>
          {/* <GameContainer /> */}
        </aside>
      </div>
    </div>
  );
}
