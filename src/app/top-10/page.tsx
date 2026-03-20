import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { tours } from '@/data/tours';
import { SITE_URL, GYG_PARTNER_ID } from '@/lib/constants';
import { itemListSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import StarRating from '@/components/ui/StarRating';
import FAQ from '@/components/ui/FAQ';

// Rank by weighted score: rating * log(reviewCount)
const rankedTours = [...tours]
  .map(t => ({ ...t, score: t.rating * Math.log10(t.reviewCount) }))
  .sort((a, b) => b.score - a.score)
  .slice(0, 10);

const topReviews: Record<string, string> = {
  'london-eye-tickets': 'The most popular attraction in London for a reason. Over 36,000 visitors have rated this 4.6 out of 5, making it the most reviewed tour on our list. The 30-minute ride in a glass capsule 135 metres above the South Bank delivers panoramic views you simply cannot get anywhere else. On a clear day, you can see for miles in every direction. The location is perfect for combining with a walk along the South Bank afterwards.',
  'tower-of-london-tickets': 'A thousand years of royal history packed into one iconic fortress. With nearly 29,000 reviews and a 4.6 rating, the Tower of London is London\'s most celebrated historical attraction. The Crown Jewels are breathtaking, the Beefeater tours are entertaining and informative, and the medieval walls offer brilliant views of Tower Bridge. Budget 2-3 hours to see everything properly.',
  'thames-sightseeing-cruise': 'The best value tour in all of London. At just £17, this Westminster to Greenwich cruise is extraordinary value, and nearly 23,000 reviewers agree with a 4.5 rating. Live commentary brings every landmark to life as you pass the Houses of Parliament, Tower Bridge, and the Tower of London. Arriving in Greenwich opens up a whole afternoon of free exploration at the market, Cutty Sark, and Royal Observatory.',
  'madame-tussauds-tickets': 'A London institution that continues to impress visitors year after year. Over 21,000 reviews at 4.6 stars speak for themselves. The wax figures are astonishingly lifelike, and the Marvel and Star Wars immersive zones take the experience well beyond a traditional museum. Perfect for families, rainy days, and anyone who enjoys celebrity culture.',
  'st-pauls-cathedral-tickets': 'Sir Christopher Wren\'s masterpiece earns the highest individual rating on our list at 4.7 stars. Climbing the 528 steps to the Golden Gallery is demanding but the reward is one of the most spectacular panoramic views in London. The Whispering Gallery acoustics fascinate children and adults alike. At £27, it represents outstanding value for an experience of this calibre.',
  'harry-potter-studio-tour': 'The ultimate experience for Harry Potter fans of any age. With a 4.6 rating from nearly 10,000 reviews, this behind-the-scenes tour consistently delivers magic. Walking through the Great Hall, strolling down Diagon Alley, and boarding the Hogwarts Express creates memories that last a lifetime. The included coach transfer from central London makes the journey stress-free.',
  'the-shard-tickets': 'Western Europe\'s tallest building offers views stretching up to 40 miles on a clear day. At just £19, The Shard is the most affordable viewpoint in London and one of the most dramatic. The open-air sky deck on level 72 is genuinely exhilarating. Visit at sunset for the most spectacular experience, watching the city transform as darkness falls. Over 8,500 reviews at 4.6 stars.',
  'westminster-abbey-tickets': 'Over 900 years of British royal history in one stunning Gothic building. This is where monarchs have been crowned since 1066, and the weight of that history is palpable as you walk through. Poets\' Corner, the Coronation Chair, and the medieval Chapter House are all highlights. The multimedia guide is excellent and brings centuries of stories to life.',
  'buckingham-palace-tickets': 'A rare opportunity to step inside the working heart of the British monarchy. The 19 State Rooms are magnificently furnished, and the Picture Gallery houses works by Rembrandt and Rubens. Only open during summer months (July to October), which makes advance booking essential. The garden walk at the end is a peaceful conclusion to the visit.',
  'hop-on-hop-off-bus': 'The most flexible way to see London, particularly for first-time visitors. A 24-hour pass at £27 covers multiple routes and all major landmarks. Audio commentary in several languages keeps things interesting between stops. The open-top deck is brilliant on a sunny day, and the ability to hop off and explore at your own pace makes this genuinely useful rather than just a novelty.',
  'borough-market-food-tour': 'Borough Market Food Tour stands out with the highest individual rating of any tour we list. At 4.8 stars, visitors consistently praise the expert guides, generous tastings, and insider access to stalls most tourists walk past. Six or more tastings of artisan cheese, cured meats, and sweet treats replace a full lunch. Small group sizes keep it personal.',
  'london-dungeon-tickets': 'The London Dungeon delivers 90 minutes of immersive, darkly comic entertainment with 19 live shows and 2 rides. Jack the Ripper, Sweeney Todd, and the Great Plague come to life through skilled actors and impressive special effects. Not for young children, but teenagers and adults who enjoy a thrill will have a brilliant time.',
  'windsor-stonehenge-bath-tour': 'Three of England\'s most impressive destinations in a single day trip from London. Windsor Castle, Stonehenge, and the city of Bath each offer something completely different, from royal grandeur to ancient mystery to Georgian elegance. At 11.5 hours, it is a long day, but the expert guide and comfortable coach make the time fly.',
};

const faqs = [
  { question: 'What is the number 1 tour in London?', answer: `Based on our analysis of ratings, review volume, and visitor satisfaction, the ${rankedTours[0].shortTitle} takes the top spot. With a ${rankedTours[0].rating} rating from ${rankedTours[0].reviewCount.toLocaleString()} reviews, it consistently delivers an outstanding experience.` },
  { question: 'How do you rank London tours?', answer: 'We use a weighted scoring system that considers both the star rating and the number of verified reviews. A tour with a 4.6 rating and 30,000 reviews ranks higher than one with a 4.8 rating and 500 reviews, because the larger sample size provides stronger confidence in the quality.' },
  { question: 'Should I book London tours in advance?', answer: 'Yes, always. Online prices are almost always cheaper than walk-up prices, and the most popular tours (especially the Harry Potter Studio Tour and Buckingham Palace) frequently sell out days or weeks ahead. Booking online also guarantees your preferred time slot.' },
  { question: 'What is the best value London tour?', answer: `The Thames Sightseeing Cruise at £17 per person offers incredible value. The View from The Shard at £19 is another standout. Both have thousands of positive reviews and deliver genuinely memorable experiences at very reasonable prices.` },
];

export const metadata: Metadata = {
  title: 'Top 10 Best London Tours in 2026 (Tried & Tested) | Best London Tours',
  description: `The 10 best London tours ranked by ratings and reviews. From the ${rankedTours[0].shortTitle} to ${rankedTours[9].shortTitle}. Prices from £${Math.min(...rankedTours.map(t => t.price))}.`,
  alternates: { canonical: `${SITE_URL}/top-10` },
  openGraph: {
    title: 'Top 10 Best London Tours in 2026 (Tried & Tested)',
    description: 'The definitive ranking of London tours based on ratings, reviews, and value. Updated for 2026.',
    url: `${SITE_URL}/top-10`,
  },
};

export default function Top10Page() {
  const schemaData = [
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Top 10 Tours', url: `${SITE_URL}/top-10` },
    ]),
    itemListSchema(rankedTours),
    faqSchema(faqs),
  ];

  return (
    <>
      {schemaData.filter(Boolean).map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Top 10 Tours' }]} />

        {/* Hero */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 sm:p-10 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">TOP 10</span>
            <span className="text-sm text-amber-700 font-medium">Updated March 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Top 10 Best London Tours in 2026
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            We analysed ratings, review volumes, and visitor feedback across every major London tour to
            produce this definitive ranking. These 10 tours represent the very best experiences the city
            has to offer, from historic landmarks to thrilling day trips. Every tour on this list has
            been verified by thousands of real visitors.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-700">Ranked by ratings and reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{rankedTours.reduce((s, t) => s + t.reviewCount, 0).toLocaleString()} total reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Prices from &pound;{Math.min(...rankedTours.map(t => t.price))}</span>
            </div>
          </div>
        </div>

        {/* Quick Nav */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-10">
          <p className="text-sm font-semibold text-gray-900 mb-2">Jump to Tour</p>
          <div className="flex flex-wrap gap-2">
            {rankedTours.map((t, i) => (
              <a key={t.slug} href={`#rank-${i + 1}`} className="text-sm bg-white px-3 py-1.5 rounded-full border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors">
                <span className="font-bold text-amber-600">#{i + 1}</span>{' '}
                <span className="text-gray-700">{t.shortTitle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Ranked Tour List */}
        <div className="space-y-8">
          {rankedTours.map((tour, index) => (
            <article key={tour.slug} id={`rank-${index + 1}`} className="scroll-mt-20">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="lg:flex">
                  {/* Image */}
                  <div className="lg:w-96 shrink-0 relative">
                    <div className="aspect-[16/10] lg:aspect-auto lg:h-full relative">
                      <Image
                        src={tour.imageUrl}
                        alt={tour.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 384px"
                      />
                      {/* Rank Badge */}
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                          index === 0 ? 'bg-amber-500' :
                          index === 1 ? 'bg-gray-400' :
                          index === 2 ? 'bg-amber-700' :
                          'bg-blue-900'
                        }`}>
                          #{index + 1}
                        </div>
                      </div>
                      {/* Price Badge */}
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-green-600 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                          From &pound;{tour.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 lg:p-8 flex-1">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div>
                        <Link href={`/tours/${tour.slug}`}>
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-blue-900 transition-colors">
                            {tour.title}
                          </h2>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600 mt-2 mb-4">
                      <StarRating rating={tour.rating} reviewCount={tour.reviewCount} size="lg" />
                      <span className="text-gray-300">|</span>
                      <span>{tour.duration}</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      {topReviews[tour.slug] || tour.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid sm:grid-cols-2 gap-2 mb-5">
                      {tour.highlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <svg className="h-5 w-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {tour.bestFor.map(b => (
                        <span key={b} className="inline-block bg-amber-50 text-amber-800 text-xs font-medium px-2.5 py-1 rounded-full">
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={tour.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-3 text-base font-semibold text-white hover:bg-green-700 transition-colors shadow-sm"
                      >
                        Book Now from &pound;{tour.price}
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Read Full Review
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Summary Box */}
        <section className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-2 pr-4 font-semibold">Rank</th>
                  <th className="py-2 pr-4 font-semibold">Tour</th>
                  <th className="py-2 pr-4 font-semibold">Price</th>
                  <th className="py-2 pr-4 font-semibold">Rating</th>
                  <th className="py-2 font-semibold">Reviews</th>
                </tr>
              </thead>
              <tbody>
                {rankedTours.map((tour, i) => (
                  <tr key={tour.slug} className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-bold text-amber-600">#{i + 1}</td>
                    <td className="py-2 pr-4">
                      <Link href={`/tours/${tour.slug}`} className="text-blue-900 hover:underline font-medium">
                        {tour.shortTitle}
                      </Link>
                    </td>
                    <td className="py-2 pr-4 font-semibold">&pound;{tour.price}</td>
                    <td className="py-2 pr-4">{tour.rating}/5</td>
                    <td className="py-2">{tour.reviewCount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* GetYourGuide Widget */}
        <div className="mt-12 text-center">
          <div
            data-gyg-href="https://widget.getyourguide.com/default/city.frame"
            data-gyg-location-id="57"
            data-gyg-locale-code="en-US"
            data-gyg-widget="city"
            data-gyg-partner-id={GYG_PARTNER_ID}
          />
        </div>

        <FAQ faqs={faqs} />

        {/* Internal links */}
        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/compare" className="text-blue-900 hover:underline font-medium">Compare All Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/budget" className="text-blue-900 hover:underline font-medium">Budget Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/family" className="text-blue-900 hover:underline font-medium">Family Tours</Link>
            <span className="text-gray-300">|</span>
            <Link href="/first-time" className="text-blue-900 hover:underline font-medium">First Time Visitors</Link>
            <span className="text-gray-300">|</span>
            <Link href="/tours" className="text-blue-900 hover:underline font-medium">All Tours</Link>
          </div>
        </section>
      </div>
    </>
  );
}
