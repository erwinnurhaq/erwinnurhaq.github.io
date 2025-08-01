import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
