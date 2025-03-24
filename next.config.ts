import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: ['./scss'],
    },
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/en/about',
                destination: '/en/about/personal/bio',
                permanent: true,
            },
            {
                source: '/es/about',
                destination: '/es/about/personal/bio',
                permanent: true,
            },
        ];
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
