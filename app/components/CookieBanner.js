'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner({ lang, dict }) {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('spurgeontv_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        setPreferences(JSON.parse(consent));
      } catch (e) {
        // Ignore JSON error
      }
    }
  }, []);

  const acceptAll = () => {
    const prefs = { essential: true, analytics: true, marketing: true };
    localStorage.setItem('spurgeontv_cookie_consent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowModal(false);
  };

  const rejectNonEssential = () => {
    const prefs = { essential: true, analytics: false, marketing: false };
    localStorage.setItem('spurgeontv_cookie_consent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowModal(false);
  };

  const savePreferences = () => {
    localStorage.setItem('spurgeontv_cookie_consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowModal(false);
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Cannot toggle essential
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {showBanner && !showModal && (
        <div className="cookie-banner-wrapper">
          <div className="cookie-banner container">
            <div className="cookie-content">
              <div className="cookie-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79.88.54 1.95.84 3.09.84 2.82 0 5.25-1.92 6-4.56.97.94 1.57 2.25 1.63 3.69C17.06 11 16 12 16 13.5c0 1.25.7 2.37 1.77 2.94-.48 1.98-1.89 3.6-3.77 4.49z"/>
                  <circle cx="9" cy="15" r="1.5" />
                  <circle cx="12" cy="11.5" r="1.5" />
                  <circle cx="15.5" cy="16" r="1.5" />
                </svg>
              </div>
              <div className="cookie-text">
                <h3>{dict.cookies.bannerTitle}</h3>
                <p>
                  {dict.cookies.bannerText}{' '}
                  <Link href={`/${lang}/privacy-policy`}>{dict.cookies.policyLinks.privacy}</Link>
                  {dict.cookies.policyLinks.separator}
                  <Link href={`/${lang}/cookie-policy`}>{dict.cookies.policyLinks.cookies}</Link>
                </p>
              </div>
            </div>
            <div className="cookie-actions">
              <div className="cookie-actions-secondary">
                <button className="btn-text" onClick={() => setShowModal(true)}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '6px' }}>
                    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                  </svg>
                  {dict.cookies.btnCustomize}
                </button>
                <button className="btn-text" onClick={rejectNonEssential}>
                  {dict.cookies.btnReject}
                </button>
              </div>
              <button className="btn-primary" onClick={acceptAll}>
                {dict.cookies.btnGotIt}
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="cookie-modal-overlay">
          <div className="cookie-modal">
            <div className="cookie-modal-header">
              <h2>{dict.cookies.modalTitle}</h2>
              <button className="btn-close" onClick={() => setShowModal(false)}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              </button>
            </div>
            
            <div className="cookie-modal-body">
              <p className="cookie-modal-desc">{dict.cookies.modalText}</p>
              
              <div className="cookie-option">
                <div className="cookie-option-header">
                  <div className="cookie-option-title">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ color: 'var(--brand-purple)' }}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 19.93V2.9l7 3.11v4.99c0 4.52-2.98 8.69-7 9.93z"/></svg>
                    <h4>{dict.cookies.essential.title}</h4>
                  </div>
                  <div className="cookie-status status-active">
                    {dict.cookies.essential.status}
                  </div>
                </div>
                <p>{dict.cookies.essential.desc}</p>
                <div className="toggle toggle-disabled">
                  <div className="toggle-thumb toggle-on"></div>
                </div>
              </div>

              <div className="cookie-option" onClick={() => togglePreference('analytics')}>
                <div className="cookie-option-header">
                  <div className="cookie-option-title">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ color: 'var(--brand-gold)' }}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
                    <h4>{dict.cookies.analytics.title}</h4>
                  </div>
                  <div className="cookie-status status-optional">
                    {dict.cookies.analytics.status}
                  </div>
                </div>
                <p>{dict.cookies.analytics.desc}</p>
                <div className={`toggle ${preferences.analytics ? 'active' : ''}`}>
                  <div className={`toggle-thumb ${preferences.analytics ? 'toggle-on' : ''}`}></div>
                </div>
              </div>

              <div className="cookie-option" onClick={() => togglePreference('marketing')}>
                <div className="cookie-option-header">
                  <div className="cookie-option-title">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ color: 'var(--brand-purple)' }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
                    <h4>{dict.cookies.marketing.title}</h4>
                  </div>
                  <div className="cookie-status status-optional">
                    {dict.cookies.marketing.status}
                  </div>
                </div>
                <p>{dict.cookies.marketing.desc}</p>
                <div className={`toggle ${preferences.marketing ? 'active' : ''}`}>
                  <div className={`toggle-thumb ${preferences.marketing ? 'toggle-on' : ''}`}></div>
                </div>
              </div>
            </div>

            <div className="cookie-modal-footer">
              <button className="btn-primary" onClick={savePreferences}>
                {dict.cookies.btnSave}
              </button>
              <button className="btn-secondary" onClick={acceptAll}>
                {dict.cookies.btnGotIt}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
