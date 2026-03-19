import Link from 'next/link';
import Image from 'next/image';
import { Tour } from '@/lib/types';
import StarRating from './StarRating';

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Tour image */}
      <Link href={`/tours/${tour.slug}`} className="block">
        <div className="aspect-[16/10] relative overflow-hidden">
          <Image
            src={tour.imageUrl}
            alt={tour.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <span className="text-white text-sm font-medium">{tour.duration}</span>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/tours/${tour.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors line-clamp-2 mb-2">
            {tour.shortTitle}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{tour.excerpt}</p>

        <StarRating rating={tour.rating} reviewCount={tour.reviewCount} />

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">From</span>
            <span className="ml-1 text-xl font-bold text-gray-900">&pound;{tour.price}</span>
            <span className="text-sm text-gray-500">/person</span>
          </div>
          <a
            href={tour.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1 rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
          >
            Book Now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
