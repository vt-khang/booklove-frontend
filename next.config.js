/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    domains: ['drive.google.com', 'cdn0.fahasa.com', 'manybooks.net'],
  },
  env: {
    LOCAL_API: process.env.LOCAL_API,
    HOST_API: process.env.HOST_API,
  },
};

module.exports = nextConfig;

