import { getDictionary } from '../../../lib/dictionaries';
import DownloadClient from './DownloadClient';
import { loadStaticJson } from '../../../lib/data-loader';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: `${dict.download?.title || 'Download'} | Spurgeon TV`,
    robots: { index: false, follow: false }
  };
}

export default async function DownloadPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const downloads = await loadStaticJson('sermon_downloads.json') || [];
  return <DownloadClient lang={lang} dict={dict} downloads={downloads} />;
}
