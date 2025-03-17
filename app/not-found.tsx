import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';

// This is a global not-found page that handles 404s for paths
// that don't match the [locale] pattern
export default function GlobalNotFound() {
  // Redirect to the default (en) locale's not-found page
  redirect(`/${routing.defaultLocale}/not-found`);
} 