import { getVolumes, getSermonsInVolume } from '../lib/sermons';

export default async function sitemap() {
  // Use the canonical domain from env, fallback to vercel domain or localhost
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spurgeon.tv';
  const langs = ['en', 'pt', 'es'];
  
  // 1. Static Routes
  const staticRoutes = [
    '',
    '/about',
    '/about-us',
    '/about/biography',
    '/about/controversies',
    '/about/preacher',
    '/about/theology',
    '/bible',
    '/contact',
    '/cookie-policy',
    '/devotional',
    '/dictionary',
    '/privacy-policy',
    '/sermons',
    '/support',
    '/terms-of-service',
    '/transparency',
    '/videos',
    '/volumes',
  ];

  const sitemapUrls = [];
  const now = new Date();

  // Add localized static routes
  for (const lang of langs) {
    for (const route of staticRoutes) {
      sitemapUrls.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: now,
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  // 2. Dynamic Routes (Volumes and Sermons)
  const volumes = await getVolumes('en');
  
  for (const vol of volumes) {
    const volId = vol.replace('volume-', '');
    
    // Add Volume route for each lang
    for (const lang of langs) {
      sitemapUrls.push({
        url: `${baseUrl}/${lang}/volume/${volId}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }

    // Add Sermon routes
    const sermons = await getSermonsInVolume(vol, 'en');
    for (const sermon of sermons) {
      for (const lang of langs) {
        sitemapUrls.push({
          url: `${baseUrl}/${lang}/volume/${volId}/${sermon.slug}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      }
    }
  }

  return sitemapUrls;
}

