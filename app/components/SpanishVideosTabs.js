'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SpanishVideosTabs({ esChannel, esDevocionalChannel, dict, lang }) {
  const [activeTab, setActiveTab] = useState('esChannel');

  const activeData = activeTab === 'esChannel' ? esChannel : esDevocionalChannel;
  
  // Use translations for the tabs if possible, otherwise fallback
  const sermoesTabLabel = lang === 'en' ? 'Full Sermons' : lang === 'es' ? 'Sermones' : 'Sermões Completos';

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            {esChannel.title}
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
             <button 
                onClick={() => setActiveTab('esChannel')}
                style={{ 
                  background: activeTab === 'esChannel' ? 'var(--accent)' : 'var(--surface)', 
                  color: activeTab === 'esChannel' ? '#000' : 'var(--text-primary)',
                  border: '1px solid ' + (activeTab === 'esChannel' ? 'var(--accent)' : 'var(--border)'),
                  padding: '0.5rem 1.5rem',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.2s'
                }}
             >
                {sermoesTabLabel}
             </button>
             <button 
                onClick={() => setActiveTab('esDevocionalChannel')}
                style={{ 
                  background: activeTab === 'esDevocionalChannel' ? 'var(--accent)' : 'var(--surface)', 
                  color: activeTab === 'esDevocionalChannel' ? '#000' : 'var(--text-primary)',
                  border: '1px solid ' + (activeTab === 'esDevocionalChannel' ? 'var(--accent)' : 'var(--border)'),
                  padding: '0.5rem 1.5rem',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.2s'
                }}
             >
                {esDevocionalChannel.title}
             </button>
          </div>
        </div>
        <Link href={`/${lang}/videos/${activeData.id}`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', whiteSpace: 'nowrap' }}>
          {dict.videosHub.viewAll}
        </Link>
      </div>

      {activeData.videos.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {activeData.videos.map(video => (
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
  )
}
