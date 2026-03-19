import { ImageResponse } from 'next/og';
import { getGuideBySlug, guides } from '@/data/guides';

export const runtime = 'nodejs';
export const alt = 'Guide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

type Params = Promise<{ slug: string }>;

export default async function OGImage({ params }: { params: Params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #264b7a 50%, #2e5d95 100%)',
          fontFamily: 'system-ui, sans-serif',
          padding: 60,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 18, color: '#93c5fd', marginBottom: 16, display: 'flex' }}>
            Travel Guide
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, color: 'white', lineHeight: 1.2, maxWidth: 900, display: 'flex' }}>
            {guide?.title || 'London Travel Guide'}
          </div>
        </div>
        <div style={{ fontSize: 20, color: '#dbeafe', display: 'flex' }}>
          bestlondontours.co.uk
        </div>
      </div>
    ),
    { ...size }
  );
}
