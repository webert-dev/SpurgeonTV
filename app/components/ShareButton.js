'use client';

export default function ShareButton({ title, text }) {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copiado!');
      }
    } catch (err) {
      console.error('Error sharing', err);
    }
  };

  return (
    <button onClick={handleShare} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: '1px solid var(--border)', padding: '0.8rem 1.5rem', borderRadius: '8px', color: 'var(--text-secondary)', cursor: 'pointer', fontWeight: '500', transition: 'background 0.2s' }} className="btn-share">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
      {text}
      <style jsx>{`
        .btn-share:hover {
          background: rgba(255,255,255,0.05) !important;
          border-color: var(--text-primary) !important;
        }
      `}</style>
    </button>
  );
}
