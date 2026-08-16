'use client';

import { ReactNode } from 'react';
import { useCurrency } from '@/components/CurrencyProvider';
import { deriveActivityId, deriveUrlType, postAffiliateClick } from '@/lib/postAffiliateClick';

interface TrackedGYGLinkProps {
  href: string;
  tourName: string;
  section: string;
  variant?: string;
  destination?: string;
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export default function TrackedGYGLink({
  href,
  tourName,
  section,
  variant,
  destination,
  className,
  children,
  onClick,
}: TrackedGYGLinkProps) {
  const { code } = useCurrency();
  const sep = href.includes('?') ? '&' : '?';
  const finalHref = code && code !== 'GBP' ? `${href}${sep}currency=${code}` : href;

  const track = () => {
    postAffiliateClick({
      type: 'gyg',
      city: tourName,
      section,
      variant,
      destination,
      activity_id: deriveActivityId(href),
      url_type: deriveUrlType(href),
      page_path: typeof window !== 'undefined' ? window.location.pathname : undefined,
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.button !== 1) return;
    track();
  };

  const handleClick = (e: React.MouseEvent) => {
    track();
    if (onClick) onClick(e);
  };

  return (
    <a
      href={finalHref}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onPointerDown={handlePointerDown}
      onClick={handleClick}
      className={className}
      data-gyg-city={tourName}
      data-gyg-section={section}
      data-gyg-tracked="1"
    >
      {children}
    </a>
  );
}
