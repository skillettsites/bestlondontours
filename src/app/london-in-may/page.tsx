import { Metadata } from 'next';
import { buildMonthPage, buildMonthMetadata } from '@/components/season/MonthPage';

const SLUG = 'london-in-may';

export const metadata: Metadata = buildMonthMetadata(SLUG) as Metadata;

export default function Page() {
  return buildMonthPage(SLUG);
}
