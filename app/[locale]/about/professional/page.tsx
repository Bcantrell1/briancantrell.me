import { useTranslations } from 'next-intl';
import styles from './professional.module.scss';

export default function ProfessionalPage() {
	const t = useTranslations('AboutPage.professional');

	return (
		<div className={styles.professionalInfo}>
			<h1>Still working on the professional page 😅</h1>
		</div>
	);
}