import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Best London Tours helps visitors find and book the best tours, attractions, and experiences in London. Learn more about who we are and what we do.',
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Best London Tours</h1>

      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>
          Best London Tours is your trusted guide to the best tours, attractions, and experiences in London.
          We research, review, and recommend only the highest-rated activities, so you can spend less time
          planning and more time enjoying the city.
        </p>
        <p>
          London is one of the most visited cities in the world, with thousands of tours and attractions
          competing for your attention. We cut through the noise by focusing on quality: every tour we
          feature has thousands of verified reviews and consistently high ratings from real visitors.
        </p>
        <p>
          Whether you are visiting London for the first time or looking for something new, our curated
          selection covers landmarks, river cruises, day trips, food tours, and family activities. We
          also publish in-depth travel guides with insider tips, itineraries, and practical advice.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Work</h2>
        <p>
          When you book a tour through our site, we earn a small commission from the booking provider
          at no extra cost to you. This is how we keep the site running and the guides free. We only
          recommend tours we would book ourselves.
        </p>
        <p>
          Prices shown on our site are approximate and sourced from our booking partners. Final prices,
          availability, and terms are set by the tour provider. We encourage you to check the booking
          page for the most up-to-date information.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Get in Touch</h2>
        <p>
          Have a question, suggestion, or feedback? We would love to hear from you. Email us at{' '}
          <a href="mailto:contact@bestlondontours.co.uk" className="text-blue-900 hover:underline">
            contact@bestlondontours.co.uk
          </a>.
        </p>
      </div>

      <div className="mt-12">
        <Link href="/tours" className="inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">
          Browse all tours
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
