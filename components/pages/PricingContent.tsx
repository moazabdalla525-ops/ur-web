'use client';

import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, X, ArrowRight, CalendarDays, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const CALENDLY = 'https://calendly.com/moaz';
const WHATSAPP = 'https://wa.me/971XXXXXXXXX';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const oneTimeFeatures = [
  '5-page custom website (Home, Services, About, Contact, + 1 service page)',
  'Mobile-first, responsive design',
  'One-tap call & WhatsApp buttons',
  'On-page SEO: titles, meta, schema markup, sitemap',
  'Google Business Profile cleanup + link',
  'Contact form → your email + SMS',
  '1 revision round included',
  'Delivered in 10 working days',
  'Full source code ownership',
  'First month hosting included',
];

const monthlyFeatures = [
  'Hosting & SSL certificate',
  'Security updates and patches',
  'Monthly content edits (text, photos, hours)',
  'Uptime monitoring',
  'Direct WhatsApp access',
];

const pricingFaqs = [
  {
    q: 'Is there a contract?',
    a: "No. The one-time fee is a one-time project engagement — no contract needed. The monthly support plan is month-to-month; cancel any time.",
  },
  {
    q: 'How does payment work?',
    a: '50% upfront to start, 50% on delivery before the site goes live. Bank transfer or online payment.',
  },
  {
    q: 'What if I need more than 5 pages?',
    a: 'Additional pages beyond the 5 included are AED 150 per page. We discuss scope before starting so there are no surprises.',
  },
  {
    q: 'Can I host the site myself?',
    a: 'Yes — if you want to manage hosting yourself, I hand over the files and we skip the monthly fee. Most clients keep the support plan because it removes the hassle.',
  },
];

export default function PricingContent() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.06) 0%, transparent 55%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-4"
            >
              Pricing
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-5xl md:text-6xl text-slate-50 mb-6"
            >
              Transparent.{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                No surprises.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed">
              One fixed price. One fixed timeline. You know exactly what you&apos;re getting before you pay a dirham.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* One-time card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="relative bg-blue-500/5 border-2 border-blue-500/40 rounded-3xl p-8"
            >
              <div
                className="absolute -top-3 left-8 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full"
              >
                MOST POPULAR
              </div>

              <div className="mb-6">
                <p className="text-slate-400 text-sm mb-2">One-time payment</p>
                <p className="font-heading font-bold text-5xl text-slate-50">
                  AED 1,500
                </p>
                <p className="text-slate-500 text-sm mt-1">Complete website, ready to rank</p>
              </div>

              <ul className="space-y-3 mb-8">
                {oneTimeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-blue-400 flex-shrink-0 mt-0.5"
                      size={16}
                      aria-hidden="true"
                    />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-2xl transition-colors duration-200 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Book a discovery call
                <ArrowRight size={16} />
              </a>
              <p className="text-center text-xs text-slate-500 mt-3">50% deposit to start</p>
            </motion.div>

            {/* Monthly card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8"
            >
              <div className="mb-6">
                <p className="text-slate-400 text-sm mb-2">Per month, after launch</p>
                <p className="font-heading font-bold text-5xl text-slate-50">
                  AED 250
                </p>
                <p className="text-slate-500 text-sm mt-1">Optional — cancel any time</p>
              </div>

              <ul className="space-y-3 mb-8">
                {monthlyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-green-400 flex-shrink-0 mt-0.5"
                      size={16}
                      aria-hidden="true"
                    />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 opacity-40">
                  <X className="text-slate-500 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                  <span className="text-slate-400 text-sm">New page builds (quoted separately)</span>
                </li>
                <li className="flex items-start gap-3 opacity-40">
                  <X className="text-slate-500 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                  <span className="text-slate-400 text-sm">Full redesigns</span>
                </li>
              </ul>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold py-3.5 rounded-2xl transition-colors duration-200 cursor-pointer"
              >
                <MessageCircle size={16} />
                Ask me on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compare section */}
      <section className="py-20 border-t border-slate-800/60 bg-slate-900/20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl text-slate-50 mb-3">
              Why not an agency?
            </h2>
            <p className="text-slate-400">Same result. A fraction of the cost and time.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-slate-700/50"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="py-4 px-6 text-left text-slate-500 font-medium">What</th>
                  <th className="py-4 px-4 text-center text-slate-400 font-semibold">Agency</th>
                  <th className="py-4 px-4 text-center text-blue-400 font-semibold">Moaz</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Price', agency: 'AED 5,000–15,000', moaz: 'AED 1,500' },
                  { label: 'Timeline', agency: '6–12 weeks', moaz: '10 working days' },
                  { label: 'Revision rounds', agency: '3–5 (costly)', moaz: '1 included' },
                  { label: 'Who you deal with', agency: 'Account managers', moaz: 'Just me' },
                  { label: 'Communication', agency: 'Email tickets', moaz: 'WhatsApp direct' },
                  { label: 'Source code ownership', agency: 'Sometimes locked in', moaz: 'Always yours' },
                ].map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-slate-800/60 ${i % 2 === 0 ? 'bg-slate-900/30' : ''}`}
                  >
                    <td className="py-3.5 px-6 text-slate-300 font-medium">{row.label}</td>
                    <td className="py-3.5 px-4 text-center text-slate-500">{row.agency}</td>
                    <td className="py-3.5 px-4 text-center text-green-400 font-medium">{row.moaz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-3xl text-slate-50 mb-10 text-center"
          >
            Pricing questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {pricingFaqs.map((faq) => (
              <div key={faq.q} className="bg-slate-800/30 border border-slate-700/40 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-slate-50 mb-2 text-base">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-800/60">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl text-slate-50 mb-4">
              Still have questions?
            </h2>
            <p className="text-slate-400 mb-8">
              Message me on WhatsApp or book a free 15-minute call. No commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                <CalendarDays size={16} />
                Book a free call
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
              >
                <MessageCircle size={16} />
                WhatsApp me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
