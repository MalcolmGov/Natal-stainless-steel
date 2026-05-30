import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectDir,
  },
  images: {
    qualities: [75, 90, 95, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
