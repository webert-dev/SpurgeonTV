'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SearchClient({ lang = 'en' }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Lazy-load the search index on first focus
  async function loadIndex() {
    if (index) return;
    try {
      const res = await fetch('/search-index.json');
      const data = await res.json();
      setIndex(data);
    } catch (e) {
      console.error('Failed to load search index', e);
    }
  }

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!index || q.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = index
      .filter((s) => {
        const titleMatch = s.title.toLowerCase().includes(q);
        const refMatch = s.scripture?.reference?.toLowerCase().includes(q);
        const verseMatch = s.scripture?.verse?.toLowerCase().includes(q);
        return titleMatch || refMatch || verseMatch;
      })
      .slice(0, 8);

    setResults(filtered);
    setIsOpen(filtered.length > 0);
  }, [query, index]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setQuery('');
    }
  }

  return (
    <div className="search-wrapper" ref={containerRef}>
      <div className="search-input-container">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Search sermons, themes, biblical references..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={loadIndex}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        {query && (
          <button
            className="search-clear"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
              inputRef.current?.focus();
            }}
          >
            ✕
          </button>
        )}
      </div>

      {isOpen && (
        <div className="search-dropdown">
          {results.map((sermon) => (
            <Link
              key={`${sermon.volume}-${sermon.slug}`}
              href={`/${lang}/volume/${sermon.volume}/${sermon.slug}`}
              className="search-result-item"
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
            >
              <div className="search-result-meta">
                Vol. {sermon.volumeNum} · Sermon {sermon.slug.replace('sermon-', '')}
              </div>
              <div className="search-result-title">{sermon.title}</div>
              {sermon.scripture?.reference && (
                <div className="search-result-ref">{sermon.scripture.reference}</div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
