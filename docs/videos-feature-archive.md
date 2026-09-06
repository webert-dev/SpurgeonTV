# 📼 Arquivo: Funcionalidade de Vídeos (Removida em 2026-08-17)

> **Por que foi removida?**  
> A seção de vídeos foi desativada por estar causando problemas na indexação do Google (erros no Search Console). A decisão foi remover para focar no conteúdo textual (sermões, devocionais), que é o ponto forte do site. O código foi preservado aqui para eventual reativação em um servidor separado.

---

## Estrutura de Arquivos que Existiam

```
app/
└── [lang]/
    └── videos/
        ├── page.js                  ← Hub principal de vídeos
        ├── [channelId]/
        │   └── page.js              ← Lista paginada de um canal
        └── watch/
            └── [videoId]/
                └── page.js          ← Player de vídeo individual
app/
└── components/
    ├── VideosListClient.js          ← Componente client-side (paginação)
    └── SpanishVideosTabs.js         ← Abas de vídeos em espanhol
public/
└── data/
    └── videosData.json              ← Banco de dados de vídeos (ainda existe)
```

---

## Código Completo dos Arquivos

### 1. `app/[lang]/videos/page.js` — Hub Principal

```jsx
import Link from 'next/link';
import path from 'path';
import { getDictionary } from '../../../lib/dictionaries';
import SpanishVideosTabs from '../../components/SpanishVideosTabs';
import { loadStaticJson } from '../../../lib/data-loader';

export const revalidate = false;

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.videosHub?.pageTitle + " | Charles Spurgeon" || "Charles Spurgeon Videos | Sermons & Documentaries",
    description: dict.videosHub?.pageSubtitle || "Watch the largest collection of Charles Spurgeon sermons, documentaries, and teachings in English, Portuguese, and Spanish.",
  };
}

export default async function VideosHubPage({ params }) {
  const { lang = 'en' } = await params;
  const data = await loadStaticJson('videosData.json') || { pt: [], en: [], es: [] };
  const dict = await getDictionary(lang);

  const ptChannel = {
    id: 'pt',
    title: dict.videosHub.channels.pt.title,
    desc: dict.videosHub.channels.pt.desc,
    videos: data.pt.slice(0, 3)
  };
  const enChannel = {
    id: 'en',
    title: dict.videosHub.channels.en.title,
    desc: dict.videosHub.channels.en.desc,
    videos: data.en.slice(0, 3)
  };
  const esChannel = {
    id: 'es',
    title: dict.videosHub.channels.es.title,
    desc: dict.videosHub.channels.es.desc,
    videos: data.es.slice(0, 3)
  };
  const esDevocionalChannel = {
    id: 'es-devocional',
    title: 'Devocional que Ben Dice',
    desc: 'Devocionales diarios de Charles Spurgeon',
    videos: [
      { id: "UmCGiI7NYKw", title: "Devocional de Charles Spurgeon", thumbnail: "https://i.ytimg.com/vi/UmCGiI7NYKw/maxresdefault.jpg" },
      { id: "y04s2fagflQ", title: "Devocional de Charles Spurgeon", thumbnail: "https://i.ytimg.com/vi/y04s2fagflQ/maxresdefault.jpg" },
      { id: "JFfwDZb49b4", title: "Devocional de Charles Spurgeon", thumbnail: "https://i.ytimg.com/vi/JFfwDZb49b4/maxresdefault.jpg" }
    ]
  };

  let channels = [];
  if (lang === 'pt') {
    channels = [ptChannel, enChannel];
  } else if (lang === 'es') {
    channels = [enChannel, ptChannel];
  } else {
    channels = [enChannel, ptChannel];
  }

  return (
    <div className="container" style={{ padding: '1rem 2rem', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
          {dict.videosHub.pageTitle}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          {dict.videosHub.pageSubtitle}
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {lang === 'es' && (
          <SpanishVideosTabs esChannel={esChannel} esDevocionalChannel={esDevocionalChannel} dict={dict} lang={lang} />
        )}

        {channels.map(channel => (
          <section key={channel.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {channel.title}
                </h2>
              </div>
              <Link href={`/${lang}/videos/${channel.id}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', whiteSpace: 'nowrap', marginLeft: '1rem' }}>
                {dict.videosHub.viewAll}
              </Link>
            </div>

            {channel.videos.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {channel.videos.map(video => (
                  <a key={video.id} href={`/${lang}/videos/watch/${video.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', background: 'var(--surface)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }} className="video-card">
                    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                      <img src={video.thumbnail} alt={video.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                      <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                        ▶ {dict.videosHub.play}
                      </div>
                    </div>
                    <div style={{ padding: '1.2rem' }}>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.4' }}>
                        {video.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>{dict.videosHub.noVideos}</p>
            )}
          </section>
        ))}

        {lang !== 'es' && (
          <SpanishVideosTabs esChannel={esChannel} esDevocionalChannel={esDevocionalChannel} dict={dict} lang={lang} />
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .video-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent) !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }
      `}} />
    </div>
  );
}
```

---

### 2. `app/[lang]/videos/[channelId]/page.js` — Lista Paginada do Canal

```jsx
import Link from 'next/link';
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
```

---

### 3. `app/[lang]/videos/watch/[videoId]/page.js` — Player de Vídeo

```jsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '../../../../../lib/dictionaries';
import ShareButton from '../../../../components/ShareButton';
import CitationBox from '../../../../components/CitationBox';
import { loadStaticJson } from '../../../../../lib/data-loader';

export const revalidate = false;
export const dynamicParams = true;

export function generateStaticParams() {
  // Retorna array vazio para não pré-renderizar nenhum vídeo
  // e evitar estourar o limite de 20k arquivos da Cloudflare.
  // Os vídeos são gerados sob demanda (SSR) porque dynamicParams = true.
  return [];
}

async function getVideoData(videoId) {
  const data = await loadStaticJson('videosData.json') || { pt: [], en: [], es: [], 'es-devocional': [] };
  for (const channel of ['pt', 'en', 'es', 'es-devocional']) {
    const found = data[channel]?.find(v => v.id === videoId);
    if (found) {
      return { ...found, channelId: channel };
    }
  }
  return null;
}

export async function generateMetadata({ params }) {
  const { lang, videoId } = await params;
  const video = await getVideoData(videoId);
  
  if (!video) return { title: "Video Not Found | Charles Spurgeon" };

  return {
    title: video.title + " | Charles Spurgeon",
    description: "Watch this video on SPURGEONTV.",
    openGraph: { images: [video.thumbnail] },
  };
}

export default async function WatchVideoPage({ params }) {
  const { lang = 'en', videoId } = await params;
  const dict = await getDictionary(lang);
  
  const video = await getVideoData(videoId);
  if (!video) notFound();

  return (
    <div className="container" style={{ padding: '2rem 1rem 6rem', minHeight: '90vh', maxWidth: '1000px', margin: '0 auto' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": video.title,
            "description": video.description || `Sermon or documentary about Charles Spurgeon on SPURGEON TV.`,
            "thumbnailUrl": [video.thumbnail],
            "uploadDate": "2026-02-15T08:00:00+08:00",
            "embedUrl": `https://www.youtube.com/embed/${videoId}`
          })
        }}
      />
      <Link href={`/${lang}/videos/${video.channelId}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        {dict.watchVideo.back}
      </Link>

      <div style={{ background: '#000', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=${lang === 'pt' ? 'pt-BR' : lang}&hl=${lang === 'pt' ? 'pt-BR' : lang}`}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          ></iframe>
        </div>
      </div>

      <h1 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', lineHeight: '1.4' }}>
        {video.title}
      </h1>
      
      <ShareButton title={video.title} text={dict.watchVideo.share} />

      {video.description && (
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <CitationBox
            type="video"
            lang={lang}
            url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv'}/${lang}/videos/watch/${videoId}`}
            title={video.title}
            videoUrl={`https://www.youtube.com/watch?v=${videoId}`}
            compact
          />
        </div>
      )}
    </div>
  );
}
```

---

### 4. `app/components/VideosListClient.js` — Paginação Client-Side

```jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function VideosListClient({ initialVideos, lang, dict, channelId, totalVideos, totalPages }) {
  const searchParams = useSearchParams();
  const VIDEOS_PER_PAGE = 24;
  
  const pageParam = searchParams.get('page');
  const initialPage = pageParam ? parseInt(pageParam, 10) : 1;

  const [currentVideos, setCurrentVideos] = useState(initialPage === 1 ? initialVideos : []);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(initialPage !== 1);
  const [allVideosCache, setAllVideosCache] = useState(null);

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(page);
    
    if (page === 1) {
      setCurrentVideos(initialVideos);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    let isMounted = true;
    setLoading(true);
    
    if (allVideosCache && allVideosCache.length > 0) {
      const startIndex = (page - 1) * VIDEOS_PER_PAGE;
      setCurrentVideos(allVideosCache.slice(startIndex, startIndex + VIDEOS_PER_PAGE));
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    fetch('/data/videosData.json')
      .then(res => res.json())
      .then(fetchedData => {
        if (isMounted) {
          const allVids = fetchedData[channelId] || [];
          setAllVideosCache(allVids);
          const startIndex = (page - 1) * VIDEOS_PER_PAGE;
          setCurrentVideos(allVids.slice(startIndex, startIndex + VIDEOS_PER_PAGE));
          setLoading(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
    return () => { isMounted = false; };
  }, [searchParams, initialVideos, channelId, allVideosCache]);

  return (
    <>
      <header style={{ marginBottom: '4rem' }}>
        <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          {dict.channelVideos.channels[channelId]}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          {dict.channelVideos.page.replace('{current}', currentPage).replace('{total}', totalPages)} {dict.channelVideos.totalVideos.replace('{total}', totalVideos)}
        </p>
      </header>

      {loading ? (
        <div style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>Loading videos...</div>
      ) : currentVideos.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {currentVideos.map(video => (
            <a key={video.id} href={`/${lang}/videos/watch/${video.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', transition: 'transform 0.2s', background: 'var(--surface)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }} className="video-card">
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <img src={video.thumbnail} alt={video.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  ▶ {dict.channelVideos.play}
                </div>
              </div>
              <div style={{ padding: '1.2rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--text-muted)' }}>{dict.channelVideos.noVideos}</p>
      )}

      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '4rem' }}>
          {currentPage > 1 ? (
            <Link rel="prev" href={`/${lang}/videos/${channelId}?page=${currentPage - 1}`} scroll={false}>
              {dict.channelVideos.previous}
            </Link>
          ) : <div style={{ width: '120px' }}></div>}

          <div>{currentPage} / {totalPages}</div>

          {currentPage < totalPages ? (
            <Link rel="next" href={`/${lang}/videos/${channelId}?page=${currentPage + 1}`} scroll={false}>
              {dict.channelVideos.next}
            </Link>
          ) : <div style={{ width: '120px' }}></div>}
        </div>
      )}
    </>
  );
}
```

---

### 5. `app/components/SpanishVideosTabs.js` — Abas de Vídeos (ES)

```jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SpanishVideosTabs({ esChannel, esDevocionalChannel, dict, lang }) {
  const [activeTab, setActiveTab] = useState('esChannel');
  const activeData = activeTab === 'esChannel' ? esChannel : esDevocionalChannel;
  const sermoesTabLabel = lang === 'en' ? 'Full Sermons' : lang === 'es' ? 'Sermones' : 'Sermões Completos';

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>{esChannel.title}</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setActiveTab('esChannel')} style={{ background: activeTab === 'esChannel' ? 'var(--accent)' : 'var(--surface)', color: activeTab === 'esChannel' ? '#000' : 'var(--text-primary)', border: '1px solid var(--border)', padding: '0.5rem 1.5rem', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
              {sermoesTabLabel}
            </button>
            <button onClick={() => setActiveTab('esDevocionalChannel')} style={{ background: activeTab === 'esDevocionalChannel' ? 'var(--accent)' : 'var(--surface)', color: activeTab === 'esDevocionalChannel' ? '#000' : 'var(--text-primary)', border: '1px solid var(--border)', padding: '0.5rem 1.5rem', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>
              {esDevocionalChannel.title}
            </button>
          </div>
        </div>
        <Link href={`/${lang}/videos/${activeData.id}`} style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
          {dict.videosHub.viewAll}
        </Link>
      </div>

      {activeData.videos.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {activeData.videos.map(video => (
            <a key={video.id} href={`/${lang}/videos/watch/${video.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} className="video-card">
              <img src={video.thumbnail} alt={video.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} loading="lazy" />
              <div style={{ padding: '1.2rem' }}>
                <h3 style={{ fontSize: '1.1rem' }}>{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--text-muted)' }}>{dict.videosHub.noVideos}</p>
      )}
    </section>
  );
}
```

---

## Como Reativar em Outro Servidor

### Passo 1 — Recriar a estrutura de pastas
```
app/[lang]/videos/page.js
app/[lang]/videos/[channelId]/page.js
app/[lang]/videos/watch/[videoId]/page.js
app/components/VideosListClient.js
app/components/SpanishVideosTabs.js
```
Cole os códigos acima em cada arquivo correspondente.

### Passo 2 — Adicionar o link de navegação no `layout.js`
Dentro do `<nav className="site-nav">`, adicione a linha:
```jsx
<Link href={`/${lang}/videos`} className="nav-link">{dict.navigation.videos}</Link>
```

### Passo 3 — Adicionar `/videos` de volta ao Sitemap
No arquivo `scripts/generate-sitemap.mjs`, dentro do array `staticRoutes`, adicione:
```js
'/videos',
```

### Passo 4 — Adicionar lógica de busca de vídeos em `search-client.js`
No arquivo `app/[lang]/search-client.js`, dentro do bloco de busca, adicione:
```js
else if (type === 'videos') {
  const index = await getIndex('/videosData.json');
  if (index) {
    const videosLang = index[lang] || [];
    const filtered = videosLang.filter(v => v.title.toLowerCase().includes(q)).slice(0, 15);
    currentResults = filtered.map(v => ({
      title: v.title,
      subtitle: `Video`,
      href: `/${lang}/videos/watch/${v.id}`
    }));
  }
}
```
E no `handleFocus()`:
```js
else if (type === 'videos') getIndex('/videosData.json');
```

### Passo 5 — Verificar o arquivo de dados
O arquivo `public/data/videosData.json` ainda existe no projeto original.
Copie-o para o servidor novo e coloque em `public/data/videosData.json`.

### Passo 6 — Verificar as chaves de tradução nos dicionários (`lib/dictionaries/`)
As seguintes chaves são necessárias nos dicionários `en.json`, `pt.json`, `es.json`:
- `navigation.videos`
- `videosHub.pageTitle`, `videosHub.pageSubtitle`
- `videosHub.channels.en/pt/es.title`, `.desc`
- `videosHub.viewAll`, `videosHub.play`, `videosHub.noVideos`
- `channelVideos.channels`, `channelVideos.backToHub`, `channelVideos.page`, `channelVideos.totalVideos`, `channelVideos.previous`, `channelVideos.next`, `channelVideos.play`, `channelVideos.noVideos`
- `watchVideo.back`, `watchVideo.share`, `watchVideo.descriptionTitle`, `watchVideo.alertTitle`, `watchVideo.alertBody`, `watchVideo.cardAlert`

### Passo 7 — Verificar no `robots.txt`
Se quiser bloquear a página individual de vídeo dos bots (boa prática), adicione em `app/robots.txt`:
```
Disallow: /en/videos/watch/
Disallow: /pt/videos/watch/
Disallow: /es/videos/watch/
```

---

## Observações Técnicas
- A página de vídeos usava dados do arquivo `public/data/videosData.json`, que é um JSON estático gerado externamente (não há script que o gere automaticamente no projeto).
- A paginação é **client-side**: o servidor entrega os primeiros 24 vídeos e o resto é carregado via `fetch` direto do JSON público.
- A página de player (`/watch/[videoId]`) foi deliberadamente configurada como **SSR puro** (`dynamicParams = true`, `generateStaticParams = []`) para não estourar o limite de arquivos da Cloudflare.
