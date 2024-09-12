/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // swcMinify: true,
    images: {
        domains:['127.0.0.1','localhost','185.220.62.185'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '5000',
                pathname: '/assets',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
                pathname: '/assets',
            },
            {
                protocol: 'http',
                hostname: '185.220.62.185',
                port: '5000',
                pathname: '/assets',
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
