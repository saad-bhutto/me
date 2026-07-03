import type { NextConfig } from "next";

// Empty for Cloudflare (served at root); set to "/saadbhutto.com" for the
// GitHub Pages project site build (see .github/workflows/pages.yml).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
