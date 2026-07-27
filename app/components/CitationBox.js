'use client';

import { useState, useEffect } from 'react';

/**
 * CitationBox — Exibe a referência bibliográfica canônica para cada tipo de conteúdo.
 *
 * Props:
 *   type        : 'sermon' | 'devotional' | 'article' | 'bible' | 'dictionary' | 'video'
 *   lang        : 'pt' | 'en' | 'es'
 *   url         : URL completa da página (passada pelo Server Component)
 *   title       : Título do conteúdo (sermão, artigo, etc.)
 *   sermonNum   : Número do sermão (apenas para type='sermon')
 *   date        : Data de publicação do artigo (apenas para type='article'), ex: "2023"
 *   videoUrl    : URL original do vídeo no YouTube (apenas para type='video')
 *   bibleRef    : Referência da passagem bíblica exibida (apenas para type='bible')
 *   dictEntry   : Verbete do dicionário (apenas para type='dictionary')
 */
export default function CitationBox({ type, lang, url, title, sermonNum, date, videoUrl, bibleRef, dictEntry, isTranslated, isAutoTranslated, compact }) {
  const [accessDate, setAccessDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    setAccessDate(`${day}/${month}/${year}`);
  }, []);

  const i18n = {
    pt: {
      warning: 'Não se esqueça de citar a Referência abaixo ao utilizar este conteúdo!',
      available: 'Disponível em:',
      access: 'Acesso em:',
      sermonLabel: 'Sermão nº',
      inProject: 'In: Projeto Charles Spurgeon TV.',
      devotionalLabel: 'Devocional',
      authorOrg: 'CHARLES SPURGEON TV, Equipe Editorial.',
      team: 'Equipe Editorial.',
      bibleLabel: 'Bíblia Sagrada — Passagem:',
      dictLabel: 'Dicionário Teológico Spurgeon TV — Verbete:',
      videoLabel: 'Vídeo. Link original:',
    },
    en: {
      warning: 'Don\'t forget to cite the Reference below when using this content!',
      available: 'Available at:',
      access: 'Accessed:',
      sermonLabel: 'Sermon No.',
      inProject: 'In: Charles Spurgeon TV Project.',
      devotionalLabel: 'Devotional',
      authorOrg: 'CHARLES SPURGEON TV, Editorial Team.',
      team: 'Editorial Team.',
      bibleLabel: 'Holy Bible — Passage:',
      dictLabel: 'Spurgeon TV Theological Dictionary — Entry:',
      videoLabel: 'Video. Original link:',
    },
    es: {
      warning: '¡No olvides citar la Referencia a continuación al usar este contenido!',
      available: 'Disponible en:',
      access: 'Acceso:',
      sermonLabel: 'Sermón nº',
      inProject: 'En: Proyecto Charles Spurgeon TV.',
      devotionalLabel: 'Devocional',
      authorOrg: 'CHARLES SPURGEON TV, Equipo Editorial.',
      team: 'Equipo Editorial.',
      bibleLabel: 'Santa Biblia — Pasaje:',
      dictLabel: 'Diccionario Teológico Spurgeon TV — Entrada:',
      videoLabel: 'Video. Enlace original:',
    },
  };

  const t = i18n[lang] || i18n.en;

  let citation = '';

  if (type === 'sermon') {
    // Base citation
    let translatorNote = '';
    if (lang !== 'en' && isTranslated && !isAutoTranslated) {
      // Human-identified translator (currently only ES: Allan Román)
      const translatorName = lang === 'es' ? 'ROMÁN, Allan (trad.)' : '';
      if (translatorName) {
        translatorNote = ` ${translatorName}.`;
      }
    } else if (lang !== 'en' && isTranslated && isAutoTranslated) {
      // Auto-translated: note it but do not attribute a human name
      const autoNote = lang === 'pt'
        ? ' Tradução semi-automatizada.'
        : lang === 'es'
        ? ' Traducción semi-automatizada.'
        : '';
      translatorNote = autoNote;
    }
    // SPURGEON, Charles H. Rest For The Laboring (Sermon nº 1322). In: Project Charles Spurgeon TV. Disponível em: https://...
    citation = `SPURGEON, Charles H. ${title || ''}${sermonNum ? ` (${t.sermonLabel} ${sermonNum})` : ''}.${translatorNote} ${t.inProject} ${t.available} ${url}. ${t.access} ${accessDate}.`;
  } else if (type === 'devotional') {
    // SPURGEON, Charles H. Devocional — [Título]. In: Project Charles Spurgeon TV. Disponível em: ...
    citation = `SPURGEON, Charles H. ${t.devotionalLabel}${title ? ` — ${title}` : ''}. ${t.inProject} ${t.available} ${url}. ${t.access} ${accessDate}.`;
  } else if (type === 'article') {
    // CHARLES SPURGEON TV, Equipe Editorial, [Ano]. Disponível em: https://...
    citation = `${t.authorOrg} ${title || ''}${date ? `, ${date}` : ''}. ${t.available} ${url}. ${t.access} ${accessDate}.`;
  } else if (type === 'bible') {
    // Bible citation with public domain note
    const bibleSource = lang === 'pt'
      ? 'Texto bíblico em domínio público.'
      : lang === 'es'
      ? 'Texto bíblico de dominio público.'
      : 'Public domain biblical text.';
    citation = `${t.bibleLabel}${bibleRef ? ` ${bibleRef}.` : ''} ${bibleSource} ${t.inProject} ${t.available} ${url}. ${t.access} ${accessDate}.`;
  } else if (type === 'dictionary') {
    // Dictionary citation with three source works
    const sources = lang === 'pt'
      ? `Baseado em: EASTON, M. G. Illustrated Bible Dictionary, 3. ed. Thomas Nelson, 1897; SMITH, William. Smith's Bible Dictionary. Hendrickson, 1884; HITCHCOCK, Roswell D. Hitchcock's Bible Names Dictionary. [s.d.].`
      : lang === 'es'
      ? `Basado en: EASTON, M. G. Illustrated Bible Dictionary, 3. ed. Thomas Nelson, 1897; SMITH, William. Smith's Bible Dictionary. Hendrickson, 1884; HITCHCOCK, Roswell D. Hitchcock's Bible Names Dictionary. [s.f.].`
      : `Based on: EASTON, M. G. Illustrated Bible Dictionary, 3rd ed. Thomas Nelson, 1897; SMITH, William. Smith's Bible Dictionary. Hendrickson, 1884; HITCHCOCK, Roswell D. Hitchcock's Bible Names Dictionary. [n.d.].`;
    citation = `${t.dictLabel}${dictEntry ? ` "${dictEntry}".` : ''} CHARLES SPURGEON TV, ${t.team} ${t.available} ${url}. ${t.access} ${accessDate}. ${sources}`;
  } else if (type === 'video') {
    // Vídeo com link original
    citation = `CHARLES SPURGEON TV. ${title || ''}. ${t.videoLabel} ${videoUrl || url}. ${t.available} ${url}. ${t.access} ${accessDate}.`;
  }

  if (!citation || !accessDate) return null;

  return (
    <aside className={`citation-box${compact ? ' citation-box--compact' : ''}`} role="note" aria-label="Referência bibliográfica">
      <div className="citation-box__icon" aria-hidden="true">⚠️</div>
      <div className="citation-box__body">
        <strong className="citation-box__warning">{t.warning}</strong>
        <p className="citation-box__text">{citation}</p>
      </div>
    </aside>
  );
}
