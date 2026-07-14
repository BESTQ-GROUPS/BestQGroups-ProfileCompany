import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

if (process.env.NODE_ENV === 'development') {
  setupDevPlatform({ persist: true });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Cloudflare Edge Runtime requires Node built-ins to be prefixed with 'node:'
    // Next.js sometimes imports 'async_hooks' without the prefix.
    config.resolve.alias = {
      ...config.resolve.alias,
      'async_hooks': 'node:async_hooks',
    };
    return config;
  },
};

export default nextConfig;
