/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i2.wp.com',
      'images.pexels.com',
      '3c1703fe8d.site.internapcdn.net',
      'www.solarsystemscope.com',
      'nasa3d.arc.nasa.gov',
      'img00.deviantart.net',
      's3-us-west-2.amazonaws.com',
      'www.jpl.nasa.gov',
      'hanaleikauaivacation.com',
      'ak0.picdn.net',
      'www.cosmosup.com',
      'encrypted-tbn0.gstatic.com',
      'pre00.deviantart.net',
      '1.bp.blogspot.com',
      'vignette.wikia.nocookie.net',
      'img2.cgtrader.com',
      'stevealbers.net',
      'i.imgur.com',
      'img.purch.com',
      'celestia.simulatorlabbs.com',
      'celestia.freedoors.org',
      '2.bp.blogspot.com',
      '4.bp.blogspot.com'
    ],
  },
  sassOptions: {
    includePaths: ['./src'],
  },
};

module.exports = nextConfig;