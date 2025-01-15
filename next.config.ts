import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  gnoreDuringBuilds: false,
  ignoreBuildErrors: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  api: {
    bodyParser: true,
  },  
};

export default nextConfig;
