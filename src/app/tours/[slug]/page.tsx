import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tours, getTourBySlug, getRelatedTours } from '@/data/tours';
import { tourSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import StarRating from '@/components/ui/StarRating';
import FAQ from '@/components/ui/FAQ';
import AvailabilityWidget from '@/components/ui/AvailabilityWidget';
import TourCard from '@/components/ui/TourCard';

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: { canonical: `${SITE_URL}/tours/${tour.slug}` },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      url: `${SITE_URL}/tours/${tour.slug}`,
      type: 'website',
    },
  };
}

export default async function TourPage({ params }: { params: Params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const relatedTours = getRelatedTours(tour);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema(tour)) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tours', href: '/tours' },
            { label: tour.shortTitle },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Hero image placeholder */}
            <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center mb-8">
              <span className="text-7xl opacity-30">
                {tour.categories.includes('landmarks') ? '🏰' :
                 tour.categories.includes('river-cruises') ? '⛵' :
                 tour.categories.includes('day-trips') ? '🚌' :
                 tour.categories.includes('food-tours') ? '🍽️' : '🎉'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{tour.title}</h1>

            {/* Key facts bar */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <StarRating rating={tour.rating} reviewCount={tour.reviewCount} />
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">Duration: {tour.duration}</span>
              <span className="text-gray-300">|</span>
              <span className="font-semibold text-gray-900">From &pound;{tour.price}/person</span>
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed text-lg">{tour.description}</p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
              <ul className="space-y-3">
                {tour.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's included */}
            <div className="mb-8 bg-green-50 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
              <ul className="space-y-2">
                {tour.includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="h-4 w-4 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Best for */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Best For</h2>
              <div className="flex flex-wrap gap-2">
                {tour.bestFor.map((tag, i) => (
                  <span key={i} className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-900">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Widget */}
            <AvailabilityWidget tourId={tour.gygTourId} />

            {/* FAQ */}
            <FAQ faqs={tour.faqs} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Booking card */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <span className="text-sm text-gray-500">From</span>
                  <div className="text-3xl font-bold text-gray-900">&pound;{tour.price}</div>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                <a
                  href={tour.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block w-full rounded-lg bg-blue-900 px-6 py-3 text-center text-base font-semibold text-white hover:bg-blue-800 transition-colors"
                >
                  Check Availability & Book
                </a>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Instant confirmation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Free cancellation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Mobile ticket accepted
                  </li>
                </ul>
              </div>

              {/* Quick info */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Info</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Duration</dt>
                    <dd className="font-medium text-gray-900">{tour.duration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Rating</dt>
                    <dd className="font-medium text-gray-900">{tour.rating}/5 ({tour.reviewCount.toLocaleString()} reviews)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Price</dt>
                    <dd className="font-medium text-gray-900">From &pound;{tour.price}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tours */}
        {relatedTours.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTours.map((related) => (
                <TourCard key={related.slug} tour={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
