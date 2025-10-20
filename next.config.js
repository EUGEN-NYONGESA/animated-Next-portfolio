/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable React error overlay in development
  experimental: {
    reactRefresh: false,
  },
  
  // Configure webpack to ignore specific warnings/errors
  webpack: (config, { dev, isServer }) => {
    // Ignore specific warnings in development
    if (dev) {
      config.ignoreWarnings = [
        { module: /node_modules/ },
        { message: /Critical dependency/ },
        { message: /All keyframes must be of the same type/ },
        { message: /Encountered two children with the same key/ },
        { message: /AnimatePresence/ },
      ];
    }

    return config;
  },
}

module.exports = nextConfig