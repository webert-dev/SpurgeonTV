'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Helper to fetch and cache indexes
const fetchCache = {};
async function getIndex(url) {
  if (fetchCache[url]) return fetchCache[url];
  try {
    const res = await fetch(url);
    const data = await res.json();
    fetchCache[url] = data;
    return data;
  } catch (e) {
    console.error('Failed to load search index:', url, e);
    return null;
  }
}

export default function SearchClient({ lang = 'en', dict, isGlobal = false }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchType, setSearchType] = useState('sermons');
  const [isSearching, setIsSearching] = useState(false);
  
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Fallback to English if dict is not provided
  const placeholderText = dict ? dict.sermons.searchPlaceholder : "Search sermons, themes, biblical references...";

  useEffect(() => {
    const q = query.trim().toLowerCase();
    
    if (q.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setIsSearching(true);
      try {
        let currentResults = [];
        const type = isGlobal ? searchType : 'sermons';

        if (type === 'sermons') {
          const index = await getIndex('/search-index.json');
          if (index) {
            const sermonsLang = index[lang] || index.en || [];
            const filtered = sermonsLang
              .filter((s) => {
                return (
                  s.title?.toLowerCase().includes(q) ||
                  s.scripture?.reference?.toLowerCase().includes(q) ||
                  s.scripture?.verse?.toLowerCase().includes(q) ||
                  (s.year && s.year.toString().includes(q))
                );
              })
              .slice(0, 15);
            
            currentResults = filtered.map(s => ({
              title: s.title,
              subtitle: isGlobal 
                ? `${s.scripture?.reference || 'Sermon'} • Vol ${s.volumeNum} (${s.year})`
                : `${dict ? dict.volume.title.replace('{num}', s.volumeNum) : `Vol. ${s.volumeNum}`} (${s.year}) · ${dict ? dict.volume.table.sermon : 'Sermon'} ${s.slug.replace('sermon-', '')}`,
              href: `/${lang}/volume/${s.volume}/${s.slug}`,
              scripture: s.scripture?.reference
            }));
          }
        } 

        else if (type === 'articles') {
          const index = await getIndex('/articles-index.json');
          if (index) {
            const articlesLang = index[lang] || [];
            const filtered = articlesLang.filter(a => a.title.toLowerCase().includes(q) || (a.desc && a.desc.toLowerCase().includes(q))).slice(0, 15);
            currentResults = filtered.map(a => ({
              title: a.title,
              subtitle: `Article • ${a.category.charAt(0).toUpperCase() + a.category.slice(1)}`,
              href: `/${lang}${a.href}`
            }));
          }
        } 
        else if (type === 'dictionary') {
          const index = await getIndex('/data/dictionary/en/search_index.json');
          if (index) {
            const filtered = index.filter(d => d.name.toLowerCase().includes(q)).slice(0, 15);
            currentResults = filtered.map(d => ({
              title: d.name,
              subtitle: `Dictionary`,
              href: `/${lang}/dictionary?q=${encodeURIComponent(d.name)}`
            }));
          }
        } 
        else if (type === 'bible') {
          const biblesMap = { en: 'kjv.json', pt: 'acf.json', es: 'rvr.json' };
          const bibleFile = biblesMap[lang] || 'kjv.json';
          const bible = await getIndex(`/bibles/${bibleFile}`);
          
          if (bible) {
            let count = 0;
            for (const book of bible) {
              for (let c = 0; c < book.chapters.length; c++) {
                const chapter = book.chapters[c];
                for (let v = 0; v < chapter.length; v++) {
                  const verse = chapter[v];
                  if (verse.toLowerCase().includes(q)) {
                    currentResults.push({
                      title: `${book.name} ${c + 1}:${v + 1}`,
                      subtitle: verse.length > 80 ? verse.substring(0, 80) + '...' : verse,
                      href: `/${lang}/bible?book=${encodeURIComponent(book.name)}&chapter=${c + 1}`
                    });
                    count++;
                    if (count >= 15) break;
                  }
                }
                if (count >= 15) break;
              }
              if (count >= 15) break;
            }
          }
        }

        setResults(currentResults);
        setIsOpen(currentResults.length > 0 || isGlobal);
      } finally {
        setIsSearching(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query, isGlobal, searchType, lang, dict]);

  // Pre-load the current index on focus
  function handleFocus() {
    const type = isGlobal ? searchType : 'sermons';
    if (type === 'sermons') getIndex('/search-index.json');

    else if (type === 'articles') getIndex('/articles-index.json');
    else if (type === 'dictionary') getIndex('/data/dictionary/en/search_index.json');
    else if (type === 'bible') {
       const biblesMap = { en: 'kjv.json', pt: 'acf.json', es: 'rvr.json' };
       getIndex(`/bibles/${biblesMap[lang] || 'kjv.json'}`);
    }
  }

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
          onFocus={handleFocus}
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
                  setTimeout(handleFocus, 0); 
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
          {results.length === 0 && !isSearching && (
             <div className="search-result-item" style={{ pointerEvents: 'none', color: 'var(--text-muted)' }}>
                No results found for {searchType}.
             </div>
          )}
          {isSearching && (
             <div className="search-result-item" style={{ pointerEvents: 'none', color: 'var(--text-muted)' }}>
                Searching...
             </div>
          )}
        </div>
      )}
    </div>
  );
}
