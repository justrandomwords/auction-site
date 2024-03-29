/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.dog.ceo',
              port: '',
              pathname: '/breeds/**',
            },
            {
              protocol: 'https',
              hostname: 'files.edgestore.dev',
              port: '',
              pathname: '/**',
            }
          ],
    },
};

export default nextConfig;
