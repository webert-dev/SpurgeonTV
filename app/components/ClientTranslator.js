'use client';

import { useEffect } from 'react';

export default function ClientTranslator({ targetLang = 'en', dict }) {
  useEffect(() => {
    if (targetLang === 'en') return;

    // Load Google Translate script
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: targetLang,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };
    }
  }, [targetLang]);

  if (targetLang === 'en') return null;

  return (
    <div className="client-translator-wrapper my-8 p-6 border border-zinc-800 bg-zinc-900/50 rounded-xl text-center shadow-inner">
      <p className="text-sm text-zinc-400 mb-4 max-w-lg mx-auto">
        {targetLang === 'pt' ? 'Este sermão está temporariamente disponível apenas em Inglês. Use a ferramenta abaixo para traduzir o conteúdo desta página.' : 'Este sermón está temporalmente disponible solo en inglés. Utilice la herramienta a continuación para traducir el contenido de esta página.'}
      </p>
      <div id="google_translate_element" className="inline-block" />
      <style dangerouslySetInnerHTML={{ __html: `
        .goog-te-gadget-simple {
          background-color: #18181b !important;
          border: 1px solid #3f3f46 !important;
          border-radius: 0.5rem !important;
          padding: 0.75rem 1.5rem !important;
          color: #d4d4d8 !important;
          font-family: inherit !important;
          transition: all 0.2s;
        }
        .goog-te-gadget-simple:hover {
          background-color: #27272a !important;
          border-color: #52525b !important;
        }
        .goog-te-gadget-simple span {
          color: #d4d4d8 !important;
          font-weight: 500 !important;
        }
        .goog-te-gadget-simple img {
          display: none !important;
        }
        /* Hide the Google banner at the top */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }
        body {
          top: 0px !important;
        }
      `}} />
    </div>
  );
}
