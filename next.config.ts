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

// Local `next dev` only — do not run during CF / OpenNext builds (SQLITE_BUSY).
if (process.env.NODE_ENV === "development") {
  void import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  });
}
