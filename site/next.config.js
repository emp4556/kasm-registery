/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'My Registry',
    description: 'Store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://emp4556.github.io/kasm-registry/',
    contactUrl: 'https://github.com/emp4556/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
