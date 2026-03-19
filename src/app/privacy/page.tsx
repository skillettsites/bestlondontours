import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Best London Tours. Learn how we collect, use, and protect your data.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

      <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
        <p>Last updated: 19 March 2026</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Who We Are</h2>
        <p>
          Best London Tours (bestlondontours.co.uk) is operated by Skillett Sites. Our website helps visitors
          find and book tours and attractions in London through affiliate partnerships with booking providers.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Information We Collect</h2>
        <p>
          We do not require you to create an account or provide personal information to use our site.
          We may collect anonymous usage data through:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Analytics: anonymous browsing data including pages visited, time on site, and device type</li>
          <li>Vercel Analytics: anonymous performance and usage data</li>
          <li>GetYourGuide: when you click an affiliate link, GetYourGuide may set cookies to track the referral</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Cookies</h2>
        <p>
          Our site uses cookies for analytics and affiliate tracking. These are:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Analytics cookies (_ga, _gid): used to distinguish users and sessions</li>
          <li>GetYourGuide cookies: used to attribute bookings to our affiliate account</li>
        </ul>
        <p>You can disable cookies in your browser settings at any time.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Third-Party Links</h2>
        <p>
          Our site contains links to third-party booking providers (primarily GetYourGuide). When you click
          these links, you leave our site and are subject to the privacy policies of those providers. We
          encourage you to read their privacy policies before providing any personal information.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Your Rights</h2>
        <p>
          Under UK GDPR, you have the right to access, rectify, or delete any personal data we hold about
          you. Since we do not collect personal data directly, this is unlikely to apply. If you have
          questions, contact us at{' '}
          <a href="mailto:contact@bestlondontours.co.uk" className="text-blue-900 hover:underline">
            contact@bestlondontours.co.uk
          </a>.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page
          with an updated date.
        </p>
      </div>
    </div>
  );
}
