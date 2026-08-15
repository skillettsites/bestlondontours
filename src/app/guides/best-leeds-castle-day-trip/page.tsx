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

const SLUG = 'best-leeds-castle-day-trip';
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

export default function BestLeedsCastleDayTripPage() {
  const top = TOP_THREE[0];
  const boat = TOP_THREE[1];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'best-day-trips-from-london',
        'first-time-visiting-london',
        'is-the-london-pass-worth-it',
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
            <h2 className="mb-6 text-2xl font-bold text-gray-900">The top 3 day trips people actually book</h2>
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
                <strong>Book the classic three-stop</strong> if you want Leeds Castle, Canterbury and the White Cliffs
                without extra London add-ons. That is the ticket almost everyone should buy.
              </li>
              <li>
                <strong>Book the Greenwich boat trip</strong> if you want the same Kent day plus a Thames cruise home
                and a snack pack on the coach. It is a longer circuit, not a better castle.
              </li>
              <li>
                <strong>Book the Greenwich walking trip</strong> only if you want time on foot in Greenwich and a
                cruise, and you are happy with a thinner review sample. Most people should not start there.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Time, price and the day, honestly</h2>
            <p className="mb-4 text-gray-700">
              All three are full coach days from Victoria, listed at 10 hours. Leeds Castle entry is included. Canterbury
              Cathedral entry is not automatic: GetYourGuide sells it as an option, so check the option name before you
              pay if you want to go inside.
            </p>
            <p className="mb-4 text-gray-700">
              Dover is a short photo halt at the White Cliffs, not a long walk or a Dover Castle visit. If you want hours
              on the cliffs, none of these tours is that day.
            </p>
            <p className="text-gray-700">
              The two Greenwich products cost more time, not a different castle. You are paying for the boat and the
              extra stop. The classic three-stop is cheaper to compare because it does not bundle a river cruise you can
              book on its own.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">What about going independently?</h2>
            <p className="mb-4 text-gray-700">
              Canterbury is the easy one on its own: high-speed trains from London St Pancras take under an hour. Leeds
              Castle is a train to Bearsted or Hollingbourne plus a taxi. The White Cliffs need a separate Dover plan.
              Stitching all three yourself is a long day of connections, not a saving you can count on.
            </p>
            <p className="text-gray-700">
              We are not going to pretend a train ticket is the same product as a guided coach with castle entry. If you
              only want Canterbury, go by train. If you want Leeds Castle, Canterbury and Dover handled in one booking,
              book the coach.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Want Greenwich and a Thames boat in one booking?</h2>
            <p className="mb-4 text-gray-700">
              GetYourGuide also sells{' '}
              <TrackedGYGLink
                href={boat.href}
                tourName={boat.name}
                section="leeds-which-day-trip-combo"
                className="font-semibold text-green-700 underline"
              >
                {boat.name}
              </TrackedGYGLink>
              , rated {boat.rating.toFixed(1)} from {boat.reviewCount.toLocaleString('en-GB')} reviews. It is a{' '}
              {boat.duration} combo from <LocalPrice gbp={boat.gbpFrom} />. That is the right pick only if you want Kent
              and a river cruise handled by one operator. Most people do not need it: the classic three-stop is the one
              travellers actually book, and a Thames cruise can be booked on its own.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              The classic Kent day trip, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From <LocalPrice gbp={top.gbpFrom} />.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="leeds-which-day-trip-bottom-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book Leeds Castle, Canterbury & Dover
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Leeds Castle dates on GetYourGuide</h2>
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
                data-gyg-q="Leeds Castle Canterbury"
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
