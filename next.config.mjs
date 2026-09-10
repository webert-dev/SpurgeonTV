/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    outputFileTracingIncludes: {
      '/**/*': ['./content/data/**/*']
    }
  }
};

export default nextConfig;
