import { getDictionary } from '../../../lib/dictionaries';
import '../../support.css';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return {
    title: `${dict.navigation.support} | SPURGEON TV`,
    description: dict.support.subtitle,
  };
}

export default async function SupportPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="support-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": dict.support.title,
            "description": dict.support.subtitle
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `https://spurgeontv.vercel.app/${lang}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": dict.navigation.support,
                "item": `https://spurgeontv.vercel.app/${lang}/support`
              }
            ]
          })
        }}
      />
      <div className="container">
        <div className="support-container">
          <div className="support-header">
            <div className="support-image-container">
              <Image 
                src="/support-book-transparent.png" 
                alt="Support Spurgeon TV" 
                width={150} 
                height={150} 
                className="support-image"
              />
            </div>
            
            <div className="support-header-text">
              <div style={{ marginBottom: '15px' }}>
                <a href="https://throne.com/spurgeon" target="_blank" rel="noopener noreferrer" className="support-cta-button-small">
                  {dict.support.button}
                </a>
              </div>
              <a href="https://throne.com/spurgeon" target="_blank" rel="noopener noreferrer" className="support-title">
                {dict.support.title}
              </a>
              <h2 className="support-subtitle">{dict.support.subtitle}</h2>
            </div>
          </div>
          
          <div className="support-body">
            <p>{dict.support.body}</p>
          </div>
          
          <div className="support-cta-container">
            <a 
              href="https://throne.com/spurgeon" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="support-cta-button"
            >
              {dict.support.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
