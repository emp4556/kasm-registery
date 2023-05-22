/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'My Registery',
    description: 'Store for Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://emp4556.github.io/kasm-registery/',
    contactUrl: 'https://github.com/emp4556/kasm-registery/issues',
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
