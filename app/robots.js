// The base URL of the site. Can be updated via env var in production.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
