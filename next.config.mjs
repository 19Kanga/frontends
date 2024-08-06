/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.orangecube.art',
                port: '',
                pathname: '/orange-cube-main.png',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
