import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["mighty.tools"], // Add the domain here
  },
  typescript: {
    ignoreBuildErrors: true, // Disable type checking during build
  },

  eslint: {
    ignoreDuringBuilds: true, // Disable linting during build
  },
};

export default nextConfig;
