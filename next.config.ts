import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vbportfolio.nyc3.cdn.digitaloceanspaces.com',
      },
    ],
  },
};

export default nextConfig;
