'use client';

import { useState, useEffect, useRef } from 'react';

export default function TTSPlayer({ text, lang = 'pt', dict }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  const utteranceRef = useRef(null);

  useEffect(() => {
    return () => {
      if (synth) {
        synth.cancel();
      }
    };
  }, [synth]);

  // Clean up if text changes
  useEffect(() => {
    if (synth && isPlaying) {
      synth.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, [text, synth]);

  const togglePlay = () => {
    if (!synth) return;

    if (isPlaying) {
      if (isPaused) {
        synth.resume();
        setIsPaused(false);
      } else {
        synth.pause();
        setIsPaused(true);
      }
    } else {
      if (!text) return;
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Determine language code
      if (lang === 'pt') utterance.lang = 'pt-BR';
      else if (lang === 'es') utterance.lang = 'es-ES';
      else utterance.lang = 'en-US';

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      utterance.onerror = (e) => {
        console.error('TTS Error', e);
        setIsPlaying(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      synth.speak(utterance);
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const stopPlay = () => {
    if (synth) {
      synth.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  const tooltipText = lang === 'pt' 
    ? 'A leitura em áudio é automatizada (gerada por robô) para disponibilidade imediata. Nosso projeto futuro é ter leituras 100% humanizadas.'
    : lang === 'es'
    ? 'La lectura en audio es automatizada (generada por robot) para disponibilidad inmediata. Nuestro proyecto futuro es tener lecturas 100% humanizadas.'
    : 'Audio reading is currently automated (robot-generated) for immediate availability. Our future project is to have 100% human-voiced readings.';

  return (
    <div className="tts-container" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--surface)', padding: '0.4rem 0.8rem', borderRadius: '20px', border: '1px solid var(--border)', fontSize: '0.9rem' }}>
      <button 
        onClick={togglePlay}
        style={{ background: 'none', border: 'none', color: 'var(--brand-gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}
        title={isPlaying && !isPaused ? 'Pausar' : 'Ouvir (Automático)'}
      >
        {isPlaying && !isPaused ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
        <span>{isPlaying && !isPaused ? 'Pausar' : 'Ouvir'}</span>
      </button>

      {isPlaying && (
        <button 
          onClick={stopPlay}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          title="Parar"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="6" width="12" height="12" />
          </svg>
        </button>
      )}

      <div 
        style={{ position: 'relative', display: 'flex', alignItems: 'center', marginLeft: '0.2rem' }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
      >
        <span style={{ color: 'var(--text-muted)', cursor: 'help', fontSize: '0.8rem', width: '18px', height: '18px', borderRadius: '50%', border: '1px solid var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          i
        </span>
        
        {showTooltip && (
          <div style={{
            position: 'absolute',
            bottom: '120%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'var(--surface-light, #2a2a2a)',
            color: 'var(--text)',
            padding: '0.75rem',
            borderRadius: '8px',
            fontSize: '0.8rem',
            width: '240px',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            border: '1px solid var(--border)',
            zIndex: 100,
            lineHeight: 1.4
          }}>
            {tooltipText}
          </div>
        )}
      </div>
    </div>
  );
}
