'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SearchClient({ lang = 'en', dict, isGlobal = false }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const [searchType, setSearchType] = useState('sermons');
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Fallback to English if dict is not provided
  const placeholderText = dict ? dict.sermons.searchPlaceholder : "Search sermons, themes, biblical references...";

  // Lazy-load the sermons search index on first focus (legacy behavior for non-global)
  async function loadIndex() {
    if (index || isGlobal) return;
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
    
    if (q.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    if (isGlobal) {
      // Global search uses the API
      const delayDebounceFn = setTimeout(async () => {
        try {
          const res = await fetch(`/api/global-search?q=${encodeURIComponent(q)}&type=${searchType}&lang=${lang}`);
          if (res.ok) {
            const data = await res.json();
            setResults(data);
            setIsOpen(data.length > 0);
          }
        } catch (e) {
          console.error(e);
        }
      }, 300);
      return () => clearTimeout(delayDebounceFn);
    } else {
      // Legacy local search for sermons only
      if (!index) return;
      const filtered = index
        .filter((s) => {
          const titleMatch = s.title.toLowerCase().includes(q);
          const refMatch = s.scripture?.reference?.toLowerCase().includes(q);
          const verseMatch = s.scripture?.verse?.toLowerCase().includes(q);
          const yearMatch = s.year && s.year.toString().includes(q);
          return titleMatch || refMatch || verseMatch || yearMatch;
        })
        .slice(0, 15); // limit to 15 to match API

      const formatted = filtered.map(s => ({
        title: s.title,
        subtitle: `${dict ? dict.volume.title.replace('{num}', s.volumeNum) : `Vol. ${s.volumeNum}`} (${s.year}) · ${dict ? dict.volume.table.sermon : 'Sermon'} ${s.slug.replace('sermon-', '')}`,
        href: `/${lang}/volume/${s.volume}/${s.slug}`,
        scripture: s.scripture?.reference
      }));
      setResults(formatted);
      setIsOpen(formatted.length > 0);
    }
  }, [query, index, isGlobal, searchType, lang, dict]);

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
          placeholder={placeholderText}
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

      {isGlobal && (
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { id: 'sermons', label: dict?.navigation?.sermons || 'Sermons' },
            { id: 'articles', label: dict?.navigation?.about || 'Articles' },
            { id: 'dictionary', label: dict?.navigation?.dictionary || 'Dictionary' },
            { id: 'bible', label: dict?.navigation?.bible || 'Bible' },
            { id: 'videos', label: dict?.navigation?.videos || 'Videos' },
          ].map(type => (
            <label key={type.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: searchType === type.id ? 'var(--accent)' : 'var(--text-secondary)' }}>
              <input
                type="radio"
                name="searchType"
                value={type.id}
                checked={searchType === type.id}
                onChange={(e) => {
                  setSearchType(e.target.value);
                  inputRef.current?.focus();
                }}
                style={{ accentColor: 'var(--accent)' }}
              />
              {type.label}
            </label>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="search-dropdown">
          {results.map((res, idx) => (
            <Link
              key={idx}
              href={res.href}
              className="search-result-item"
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
            >
              <div className="search-result-meta">{res.subtitle}</div>
              <div className="search-result-title">{res.title}</div>
              {res.scripture && (
                <div className="search-result-ref">{res.scripture}</div>
              )}
            </Link>
          ))}
          {results.length === 0 && (
             <div className="search-result-item" style={{ pointerEvents: 'none', color: 'var(--text-muted)' }}>
                No results found for {searchType}.
             </div>
          )}
        </div>
      )}
    </div>
  );
}
