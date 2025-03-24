import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function AboutPage() {
    const locale = useLocale();
    redirect(`/${locale}/about/personal/bio`);
}
