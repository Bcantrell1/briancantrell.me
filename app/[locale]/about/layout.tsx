import AboutLayout from './about-layout';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AboutLayout>{children}</AboutLayout>;
}
