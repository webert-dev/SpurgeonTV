import { getDictionary } from '../../../lib/dictionaries';
import DownloadClient from './DownloadClient';
import downloads from '../../../lib/sermon_downloads.json';

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
  return <DownloadClient lang={lang} dict={dict} downloads={downloads} />;
}
