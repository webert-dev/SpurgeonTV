'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useBibleSettings } from './BibleSettingsProvider';

const BIBLE_BOOKS = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth',
  '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra',
  'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon',
  'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
  'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
  'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians',
  'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
  '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter',
  '1 John', '2 John', '3 John', 'Jude', 'Revelation'
];
export function BibleTooltipRenderer({ dict }) {
  const { integrationEnabled, isLoaded, tooltipTranslation } = useBibleSettings();
  const [hoveredRef, setHoveredRef] = useState(null);
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  
  const bibleCache = useRef({});
  const hideTimeoutRef = useRef(null);

  // Auto-fetch data whenever translation or hoveredRef changes
  useEffect(() => {
    if (!hoveredRef) return;

    const parts = hoveredRef.split('-');
    const book = parts[0];
    const chapter = parseInt(parts[1], 10);
    const verse = parseInt(parts[2], 10);
    const endVerse = parts[3] ? parseInt(parts[3], 10) : null;

    let isMounted = true;

    const fetchAndSet = async () => {
      setTooltipData({ loading: true, book, chapter, verse, endVerse });

      let data = bibleCache.current[tooltipTranslation];
      if (!data) {
        try {
          const res = await fetch(`/bibles/${tooltipTranslation}.json`);
          if (res.ok) {
            data = await res.json();
            bibleCache.current[tooltipTranslation] = data;
          }
        } catch (err) {
          console.error("Failed to fetch bible data", err);
        }
      }

      if (!isMounted) return;

      if (data) {
        const bookIndex = BIBLE_BOOKS.findIndex(b => b === book);
        if (bookIndex !== -1 && data[bookIndex]) {
          const chapterData = data[bookIndex].chapters[chapter - 1];
          if (chapterData) {
            let versesText = [];
            if (endVerse) {
              for (let v = verse; v <= endVerse; v++) {
                if (chapterData[v - 1]) versesText.push(`[${v}] ${chapterData[v - 1]}`);
              }
            } else {
              if (chapterData[verse - 1]) versesText.push(`[${verse}] ${chapterData[verse - 1]}`);
            }
            
            setTooltipData({
              loading: false,
              book,
              chapter,
              verse,
              endVerse,
              text: versesText.length > 0 ? versesText.join(' ') : (dict ? dict.bible.reader.notAvailable : 'Verse not found in this translation.'),
              bookLocalName: data[bookIndex].name
            });
            return;
          }
        }
      }

      setTooltipData({
        loading: false,
        book,
        chapter,
        verse,
        endVerse,
        text: dict ? dict.bible.reader.notAvailable : 'Text not available.',
        bookLocalName: book
      });
    };

    fetchAndSet();

    return () => {
      isMounted = false;
    };
  }, [hoveredRef, tooltipTranslation, dict]);

  // Event listener attachment
  useEffect(() => {
    if (!integrationEnabled || !isLoaded) return;

    const handleMouseOver = (e) => {
      const target = e.target.closest('.bible-ref-marker');
      if (!target) return;

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      const book = target.getAttribute('data-book');
      const chapter = target.getAttribute('data-chapter');
      const verse = target.getAttribute('data-verse');
      const endVerse = target.getAttribute('data-end-verse') || '';

      const rect = target.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + 10,
        left: Math.max(10, rect.left - 100),
      });

      const refKey = `${book}-${chapter}-${verse}-${endVerse}`;
      setHoveredRef(refKey);
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('.bible-ref-marker');
      if (!target) return;

      hideTimeoutRef.current = setTimeout(() => {
        setHoveredRef(null);
      }, 300);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [integrationEnabled, isLoaded]);

  if (!hoveredRef || !tooltipData) return null;

  return (
    <div 
      className="bible-tooltip-popover"
      style={{
        position: 'fixed',
        top: `${tooltipPosition.top}px`,
        left: `${tooltipPosition.left}px`,
        zIndex: 999999,
        maxWidth: '350px',
        width: '100%',
        background: 'var(--background)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
      onMouseEnter={() => {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      }}
      onMouseLeave={() => {
        setHoveredRef(null);
      }}
    >
      <div className="bible-tooltip-header" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ color: 'var(--accent)', fontSize: '0.95rem' }}>
          {tooltipData.loading ? (dict ? dict.bible.reader.loading : 'Loading...') : `${tooltipData.bookLocalName || tooltipData.book} ${tooltipData.chapter}:${tooltipData.verse}${tooltipData.endVerse ? `-${tooltipData.endVerse}` : ''}`}
        </strong>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', background: 'var(--surface-hover)', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>
          {tooltipTranslation}
        </span>
      </div>
      <div className="bible-tooltip-body" style={{ padding: '1rem', maxHeight: '200px', overflowY: 'auto' }}>
        <div className="bible-tooltip-text" style={{ fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text)' }}>
          {tooltipData.loading ? (dict ? dict.bible.reader.loading : 'Loading...') : tooltipData.text}
        </div>
      </div>
    </div>
  );
}
