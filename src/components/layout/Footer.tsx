import Link from 'next/link';
import { categories } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-bold mb-3">Best London Tours</h3>
            <p className="text-sm leading-relaxed">
              Helping visitors find and book the best tours, attractions, and experiences in London since 2026.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-sm hover:text-white transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">Travel Guides</h4>
            <ul className="space-y-2">
              <li><Link href="/guides/first-time-visiting-london" className="text-sm hover:text-white transition-colors">First Time in London</Link></li>
              <li><Link href="/guides/london-one-day-itinerary" className="text-sm hover:text-white transition-colors">London in One Day</Link></li>
              <li><Link href="/guides/free-things-to-do-london" className="text-sm hover:text-white transition-colors">Free Things to Do</Link></li>
              <li><Link href="/guides/london-food-guide" className="text-sm hover:text-white transition-colors">Food Guide</Link></li>
              <li><Link href="/guides" className="text-sm hover:text-white transition-colors">All Guides</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/tours" className="text-sm hover:text-white transition-colors">All Tours</Link></li>
              <li><Link href="/trending" className="text-sm hover:text-white transition-colors">Trending</Link></li>
              <li><Link href="/local-tips" className="text-sm hover:text-white transition-colors">Local Tips</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Best London Tours. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Prices shown are approximate and may vary. We earn a commission on bookings made through our links at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
