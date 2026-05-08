import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch — fill in the form, WhatsApp, email, or book a free 15-minute discovery call. Replies within 4 hours during Dubai working hours.',
};

export default function ContactPage() {
  return <ContactContent />;
}
