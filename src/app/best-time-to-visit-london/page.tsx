import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { hubMonths } from '@/data/london-months';
import { londonClimate, MONTH_ORDER } from '@/data/london-climate';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import {
  SEASON_BASE_YEAR,
  SEASON_PUBLISHED,
  SEASON_UPDATED,
  HUB_PATH,
  CLIMATE_SOURCE,
  DAYLIGHT_SOURCE,
  PALACE_SOURCE,
  GUARD_SOURCE,
} from '@/lib/season';

const TITLE = `Best Time to Visit London: Month by Month Guide ${SEASON_BASE_YEAR} to ${SEASON_BASE_YEAR + 1}`;
const DESCRIPTION =
  'The best time to visit London, month by month, with real climate figures, daylight hours and the closures that catch people out, including the London Eye shutting for all of January and the total transport shutdown on 25 December.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${HUB_PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${HUB_PATH}`,
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the best month to visit London?',
    answer:
      'May and September, for different reasons. May has the longest daylight of the ten months covered here at 15 hours 36 minutes mid-month, with 17.4C average highs and prices well below August. September has the best balance, with 19.7C highs, the school crowds gone from the first week and Open House opening several hundred buildings free from 12 to 20 September. May\'s one drawback is that Buckingham Palace is closed.',
  },
  {
    question: 'What is the driest month in London?',
    answer:
      'April, at 40mm of rain across ten wet days on the 2015 to 2024 mean, comfortably drier than any other month. February is next at 54mm and August at 57mm. The wettest month is October at 77mm across twelve wet days. March has the most wet days of any month at thirteen, even though its 58mm total is modest.',
  },
  {
    question: 'What is the cheapest time to visit London?',
    answer:
      'January from about the 4th, and the first ten days of November. Both are periods when no seasonal attraction is running, the previous month\'s crowds have gone and zone 1 hotel rates reach their annual floor. January is the cheaper of the two but it is also the coldest month, at 7.7C average highs and 1.7C lows, and the London Eye is closed for the whole of it.',
  },
  {
    question: 'Is the London Eye ever closed?',
    answer:
      'Yes, for the whole of January every year, for its annual maintenance programme. There is no partial operation during that period and it reopens in February. It is the most-booked attraction on this site and almost no month-by-month guide mentions the closure, which is why it appears at the top of our January page rather than buried in it.',
  },
  {
    question: 'Does Changing the Guard happen every day in London?',
    answer:
      'No. The ceremony at Buckingham Palace takes place on Mondays, Wednesdays and Fridays, not daily, and it can be cancelled at short notice in bad weather. The schedule is published about a month ahead by the Household Division. Most guides say it runs daily, which is the most commonly repeated error about visiting London.',
  },
  {
    question: 'When can you go inside Buckingham Palace?',
    answer:
      'Only during the summer State Rooms season, which in 2026 ran from 9 July to 27 September. For the rest of the year the Palace opens on selected dates for a limited number of ticketed guided tours. The 2027 season dates had not been published by the Royal Collection Trust when this page was written, so we do not state one.',
  },
  {
    question: 'What happens in London on Christmas Day?',
    answer:
      'There is no public transport at all. No Underground, no bus, no National Rail, no Overground, no DLR and no Elizabeth line service runs anywhere in London on 25 December. It is a complete shutdown rather than a reduced service, and almost every paid attraction is closed. If you are in London that day, plan it on foot.',
  },
  {
    question: 'When do the clocks change in London?',
    answer:
      'They go back at 02:00 on Sunday 25 October 2026 and forward at 01:00 on Sunday 28 March 2027. The effect is immediate and large: sunset falls from 17:48 on 24 October to 16:46 on the 25th, and rises from 18:24 on 27 March to 19:26 on the 28th. That is 1 hour 2 minutes of evening daylight moved overnight in each direction.',
  },
];

