import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
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
            value: 'public, s-maxage=3600, stale-while-revalidate=1800',
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
      // Retired guide slug still indexed by GetYourGuide; redirect to the live itinerary guide.
      {
        source: '/guides/london-one-day-itinerary',
        destination: '/guides/london-3-day-itinerary',
        permanent: true,
      },
      // The walking-tours guide used to carry the year in its URL, which orphaned its
      // accumulated authority every January. It now lives on a yearless slug and the year
      // survives in the title tag only. The old URL is indexed and ranking, so this 301
      // must not be removed.
      // Explicit 301 rather than Next's default 308, because this URL is indexed and
      // ranking on Bing and DuckDuckGo and 301 is the status every crawler understands.
      {
        source: '/guides/best-walking-tours-london-2026',
        destination: '/guides/best-walking-tours-london',
        statusCode: 301,
      },
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
      {
        source: '/tours/london-true-crime-tour',
        destination: '/guides/best-walking-tours-london',
        permanent: true,
      },
      {
        source: '/tours/london-music-legends-tour',
        destination: '/guides/best-walking-tours-london',
        permanent: true,
      },
      {
        source: '/tours/london-architecture-tour',
        destination: '/guides/best-walking-tours-london',
        permanent: true,
      },
      {
        source: '/tours/london-royal-parks-tour',
        destination: '/guides/best-walking-tours-london',
        permanent: true,
      },
      {
        source: '/tours/london-thames-kayak-tour',
        destination: '/guides/best-walking-tours-london',
        permanent: true,
      },
      {
        source: '/tours/london-tudor-history-tour',
        destination: '/guides/best-walking-tours-london',
        permanent: true,
      },
      // GetYourGuide product 1107345 is dead. Its affiliate URL still answers
      // 200 but silently lands on the generic London city page rather than an
      // activity, so a link checker never flags it. Sent to the food and drink
      // category, which is the closest live equivalent.
      {
        source: '/tours/london-gin-distillery-tour',
        destination: '/category/food-tours',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
