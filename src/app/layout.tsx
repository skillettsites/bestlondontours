import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import { websiteSchema, organizationSchema } from '@/lib/schema';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/CookieConsent';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GYGScript from '@/components/GYGScript';
import { TrackPageview } from '@/components/TrackPageview';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Best Tours & Attractions in London 2026`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Best Tours & Attractions in London 2026`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Best London Tours - Discover the best tours and attractions in London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Best Tours & Attractions in London 2026`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TrackPageview />
        <GoogleAnalytics />
        <GYGScript />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
