const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/blog_preview_card/' : '',
  basePath: isProd ? '/blog_preview_card' : '',
  output: 'export',
};

export default nextConfig;
