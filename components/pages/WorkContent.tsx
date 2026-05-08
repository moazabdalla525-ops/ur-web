'use client';

import { motion, type Variants } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const CALENDLY = 'https://calendly.com/moaz';
const WHATSAPP = 'https://wa.me/971XXXXXXXXX';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const projects = [
  {
    name: 'Serenity Sleep',
    tag: 'Health & Wellness',
    url: 'https://serenity-sleep.vercel.app/',
    tagline: 'A calming, conversion-focused landing page built to book consultations.',
    description:
      'Serenity Sleep needed to stand out in a crowded wellness market and convert visitors into booked consultations — not just browse traffic. I designed a clean, trust-first landing page with a clear value proposition above the fold, social proof, and a prominent booking CTA.',
    features: [
      'Mobile-first, fast-loading design',
      'Above-the-fold booking CTA',
      'Google Business Profile integration',
      'On-page SEO for local wellness searches',
      'Contact form + WhatsApp button',
    ],
    color: 'from-violet-500/10 to-indigo-500/5',
    accent: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    border: 'border-violet-500/30',
    glow: 'rgba(139,92,246,0.08)',
  },
  {
    name: 'Pepperlane',
    tag: 'Restaurant Discovery',
    url: 'https://pepperlane-feast-finder.lovable.app',
    tagline: 'A modern UAE restaurant finder — search, filter, and discover your next meal.',
    description:
      'Pepperlane needed a product that felt fast, local, and trustworthy. The challenge was building a discovery experience that felt curated without being complex. Clean card-based UI, location-aware filtering, and a mobile-first layout that works for the majority of UAE users browsing on their phones.',
    features: [
      'Fast, filterable restaurant listings',
      'Location-based search UX',
      'Mobile-first card layout',
      'Minimal, intuitive navigation',
      'Clean brand identity applied throughout',
    ],
    color: 'from-orange-500/10 to-amber-500/5',
    accent: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    border: 'border-orange-500/30',
    glow: 'rgba(249,115,22,0.07)',
  },
  {
    name: 'Goat Burger',
    tag: 'Fast Food Brand',
    url: 'https://goat-burger.lovable.app/',
    tagline: 'A bold burger brand website built to drive orders and foot traffic.',
    description:
      "Goat Burger wanted a website that matched the energy of their brand — confident, no-nonsense, and appetite-inducing. The site leads with the menu, makes ordering via WhatsApp frictionless, and gives the restaurant a professional digital presence that competes with chains.",
    features: [
      'Bold, brand-first visual design',
      'Menu showcase with photos',
      'One-tap WhatsApp ordering flow',
      'Location map and opening hours',
      'SEO for local food searches',
    ],
    color: 'from-red-500/10 to-rose-500/5',
    accent: 'bg-red-500/15 text-red-300 border-red-500/30',
    border: 'border-red-500/30',
    glow: 'rgba(239,68,68,0.07)',
  },
];

export default function WorkContent() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 40%, rgba(59,130,246,0.06) 0%, transparent 55%)',
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
              Portfolio
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-5xl md:text-6xl text-slate-50 mb-6"
            >
              Work
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed">
              Three live demo sites — each built for a different UAE business niche. Click through and judge the work for yourself.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: 'easeOut' }}
              className={`bg-gradient-to-br ${p.color} border border-slate-800/80 hover:border-slate-700/80 rounded-3xl overflow-hidden transition-all duration-300`}
              style={{
                boxShadow: `0 0 80px ${p.glow}`,
              }}
            >
              <div className="p-8 md:p-10">
                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span
                      className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border ${p.accent} mb-3`}
                    >
                      {p.tag}
                    </span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-50">
                      {p.name}
                    </h2>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    View live site
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="text-blue-300/80 font-medium text-base mb-4 italic">
                  &ldquo;{p.tagline}&rdquo;
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-2xl">
                  {p.description}
                </p>

                {/* Features */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                    What was built
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="text-blue-400 flex-shrink-0 mt-0.5"
                          size={15}
                          aria-hidden="true"
                        />
                        <span className="text-slate-300 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-slate-800/60">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-4">
              Want one for your business?
            </h2>
            <p className="text-slate-400 mb-8">
              AED 1,500. 10 working days. Your industry, your area, your customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-lg shadow-blue-500/25"
              >
                Book a 15-min call
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
              >
                WhatsApp me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
