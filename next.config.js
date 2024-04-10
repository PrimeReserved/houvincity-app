<<<<<<< HEAD
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
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});


=======
module.exports = {
    images: {
        domains: [
            'i.insider.com',
            'www.marketscreener.com',
            't3n.de', 'c.biztoc.com',
            'www.investors.com', 'bitcoinmagazine.com',
            "www.webpronews.com", 
            "ml.globenewswire.com",
            "www.macobserver.com",
            "www.wall-street.ro",
            "i.computer-bild.de",
            "tm.ibxk.com.br",
            "img.etimg.com",
            "www.dutchcowboys.nl",
            "www.hwupgrade.it",
            "www.hwupgrade.it",
            "c.ndtvimg.com",
            
        ]
    }
}
>>>>>>> b361d4b (I worked on the Property Listing Card)
