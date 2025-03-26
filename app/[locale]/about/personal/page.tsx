import { useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'AboutPage' });
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://briancantrell.me';


    return {
        title: t('title'),
				description: t('description'),
				alternates: {
					canonical: `${baseUrl}/${locale}/about/personal`,
					languages: {
						'en': `${baseUrl}/en/about/personal`,
						'es': `${baseUrl}/es/about/personal`,
					},
				}
			}
}


export default function PersonalPage() {
    const locale = useLocale();
    redirect(`/${locale}/about/personal/bio`);
}
