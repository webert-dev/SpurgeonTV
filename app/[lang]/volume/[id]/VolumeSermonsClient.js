'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import SermonInfoPanel from './SermonInfoPanel';

export default function VolumeSermonsClient({ sermonsWithMeta, id, lang, dict }) {
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef(null);
  const pageSize = 10;
  const totalSermons = sermonsWithMeta.length;
  const totalPages = Math.ceil(totalSermons / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const currentSermons = sermonsWithMeta.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setCurrentPage(newPage);
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const paginationText = dict?.sermons?.pagination || {
    previous: 'Anterior',
    next: 'Próximo',
    page: 'Página {current} de {total}',
  };

  return (
    <div ref={listRef} style={{ scrollMarginTop: '2rem' }}>
      <div className="sermon-list">
        {currentSermons.map((sermon) => {
          const targetLang = (lang !== 'en' && !sermon.isTranslated) ? 'en' : lang;

          return (
            <div key={sermon.slug} className="sermon-list-entry">
              <Link href={`/${targetLang}/volume/${id}/${sermon.slug}`}>
                <div className="sermon-item">
                  <div className="sermon-number">#{sermon.num}</div>
                  <div className="sermon-item-content">
                    <div className="sermon-title">{sermon.title}</div>
                    {sermon.scripture?.reference && (
                      <div className="sermon-scripture">{sermon.scripture.reference}</div>
                    )}
                  </div>
                </div>
              </Link>
              <SermonInfoPanel meta={sermon.meta} lang={lang} dict={dict} />
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="pagination" style={{ marginTop: '3rem', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className={`pagination-btn ${currentPage <= 1 ? 'disabled' : ''}`}
              style={{ cursor: currentPage <= 1 ? 'not-allowed' : 'pointer' }}
              aria-label={paginationText.previous}
            >
              &larr; {paginationText.previous}
            </button>

            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    style={{
                      minWidth: '2.5rem',
                      height: '2.5rem',
                      padding: '0 0.5rem',
                      borderRadius: '8px',
                      border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
                      background: isActive ? 'var(--accent)' : 'rgba(255, 255, 255, 0.05)',
                      color: isActive ? '#000' : 'var(--text-primary)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={`Página ${pageNum}`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className={`pagination-btn ${currentPage >= totalPages ? 'disabled' : ''}`}
              style={{ cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer' }}
              aria-label={paginationText.next}
            >
              {paginationText.next} &rarr;
            </button>
          </div>

          <span className="pagination-info" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {paginationText.page
              .replace('{current}', currentPage)
              .replace('{total}', totalPages)}
            {' '}({startIndex + 1}–{Math.min(startIndex + pageSize, totalSermons)} / {totalSermons})
          </span>
        </div>
      )}
    </div>
  );
}
