import type { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'I build websites for UAE small businesses that need to be found on Google — not just exist online. No agency, no markup, no account managers.',
};

export default function AboutPage() {
  return <AboutContent />;
}
