import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic values from URL params
    const title = searchParams.get('title') || 'Spurgeon TV';
    const volume = searchParams.get('vol') || '';
    const sermonNum = searchParams.get('num') || '';
    const subtitle = searchParams.get('subtitle') || '';

    let reference = '';
    if (volume && sermonNum) {
      reference = `Sermon ${sermonNum} • Volume ${volume}`;
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon-tv.vercel.app';
    
    // Fetch local image as ArrayBuffer to avoid HTTP network latency
    // This bundles the image directly into the Edge function
    const logoData = await fetch(new URL('../../icon.png', import.meta.url)).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#120f1c', // Solid dark purple/black color instead of gradient
            padding: '60px 80px',
            fontFamily: 'sans-serif',
            position: 'relative',
          }}
        >
          {/* Solid accent line on top */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '12px',
              backgroundColor: '#d4af37', // Solid gold
            }}
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingRight: '40px' }}>
              {reference && (
                <div
                  style={{
                    fontSize: 28,
                    color: '#A0A0B0',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    marginBottom: 20,
                    fontWeight: 700,
                  }}
                >
                  {reference}
                </div>
              )}

              <div
                style={{
                  fontSize: 68,
                  fontFamily: 'serif',
                  fontWeight: 700,
                  color: '#FFD700', // Dourado
                  lineHeight: 1.1,
                  marginBottom: 30,
                }}
              >
                {title}
              </div>

              {subtitle && (
                <div
                  style={{
                    fontSize: 32,
                    color: '#E0E0E0',
                    lineHeight: 1.5,
                    fontStyle: 'italic',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  "{subtitle}"
                </div>
              )}
            </div>

            {/* Logo area - right side */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={logoData}
                width="200"
                height="200"
                style={{ 
                  borderRadius: '16px',
                  border: '2px solid #d4af37' // Solid border
                }}
              />
            </div>
          </div>

          <div style={{ flex: 1 }} />

          {/* Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '30px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 36,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-1px',
                }}
              >
                SPURGEON<span style={{ color: '#FFD700' }}>TV</span>
              </div>
            </div>
            
            <div
              style={{
                fontSize: 28,
                color: '#A0A0B0',
                fontWeight: 600,
              }}
            >
              spurgeon.tv
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error('Error generating OG Image:', e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
