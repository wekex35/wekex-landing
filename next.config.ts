import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/clinic-leads",
        destination: "/clinic",
        permanent: true,
      },
      {
        source: "/uae-property-leads",
        destination: "/property",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
