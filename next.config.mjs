/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/urbanmaster',
    assetPrefix: '/urbanmaster/',
    output: 'export',
    publicRuntimeConfig: {
        basePath: '/urbanmaster'
    },
    images: {
        unoptimized: true,
    },
};
 
export default nextConfig;
