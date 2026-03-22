'use client';

import { ReactNode } from 'react';

interface TrackedGYGLinkProps {
  href: string;
  tourName: string;
  section: string;
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export default function TrackedGYGLink({
  href,
  tourName,
  section,
  className,
  children,
  onClick,
}: TrackedGYGLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    try {
      navigator.sendBeacon(
        '/api/track-click',
        JSON.stringify({ type: 'gyg', city: tourName, section })
      );
    } catch {
      fetch('/api/track-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'gyg', city: tourName, section }),
        keepalive: true,
      }).catch(() => {});
    }
    if (onClick) onClick(e);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
