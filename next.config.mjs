/** @type {import('next').NextConfig} */
<<<<<<< HEAD
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
=======
const nextConfig = {};
>>>>>>> b361d4b (I worked on the Property Listing Card)

export default nextConfig;
