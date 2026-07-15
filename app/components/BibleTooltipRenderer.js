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
  const { integrationEnabled, tooltipTranslation, isLoaded } = useBibleSettings();
  const [hoveredRef, setHoveredRef] = useState(null);
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [bibleCache, setBibleCache] = useState({});
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    if (!integrationEnabled || !isLoaded) return;

    const handleMouseOver = async (e) => {
      const target = e.target.closest('.bible-ref-marker');
      if (!target) {
        // If we moved out of marker but into the tooltip, don't hide
        if (e.target.closest('.bible-tooltip-popover')) return;
        
        hideTimeoutRef.current = setTimeout(() => {
          setHoveredRef(null);
        }, 300);
        return;
      }

      // We are hovering over a marker
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

      const book = target.getAttribute('data-book');
      const chapter = parseInt(target.getAttribute('data-chapter'), 10);
      const verse = parseInt(target.getAttribute('data-verse'), 10);
      const endVerse = target.getAttribute('data-end-verse') ? parseInt(target.getAttribute('data-end-verse'), 10) : null;

      const rect = target.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + window.scrollY + 10,
        left: Math.max(10, rect.left + window.scrollX - 100), // Center roughly, keep on screen
      });

      const refKey = `${book}-${chapter}-${verse}-${endVerse || ''}`;
      if (hoveredRef === refKey) return; // Already showing

      setHoveredRef(refKey);
      setTooltipData({ loading: true, book, chapter, verse, endVerse });

      // Fetch or use cache
      let bibleData = bibleCache[tooltipTranslation];
      if (!bibleData) {
        try {
          const res = await fetch(`/bibles/${tooltipTranslation}.json`);
          if (res.ok) {
            bibleData = await res.json();
            setBibleCache(prev => ({ ...prev, [tooltipTranslation]: bibleData }));
          }
        } catch (err) {
          console.error("Failed to load bible translation", err);
        }
      }

      if (bibleData) {
        const bookIndex = BIBLE_BOOKS.findIndex(b => b === book);
        if (bookIndex !== -1 && bibleData[bookIndex]) {
          const chapterData = bibleData[bookIndex].chapters[chapter - 1];
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
              bookLocalName: bibleData[bookIndex].name
            });
            return;
          }
        }
      }
      
      setTooltipData(prev => ({ ...prev, loading: false, text: dict ? dict.bible.reader.notAvailable : 'Text not available.' }));
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('.bible-ref-marker');
      if (target) {
        hideTimeoutRef.current = setTimeout(() => {
          setHoveredRef(null);
        }, 300);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [integrationEnabled, isLoaded, tooltipTranslation, bibleCache, hoveredRef, dict]);

  if (!integrationEnabled || !hoveredRef || !tooltipData) return null;

  return (
    <div 
      className="bible-tooltip-popover"
      style={{
        position: 'absolute',
        top: `${tooltipPosition.top}px`,
        left: `${tooltipPosition.left}px`,
        zIndex: 1000,
        maxWidth: '350px',
        width: '100%',
      }}
      onMouseEnter={() => {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      }}
      onMouseLeave={() => {
        hideTimeoutRef.current = setTimeout(() => {
          setHoveredRef(null);
        }, 300);
      }}
    >
      {tooltipData.loading ? (
        <div className="bible-tooltip-loading">{dict ? dict.bible.reader.loading : 'Loading...'}</div>
      ) : (
        <>
          <div className="bible-tooltip-header">
            <strong>{tooltipData.bookLocalName || tooltipData.book} {tooltipData.chapter}:{tooltipData.verse}{tooltipData.endVerse ? `-${tooltipData.endVerse}` : ''}</strong>
            <span className="bible-tooltip-translation">{tooltipTranslation.toUpperCase()}</span>
          </div>
          <div className="bible-tooltip-body">
            {tooltipData.text}
          </div>
        </>
      )}
    </div>
  );
}
