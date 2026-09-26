import React from 'react';
import Link from 'next/link';
import { getDictionary } from '../../../lib/dictionaries';

export const revalidate = false;

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.recommendations?.pageTitle || "Recommended Channels & Partners",
    description: dict.recommendations?.pageSubtitle,
    robots: { index: false, follow: false }
  };
}

export default async function RecommendationsPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const channels = [
    {
      title: "Spurgeon TV (Português)",
      url: "https://www.youtube.com/@Spurgeontv",
      type: "channel",
      lang: "pt",
      avatar: "/images/avatars/spurgeontv_pt.jpg"
    },
    {
      title: "C.H. Spurgeon (English)",
      url: "https://www.youtube.com/@CHSpurgeon_com",
      type: "channel",
      lang: "en",
      avatar: "/images/avatars/spurgeontv_en.jpg"
    },
    {
      title: "C.H. Spurgeon Español",
      url: "https://www.youtube.com/@CHSpurgeonEspanol",
      type: "channel",
      lang: "es",
      avatar: "/images/avatars/spurgeontv_es.jpg"
    },
    {
      title: "Spurgeon TV (español)",
      url: "https://www.youtube.com/@DevocionalSpurgeon",
      type: "channel",
      lang: "es",
      avatar: "/images/avatars/devocional_es.jpg"
    }
  ];


  return (
    <div className="container" style={{ padding: '2rem 1rem', minHeight: '80vh', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          {dict.recommendations?.pageTitle || "Recommended Channels & Partners"}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
          {dict.recommendations?.pageSubtitle}
        </p>
      </header>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '2rem', height: '2rem', color: '#FF0000' }}>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          {dict.recommendations?.channelsTitle || "Featured YouTube Channels"}
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {channels.map((channel, idx) => (
            <a 
              key={idx} 
              href={channel.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                background: 'var(--surface)', 
                borderRadius: '12px', 
                padding: '1.5rem', 
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'transform 0.2s, borderColor 0.2s'
              }}
              className="video-card"
            >
              <div style={{ width: '60px', height: '60px', flexShrink: 0, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--border)' }}>
                {channel.avatar ? (
                  <img src={channel.avatar} alt={channel.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                ) : (
                  <div style={{ fontSize: '2.5rem', background: 'var(--background)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    📺
                  </div>
                )}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{channel.title}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {dict.recommendations?.visitChannel || "Visit Channel"} ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>


    </div>
  );
}
