'use client';

import { useEffect } from 'react';

export default function CopyAppendURL({ lang }) {
  useEffect(() => {
    const handleCopy = (e) => {
      const selection = window.getSelection();
      if (!selection || selection.toString().trim().length === 0) return;

      const selectedText = selection.toString();
      
      // Only append if the text is long enough (e.g., > 30 characters)
      if (selectedText.length < 30) return;

      const pageUrl = window.location.href;
      
      let readMore = 'Leia mais em:';
      if (lang === 'es') readMore = 'Lee más en:';
      if (lang === 'en') readMore = 'Read more at:';

      const appendText = `\n\n—\n${readMore} ${pageUrl}\n© Spurgeon.tv`;

      e.clipboardData.setData('text/plain', selectedText + appendText);
      e.preventDefault();
    };

    document.addEventListener('copy', handleCopy);
    return () => document.removeEventListener('copy', handleCopy);
  }, [lang]);

  return null;
}
