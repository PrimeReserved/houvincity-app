/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io"
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            }
        ],
    },
    experimental: {
        taint: true,
    }
};

export default nextConfig;
