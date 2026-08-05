/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve static assets (including public/search-index.json) with
  // Gzip / Brotli compression. Reduces the 678 KB search index to
  // ~60–90 KB on the wire — an ~85% reduction for text-heavy JSON.
  output: 'export',
  trailingSlash: true,
  compress: true,
};

export default nextConfig;
