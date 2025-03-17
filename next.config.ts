import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: ['./scss'],
    },
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com',
            }
        ]
    }   
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);