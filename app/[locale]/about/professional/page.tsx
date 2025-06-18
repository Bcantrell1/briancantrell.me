import FeaturedProjects from '@/components/professional/FeaturedProjects';
import HeroSection from '@/components/professional/HeroSection';
import SkillsGrid from '@/components/professional/SkillsGrid';
import ValuesSection from '@/components/professional/ValuesSection';
import { getTranslations } from 'next-intl/server';
import styles from './professional.module.scss';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'AboutPage' });
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://briancantrell.me';

    return {
        title: t('title'),
				description: t('description'),
				alternates: {
					canonical: `${baseUrl}/${locale}/about/professional`,
					languages: {
						'en': `${baseUrl}/en/about/professional`,
						'es': `${baseUrl}/es/about/professional`,
					},
				},
    };
}

export default function ProfessionalPage() {
	return (
			<div className={styles.professionalPage}>
					<HeroSection />
					<SkillsGrid />
					<ValuesSection />
					<FeaturedProjects />
			</div>
	);
}
