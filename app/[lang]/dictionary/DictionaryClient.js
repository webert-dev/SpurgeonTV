'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import '../../dictionary.css';

export default function DictionaryClient({ lang }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [currentLetter, setCurrentLetter] = useState(initialQuery ? '' : 'a');
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(!!initialQuery);
  const searchIndexRef = useRef(null);

  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');

  // Load words for the selected letter
  useEffect(() => {
    if (isSearching) return;
    
    async function fetchLetter() {
      setIsLoading(true);
      try {
        const res = await fetch(`/data/dictionary/${lang}/${currentLetter}.json`);
        if (res.ok) {
          const data = await res.json();
          // Data is an object { "A": { name: "A", definitions: [...] }, "Aaron": ... }
          // Convert to array and sort
          const wordsArray = Object.values(data).sort((a, b) => a.name.localeCompare(b.name));
          setWords(wordsArray);
          if (wordsArray.length > 0) {
            setSelectedWord(wordsArray[0]);
          } else {
            setSelectedWord(null);
          }
        } else {
          setWords([]);
          setSelectedWord(null);
        }
      } catch (error) {
        console.error("Error fetching letter:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchLetter();
  }, [currentLetter, isSearching, lang]);

  // Handle Search
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.trim().length === 0) {
        setIsSearching(false);
        return;
      }
      
      setIsSearching(true);
      setIsLoading(true);
      try {
        if (!searchIndexRef.current) {
          let res = await fetch(`/data/dictionary/${lang}/search_index.json`);
          if (!res.ok) {
            res = await fetch(`/data/dictionary/en/search_index.json`);
          }
          if (res.ok) {
            searchIndexRef.current = await res.json();
          } else {
            searchIndexRef.current = [];
          }
        }

        const q = query.toLowerCase();
        let results = searchIndexRef.current.filter(item => item.name.toLowerCase().includes(q));
        
        results.sort((a, b) => {
          const aStarts = a.name.toLowerCase().startsWith(q) ? -1 : 1;
          const bStarts = b.name.toLowerCase().startsWith(q) ? -1 : 1;
          if (aStarts !== bStarts) return aStarts - bStarts;
          return a.name.length - b.name.length;
        });

        results = results.slice(0, 50);

        setWords(results);
        if (results.length > 0) {
          fetchWordDetails(results[0].slug, results[0].letter);
        } else {
          setSelectedWord(null);
        }
      } catch (error) {
        console.error("Error searching:", error);
      } finally {
        setIsLoading(false);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query, lang]);

  async function fetchWordDetails(slug, letter) {
    if (!letter) {
      // If we don't have the letter, it might be the first char of slug
      letter = slug.charAt(0).toLowerCase();
    }
    try {
      const res = await fetch(`/data/dictionary/${lang}/${letter}.json`);
      if (res.ok) {
        const data = await res.json();
        // Find the word by slug in the letter data
        const wordData = Object.values(data).find(w => w.slug === slug);
        if (wordData) {
          setSelectedWord(wordData);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  function handleWordClick(word) {
    if (isSearching) {
      fetchWordDetails(word.slug, word.letter);
    } else {
      setSelectedWord(word);
    }
  }

  function getSourceName(code) {
    const sources = {
      "EAS": "Easton's Bible Dictionary",
      "SMI": "Smith's Bible Dictionary",
      "HIT": "Hitchcock's Bible Names"
    };
    return sources[code] || code;
  }

  return (
    <div className="dictionary-container">
      <header className="dictionary-header">
        <h1 className="dictionary-title">Theological & Biblical Dictionary</h1>
        <div className="dictionary-credits">
          <p>Easton's Bible Dictionary (1897) • Smith's Bible Dictionary (1884) • Hitchcock's Bible Names</p>
        </div>
      </header>

      <div className="dictionary-search">
        <input 
          type="text" 
          className="dictionary-search-input"
          placeholder="Search for a term..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {!isSearching && (
        <div className="dictionary-alphabet">
          {alphabet.map(letter => (
            <button 
              key={letter}
              className={`alphabet-btn ${currentLetter === letter ? 'active' : ''}`}
              onClick={() => setCurrentLetter(letter)}
            >
              {letter.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      <div className="dictionary-content">
        <div className="dictionary-list">
          {isLoading ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>
          ) : words.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center' }}>No terms found.</div>
          ) : (
            words.map((word, idx) => (
              <div 
                key={idx} 
                className={`dictionary-list-item ${selectedWord?.slug === word.slug ? 'active' : ''}`}
                onClick={() => handleWordClick(word)}
              >
                <div className="dictionary-list-item-title">{word.name}</div>
              </div>
            ))
          )}
        </div>

        <div className="dictionary-details">
          {selectedWord ? (
            <>
              <h2 className="details-title">{selectedWord.name}</h2>
              {selectedWord.definitions && selectedWord.definitions.map((def, idx) => (
                <div key={idx} className="definition-card">
                  <div className="definition-source">{getSourceName(def.source)}</div>
                  <div className="definition-text">
                    {def.text.split('\n').map((paragraph, i) => (
                      paragraph.trim() ? <p key={i}>{paragraph}</p> : null
                    ))}
                  </div>
                </div>
              ))}
              {!selectedWord.definitions && isSearching && (
                <div>Loading definitions...</div>
              )}
            </>
          ) : (
            <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-muted)' }}>
              Select a term to read its definition.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
