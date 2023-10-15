const withPWA = require('next-pwa')({
  dest: 'public',
})

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: false, // trueにするとuseEffectが2回呼び出される
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    })
    return config
  },
  images: {
    domains: ['127.0.0.1', 'localhost', '0.0.0.0'],
  },
})

