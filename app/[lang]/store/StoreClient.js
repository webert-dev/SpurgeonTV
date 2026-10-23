'use client';

import { useState, useMemo } from 'react';

export default function StoreClient({ products, lang, dict }) {
  const [paymentFilter, setPaymentFilter] = useState('all'); // 'all', 'paid', 'free'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Localization for UI elements only
  const t = useMemo(() => {
    return {
      pt: {
        title: 'Livraria Spurgeon TV',
        description: 'Excelentes recomendações para o seu crescimento bíblico.',
        quote: '“Visite muitos bons livros, mas viva na Bíblia.” — C. H. Spurgeon',
        searchPlaceholder: 'Pesquise por título, autor ou tema...',
        filterLabel: 'Filtrar',
        filterAll: 'Todos os Recursos',
        filterPaid: 'Recursos Pagos',
        filterFree: 'Recursos Gratuitos',
        resultsCount: (c) => `${c} ${c === 1 ? 'recurso' : 'recursos'}`,
        noResults: 'Nenhum recurso encontrado para esta busca.',
        clearFilters: 'Limpar busca',
        viewDetails: 'Ver mais Detalhes',
        checkPriceOn: (platform) => `Conferir Valor na ${platform} ↗`,
        freeDownload: 'Acessar Download Gratuito ↗',
        pricingNoticeLabel: 'Valores e Condições:',
        pricingNoticeValue: 'Consulte as condições vigentes diretamente na loja oficial.',
        freeResource: 'Recurso 100% Gratuito',
        audienceTitle: 'PARA QUEM É INDICADO:',
        highlightsTitle: 'O QUE VOCÊ VAI ENCONTRAR:',
        detailsTitle: 'FICHA TÉCNICA',
        close: 'Fechar',
        transparencyTitle: 'Apoio à Missão',
        transparencyDesc: 'Ao adquirir livros e cursos pelos nossos links de afiliados, você apoia diretamente a manutenção dos servidores, a manutenção do projeto e o trabalho contínuo de traduções'
      },
      en: {
        title: 'Spurgeon TV Bookshop',
        description: 'Excellent recommendations for your biblical growth.',
        quote: '“Visit many good books, but live in the Bible.” — C. H. Spurgeon',
        searchPlaceholder: 'Search by title, author or topic...',
        filterLabel: 'Filter',
        filterAll: 'All Resources',
        filterPaid: 'Paid Resources',
        filterFree: 'Free Resources',
        resultsCount: (c) => `${c} ${c === 1 ? 'resource' : 'resources'}`,
        noResults: 'No resources found matching your search.',
        clearFilters: 'Clear search',
        viewDetails: 'View Details',
        checkPriceOn: (platform) => `Check Price on ${platform} ↗`,
        freeDownload: 'Access Free Download ↗',
        pricingNoticeLabel: 'Pricing & Availability:',
        pricingNoticeValue: 'Check current conditions directly on the official store.',
        freeResource: '100% Free Resource',
        audienceTitle: 'TARGET AUDIENCE:',
        highlightsTitle: 'WHAT YOU WILL FIND:',
        detailsTitle: 'SPECIFICATIONS',
        close: 'Close',
        transparencyTitle: 'Support the Mission',
        transparencyDesc: 'When purchasing books and courses through our affiliate links, you directly support server hosting, project maintenance, and continuous translation efforts.'
      },
      es: {
        title: 'Librería Spurgeon TV',
        description: 'Excelentes recomendaciones para su crecimiento bíblico.',
        quote: '“Visite muchos buenos libros, pero viva en la Biblia.” — C. H. Spurgeon',
        searchPlaceholder: 'Buscar por título, autor o tema...',
        filterLabel: 'Filtrar',
        filterAll: 'Todos los Recursos',
        filterPaid: 'Recursos de Pago',
        filterFree: 'Recursos Gratuitos',
        resultsCount: (c) => `${c} ${c === 1 ? 'recurso' : 'recursos'}`,
        noResults: 'No se encontraron recursos con este criterio.',
        clearFilters: 'Limpiar búsqueda',
        viewDetails: 'Ver más Detalles',
        checkPriceOn: (platform) => `Consultar Valor en ${platform} ↗`,
        freeDownload: 'Acceder a Descarga Gratuita ↗',
        pricingNoticeLabel: 'Precio y Condiciones:',
        pricingNoticeValue: 'Consulte las condiciones vigentes directamente en la tienda oficial.',
        freeResource: 'Recurso 100% Gratuito',
        audienceTitle: 'PARA QUIÉN ESTÁ INDICADO:',
        highlightsTitle: 'LO QUE ENCONTRARÁ:',
        detailsTitle: 'FICHA TÉCNICA',
        close: 'Cerrar',
        transparencyTitle: 'Apoyo a la Misión',
        transparencyDesc: 'Al adquirir libros y cursos a través de nuestros enlaces de afiliados, usted apoya directamente el mantenimiento de los servidores, el sostenimiento del proyecto y el trabajo continuo de traducciones.'
      }
    }[lang] || {};
  }, [lang]);

  // Filtered products (Paid vs Free + Search)
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Payment filter: 'all', 'paid', 'free'
      if (paymentFilter === 'paid' && product.pricingType !== 'paid') {
        return false;
      }
      if (paymentFilter === 'free' && product.pricingType !== 'free') {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = product.title?.toLowerCase().includes(q);
        const matchesAuthor = product.author?.toLowerCase().includes(q);
        const matchesDesc = product.shortDesc?.toLowerCase().includes(q) || product.fullDesc?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesAuthor && !matchesDesc) return false;
      }

      return true;
    });
  }, [products, paymentFilter, searchQuery]);



  return (
    <div className="store-container">
      {/* ── HERO HEADER (Clean & Compact) ── */}
      <header className="store-hero">
        <h1 className="store-hero-eyebrow">
          <span>🏛️</span> {t.title}
        </h1>
        <p className="store-hero-subtitle">
          {t.description}
        </p>
        <div className="store-hero-quote">
          {t.quote}
        </div>
      </header>

      {/* ── CONTROLS BAR (Direct & Minimalist) ── */}
      <div className="store-controls" style={{ padding: '0.85rem 1.25rem', gap: '0.75rem' }}>
        <div className="store-search-row">
          <div className="store-search-wrapper">
            <svg className="store-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="store-search-input"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.filterLabel}:</span>
            <select
              className="store-sort-select"
              value={paymentFilter}
              onChange={(e) => setPaymentFilter(e.target.value)}
              aria-label={t.filterLabel}
            >
              <option value="all">{t.filterAll}</option>
              <option value="paid">{t.filterPaid}</option>
              <option value="free">{t.filterFree}</option>
            </select>
          </div>

          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
            {t.resultsCount(filteredProducts.length)}
          </span>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--surface)', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            {t.noResults}
          </p>
          <button
            className="store-btn-details"
            style={{ display: 'inline-block' }}
            onClick={() => { setPaymentFilter('all'); setSearchQuery(''); }}
          >
            {t.clearFilters}
          </button>
        </div>
      ) : (
        <div className="store-grid">
          {filteredProducts.map((product) => {
            const isFree = product.pricingType === 'free';

            return (
              <article key={product.id} className="store-card">
                {/* Image without any platform overlay */}
                <div className="store-card-image-wrap">
                  {product.badge && (
                    <span className="store-card-badge">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="store-card-img"
                    loading="lazy"
                  />
                </div>

                {/* Body Content */}
                <div className="store-card-body">
                  <h3 className="store-card-title">{product.title}</h3>
                  <p className="store-card-author">{product.author}</p>
                  <p className="store-card-desc">{product.shortDesc}</p>

                  {/* Bottom Actions: Only two clean buttons without floating labels */}
                  <div className="store-card-actions">
                    <button
                      className="store-btn-details"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {t.viewDetails}
                    </button>

                    <a
                      href={product.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="store-btn-buy"
                    >
                      {isFree ? t.freeDownload : t.checkPriceOn(product.platform)}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* ── ETHICAL TRANSPARENCY & MISSION SUPPORT ── */}
      <section className="store-transparency-box">
        <div className="store-transparency-icon">
          ⚖️
        </div>
        <div>
          <h2 className="store-transparency-title">{t.transparencyTitle}</h2>
          <p className="store-transparency-desc">{t.transparencyDesc}</p>
        </div>
      </section>

      {/* ── QUICK VIEW MODAL (Rich Information) ── */}
      {selectedProduct && (() => {
        const isFree = selectedProduct.pricingType === 'free';

        return (
          <div className="store-modal-overlay" onClick={() => setSelectedProduct(null)}>
            <div className="store-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="store-modal-close"
                onClick={() => setSelectedProduct(null)}
                aria-label={t.close}
              >
                ✕
              </button>

              <div className="store-modal-grid">
                <div className="store-modal-image-wrap">
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="store-modal-img" />
                </div>

                <div className="store-modal-info">
                  <h2 className="store-modal-title">{selectedProduct.title}</h2>
                  <p className="store-modal-author">{selectedProduct.author}</p>
                  
                  {/* Comprehensive synopsis paragraphs */}
                  <div className="store-modal-desc">
                    {selectedProduct.fullDesc.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Target Audience */}
                  {selectedProduct.targetAudience && (
                    <div className="store-modal-audience">
                      <h3 className="store-modal-audience-title">{t.audienceTitle}</h3>
                      <p className="store-modal-audience-text">{selectedProduct.targetAudience}</p>
                    </div>
                  )}

                  {/* Highlights / What You Will Find */}
                  {selectedProduct.highlights && selectedProduct.highlights.length > 0 && (
                    <div className="store-modal-highlights">
                      <h3 className="store-modal-highlights-title">{t.highlightsTitle}</h3>
                      <ul className="store-modal-highlights-list">
                        {selectedProduct.highlights.map((h, i) => (
                          <li key={i}>
                            <span className="check">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Detailed Specs Grid (Clean - no repeated platform mentions) */}
                  {selectedProduct.specs && Object.keys(selectedProduct.specs).length > 0 && (
                    <div>
                      <h3 className="store-modal-highlights-title" style={{ marginBottom: '0.5rem' }}>{t.detailsTitle}</h3>
                      <div className="store-modal-specs">
                        {Object.entries(selectedProduct.specs).map(([k, v]) => (
                          <div key={k} className="store-modal-spec-item">
                            <span className="store-modal-spec-label">{k}</span>
                            <span className="store-modal-spec-value">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Modal Footer */}
                  <div className="store-modal-footer">
                    <div className="store-modal-price-box">
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>
                        {t.pricingNoticeLabel}
                      </span>
                      <span style={{ fontSize: '0.92rem', fontWeight: 500, color: isFree ? '#2ec4b6' : 'var(--text-secondary)' }}>
                        {isFree ? t.freeResource : t.pricingNoticeValue}
                      </span>
                    </div>

                    <a
                      href={selectedProduct.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="store-modal-cta-btn"
                    >
                      <span>↗</span> {isFree ? t.freeDownload : t.checkPriceOn(selectedProduct.platform)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
}
