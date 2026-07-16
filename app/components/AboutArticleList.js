'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';

const translations = {
  en: {
    title: "All Articles",
    searchPlaceholder: "Search articles by title or description...",
    showing: "Showing",
    article: "article",
    articles: "articles",
    noArticles: "No articles found matching",
    prev: "← Previous",
    next: "Next →",
    page: "Page",
    of: "of"
  },
  pt: {
    title: "Todos os Artigos",
    searchPlaceholder: "Buscar artigos por título ou descrição...",
    showing: "Mostrando",
    article: "artigo",
    articles: "artigos",
    noArticles: "Nenhum artigo encontrado para",
    prev: "← Anterior",
    next: "Próxima →",
    page: "Página",
    of: "de"
  },
  es: {
    title: "Todos los Artículos",
    searchPlaceholder: "Buscar artículos por título o descripción...",
    showing: "Mostrando",
    article: "artículo",
    articles: "artículos",
    noArticles: "No se encontraron artículos para",
    prev: "← Anterior",
    next: "Siguiente →",
    page: "Página",
    of: "de"
  }
};

export default function AboutArticleList({ lang = 'en', initialArticles = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [articles, setArticles] = useState(initialArticles);
  
  const t = translations[lang] || translations.en;

  useEffect(() => {
    setArticles(initialArticles);
  }, [initialArticles]);

  // Sort articles by date descending
  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [articles]);

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    // Reset to page 1 when searching
    setCurrentPage(1);
    if (!searchQuery) return sortedArticles;
    const lowerQuery = searchQuery.toLowerCase();
    return sortedArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(lowerQuery) ||
        a.desc.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery, sortedArticles]);

  // Paginate
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  // Re-calculate the page in case filtering reduces totalPages below currentPage
  const safePage = Math.min(currentPage, totalPages > 0 ? totalPages : 1);
  const currentArticles = filteredArticles.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  return (
    <div className="container" style={{ marginTop: '4rem', paddingBottom: '6rem' }}>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>{t.title}</h2>
      
      {/* Search Bar */}
      <div style={{ maxWidth: '600px', margin: '0 auto 3rem auto', position: 'relative' }}>
        <input
          type="search"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '1rem 1.5rem',
            paddingRight: '3rem',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            color: 'var(--text)',
            fontSize: '1rem',
            outline: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        />
        <span style={{ position: 'absolute', right: '1.2rem', top: '1.2rem', opacity: 0.5 }}>
          🔍
        </span>
      </div>

      {/* Results Count */}
      <div style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>
        {t.showing} {filteredArticles.length} {filteredArticles.length === 1 ? t.article : t.articles}
      </div>

      {/* Articles Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        {currentArticles.length > 0 ? (
          currentArticles.map((article, idx) => {
            // Replace /en/ with /lang/ dynamically
            const href = article.href.replace('/en/', `/${lang}/`);
            return (
              <Link key={idx} href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <article style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }} className="article-card">
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{article.date} • {article.readTime}</span>
                    <span style={{ color: 'var(--accent)', opacity: 0.8, fontWeight: 'bold' }}>{article.category.toUpperCase()}</span>
                  </div>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>
                    {article.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '0.9rem', flexGrow: 1 }}>
                    {article.desc}
                  </p>
                </article>
              </Link>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            {t.noArticles} "{searchQuery}".
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={safePage === 1}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              background: safePage === 1 ? 'transparent' : 'var(--surface-hover)',
              color: safePage === 1 ? 'var(--text-muted)' : 'var(--accent)',
              cursor: safePage === 1 ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s'
            }}
          >
            {t.prev}
          </button>
          
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {t.page} {safePage} {t.of} {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              background: safePage === totalPages ? 'transparent' : 'var(--surface-hover)',
              color: safePage === totalPages ? 'var(--text-muted)' : 'var(--accent)',
              cursor: safePage === totalPages ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s'
            }}
          >
            {t.next}
          </button>
        </div>
      )}
    </div>
  );
}
