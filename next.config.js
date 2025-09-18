/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn11.bigcommerce.com'],
  },
}

module.exports = nextConfig