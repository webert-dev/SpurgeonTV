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

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#121214',
            backgroundImage: 'linear-gradient(135deg, #09090b 0%, #1e1335 100%)', // Escuro para o roxo profundo da marca
            padding: '40px 80px',
            fontFamily: 'sans-serif',
            position: 'relative',
          }}
        >
          {/* Subtle accent line on top */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '10px',
              background: 'linear-gradient(90deg, #d4af37 0%, #ffdf73 50%, #d4af37 100%)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              flex: 1,
            }}
          >
            {reference && (
              <div
                style={{
                  fontSize: 32,
                  color: '#A0A0B0',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  marginBottom: 20,
                  fontWeight: 600,
                }}
              >
                {reference}
              </div>
            )}

            <div
              style={{
                fontSize: 72,
                fontFamily: 'serif',
                fontWeight: 700,
                color: '#FFD700', // Dourado SpurgeonTV
                lineHeight: 1.2,
                marginBottom: 30,
                maxWidth: '900px',
                textAlign: 'center',
                textShadow: '0 4px 20px rgba(212, 175, 55, 0.2)',
              }}
            >
              {title}
            </div>

            {subtitle && (
              <div
                style={{
                  fontSize: 36,
                  color: '#E0E0E0',
                  maxWidth: '800px',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          {/* Footer Logo Area */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '2px solid rgba(255, 255, 255, 0.1)',
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
                fontWeight: 500,
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
