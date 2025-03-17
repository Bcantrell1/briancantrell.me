import { getTranslations } from 'next-intl/server';
import AboutLayout from './about-layout';

export async function generateMetadata({ params }: { params: { locale: string } }) {
	const resolvedParams = await params;
	const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'AboutPage' });

	return {
		title: t('title'),
		description: t('description'),
	};
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return <AboutLayout>{children}</AboutLayout>;
}