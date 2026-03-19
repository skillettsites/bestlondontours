import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Best London Tours - Discover the best tours and attractions in London';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #264b7a 50%, #2e5d95 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 20, display: 'flex' }}>🇬🇧</div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            padding: '0 60px',
          }}
        >
          Best London Tours
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#93c5fd',
            textAlign: 'center',
            marginTop: 20,
            padding: '0 80px',
          }}
        >
          Discover the best tours, attractions &amp; experiences in London
        </div>
        <div
          style={{
            display: 'flex',
            gap: 30,
            marginTop: 40,
            fontSize: 18,
            color: '#dbeafe',
          }}
        >
          <span>Tower of London</span>
          <span>&#x2022;</span>
          <span>London Eye</span>
          <span>&#x2022;</span>
          <span>Harry Potter</span>
          <span>&#x2022;</span>
          <span>Thames Cruises</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
