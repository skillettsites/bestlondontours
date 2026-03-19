'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/categories';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-900">
            <span className="text-2xl">&#127468;&#127463;</span>
            <span>Best London Tours</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/tours" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
              All Tours
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
              >
                {cat.title}
              </Link>
            ))}
            <Link href="/guides" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
              Guides
            </Link>
            <Link href="/trending" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
              Trending
            </Link>
            <Link href="/local-tips" className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors">
              Local Tips
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-900"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/tours" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
              All Tours
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900"
              >
                {cat.title}
              </Link>
            ))}
            <Link href="/guides" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
              Guides
            </Link>
            <Link href="/trending" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
              Trending
            </Link>
            <Link href="/local-tips" onClick={() => setMenuOpen(false)} className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-900">
              Local Tips
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
