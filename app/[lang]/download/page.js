import { getDictionary } from '../../../lib/dictionaries';
import DownloadClient from './DownloadClient';
import { loadStaticJson } from '../../../lib/data-loader';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
  return {
    title: `${dict.download?.title || 'Download'} | Spurgeon TV`,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${siteUrl}/${lang}/download/`,
      languages: {
        'en': `${siteUrl}/en/download/`,
        'pt': `${siteUrl}/pt/download/`,
        'es': `${siteUrl}/es/download/`,
      }
    }
  };
}

export default async function DownloadPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const downloads = await loadStaticJson('sermon_downloads.json') || [];
  return <DownloadClient lang={lang} dict={dict} downloads={downloads} />;
}
