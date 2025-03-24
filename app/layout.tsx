'use client';
import { ToastContainer } from 'react-fox-toast';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ToastContainer />
            {children}
        </>
    );
}
