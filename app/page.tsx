import type { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Moaz — Websites That Get UAE Businesses Found on Google',
  description:
    'I build clean, fast, mobile-first websites for UAE businesses. AED 1,500 fixed price. Delivered in 10 working days. On-page SEO, Google Business Profile, and a site that converts phone calls and bookings.',
};

export default function HomePage() {
  return <HomeContent />;
}
