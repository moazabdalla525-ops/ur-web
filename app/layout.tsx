import type { Metadata } from 'next';
import { Fraunces, Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz', 'SOFT'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ur Web — Websites That Get UAE Businesses Found on Google',
    template: '%s | Ur Web',
  },
  description:
    'Clean, fast, mobile-first websites for UAE businesses. AED 1,500 fixed price. Delivered in 10 working days. On-page SEO included.',
  keywords: ['web developer UAE', 'website design Dubai', 'SEO Dubai', 'affordable website UAE'],
  openGraph: {
    title: 'Ur Web — Websites That Actually Get Customers',
    description: 'AED 1,500 fixed price. 10 working days. Ranked on Google.',
    type: 'website',
    locale: 'en_AE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col grain">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
