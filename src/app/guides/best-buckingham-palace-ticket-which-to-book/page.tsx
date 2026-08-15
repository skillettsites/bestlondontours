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
import { COMBO_ENTRY_AND_GUARD, TOP_THREE } from './products';

const SLUG = 'best-buckingham-palace-ticket-which-to-book';
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

export default function BestBuckinghamPalaceTicketPage() {
  const top = TOP_THREE[0];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'how-much-does-it-cost-to-visit-buckingham-palace',
        'first-time-visiting-london',
        'best-walking-tours-london',
        'is-the-london-pass-worth-it',
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
                <strong>Book the State Rooms</strong> if your dates fall in the summer opening and you want to walk
                through the palace. That is the only ticket on this list that takes you inside.
              </li>
              <li>
                <strong>Book the Changing of the Guard tour</strong> if you want the classic palace experience with a
                guide, or you are visiting when the State Rooms are shut. You stay outside.
              </li>
              <li>
                <strong>Book the Royal Mews</strong> if you want an official royal site that is open for most of the
                year, with carriages and horses rather than state apartments.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Time, price and skip-the-line, honestly</h2>
            <p className="mb-4 text-gray-700">
              The State Rooms take about 2.5 hours once you are through the timed slot. Late arrivals are not admitted,
              so allow time to exchange the voucher at Gate A. There is no separate skip-the-line add-on because entry
              is already by timed ticket.
            </p>
            <p className="mb-4 text-gray-700">
              The Changing of the Guard walking tour is 2 hours. The ceremony itself is free if you stand at the
              railings, so you are paying for a guide who knows where to stand and what you are looking at. Arrive
              early. The schedule is usually Monday, Wednesday, Friday and Sunday, and it can be cancelled for weather
              or official duties.
            </p>
            <p className="text-gray-700">
              The Royal Mews is a one-day ticket, typically an hour or two on site. It is the cheapest official ticket
              of the three. It does not include the State Rooms or the Changing of the Guard.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">What about the official Royal Day Out?</h2>
            <p className="mb-4 text-gray-700">
              The Royal Collection Trust sells a Royal Day Out bundle that combines the State Rooms, The King&apos;s
              Gallery and the Royal Mews on the same day. GetYourGuide does not sell that bundle. We are not going to
              pretend a third-party walking tour is the same ticket.
            </p>
            <p className="text-gray-700">
              If you want all three official sites in one day, book the Royal Day Out on the Royal Collection Trust
              site. If you want to book through GetYourGuide, the Royal Mews ticket is the official year-round product
              they actually sell, and the State Rooms ticket is the official summer product.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Want the State Rooms and a guide in one booking?</h2>
            <p className="mb-4 text-gray-700">
              GetYourGuide also sells{' '}
              <TrackedGYGLink
                href={COMBO_ENTRY_AND_GUARD.href}
                tourName={COMBO_ENTRY_AND_GUARD.name}
                section="bp-which-ticket-combo"
                className="font-semibold text-green-700 underline"
              >
                {COMBO_ENTRY_AND_GUARD.name}
              </TrackedGYGLink>
              , rated {COMBO_ENTRY_AND_GUARD.rating.toFixed(1)} from{' '}
              {COMBO_ENTRY_AND_GUARD.reviewCount.toLocaleString('en-GB')} reviews. It is a 2.5-hour skip-the-line combo
              from <LocalPrice gbp={COMBO_ENTRY_AND_GUARD.gbpFrom} />. That is the right pick only if you want palace
              entry and the ceremony handled by one operator. Most people do not need it: the official State Rooms
              ticket is cheaper, and the ceremony is free to watch on its own.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              Official State Rooms entry, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From <LocalPrice gbp={top.gbpFrom} />.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="bp-which-ticket-bottom-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book the State Rooms
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Buckingham Palace dates on GetYourGuide</h2>
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
                data-gyg-q="Buckingham Palace"
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
