import { useTranslations } from 'next-intl';
import styles from './hobbies.module.scss';

export default function HobbiesPage() {
	const t = useTranslations('AboutPage.hobbies');

	return (
		<div className={styles.hobbiesInfo}>
			<h1>hobbies page is under construction</h1>
		</div>
	);
}