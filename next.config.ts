import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gp-amstelveen",
        destination: "/en/gp-amstelveen",
        permanent: true,
      },
      {
        source: "/favicon.ico",
        destination: "/favicon.png",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
