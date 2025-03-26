import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../../scss/index.scss';
import '../../scss/main.scss';
import './globals.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage' });
    
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://briancantrell.me';
    
    return {
        metadataBase: new URL(baseUrl),
        title: {
            template: '%s | Brian Cantrell',
            default: t('title'),
        },
        description: t('description'),
        keywords: ['Software Engineer', 'Full Stack Developer', 'Software Engineer Portfolio', 'Brian Cantrell Portfolio', 'Brian Cantrell Software Engineer'],
        authors: [{ name: 'Brian Cantrell', url: baseUrl }],
        creator: 'Brian Cantrell',
        publisher: 'Brian Cantrell',
        formatDetection: {
            email: false,
            telephone: false,
            address: false,
        },
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                'en': `${baseUrl}/en`,
                'es': `${baseUrl}/es`,
            },
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-video-preview': -1,
                'max-snippet': -1,
            },
        },
    };
}

export default async function LocaleLayout({
    children,
    params,
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
                        <Navbar name="Brian Cantrell" />
                        {children}
                        <Footer />
                    </NextIntlClientProvider>
                </div>
            </body>
        </html>
    );
}
