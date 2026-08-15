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
import { PRIVATE_CAPSULE, TOP_THREE } from './products';

const SLUG = 'best-london-eye-tickets';
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

export default function BestLondonEyeTicketPage() {
  const top = TOP_THREE[0];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'is-the-shard-worth-it-vs-sky-garden',
        'first-time-visiting-london',
        'is-a-thames-river-cruise-worth-it',
        'best-shard-ticket-which-to-book',
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
                <strong>Book the London Eye entry ticket</strong> if you want the 30-minute ride. Standard and fast
                track are options on that same listing. That is the ticket almost everyone should buy.
              </li>
              <li>
                <strong>Book the champagne experience</strong> if you want fast track and a glass included. It is a
                treat, not a better view.
              </li>
              <li>
                <strong>Book the Eye, river cruise and bus combo</strong> only if you want a Thames boat and a hop-on
                hop-off pass in the same booking. Most people who only want the wheel should not start there.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Time, price and fast track, honestly</h2>
            <p className="mb-4 text-gray-700">
              The ride is one 30-minute rotation in a shared glass capsule. You board while the wheel keeps moving.
              Standard and fast track are not two different attractions. They are two options on the same GetYourGuide
              entry ticket. Fast track shortens the main queue. It does not skip security, and it does not give you a
              private pod.
            </p>
            <p className="mb-4 text-gray-700">
              Sunset is not a third product. It is a more popular time on the same entry ticket. Those slots sell first,
              especially at weekends. Book the time you actually want rather than hoping to upgrade later.
            </p>
            <p className="text-gray-700">
              The champagne experience uses the same wheel. You are paying for the lounge, the host and the drink. The
              bus-and-boat combo costs more again because you are buying a sightseeing bundle, and you still have to
              reserve the Eye slot after checkout.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">What about a river cruise or a private tour?</h2>
            <p className="mb-4 text-gray-700">
              GetYourGuide also sells a Thames river cruise with an optional London Eye add-on. The starting price on
              that listing is the cruise. The Eye is not automatic. If you want the official-style wheel ticket, book
              the entry product. If you want a boat as well and would rather compare the two, book the cruise and the
              Eye as two bookings.
            </p>
            <p className="text-gray-700">
              A private London Eye tour is a hired capsule, not a guided walking tour of the South Bank. GetYourGuide
              lists that as a separate private-capsule product. It has 13 reviews. That is not a hidden gem. It is a
              thin sample, and it is priced for a group hire.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Want the capsule to yourselves?</h2>
            <p className="mb-4 text-gray-700">
              GetYourGuide also sells{' '}
              <TrackedGYGLink
                href={PRIVATE_CAPSULE.href}
                tourName={PRIVATE_CAPSULE.name}
                section="eye-which-ticket-combo"
                className="font-semibold text-green-700 underline"
              >
                {PRIVATE_CAPSULE.name}
              </TrackedGYGLink>
              , rated {PRIVATE_CAPSULE.rating.toFixed(1)} from {PRIVATE_CAPSULE.reviewCount.toLocaleString('en-GB')}{' '}
              reviews. It is a {PRIVATE_CAPSULE.duration} private hire from <LocalPrice gbp={PRIVATE_CAPSULE.gbpFrom} />
              , with a host and fast-track boarding. That is the right pick only if you want the capsule to yourselves
              for a proposal, a group or a private tour of the London Eye. Most people do not need it: the entry ticket
              is the ride, and the champagne experience is the hosted upgrade.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              Standard or fast-track London Eye entry, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From <LocalPrice gbp={top.gbpFrom} />.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="eye-which-ticket-bottom-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book London Eye tickets
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More London Eye dates on GetYourGuide</h2>
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
                data-gyg-q="London Eye"
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
