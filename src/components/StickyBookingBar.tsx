"use client";
import { useState, useEffect } from "react";

export function StickyBookingBar({ tourName, affiliateUrl, price }: { tourName: string; affiliateUrl: string; price?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 hidden lg:block bg-white border-t border-gray-200 shadow-2xl print:hidden">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-3">
        <div>
          <p className="font-bold text-sm text-gray-900 truncate">{tourName}</p>
          {price && <p className="text-xs text-gray-500">From {price}</p>}
        </div>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg text-sm transition-colors whitespace-nowrap"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
