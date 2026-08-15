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
import { COMBO_GUARD_AND_TEA, TOP_THREE } from './products';

const SLUG = 'best-kensington-palace-tickets';
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

export default function BestKensingtonPalaceTicketPage() {
  const top = TOP_THREE[0];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'best-buckingham-palace-ticket-which-to-book',
        'first-time-visiting-london',
        'is-the-london-pass-worth-it',
        'how-much-does-it-cost-to-visit-buckingham-palace',
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
                <strong>Book the sightseeing entrance ticket</strong> if you want to go inside Kensington Palace. That
                is the ticket almost everyone should buy.
              </li>
              <li>
                <strong>Book the afternoon tea walk</strong> if you want a guided stretch of Kensington Gardens and tea
                in one booking. It is a treat, not a better palace ticket.
              </li>
              <li>
                <strong>Book the VIP gardens high tea</strong> only if you want a smaller, higher-rated gardens tea.
                It has 71 reviews. Most people should not start there.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Time, price and the gardens, honestly</h2>
            <p className="mb-4 text-gray-700">
              The entrance ticket is a one-day sightseeing ticket for the State Apartments, with an audio guide.
              Plan about 90 minutes to two hours inside. Kensington Palace is open for most of the year, unlike the
              Buckingham Palace State Rooms.
            </p>
            <p className="mb-4 text-gray-700">
              Kensington Gardens are free. You do not need a Kensington Gardens ticket to walk the park, see the
              Albert Memorial, or photograph the palace from outside. A ticket is only for going inside, or for a
              guided walk and tea you have chosen to book.
            </p>
            <p className="text-gray-700">
              The two tea products cost more because you are buying a walk and a meal, not a higher floor of the
              palace. The VIP tour has a thinner review sample than the afternoon tea walk. Neither one is the
              official State Apartments ticket unless you select an entry option at checkout.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">What about skip-the-line and official extras?</h2>
            <p className="mb-4 text-gray-700">
              Historic Royal Palaces sells official timed-entry tickets on its own site. The GetYourGuide sightseeing
              ticket is the entrance product people actually book on this platform. There is no separate skip-the-line
              add-on, because you are buying entry, not a queue-jump on top of a free walk-up.
            </p>
            <p className="text-gray-700">
              We are not going to pretend a gardens tea is the same as going inside. If you want the King&apos;s and
              Queen&apos;s State Apartments, book the entrance ticket. If you want tea, book tea. If you want both,
              check the option name on the tea walk before you pay.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Want the Guard Change and tea in one booking?</h2>
            <p className="mb-4 text-gray-700">
              GetYourGuide also sells{' '}
              <TrackedGYGLink
                href={COMBO_GUARD_AND_TEA.href}
                tourName={COMBO_GUARD_AND_TEA.name}
                section="kp-which-ticket-combo"
                className="font-semibold text-green-700 underline"
              >
                {COMBO_GUARD_AND_TEA.name}
              </TrackedGYGLink>
              , rated {COMBO_GUARD_AND_TEA.rating.toFixed(1)} from{' '}
              {COMBO_GUARD_AND_TEA.reviewCount.toLocaleString('en-GB')} reviews. It is a {COMBO_GUARD_AND_TEA.duration}{' '}
              combo from <LocalPrice gbp={COMBO_GUARD_AND_TEA.gbpFrom} />. The ceremony itself is at Buckingham Palace,
              not Kensington. That is the right pick only if you want the Guard Change, Kensington and tea handled by
              one operator. Most people do not need it: the entrance ticket is cheaper, and the ceremony is free to
              watch on its own.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              Official-style palace entry, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From <LocalPrice gbp={top.gbpFrom} />.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="kp-which-ticket-bottom-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book Kensington Palace tickets
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Kensington Palace dates on GetYourGuide</h2>
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
                data-gyg-q="Kensington Palace"
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
