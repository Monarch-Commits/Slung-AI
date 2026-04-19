import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
   
    qualities: [75, 100],

    remotePatterns: [
      {
        protocol: 'https',
        hostname:  "i.pravatar.cc",
      },
      {
        protocol: 'https',
        hostname: '#',
      },
      {
        protocol: 'https',
        hostname: '#',
      },
      {
        protocol: 'https',
        hostname: '#',
      },
      {
        protocol: 'https',
        hostname: '#',
      },
    ],
  },
};


export default nextConfig;
