import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function PersonalPage() {
	const locale = useLocale();
	redirect(`/${locale}/about/personal/bio`);
}