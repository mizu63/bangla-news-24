import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
      },
      {
        protocol: "https",
       hostname: "i.pravatar.cc"
      },
       {
        protocol: "https",
        hostname: "ichef.bbci.co.uk"
      },
       {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
        {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;