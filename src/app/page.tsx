import Link from 'next/link';
import { tours } from '@/data/tours';
import { categories } from '@/data/categories';
import { guides } from '@/data/guides';
import { GYG_PARTNER_ID } from '@/lib/constants';
import { trustStats } from '@/lib/trust';

import Hero from '@/components/ds/Hero';
import SectionHeader from '@/components/ds/SectionHeader';
import TourCard from '@/components/ds/TourCard';
import BenefitGrid from '@/components/ds/BenefitGrid';
import TestimonialCard from '@/components/ds/TestimonialCard';
import ComparisonTable from '@/components/ds/ComparisonTable';
import AnimatedCounter from '@/components/ds/AnimatedCounter';
import RevealOnScroll from '@/components/ds/RevealOnScroll';
import CategoryPill from '@/components/ds/CategoryPill';
import PartnerBadge from '@/components/ds/PartnerBadge';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';

const mostBookedSlugs = [
  'london-eye-tickets',
  'harry-potter-studio-tour',
  'tower-of-london-tickets',
  'hop-on-hop-off-bus',
  'westminster-abbey-tickets',
  'the-shard-tickets',
];

const mostBookedTours = mostBookedSlugs
  .map((slug) => tours.find((t) => t.slug === slug))
  .filter((t): t is NonNullable<typeof t> => t !== undefined);

const topThree = mostBookedTours.slice(0, 3);

const testimonials = [
  {
    quote: 'The Tower of London was incredible. Booking online meant we skipped the massive queue and walked straight in. The kids loved meeting the Beefeaters.',
    author: 'Sarah M.',
    location: 'Manchester',
    tour: 'Tower of London',
    rating: 5,
  },
  {
    quote: 'We booked the London Eye at sunset on a whim and it was the highlight of our trip. The views were absolutely breathtaking. So easy to book on mobile.',
    author: 'James R.',
    location: 'Edinburgh',
    tour: 'London Eye',
    rating: 5,
  },
  {
    quote: 'My daughter is a huge Harry Potter fan. The studio tour exceeded all expectations. Worth every penny. Free cancellation gave us peace of mind too.',
    author: 'Michelle T.',
    location: 'Bristol',
    tour: 'Harry Potter Studio Tour',
    rating: 5,
  },
];

