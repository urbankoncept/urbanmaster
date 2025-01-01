/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/urbanmaster',
    assetPrefix: '/urbanmaster/',
    output: 'export',
    publicRuntimeConfig: {
        basePath: '/urbanmaster'
    }
};
 
export default nextConfig;
