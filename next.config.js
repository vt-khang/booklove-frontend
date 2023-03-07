/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    domains: ['drive.google.com', 'cdn0.fahasa.com'],
  },
  env: {
    LOCAL_API: process.env.LOCAL_API,
  },
};

module.exports = nextConfig;

