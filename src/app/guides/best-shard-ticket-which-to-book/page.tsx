import { Metadata } from 'next';
import Link from 'next/link';
import { getGuideBySlug, guides } from '@/data/guides';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { GYG_PARTNER_ID, SITE_URL } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/ui/FAQ';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import LocalPrice from '@/components/LocalPrice';
import TopThreeCards from './TopThreeCards';
import { TOP_THREE } from './products';

const SLUG = 'best-shard-ticket-which-to-book';
const PAGE_URL = `${SITE_URL}/guides/${SLUG}`;

const guide = getGuideBySlug(SLUG)!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: PAGE_URL,
    type: 'article',
  },
};

export default function BestShardTicketPage() {
  const top = TOP_THREE[0];
  const combo = TOP_THREE[2];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'is-the-shard-worth-it-vs-sky-garden',
        'first-time-visiting-london',
        'is-the-london-pass-worth-it',
        'best-evening-tours-london-2026',
      ].includes(g.slug)
    );

  return (
    <>
      {[
        articleSchema(guide),
        breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Guides', url: `${SITE_URL}/guides` },
          { name: guide.title, url: PAGE_URL },
        ]),
        faqSchema(guide.faqs),
      ]
        .filter(Boolean)
        .map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Guides', href: '/guides' },
            { label: guide.title },
          ]}
        />

        <article>
          <header className="mb-10">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">{guide.title}</h1>
            <div className="mt-5 rounded-xl border-l-4 border-green-600 bg-green-50 px-4 py-3 sm:px-5 sm:py-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-green-700">Quick answer</p>
              <p className="text-base leading-snug text-gray-800 sm:text-lg">
                {guide.excerpt.replace(/^Quick answer:\s*/i, '')}
              </p>
            </div>
            <time className="mt-3 block text-sm text-gray-500" dateTime={guide.updatedDate}>
              Updated:{' '}
              {new Date(guide.updatedDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </header>

          <AffiliateDisclosure />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">The top 3 tickets people actually book</h2>
            <p className="mb-6 text-gray-700">
              Ranked from live GetYourGuide products, not from a made-up shortlist. Review counts, starting prices and
              product photos are taken from those listings. Prices below convert to your currency. The exact fare is
              confirmed on GetYourGuide at checkout.
            </p>
            <TopThreeCards />
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Which one should you book?</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-700">
              <li>
                <strong>Book The View from The Shard</strong> if you want official entry to floors 68, 69 and the
                open-air deck on 72. That is the ticket almost everyone should buy.
              </li>
              <li>
                <strong>Book the champagne ticket</strong> if you want the same view with a glass included. It is a
                treat, not a better viewpoint.
              </li>
              <li>
                <strong>Book the Harry Potter walk with The Shard</strong> only if you want a film-location tour and
                the viewpoint in one booking. It has four reviews. Most people should not book it.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Time, price and skip-the-line, honestly</h2>
            <p className="mb-4 text-gray-700">
              Official entry is a timed slot. Once you are through, you stay as long as you like that day. There is no
              separate skip-the-line add-on on GetYourGuide, because the queue is already managed by the slot.
            </p>
            <p className="mb-4 text-gray-700">
              Sunset is not a third product. It is a more expensive time on the same official View ticket. Those slots
              sell first, especially at weekends. Book the time you actually want rather than hoping to upgrade later.
            </p>
            <p className="text-gray-700">
              The champagne ticket uses the same viewing floors. You are paying for the drink. The Harry Potter combo
              is a 4.5-hour guided walk that finishes with Shard entry. It costs more because you are buying a tour,
              not because the viewpoint is different.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">What about Fast Track and a river cruise?</h2>
            <p className="mb-4 text-gray-700">
              The official View from The Shard website sells its own Fast Track tickets. GetYourGuide does not list
              that as a separate product. We are not going to pretend a walking tour is the same thing.
            </p>
            <p className="text-gray-700">
              GetYourGuide also does not sell an official Shard plus Thames Clippers bundle. If you want the view and
              a boat, book the official View ticket and a river cruise as two bookings. That is cheaper to compare, and
              you can pick the cruise you actually want.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Want a walking tour and The Shard in one booking?</h2>
            <p className="mb-4 text-gray-700">
              GetYourGuide also sells{' '}
              <TrackedGYGLink
                href={combo.href}
                tourName={combo.name}
                section="shard-which-ticket-combo"
                className="font-semibold text-green-700 underline"
              >
                {combo.name}
              </TrackedGYGLink>
              , rated {combo.rating.toFixed(1)} from {combo.reviewCount.toLocaleString('en-GB')} reviews. It is a{' '}
              {combo.duration} combo from <LocalPrice gbp={combo.gbpFrom} />. That is the right pick only if you want a
              Potter film-location walk and The Shard handled by one operator. Most people do not need it: the official
              View ticket is cheaper, and a better-reviewed Potter walk can be booked on its own.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              Official entry to The Shard, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From <LocalPrice gbp={top.gbpFrom} />.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="shard-which-ticket-bottom-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book The View from The Shard
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Shard dates on GetYourGuide</h2>
            <p className="mb-4 text-sm text-gray-600">
              Live availability in your currency. This widget is not locked to pounds.
            </p>
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
              <div
                data-gyg-href="https://widget.getyourguide.com/default/activities.frame"
                data-gyg-location-id="57"
                data-gyg-locale-code="en-GB"
                data-gyg-widget="activities"
                data-gyg-partner-id={GYG_PARTNER_ID}
                data-gyg-q="The Shard"
              />
            </div>
          </section>

          <FAQ faqs={guide.faqs} />

          {related.length > 0 && (
            <section className="mt-12 rounded-xl bg-gray-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900">More London guides</h2>
              <ul className="space-y-3">
                {related.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="font-medium text-green-700 hover:underline">
                      {g.title}
                    </Link>
                    <p className="mt-0.5 text-sm text-gray-500">{g.excerpt.replace(/^Quick answer:\s*/i, '')}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link href="/guides" className="inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">
              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all guides
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
