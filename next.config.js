/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['links.papareact.com', 'images.wallpapersden.com'],
    },
};

module.exports = nextConfig;