export default function BestTimeToVisitLondonPage() {
  const pageUrl = `${SITE_URL}${HUB_PATH}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The best time to visit London, month by month',
    description: DESCRIPTION,
    url: pageUrl,
    inLanguage: 'en-GB',
    datePublished: SEASON_PUBLISHED,
    dateModified: SEASON_UPDATED,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'London month by month',
    numberOfItems: hubMonths.length,
    itemListElement: hubMonths.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `London in ${m.month}`,
      url: m.hasPage ? `${SITE_URL}${m.href}` : `${pageUrl}#${m.key}`,
    })),
  };

  return (
    <>
      {[articleSchema, faqPageSchema, itemListSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Best time to visit London' }]} />

        <article>
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              The best time to visit London, month by month
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Written and checked by the {SITE_NAME} editorial team.{' '}
              <time dateTime={SEASON_UPDATED}>
                Updated{' '}
                {new Date(SEASON_UPDATED).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              .
            </p>
            <p className="mt-3 text-[17px] leading-relaxed text-gray-800 bg-blue-50/60 border-l-4 border-blue-900/70 rounded-r-lg px-4 py-3">
              May and September are the best months to visit London, with 15 hours 36 minutes and 12 hours 40
              minutes of daylight and none of August&apos;s prices. April is the driest month at 40mm and
              October the wettest at 77mm. The two facts that catch visitors out are the London Eye closing
              for all of January and the total transport shutdown on 25 December.
            </p>
          </header>

          <section aria-labelledby="at-a-glance" className="mt-8">
            <h2 id="at-a-glance" className="text-xl font-bold text-gray-900">
              London at a glance, all twelve months
            </h2>
            <div className="mt-3 overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[720px] text-left text-sm">
                <caption className="sr-only">London climate, daylight and verdict for each month of the year</caption>
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Month</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg high</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg low</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Rain</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Wet days</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Daylight</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Sunset</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MONTH_ORDER.map((key) => {
                    const c = londonClimate[key];
                    const hub = hubMonths.find((h) => h.key === key)!;
                    return (
                      <tr key={key} className="align-top">
                        <th scope="row" className="px-3 py-2.5 font-medium">
                          <Link href={hub.href} className="text-blue-900 hover:underline">{c.month}</Link>
                        </th>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgHighC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgLowC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.rainMm}mm</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.wetDays}</td>
                        <td className="px-3 py-2.5 text-gray-800 whitespace-nowrap">{c.daylight}</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.sunset}</td>
                        <td className="px-3 py-2.5 text-gray-700">{hub.verdict}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Temperature, rainfall and wet days are the 2015 to 2024 means from{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                {CLIMATE_SOURCE.label}
              </a>
              . Daylight and sunset are for the 15th of each month, from{' '}
              <a href={DAYLIGHT_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                {DAYLIGHT_SOURCE.label}
              </a>
              . A wet day is a day with 1mm of precipitation or more.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">The short answer</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you want the longest days, go in May. Sunset is 20:45 on the 15th and 21:06 by the 31st,
              average highs are 17.4C, and hotel rates sit well below the August peak for very nearly the same
              weather. If you want the best all-round balance, go in September: 19.7C highs, the school
              holidays over from the first week, and Open House putting several hundred normally-closed
              buildings on show free of charge from 12 to 20 September.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If the weather itself is the deciding factor, go in April. It is the driest month of the year at
              40mm across ten wet days, well ahead of February at 54mm, and by mid-month the sun does not set
              until 19:56. In 2027 it has an additional advantage, because Easter falls on 28 March, which
              moves the family holiday crowds out of April entirely.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If price is what matters, go in January after the 4th, or in the first ten days of November.
              Both are periods where nothing seasonal is running, and both put zone 1 hotels at their annual
              floor. January is the cheaper and the colder, at 7.7C average highs and 1.7C lows.
            </p>
          </section>

          <section className="mt-10 rounded-lg border border-amber-200 bg-amber-50/60 p-5">
            <h2 className="text-2xl font-bold text-gray-900">Five London facts that change what you can book</h2>
            <ul className="mt-4 space-y-3 text-gray-800 leading-relaxed">
              <li>
                <span className="font-semibold">The London Eye closes for the whole of January</span> for annual
                maintenance. There is no partial operation and no workaround. It reopens in February.
              </li>
              <li>
                <span className="font-semibold">Buckingham Palace State Rooms open only in summer.</span> The
                2026 season ran 9 July to 27 September. For the other nine months the Palace opens on selected
                dates for a limited number of guided tours only.
              </li>
              <li>
                <span className="font-semibold">Changing the Guard runs Monday, Wednesday and Friday</span>, not
                daily, and can be cancelled at short notice in bad weather. Nearly every competing guide gets
                this wrong.
              </li>
              <li>
                <span className="font-semibold">On 25 December there is no public transport at all</span> in
                London. No Underground, no bus, no National Rail, no Overground, no DLR, no Elizabeth line.
              </li>
              <li>
                <span className="font-semibold">The Tower of London closes on 24, 25 and 26 December</span> and
                runs shorter winter hours from November, returning to summer hours on 1 March.
              </li>
            </ul>
          </section>

          {hubMonths.map((m) => {
            const c = londonClimate[m.key];
            return (
              <section key={m.key} id={m.key} className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900">London in {m.month}</h2>
                <p className="mt-2 text-sm text-gray-600">
                  {c.avgHighC}C average high, {c.avgLowC}C average low, {c.rainMm}mm across {c.wetDays} wet
                  days, {c.daylight} of daylight mid-month with sunset at {c.sunset}.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">{m.capsule}</p>
                {m.hasPage ? (
                  <p className="mt-3">
                    <Link href={m.href} className="font-semibold text-blue-900 hover:underline">
                      Read the full guide to London in {m.month}
                    </Link>
                  </p>
                ) : (
                  <p className="mt-3 text-gray-600">
                    We publish full month guides for August through May. For {m.month}, the figures above and
                    the note on Buckingham Palace are the essentials; the nearest full guides are{' '}
                    <Link href="/london-in-may" className="text-blue-900 font-medium hover:underline">
                      London in May
                    </Link>{' '}
                    and{' '}
                    <Link href="/london-in-august" className="text-blue-900 font-medium hover:underline">
                      London in August
                    </Link>
                    .
                  </p>
                )}
              </section>
            );
          })}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Where the numbers come from</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Temperature, rainfall and wet days are the 2015 to 2024 means for the central London grid point
              at 51.49N, 0.16W, taken from the ERA5 reanalysis through the{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Open-Meteo historical archive
              </a>
              . A wet day is a day recording 1mm of precipitation or more. Daylight, sunrise and sunset are
              the figures for the 15th of each month from the{' '}
              <a href={DAYLIGHT_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                timeanddate.com sunrise and sunset tables for London
              </a>
              , in local time. Buckingham Palace season dates come from the{' '}
              <a href={PALACE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Royal Collection Trust
              </a>
              , and Changing the Guard days from{' '}
              <a href={GUARD_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                the Household Division
              </a>
              .
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Where we could not confirm something from an official source, we leave it out rather than fill
              the gap. That currently applies to the Hyde Park Winter Wonderland dates for this winter, to the
              2027 Buckingham Palace summer season, to the 2027 dates for Christmas at Kew and the Somerset
              House rink, and to English school holiday dates beyond the February half-term, which are set by
              individual local authorities rather than nationally.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Every tour price, star rating and review count in these guides was checked against the live
              GetYourGuide listing on 28 July 2026. We do not publish a rating or a review count we have not
              verified, and we do not list an attraction in a ranked top ten during a month when it is closed.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Best time to visit London: FAQs</h2>
            <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((f) => (
                <div key={f.question} className="py-4">
                  <h3 className="font-semibold text-gray-900">{f.question}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm font-semibold text-gray-900">Ready to book?</p>
            <p className="mt-2 text-sm text-gray-600">
              Browse{' '}
              <Link href="/tours" className="text-blue-900 font-medium hover:underline">
                all London tours
              </Link>
              , our{' '}
              <Link href="/top-10" className="text-blue-900 font-medium hover:underline">
                top ten London experiences
              </Link>
              , the{' '}
              <Link href="/guides/best-walking-tours-london" className="text-blue-900 font-medium hover:underline">
                best walking tours guide
              </Link>{' '}
              or the{' '}
              <Link href="/family" className="text-blue-900 font-medium hover:underline">
                family picks
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
