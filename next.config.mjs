const isProd = process.env.NODE_ENV === 'production';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGitHubActions ? 'export' : undefined,
  basePath: isGitHubActions ? '/meanwhile-live' : '',
  assetPrefix: isGitHubActions ? '/meanwhile-live/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  transpilePackages: ['three', 'globe.gl'],
};

export default nextConfig;