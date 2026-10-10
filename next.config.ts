import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Personal photos: ask search engines not to index the image files.
        source: "/interests/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, noimageindex" }],
      },
    ];
  },
};

export default nextConfig;
