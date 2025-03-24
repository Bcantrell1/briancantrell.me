'use server';

import { db } from '@/lib/db';
import { receivedEmails } from '@/lib/schema';
import { headers } from 'next/headers';

export async function submitForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Validation (mirrors the original API)
    if (!name || !email || !message) {
        return { success: false, error: 'All fields are required.' };
    }

    if (!/^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(email)) {
        return { success: false, error: 'Invalid email format.' };
    }

    if (message.length > 5000) {
        return { success: false, error: 'Message is too long.' };
    }

    // Get client IP from headers if available
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for')?.split(',')[0] || 'unknown';

    try {
        // Insert into Turso database using Drizzle ORM
        await db.insert(receivedEmails).values({
            name,
            email,
            message,
            ip,
        });

        // Optionally, add email sending logic here (commented out as in original)
        // Example: await sendEmail({ to: "contact@example.com", ... });

        return { success: true, message: 'Email saved successfully.' };
    } catch (error) {
        console.error('Error inserting into database:', error);
        return { success: false, error: 'Internal server error.' };
    }
}
