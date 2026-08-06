import Link from 'next/link';
import path from 'path';
import { notFound } from 'next/navigation';
import { getDictionary } from '../../../../lib/dictionaries';
import { loadStaticJson } from '../../../../lib/data-loader';
import { Suspense } from 'react';
import VideosListClient from '../../../components/VideosListClient';

export const revalidate = false;

export const dynamicParams = false;

export function generateStaticParams() {
  const langs = ['en', 'es', 'pt'];
  const channels = ['pt', 'en', 'es', 'es-devocional'];
  const params = [];
  
  for (const lang of langs) {
    for (const channelId of channels) {
      params.push({ lang, channelId });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }) {
  const { lang, channelId } = await params;
  const dict = await getDictionary(lang);
  const channelName = dict.channelVideos?.channels[channelId] || "Channel Videos";
  return {
    title: channelName + " | Charles Spurgeon",
    description: "Browse our entire historical collection of Charles Spurgeon videos.",
  };
}

const VIDEOS_PER_PAGE = 24;

export default async function ChannelVideosPage({ params }) {
  const { lang = 'en', channelId } = await params;
  const videosData = await loadStaticJson('videosData.json') || { pt: [], en: [], es: [], 'es-devocional': [] };
  const dict = await getDictionary(lang);
  
  if (!['pt', 'en', 'es', 'es-devocional'].includes(channelId)) {
    notFound();
  }

  const allVideos = videosData[channelId] || [];
  const totalVideos = allVideos.length;
  const totalPages = Math.ceil(totalVideos / VIDEOS_PER_PAGE);
  const initialVideos = allVideos.slice(0, VIDEOS_PER_PAGE);

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
      <Link href={`/${lang}/videos`} style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        {dict.channelVideos.backToHub}
      </Link>
      
      <Suspense fallback={<div style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>Loading videos...</div>}>
        <VideosListClient 
          initialVideos={initialVideos} 
          lang={lang} 
          dict={dict} 
          channelId={channelId} 
          totalVideos={totalVideos} 
          totalPages={totalPages} 
        />
      </Suspense>
    </div>
  );
}
