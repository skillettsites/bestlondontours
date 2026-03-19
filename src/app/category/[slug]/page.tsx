import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getToursByCategory } from '@/data/tours';
import { categorySchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';
import TourCard from '@/components/ui/TourCard';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/ui/FAQ';

const categorySeoContent: Record<string, { paragraphs: string[]; relatedGuides: { slug: string; title: string }[] }> = {
  landmarks: {
    paragraphs: [
      'London is home to some of the most recognisable landmarks in the world. Whether you are drawn to medieval fortresses, royal palaces, or towering modern skyscrapers, the city offers a wealth of historic and architectural treasures. Booking your tickets in advance is strongly recommended, as the most popular sites regularly sell out during peak season.',
      'Many of London\'s landmarks are clustered within walking distance of each other, making it easy to visit several in a single day. The Tower of London, St Paul\'s Cathedral, and Tower Bridge are all within a short walk in the City of London. Over in Westminster, you can see Westminster Abbey, Buckingham Palace, and Big Ben in one morning.',
      'For the best panoramic views, head to The Shard or the London Eye. Both offer a completely different perspective on the city and are especially impressive at sunset. If you prefer to stay at ground level, a Thames river cruise lets you admire the skyline from the water.',
    ],
    relatedGuides: [
      { slug: 'first-time-visiting-london', title: 'First Time Visiting London' },
      { slug: 'london-one-day-itinerary', title: 'London in One Day Itinerary' },
      { slug: 'free-things-to-do-london', title: 'Free Things to Do in London' },
    ],
  },
  'river-cruises': {
    paragraphs: [
      'A Thames river cruise is one of the most relaxing and scenic ways to experience London. The river has been the city\'s main transport artery for centuries, and many of London\'s greatest buildings were designed to be viewed from the water. You will see landmarks from a completely unique angle that walking tours simply cannot offer.',
      'The most popular route runs from Westminster Pier to Greenwich, passing the Houses of Parliament, the London Eye, Tower Bridge, and the Tower of London along the way. Live commentary brings the history of each landmark to life. For a more budget-friendly option, Thames Clippers run regular services that accept Oyster cards.',
    ],
    relatedGuides: [
      { slug: 'thames-cruise-guide', title: 'Complete Thames Cruise Guide' },
      { slug: 'london-one-day-itinerary', title: 'London in One Day Itinerary' },
    ],
  },
  'day-trips': {
    paragraphs: [
      'Some of England\'s most impressive attractions are just a short journey from central London. Guided day trips take the hassle out of planning transport and navigation, letting you focus on enjoying the experience. Expert guides provide fascinating commentary that you would miss travelling independently.',
      'The Windsor, Stonehenge, and Bath combination is the most popular day trip for good reason, covering three UNESCO-calibre destinations in a single day. The Harry Potter Studio Tour is another standout, offering a behind-the-scenes look at the film sets that fans of all ages love.',
      'For those who prefer travelling independently, Windsor and Oxford are both easily reached by direct train from London in under an hour. The Cotswolds and Stonehenge are harder to reach by public transport, making a guided coach tour the most practical option.',
    ],
    relatedGuides: [
      { slug: 'day-trips-from-london', title: 'Best Day Trips from London' },
      { slug: 'first-time-visiting-london', title: 'First Time Visiting London' },
    ],
  },
  'food-tours': {
    paragraphs: [
      'London\'s food scene has been transformed over the past two decades, and the city is now one of the great food capitals of the world. A guided food tour is the best way to discover the markets, producers, and hidden gems that most visitors walk straight past.',
      'Borough Market is the crown jewel of London\'s food scene. Trading since the 13th century, it brings together artisan producers from across the UK and beyond. A guided tour with tastings is the ideal introduction, giving you insider access to stalls and stories you would never find on your own.',
    ],
    relatedGuides: [
      { slug: 'london-food-guide', title: 'London Food Guide: Markets and Hidden Gems' },
      { slug: 'free-things-to-do-london', title: 'Free Things to Do in London' },
    ],
  },
  'family-fun': {
    paragraphs: [
      'London is one of the most family-friendly cities in the world, packed with attractions that children and adults enjoy equally. From the wizarding world of Harry Potter to the thrills of the London Dungeon, there truly is something for every age group and interest.',
      'For younger children, the London Eye and hop-on hop-off bus tours are gentle, engaging experiences with plenty of visual stimulation. Older children and teenagers tend to prefer the Harry Potter Studio Tour, Madame Tussauds, and The Shard. The London Dungeon is best suited to confident children aged 12 and over.',
      'Do not forget that many of London\'s best family attractions are completely free. The Natural History Museum, Science Museum, and V&A all offer world-class exhibitions at no cost. Hyde Park and Regent\'s Park have excellent playgrounds and open spaces for burning off energy between museum visits.',
    ],
    relatedGuides: [
      { slug: 'london-with-kids', title: 'London with Kids Guide' },
      { slug: 'free-things-to-do-london', title: 'Free Things to Do in London' },
      { slug: 'first-time-visiting-london', title: 'First Time Visiting London' },
    ],
  },
};

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `${SITE_URL}/category/${category.slug}` },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${SITE_URL}/category/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTours = getToursByCategory(category.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema(category)) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: category.title },
          ]}
        />

        <div className="mb-8">
          <span className="text-4xl mb-4 block">{category.icon}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{category.title}</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        <FAQ faqs={category.faqs} />

        {/* SEO Content Section */}
        {categorySeoContent[category.slug] && (
          <section className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {category.title} in London</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              {categorySeoContent[category.slug].paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {categorySeoContent[category.slug].relatedGuides.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Guides</h3>
                <ul className="space-y-2">
                  {categorySeoContent[category.slug].relatedGuides.map((guide) => (
                    <li key={guide.slug}>
                      <Link href={`/guides/${guide.slug}`} className="text-blue-900 hover:underline">
                        {guide.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
}
