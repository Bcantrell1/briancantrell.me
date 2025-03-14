import { notFound } from 'next/navigation';

// This will catch all non-existent routes within a locale namespace
// and trigger the not-found.tsx file in the same directory
export default function CatchAllNotFound() {
  notFound();
} 