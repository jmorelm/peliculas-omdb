import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: [
      'm.media-amazon.com',
      'ia.media-imdb.com'
    ],
  },
  turbopack: {
    resolveAlias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};

export default nextConfig;