const benefits = [
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'Best price guarantee',
    desc: 'Verified GetYourGuide pricing. Find it cheaper and we will match it.',
  },
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
    title: 'Instant confirmation',
    desc: 'Tickets land in your inbox immediately. Mobile entry at every attraction.',
  },
  {
    icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" /></svg>,
    title: 'Free cancellation',
    desc: 'Most tours cancellable up to 24h before. Plans change, we get it.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="The London Edit"
        title="London,"
        titleAccent="booked beautifully."
        subtitle="The London Eye, Harry Potter Studio Tour, and Tower of London &mdash; the three most booked London experiences this month. Skip the queues with instant confirmation."
        primaryCta={{ label: 'Browse all tours', href: '/tours' }}
        secondaryCta={{ label: 'First time in London?', href: '/guides/first-time-visiting-london' }}
        trustPill={
          <>
            <span className="text-highlight">&#9733;</span>
            <span>{trustStats.avgRating.toFixed(1)} average across {(trustStats.totalReviews / 1000).toFixed(0)}k+ verified reviews</span>
          </>
        }
      />

      <PartnerBadge />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <AffiliateDisclosure />
      </div>

      {/* Most booked */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <SectionHeader
          eyebrow="Most Booked"
          title="What London is booking this week"
          subtitle="The three experiences our visitors choose most. Each one direct-booked through GetYourGuide."
          action={{ label: 'View all tours', href: '/tours' }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {topThree.map((tour, i) => (
            <RevealOnScroll key={tour.slug} delay={i * 0.08}>
              <TourCard
                tour={tour}
                priority={i === 0}
                section="home-most-booked"
                trackingVariant={`most-booked-${i + 1}`}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Featured tours */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="Featured"
            title="London's best tours, hand-picked"
            subtitle="From Crown Jewels to Thames sunsets &mdash; every tour vetted, every booking verified."
            action={{ label: `View all ${tours.length} tours`, href: '/tours' }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {mostBookedTours.map((tour, i) => (
              <RevealOnScroll key={tour.slug} delay={(i % 3) * 0.08}>
                <TourCard tour={tour} section="home-featured" trackingVariant="featured-grid" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why book */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <SectionHeader
          eyebrow="Why us"
          title="Booking made simple"
          align="center"
        />
        <BenefitGrid items={benefits} columns={3} />
      </section>

      {/* Comparison */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="Compare"
            title="The three most booked, side by side"
            subtitle="Not sure which to pick? Here is everything that matters at a glance."
            align="center"
          />
          <ComparisonTable tours={topThree} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <SectionHeader
          eyebrow="Reviews"
          title="What visitors say"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.author} delay={i * 0.08}>
              <TestimonialCard {...t} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="Browse"
            title="By category"
            subtitle="Find the perfect London experience for your interests."
          />
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <CategoryPill
                key={cat.slug}
                href={`/category/${cat.slug}`}
                label={`${cat.icon} ${cat.title}`}
                count={cat.tourSlugs.length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats counter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="rounded-card-lg bg-primary text-white p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <AnimatedCounter value={trustStats.totalTours} className="font-display text-4xl sm:text-5xl" />
              <p className="mt-1.5 text-sm text-white/70">Tours curated</p>
            </div>
            <div>
              <AnimatedCounter value={trustStats.avgRating} decimals={1} className="font-display text-4xl sm:text-5xl" />
              <p className="mt-1.5 text-sm text-white/70">Average rating</p>
            </div>
            <div>
              <AnimatedCounter value={trustStats.totalReviews} className="font-display text-4xl sm:text-5xl" />
              <p className="mt-1.5 text-sm text-white/70">Verified reviews</p>
            </div>
            <div>
              <AnimatedCounter value={trustStats.freeCancellationPct} suffix="%" className="font-display text-4xl sm:text-5xl" />
              <p className="mt-1.5 text-sm text-white/70">Free cancellation</p>
            </div>
          </div>
        </div>
      </section>

      {/* GYG city widget */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader
            eyebrow="Explore"
            title="Hundreds more London experiences"
            subtitle="Browse the full GetYourGuide London catalogue, with live pricing and availability."
          />
          <div className="bg-surface rounded-card-lg p-4 sm:p-6 border border-border">
            <div
              data-gyg-href="https://widget.getyourguide.com/default/city.frame"
              data-gyg-location-id="57"
              data-gyg-locale-code="en-US"
              data-gyg-widget="city"
              data-gyg-partner-id={GYG_PARTNER_ID}
            />
          </div>
        </div>
      </section>

      {/* Travel guides */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <SectionHeader
          eyebrow="Plan"
          title="London travel guides"
          subtitle="Expert picks and itineraries to make the most of your visit."
          action={{ label: 'All guides', href: '/guides' }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {guides.slice(0, 4).map((guide, i) => (
            <RevealOnScroll key={guide.slug} delay={(i % 4) * 0.08}>
              <Link
                href={`/guides/${guide.slug}`}
                className="group block bg-surface rounded-card-lg border border-border overflow-hidden hover:shadow-card-hover transition-shadow"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary to-primary-ink flex items-center justify-center text-white/70 text-3xl">
                  📖
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-on-surface-2 line-clamp-2">{guide.excerpt}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* SEO internal links */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <SectionHeader title="Explore London" />
          <details className="sm:open" open>
            <summary className="sm:hidden cursor-pointer text-sm font-semibold text-primary mb-4">Show all links</summary>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <h3 className="font-semibold text-on-surface mb-3 text-sm uppercase tracking-wider">Popular tours</h3>
                <ul className="space-y-2">
                  {tours.slice(0, 6).map((tour) => (
                    <li key={tour.slug}>
                      <Link href={`/tours/${tour.slug}`} className="text-primary hover:text-primary-ink hover:underline text-sm">
                        {tour.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-3 text-sm uppercase tracking-wider">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link href={`/category/${cat.slug}`} className="text-primary hover:text-primary-ink hover:underline text-sm">
                        {cat.icon} {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-3 text-sm uppercase tracking-wider">Guides</h3>
                <ul className="space-y-2">
                  {guides.slice(0, 10).map((guide) => (
                    <li key={guide.slug}>
                      <Link href={`/guides/${guide.slug}`} className="text-primary hover:text-primary-ink hover:underline text-sm">
                        {guide.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-on-surface mb-3 text-sm uppercase tracking-wider">Quick links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/tours" className="text-primary hover:text-primary-ink hover:underline">All London Tours</Link></li>
                  <li><Link href="/top-10" className="text-primary hover:text-primary-ink hover:underline">Top 10 Tours</Link></li>
                  <li><Link href="/budget" className="text-primary hover:text-primary-ink hover:underline">Budget Tours</Link></li>
                  <li><Link href="/family" className="text-primary hover:text-primary-ink hover:underline">Family Tours</Link></li>
                  <li><Link href="/first-time" className="text-primary hover:text-primary-ink hover:underline">First Time Visitors</Link></li>
                  <li><Link href="/compare" className="text-primary hover:text-primary-ink hover:underline">Compare All Tours</Link></li>
                  <li><Link href="/trending" className="text-primary hover:text-primary-ink hover:underline">Trending Tours</Link></li>
                  <li><Link href="/local-tips" className="text-primary hover:text-primary-ink hover:underline">Local Tips</Link></li>
                  <li><Link href="/about" className="text-primary hover:text-primary-ink hover:underline">About Best London Tours</Link></li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-white/95 backdrop-blur border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3">
        <Link
          href="/tours"
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-accent hover:bg-accent-ink text-on-accent font-semibold text-base py-3.5 shadow-lg shadow-accent/25 transition-all active:scale-[0.98]"
        >
          Browse tours: from &pound;{trustStats.minPrice}
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
      <div className="h-16 sm:hidden" />
    </>
  );
}
