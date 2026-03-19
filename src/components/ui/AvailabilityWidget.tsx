'use client';

import { GYG_PARTNER_ID } from '@/lib/constants';

export default function AvailabilityWidget({ tourId }: { tourId: string }) {
  return (
    <div className="my-8 rounded-lg border border-gray-200 p-6 bg-gray-50">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Check Availability & Book</h3>
      <div
        data-gyg-href="https://widget.getyourguide.com/default/availability.frame"
        data-gyg-tour-id={tourId}
        data-gyg-locale-code="en-US"
        data-gyg-currency="GBP"
        data-gyg-widget="availability"
        data-gyg-variant="horizontal"
        data-gyg-partner-id={GYG_PARTNER_ID}
      >
        <span>
          Powered by{' '}
          <a target="_blank" rel="sponsored" href="https://www.getyourguide.com/london-l57/">
            GetYourGuide
          </a>
        </span>
      </div>
    </div>
  );
}
