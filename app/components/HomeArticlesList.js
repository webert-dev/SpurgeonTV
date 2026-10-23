'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HomeArticlesList({
  featuredArticle,
  previousArticles = [],
  dict,
  lang = 'en'
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(previousArticles.length / itemsPerPage) || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (safePage - 1) * itemsPerPage;
  const currentBatch = previousArticles.slice(startIndex, startIndex + itemsPerPage);

  const prevText = dict?.home?.articles?.prev || (lang === 'pt' ? 'Anterior' : lang === 'es' ? 'Anterior' : 'Previous');
  const nextText = dict?.home?.articles?.next || (lang === 'pt' ? 'Próxima' : lang === 'es' ? 'Siguiente' : 'Next');
  const pageText = dict?.home?.articles?.page || (lang === 'pt' ? 'Página' : lang === 'es' ? 'Página' : 'Page');
  const ofText = dict?.home?.articles?.of || (lang === 'pt' ? 'de' : lang === 'es' ? 'de' : 'of');
  const readText = dict?.home?.articles?.read || (lang === 'pt' ? 'leitura' : lang === 'es' ? 'lectura' : 'read');
  const featuredBadge = lang === 'pt' ? 'DESTAQUE' : lang === 'es' ? 'DESTACADO' : 'FEATURED';

  // Generate pagination items (sliding window with ellipsis)
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = [];
    if (safePage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (safePage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', safePage - 1, safePage, safePage + 1, '...', totalPages);
    }
    return pages;
  };

  const renderArticleCard = (article, isTopFeatured = false) => {
    return (
      <Link
        href={`/${lang}${article.href}`}
        key={article.href}
        className={`home-article-card ${isTopFeatured ? 'home-article-card-featured' : ''}`}
        style={isTopFeatured ? {
          background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.06) 0%, var(--bg) 100%)',
          borderLeft: '3px solid var(--accent)'
        } : undefined}
      >
        <div className="home-article-icon">{article.icon}</div>
        <div className="home-article-body">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
            <span className="home-article-category">
              {article.category}
            </span>
            {isTopFeatured && (
              <span style={{
                background: 'rgba(212, 175, 55, 0.15)',
                color: 'var(--accent)',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '4px',
                padding: '0.1rem 0.45rem',
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                fontWeight: 700,
                lineHeight: '1.2'
              }}>
                {featuredBadge}
              </span>
            )}
          </div>
          <h3 className="home-article-title">{article.title}</h3>
          <p className="home-article-subtitle">{article.subtitle}</p>
          <div className="home-article-meta">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} {readText}</span>
          </div>
        </div>
        <div className="home-article-arrow">→</div>
      </Link>
    );
  };

  return (
    <div className="home-articles-grid-container">
      <div className="home-articles-grid">
        {/* Top Featured Article: Brother Allan Román */}
        {featuredArticle && renderArticleCard(featuredArticle, true)}

        {/* Paginated Previous Articles */}
        {currentBatch.map((article) => renderArticleCard(article, false))}

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="home-articles-pagination">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={safePage === 1}
              aria-label={prevText}
              className="home-articles-nav-btn"
            >
              ← {prevText}
            </button>

            <div className="home-articles-page-numbers">
              {getPageNumbers().map((num, idx) => {
                if (num === '...') {
                  return (
                    <span key={`dots-${idx}`} className="home-articles-dots">
                      …
                    </span>
                  );
                }
                const isActive = num === safePage;
                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setCurrentPage(num)}
                    className={`home-articles-page-num ${isActive ? 'active' : ''}`}
                    aria-label={`${pageText} ${num}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {num}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={safePage === totalPages}
              aria-label={nextText}
              className="home-articles-nav-btn"
            >
              {nextText} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
