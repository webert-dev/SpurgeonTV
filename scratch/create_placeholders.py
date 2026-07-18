import os

pages = ['transparency', 'contact', 'privacy-policy', 'terms-of-service', 'cookie-policy']
base_dir = r'c:\Users\fcout\SISTEMA_FAMILIA\04_NEGOCIOS_E_CARREIRAS\04.4_Tecnologia_e_Programacao\SPURGEONTV\app\[lang]'

template = """export default function PlaceholderPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '60vh' }}>
      <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        {TITLE}
      </h1>
      <div style={{ padding: '2rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
          This page is under construction. It will be updated soon with the relevant content.
        </p>
      </div>
    </div>
  );
}
"""

for page in pages:
    page_dir = os.path.join(base_dir, page)
    os.makedirs(page_dir, exist_ok=True)
    page_file = os.path.join(page_dir, 'page.js')
    if not os.path.exists(page_file):
        title = ' '.join([word.capitalize() for word in page.split('-')])
        with open(page_file, 'w', encoding='utf-8') as f:
            f.write(template.replace('{TITLE}', title))
