import type { Metadata } from 'next';
import PricingContent from '@/components/pages/PricingContent';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'AED 1,500 for a complete 5-page website. AED 250/month for hosting, security, and content edits. Fixed price, fixed timeline — no surprises.',
};

export default function PricingPage() {
  return <PricingContent />;
}
