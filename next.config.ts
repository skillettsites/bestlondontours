import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/tours/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=43200',
          },
        ],
      },
      {
        source: '/category/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=43200',
          },
        ],
      },
      {
        source: '/guides/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=43200',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bestlondontours.co.uk' }],
        destination: 'https://www.bestlondontours.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/tours/warner-bros-studio-tour',
        destination: '/tours/harry-potter-studio-tour',
        permanent: true,
      },
      {
        source: '/tours/warner-bros-harry-potter-tour',
        destination: '/tours/harry-potter-studio-tour',
        permanent: true,
      },
      {
        source: '/tours/harry-potter-warner-bros-tour',
        destination: '/tours/harry-potter-studio-tour',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
