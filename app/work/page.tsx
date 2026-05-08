import type { Metadata } from 'next';
import WorkContent from '@/components/pages/WorkContent';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Three live demo websites built for UAE businesses — a sleep wellness brand, a restaurant finder, and a burger restaurant. See the quality before committing.',
};

export default function WorkPage() {
  return <WorkContent />;
}
