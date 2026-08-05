'use client';
import { useState } from 'react';
export default function ShareButton({ title, text, url, className = '' }) {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || window.location.href;
    const shareTitle = title || document.title;
    const shareText = text || 'Spurgeon.tv';

    try {
      if (navigator.share) {
        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
      } else {
        const fallbackText = `${shareTitle} - ${shareText}. Leia em: ${shareUrl}`;
        await navigator.clipboard.writeText(fallbackText);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Error sharing', err);
      }
    }
  };

  return (
    <>
      <button onClick={handleShare} className={`btn-share ${className}`}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
        <span>Compartilhar</span>
      </button>

      {showToast && (
        <div className="share-toast">
          ✓ Link copiado!
        </div>
      )}

      <style jsx>{`
        .btn-share {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--border);
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          color: var(--text-secondary);
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .btn-share:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--text-primary);
          color: var(--text-primary);
        }
        .dev-share-large {
          width: 100%;
          max-width: 400px;
          padding: 1.2rem;
          border-radius: 12px;
          background: rgba(212,175,55,0.08);
          border: 1px solid var(--brand-gold, #d4af37);
          color: var(--brand-gold, #d4af37);
          font-size: 1.1rem;
        }
        .dev-share-large:hover {
          background: rgba(212,175,55,0.15);
          border-color: var(--brand-gold, #d4af37);
          color: var(--brand-gold, #d4af37);
        }
        .share-toast {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: var(--brand-gold, #d4af37);
          color: #000;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 9999;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, 1rem); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </>
  );
}
