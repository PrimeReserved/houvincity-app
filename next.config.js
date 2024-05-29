const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // Add any MDX-specific options here
  },
})


module.exports = withMDX({
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


