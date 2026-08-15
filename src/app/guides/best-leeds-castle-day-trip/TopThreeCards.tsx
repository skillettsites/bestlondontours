'use client';

import Image from 'next/image';
import LocalPrice from '@/components/LocalPrice';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import { TOP_THREE } from './products';

function formatReviews(count: number): string {
  return count.toLocaleString('en-GB');
}

export default function TopThreeCards() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {TOP_THREE.map((trip) => (
        <article
          key={trip.gygTourId}
          className={`overflow-hidden rounded-xl border-2 bg-white ${
            trip.rank === 1 ? 'border-green-500 shadow-sm' : 'border-gray-200'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr]">
            <TrackedGYGLink
              href={trip.href}
              tourName={trip.shortName}
              section="leeds-which-day-trip-image"
              destination={trip.bestFor}
              className="relative block aspect-[16/10] sm:aspect-auto sm:min-h-[220px]"
            >
              <Image
                src={trip.imageUrl}
                alt={trip.imageAlt}
                fill
                priority={trip.rank === 1}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 280px"
              />
              <span className="absolute left-3 top-3 rounded-full bg-green-700 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                #{trip.rank}
              </span>
            </TrackedGYGLink>

            <div className="flex flex-col p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-green-700">{trip.badge}</p>
              <h3 className="mt-1 text-lg font-bold text-gray-900">{trip.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{trip.why}</p>

              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">From</dt>
                  <dd className="font-semibold text-gray-900">
                    <LocalPrice gbp={trip.gbpFrom} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">Time</dt>
                  <dd className="font-semibold text-gray-900">{trip.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">Rating</dt>
                  <dd className="font-semibold text-gray-900">
                    {trip.rating.toFixed(1)} ({formatReviews(trip.reviewCount)} reviews)
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">Cathedral entry</dt>
                  <dd className="font-semibold text-gray-900">{trip.cathedralEntry}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">Thames boat</dt>
                  <dd className="font-semibold text-gray-900">{trip.boatIncluded ? 'Yes' : 'No'}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-gray-500">When</dt>
                  <dd className="font-semibold text-gray-900">{trip.when}</dd>
                </div>
              </dl>

              <p className="mt-3 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Who it is for: </span>
                {trip.who}
              </p>

              <TrackedGYGLink
                href={trip.href}
                tourName={trip.shortName}
                section="leeds-which-day-trip-cta"
                destination={trip.bestFor}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-green-500 sm:w-auto"
              >
                Book {trip.shortName}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </TrackedGYGLink>
              <span className="mt-1 text-xs font-medium text-green-700">Free cancellation. Instant confirmation</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
