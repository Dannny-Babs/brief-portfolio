import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "192.168.0.107",
    "100.67.248.32",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vbportfolio.nyc3.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
