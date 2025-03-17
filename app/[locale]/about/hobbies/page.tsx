import { useTranslations } from 'next-intl';
import styles from './hobbies.module.scss';

export default function HobbiesPage() {
	const t = useTranslations('AboutPage.hobbies');

	return (
		<div className={styles.hobbiesInfo}>
			<h1>Still working on the hobbies page 😅</h1>
		</div>
	);
}