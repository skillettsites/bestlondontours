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
import { COMBO_VIP_BEEFEATER, TOP_THREE } from './products';

const SLUG = 'best-tower-of-london-tickets';
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

export default function BestTowerOfLondonTicketPage() {
  const top = TOP_THREE[0];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'tower-of-london-vs-windsor-castle',
        'first-time-visiting-london',
        'is-the-london-pass-worth-it',
        'best-buckingham-palace-ticket-which-to-book',
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
                <strong>Book the Crown Jewels exhibition ticket</strong> if you want to go inside the Tower of London.
                That is the ticket almost everyone should buy. Public Yeoman Warder tours are already included.
              </li>
              <li>
                <strong>Book early access with a Beefeater</strong> if you want the Crown Jewels before the main crowd
                and a short private meet. It is an upgrade, not a better fortress.
              </li>
              <li>
                <strong>Book the Easy Access guided tour</strong> if you want a Tower of London tour with a guide for
                the whole visit. Most people who only want entry should not start there.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Time, price and the Crown Jewels queue, honestly</h2>
            <p className="mb-4 text-gray-700">
              The entrance ticket is a one-day sightseeing ticket for the fortress, the White Tower and the Crown
              Jewels. Plan two to three hours. Go straight to the Jewel House when you arrive. That queue, not the
              ticket desk, is the wait people remember.
            </p>
            <p className="mb-4 text-gray-700">
              Public Yeoman Warder tours run through the day and come with entry. If you searched for Tower of London
              guided tours, start there before you pay for a private guide. You are not missing the Beefeaters on the
              standard ticket.
            </p>
            <p className="text-gray-700">
              Early access costs more because you arrive before opening for a Beefeater meet and a quieter Jewel House,
              then you explore on your own. The Easy Access tour costs more again because you are buying three to four
              hours with a guide, not a higher floor of the Tower.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">What about skip-the-line and official extras?</h2>
            <p className="mb-4 text-gray-700">
              Historic Royal Palaces sells official timed-entry tickets on its own site. The GetYourGuide exhibition
              ticket is the entrance product people actually book on this platform. &quot;Skip the line&quot; on a Tower
              of London tour usually means you skip the ticket office, not security and not the Crown Jewels moving
              walkway.
            </p>
            <p className="text-gray-700">
              We are not going to pretend a paid guide is the same as going inside. If you want the Crown Jewels and
              the public Beefeater talk, book the entrance ticket. If you want the jewels before the crowds, book early
              access. If you want someone talking for the whole visit, book the guided tour.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Want a private Beefeater meet in one booking?</h2>
            <p className="mb-4 text-gray-700">
              GetYourGuide also sells{' '}
              <TrackedGYGLink
                href={COMBO_VIP_BEEFEATER.href}
                tourName={COMBO_VIP_BEEFEATER.name}
                section="tol-which-ticket-combo"
                className="font-semibold text-green-700 underline"
              >
                {COMBO_VIP_BEEFEATER.name}
              </TrackedGYGLink>
              , rated {COMBO_VIP_BEEFEATER.rating.toFixed(1)} from{' '}
              {COMBO_VIP_BEEFEATER.reviewCount.toLocaleString('en-GB')} reviews. It is a {COMBO_VIP_BEEFEATER.duration}{' '}
              guided tour from <LocalPrice gbp={COMBO_VIP_BEEFEATER.gbpFrom} />, with a private audience at the
              King&apos;s House if you pick that option. That is the right pick only if you want a storytelling guide
              and a private Beefeater meet handled by one operator. Most people do not need it: the entrance ticket
              already includes the public Yeoman tours, and the Easy Access tour is the fuller guided visit.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              Official-style Tower entry, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From <LocalPrice gbp={top.gbpFrom} />.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="tol-which-ticket-bottom-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book Tower of London tickets
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Tower of London dates on GetYourGuide</h2>
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
                data-gyg-q="Tower of London"
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
