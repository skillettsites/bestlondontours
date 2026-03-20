'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { tours } from '@/data/tours';
import StarRating from '@/components/ui/StarRating';

type SortField = 'price' | 'rating' | 'reviews' | 'name';
type SortDir = 'asc' | 'desc';
type Filter = 'all' | 'under30' | 'under50' | 'family' | 'halfday' | 'fullday';

function parseDurationMinutes(duration: string): number {
  const lower = duration.toLowerCase();
  if (lower.includes('full day')) return 480;
  if (lower.includes('day')) return 480;
  const hourMatch = lower.match(/(\d+\.?\d*)\s*hour/);
  const minMatch = lower.match(/(\d+)\s*min/);
  let total = 0;
  if (hourMatch) total += parseFloat(hourMatch[1]) * 60;
  if (minMatch) total += parseInt(minMatch[1]);
  // Handle ranges like "2-3 hours"
  const rangeMatch = lower.match(/(\d+\.?\d*)\s*-\s*(\d+\.?\d*)\s*hour/);
  if (rangeMatch) total = (parseFloat(rangeMatch[1]) + parseFloat(rangeMatch[2])) / 2 * 60;
  return total || 120;
}

const filterConfig: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Tours' },
  { key: 'under30', label: 'Under £30' },
  { key: 'under50', label: 'Under £50' },
  { key: 'family', label: 'Family Friendly' },
  { key: 'halfday', label: 'Half Day' },
  { key: 'fullday', label: 'Full Day' },
];

export default function CompareTable() {
  const [sortField, setSortField] = useState<SortField>('rating');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = useMemo(() => {
    let result = [...tours];
    switch (filter) {
      case 'under30':
        result = result.filter(t => t.price < 30);
        break;
      case 'under50':
        result = result.filter(t => t.price < 50);
        break;
      case 'family':
        result = result.filter(t =>
          t.bestFor.some(b => b.toLowerCase().includes('famil')) ||
          t.categories.includes('family-fun')
        );
        break;
      case 'halfday':
        result = result.filter(t => parseDurationMinutes(t.duration) <= 180);
        break;
      case 'fullday':
        result = result.filter(t => parseDurationMinutes(t.duration) > 180);
        break;
    }
    result.sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case 'price': cmp = a.price - b.price; break;
        case 'rating': cmp = a.rating - b.rating; break;
        case 'reviews': cmp = a.reviewCount - b.reviewCount; break;
        case 'name': cmp = a.shortTitle.localeCompare(b.shortTitle); break;
      }
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return result;
  }, [sortField, sortDir, filter]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDir(field === 'name' ? 'asc' : 'desc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => (
    <span className="ml-1 inline-block">
      {sortField === field ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
    </span>
  );

  return (
    <>
      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterConfig.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f.key
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Showing {filtered.length} tour{filtered.length !== 1 ? 's' : ''}. Click column headers to sort.
      </p>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-xl">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th
                className="px-4 py-3 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('name')}
              >
                Tour <SortIcon field="name" />
              </th>
              <th
                className="px-4 py-3 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('price')}
              >
                Price <SortIcon field="price" />
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-900">Duration</th>
              <th
                className="px-4 py-3 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('rating')}
              >
                Rating <SortIcon field="rating" />
              </th>
              <th
                className="px-4 py-3 text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('reviews')}
              >
                Reviews <SortIcon field="reviews" />
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-900">Best For</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-900"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((tour) => (
              <tr key={tour.slug} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4">
                  <Link href={`/tours/${tour.slug}`} className="font-medium text-blue-900 hover:underline">
                    {tour.shortTitle}
                  </Link>
                </td>
                <td className="px-4 py-4">
                  <span className="font-bold text-gray-900">&pound;{tour.price}</span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">{tour.duration}</td>
                <td className="px-4 py-4">
                  <StarRating rating={tour.rating} compact />
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  {tour.reviewCount.toLocaleString()}
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap gap-1">
                    {tour.bestFor.slice(0, 2).map((b) => (
                      <span key={b} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                        {b}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <a
                    href={tour.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors whitespace-nowrap"
                  >
                    Book Now
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filtered.map((tour) => (
          <div key={tour.slug} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <Link href={`/tours/${tour.slug}`} className="font-semibold text-blue-900 hover:underline text-base pr-2">
                {tour.shortTitle}
              </Link>
              <span className="text-lg font-bold text-gray-900 whitespace-nowrap">&pound;{tour.price}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
              <span>{tour.duration}</span>
              <span className="text-gray-300">|</span>
              <StarRating rating={tour.rating} reviewCount={tour.reviewCount} compact />
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {tour.bestFor.map((b) => (
                <span key={b} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
            <a
              href={tour.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="w-full inline-flex items-center justify-center gap-1 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
            >
              Book Now
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No tours match this filter.</p>
          <button
            onClick={() => setFilter('all')}
            className="mt-2 text-blue-900 hover:underline font-medium"
          >
            Show all tours
          </button>
        </div>
      )}
    </>
  );
}
