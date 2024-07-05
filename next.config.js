const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // Add any MDX-specific options here
  },
})


module.exports = withMDX({
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Match any /api/* request
        destination: 'https://api.paystack.co'
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ],
  },
  experimental: {
    forceSwcTransforms: true,
    taint: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});


