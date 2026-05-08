'use client';

import { motion, type Variants } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
      'Serenity Sleep needed to stand out in a crowded wellness market and convert visitors into booked consultations — not just browse traffic. A clean, trust-first landing page with a clear value proposition above the fold, social proof, and a prominent booking CTA.',
    features: [
      'Mobile-first, fast-loading design',
      'Above-the-fold booking CTA',
      'Google Business Profile integration',
      'On-page SEO for local wellness searches',
      'Contact form + WhatsApp button',
    ],
    gradient: 'from-violet-500/8 to-indigo-500/5',
    accent: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    glow: 'rgba(139,92,246,0.06)',
  },
  {
    name: 'Pepperlane',
    tag: 'Restaurant Discovery',
    url: 'https://pepperlane-feast-finder.lovable.app',
    tagline: 'A modern UAE restaurant finder — search, filter, and discover your next meal.',
    description:
      'A discovery experience that felt curated without being complex. Clean card-based UI, location-aware filtering, and a mobile-first layout built for the majority of UAE users browsing on their phones.',
    features: [
      'Fast, filterable restaurant listings',
      'Location-based search UX',
      'Mobile-first card layout',
      'Minimal, intuitive navigation',
      'Clean brand identity throughout',
    ],
    gradient: 'from-amber-500/8 to-orange-500/5',
    accent: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    glow: 'rgba(245,158,11,0.05)',
  },
  {
    name: 'Goat Burger',
    tag: 'Fast Food Brand',
    url: 'https://goat-burger.lovable.app/',
    tagline: 'A bold burger brand website built to drive orders and foot traffic.',
    description:
      "Goat Burger wanted a website that matched the energy of their brand — confident, no-nonsense, and appetite-inducing. Leads with the menu, makes WhatsApp ordering frictionless, and gives the restaurant a presence that competes with chains.",
    features: [
      'Bold, brand-first visual design',
      'Menu showcase with photos',
      'One-tap WhatsApp ordering flow',
      'Location map and opening hours',
      'SEO for local food searches',
    ],
    gradient: 'from-rose-500/8 to-red-500/5',
    accent: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    glow: 'rgba(244,63,94,0.05)',
  },
];

export default function WorkContent() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="orb-pulse absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#153243] blur-[120px]" />
          <AnimatedBackground count={12} />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#B4B8AB] block mb-4">
              Portfolio
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-5xl md:text-6xl text-slate-50 mb-6">
              Work
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed">
              Three live demo sites built for different UAE business niches. Click through and judge the work yourself.
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
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
              className={`bg-gradient-to-br ${p.gradient} bg-[#153243] border border-slate-800/80 hover:border-slate-700/80 rounded-3xl overflow-hidden transition-all duration-300`}
              style={{ boxShadow: `0 0 80px ${p.glow}` }}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border ${p.accent} mb-3`}>
                      {p.tag}
                    </span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-50">{p.name}</h2>
                  </div>
                  <motion.a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-[#153243] hover:bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    View live site <ExternalLink size={14} />
                  </motion.a>
                </div>

                <p className="text-[#B4B8AB]/70 font-medium text-base mb-4 italic">&ldquo;{p.tagline}&rdquo;</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-2xl">{p.description}</p>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">What was built</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {p.features.map((f, fi) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: fi * 0.06 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="text-[#B4B8AB] flex-shrink-0 mt-0.5" size={15} aria-hidden="true" />
                        <span className="text-slate-300 text-sm">{f}</span>
                      </motion.li>
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
            <p className="text-slate-500 mb-8">AED 1,500. 10 working days. Your industry, your area.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a href={CALENDLY} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#284B63] to-[#153243] hover:from-[#2A5070] hover:to-[#1C3A52] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-[#153243]/40">
                Book a 15-min call
              </motion.a>
              <motion.a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                className="border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer">
                WhatsApp me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
