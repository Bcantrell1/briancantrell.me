import { NextIntlClientProvider, Locale, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import '../../scss/main.scss';
import '../../scss/index.scss';

export default async function LocaleLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body>
				<div id="__next">
					<NextIntlClientProvider>
						<Header name="Brian Cantrell" />
						{children}
						<Footer />
					</NextIntlClientProvider>
				</div>
			</body>
		</html>
	);
}