'use client';

import { motion, type Variants } from 'framer-motion';
import { CheckCircle2, X, ArrowRight, CalendarDays, MessageCircle } from 'lucide-react';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
  { q: 'Is there a contract?', a: 'No. The one-time fee is a one-time project — no contract needed. The monthly support plan is month-to-month; cancel any time.' },
  { q: 'How does payment work?', a: '50% upfront to start, 50% on delivery before the site goes live. Bank transfer or online payment.' },
  { q: 'What if I need more than 5 pages?', a: 'Additional pages are AED 150 each. We discuss scope before starting so there are no surprises.' },
  { q: 'Can I host the site myself?', a: "Yes — I hand over the files and you skip the monthly fee. Most clients keep the support plan because it removes the hassle." },
];

export default function PricingContent() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="orb-pulse absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#153243] blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#B4B8AB] block mb-4">
              Pricing
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-5xl md:text-6xl text-slate-50 mb-6">
              Transparent.{' '}
              <span className="gradient-shimmer">No surprises.</span>
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
            {/* One-time */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative bg-[#284B63]/5 border-2 border-[#284B63]/40 rounded-3xl p-8"
              style={{ boxShadow: '0 0 60px rgba(40,75,99,0.12)' }}
            >
              <div className="absolute -top-3 left-8 bg-gradient-to-r from-[#284B63] to-[#153243] text-[#F4F9E9] text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>

              <div className="mb-6">
                <p className="text-slate-500 text-sm mb-2">One-time payment</p>
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                  className="font-heading font-bold text-5xl text-slate-50"
                >
                  AED 1,500
                </motion.p>
                <p className="text-slate-600 text-sm mt-1">Complete website, ready to rank</p>
              </div>

              <ul className="space-y-3 mb-8">
                {oneTimeFeatures.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-[#B4B8AB] flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#284B63] to-[#153243] hover:from-[#2A5070] hover:to-[#1C3A52] text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 cursor-pointer shadow-lg shadow-[#153243]/40"
              >
                Book a discovery call <ArrowRight size={16} />
              </motion.a>
              <p className="text-center text-xs text-slate-600 mt-3">50% deposit to start</p>
            </motion.div>

            {/* Monthly */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="bg-[#153243] border border-slate-800/80 rounded-3xl p-8"
            >
              <div className="mb-6">
                <p className="text-slate-500 text-sm mb-2">Per month, after launch</p>
                <p className="font-heading font-bold text-5xl text-slate-50">AED 250</p>
                <p className="text-slate-600 text-sm mt-1">Optional — cancel any time</p>
              </div>

              <ul className="space-y-3 mb-8">
                {monthlyFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 opacity-40">
                  <X className="text-slate-600 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                  <span className="text-slate-500 text-sm">New page builds (quoted separately)</span>
                </li>
                <li className="flex items-start gap-3 opacity-40">
                  <X className="text-slate-600 flex-shrink-0 mt-0.5" size={16} aria-hidden="true" />
                  <span className="text-slate-500 text-sm">Full redesigns</span>
                </li>
              </ul>

              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold py-3.5 rounded-2xl transition-colors duration-200 cursor-pointer"
              >
                <MessageCircle size={16} /> Ask on WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 border-t border-slate-800/60 bg-[#153243]/30">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl text-slate-50 mb-3">Why not an agency?</h2>
            <p className="text-slate-500">Same result. A fraction of the cost and time.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-slate-800/60"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800/60">
                  <th className="py-4 px-6 text-left text-slate-600 font-medium">What</th>
                  <th className="py-4 px-4 text-center text-slate-400 font-semibold">Agency</th>
                  <th className="py-4 px-4 text-center text-[#B4B8AB] font-semibold">Ur Web</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Price', agency: 'AED 5,000–15,000', moaz: 'AED 1,500' },
                  { label: 'Timeline', agency: '6–12 weeks', moaz: '10 working days' },
                  { label: 'Revision rounds', agency: '3–5 (costly)', moaz: '1 included' },
                  { label: 'Who you deal with', agency: 'Account managers', moaz: 'Just me, direct' },
                  { label: 'Communication', agency: 'Email tickets', moaz: 'WhatsApp direct' },
                  { label: 'Source code', agency: 'Sometimes locked in', moaz: 'Always yours' },
                ].map((row, i) => (
                  <tr key={row.label} className={`border-b border-slate-800/40 ${i % 2 === 0 ? 'bg-[#153243]/30' : ''}`}>
                    <td className="py-3.5 px-6 text-slate-300 font-medium">{row.label}</td>
                    <td className="py-3.5 px-4 text-center text-slate-600">{row.agency}</td>
                    <td className="py-3.5 px-4 text-center text-green-400 font-medium">{row.moaz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
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
          <div className="space-y-4">
            {pricingFaqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#153243] border border-slate-800/60 rounded-2xl p-6"
              >
                <h3 className="font-heading font-semibold text-slate-50 mb-2 text-base">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="font-heading font-bold text-3xl text-slate-50 mb-4">Still have questions?</h2>
            <p className="text-slate-500 mb-8">Message me on WhatsApp or book a free 15-min call. No commitment.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a href={CALENDLY} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#284B63] to-[#153243] hover:from-[#2A5070] hover:to-[#1C3A52] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-[#153243]/40">
                <CalendarDays size={16} /> Book a free call
              </motion.a>
              <motion.a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer">
                <MessageCircle size={16} /> WhatsApp me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
