import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides, getGuideBySlug } from '@/data/guides';
import { getTourBySlug } from '@/data/tours';
import { articleSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/ui/FAQ';
import TourCard from '@/components/ui/TourCard';

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `${SITE_URL}/guides/${guide.slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `${SITE_URL}/guides/${guide.slug}`,
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }: { params: Params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedTours = guide.relatedTourSlugs
    .map((s) => getTourBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(guide)) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Guides', href: '/guides' },
            { label: guide.title },
          ]}
        />

        <article>
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{guide.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{guide.excerpt}</p>
            <time className="mt-3 block text-sm text-gray-500" dateTime={guide.updatedDate}>
              Updated: {new Date(guide.updatedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </header>

          {/* Table of Contents */}
          <nav className="mb-10 rounded-xl bg-gray-50 p-6 border border-gray-200">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">In This Guide</h2>
            <ul className="space-y-2">
              {guide.sections.map((section, i) => (
                <li key={i}>
                  <a
                    href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="text-sm text-blue-900 hover:underline"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div className="guide-content">
            {guide.sections.map((section, i) => (
              <section key={i} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>

          {/* Related Tours CTA */}
          {relatedTours.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Tours</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedTours.slice(0, 4).map((tour) => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <FAQ faqs={guide.faqs} />

          {/* Back to guides */}
          <div className="mt-12 pt-8 border-t border-gray-200">
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
