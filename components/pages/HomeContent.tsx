'use client';

import { motion, type Variants, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  CheckCircle2, ExternalLink, ArrowRight, CalendarDays, MessageCircle,
} from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';
import FAQ from '@/components/FAQ';
import AnimatedBackground from '@/components/AnimatedBackground';

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

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const aboutFacts = [
  { label: 'Fixed price', value: 'AED 1,500' },
  { label: 'Delivery', value: '10 days' },
  { label: 'Communication', value: 'WhatsApp' },
  { label: 'Revisions', value: '1 round' },
];

const monthlyFeatures = [
  'Hosting & SSL certificate',
  'Security updates & patches',
  'Monthly content edits (text, photos, hours)',
  'Uptime monitoring',
  'Direct WhatsApp access',
];

const deliverables = [
  '5-page custom website (Home, Services, About, Contact, + 1–3 service pages)',
  'Mobile-first design with one-tap call & WhatsApp buttons',
  'On-page SEO setup (titles, meta, schema markup, sitemap)',
  'Google Business Profile cleanup and link',
  'Contact form going to your email + SMS',
  'Delivered in 10 working days from deposit',
];

const demoSites = [
  {
    name: 'Serenity Sleep',
    tag: 'Health & Wellness',
    desc: 'A calm, conversion-focused landing page built to book consultations.',
    url: 'https://serenity-sleep.vercel.app/',
    gradient: 'from-violet-500/10 to-indigo-500/5',
    glow: 'rgba(139,92,246,0.08)',
    accentBorder: 'hover:border-violet-500/40',
  },
  {
    name: 'Pepperlane',
    tag: 'Restaurant Discovery',
    desc: 'A modern restaurant finder built for the UAE market.',
    url: 'https://pepperlane-feast-finder.lovable.app',
    gradient: 'from-amber-500/10 to-orange-500/5',
    glow: 'rgba(245,158,11,0.06)',
    accentBorder: 'hover:border-amber-500/40',
  },
  {
    name: 'Goat Burger',
    tag: 'Fast Food Brand',
    desc: 'Bold brand site with menu showcase, location, and WhatsApp ordering.',
    url: 'https://goat-burger.lovable.app/',
    gradient: 'from-rose-500/10 to-red-500/5',
    glow: 'rgba(244,63,94,0.06)',
    accentBorder: 'hover:border-rose-500/40',
  },
];

const heroWords = ['Websites', 'that', 'actually', 'get', 'customers'];

function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-2 bg-gradient-to-r from-[#284B63] to-[#153243] hover:from-[#2A5070] hover:to-[#1C3A52] text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-[#153243]/40 hover:shadow-[#153243]/40"
    >
      {children}
    </motion.a>
  );
}

function SecondaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
    >
      {children}
    </motion.a>
  );
}

export default function HomeContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const orbY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Animated ambient orbs */}
        <motion.div style={{ y: orbY }} className="absolute inset-0 -z-10 pointer-events-none">
          <div className="orb-pulse absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#153243] blur-[120px]" />
          <div className="orb-pulse-slow absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#284B63] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'radial-gradient(circle, #B4B8AB 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />
        </motion.div>

        {/* Floating particles + beam sweep */}
        <div className="absolute inset-0 -z-10">
          <AnimatedBackground count={22} />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-start">
              {/* Animated badge */}
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B4B8AB] bg-[#284B63]/15 border border-[#284B63]/30 px-3 py-1.5 rounded-full">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-[#B4B8AB]"
                  />
                  UAE Web Developer
                </span>
              </motion.div>

              {/* Word-by-word headline */}
              <motion.h1
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="font-heading font-bold text-5xl md:text-6xl lg:text-[4rem] text-slate-50 mb-6 leading-[1.1]"
              >
                {heroWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordReveal}
                    className={`inline-block mr-[0.25em] ${
                      i === 2 ? 'gradient-shimmer' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                I build clean, fast, mobile-first websites for UAE businesses.
                Fixed price, fixed timeline, ranked on Google.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-6">
                <PrimaryBtn href={CALENDLY}>
                  <CalendarDays size={16} />
                  Book a 15-min call
                </PrimaryBtn>
                <SecondaryBtn href={WHATSAPP}>
                  <MessageCircle size={16} />
                  WhatsApp me
                </SecondaryBtn>
              </motion.div>

              <motion.p variants={fadeUp} className="text-sm text-slate-600">
                <span className="text-slate-400 font-medium">AED 1,500 fixed</span>
                <span className="mx-2 text-slate-700">·</span>
                <span className="text-slate-400 font-medium">10 working days</span>
                <span className="mx-2 text-slate-700">·</span>
                <span className="text-slate-400 font-medium">No agency markup</span>
              </motion.p>
            </motion.div>

            {/* Right — Floating Phone Mockup */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <PhoneMockup />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-24 border-t border-slate-800/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#B4B8AB] block mb-3">
                About
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-5">
                Not an agency.{' '}
                <span className="gradient-shimmer">Just me.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-400 text-base leading-relaxed mb-4">
                Small Dubai businesses pay AED 5,000–15,000 to agencies for sites that take 3 months. I do the same work for AED 1,500 in 10 days — no account managers, no meetings, no markup.
              </motion.p>
              <motion.p variants={fadeUp} className="text-slate-500 text-base leading-relaxed mb-8">
                You message me on WhatsApp, I respond. You give feedback once, I revise once. Then we go live.
              </motion.p>
              <motion.a
                variants={fadeUp}
                href="/about"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="inline-flex items-center gap-2 text-[#B4B8AB] hover:text-[#EEF0EB] text-sm font-semibold transition-colors duration-200 cursor-pointer"
              >
                Full story <ArrowRight size={15} />
              </motion.a>
            </motion.div>

            {/* Right — stats */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 gap-4"
            >
              {aboutFacts.map((f, i) => (
                <motion.div
                  key={f.label}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-[#153243] border border-slate-800/60 hover:border-[#284B63]/40 rounded-2xl p-6 text-center transition-colors duration-300"
                >
                  <motion.p
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: i * 0.08 }}
                    className="font-heading font-bold text-2xl text-[#F4F9E9] mb-1"
                  >
                    {f.value}
                  </motion.p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{f.label}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="py-24 bg-[#153243]/20 border-y border-slate-800/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#B4B8AB] block mb-3">
                What you get
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-4">
                Everything for AED 1,500
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 text-base mb-8">
                One price. One timeline. No surprises at the end.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-4">
                {deliverables.map((item, i) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, delay: i * 0.08 }}
                    >
                      <CheckCircle2 className="text-[#B4B8AB] flex-shrink-0 mt-0.5" size={18} aria-hidden="true" />
                    </motion.div>
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative flex flex-col gap-4"
            >
              {/* One-time card */}
              <div className="relative">
                <div className="absolute -inset-2 bg-[#284B63]/5 rounded-3xl blur-xl" />
                <div className="relative bg-[#153243] border-2 border-[#284B63]/40 rounded-3xl p-7">
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#284B63] to-[#153243] text-[#F4F9E9] text-xs font-bold px-3 py-1 rounded-full">
                    ONE-TIME
                  </div>
                  <div className="flex items-end justify-between mb-5">
                    <div>
                      <p className="text-slate-500 text-xs mb-1">Fixed price</p>
                      <motion.p
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                        className="font-heading font-bold text-4xl text-[#F4F9E9]"
                      >
                        AED 1,500
                      </motion.p>
                    </div>
                    <p className="text-slate-600 text-xs text-right">5 pages · 10 days<br />50% deposit to start</p>
                  </div>
                  <div className="space-y-2.5 mb-6">
                    {[
                      { label: 'Delivery', value: '10 working days' },
                      { label: 'Revision rounds', value: '1 included' },
                      { label: 'SEO setup', value: 'Included', accent: true },
                      { label: 'Source code', value: 'Yours forever', accent: true },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between py-2 border-b border-slate-800/50">
                        <span className="text-slate-500 text-sm">{row.label}</span>
                        <span className={`font-medium text-sm ${row.accent ? 'text-[#B4B8AB]' : 'text-slate-50'}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <motion.a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#284B63] to-[#153243] hover:from-[#2A5070] hover:to-[#1C3A52] text-white font-semibold py-3 rounded-2xl transition-all duration-200 cursor-pointer shadow-lg shadow-[#153243]/40"
                  >
                    Get started <ArrowRight size={15} />
                  </motion.a>
                </div>
              </div>

              {/* Monthly card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                className="bg-[#0F1E2B] border border-slate-800/60 rounded-3xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">After launch · optional</p>
                    <p className="font-heading font-bold text-2xl text-[#F4F9E9]">AED 250<span className="text-slate-500 text-sm font-normal">/mo</span></p>
                  </div>
                  <span className="text-xs text-slate-600 border border-slate-800 rounded-full px-2.5 py-1">Cancel any time</span>
                </div>
                <ul className="space-y-2">
                  {monthlyFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <CheckCircle2 className="text-green-400 flex-shrink-0" size={14} aria-hidden="true" />
                      <span className="text-slate-400 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Demo Sites ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#B4B8AB] block mb-3">
              See it in action
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-4">
              Real sites. Live right now.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-xl mx-auto">
              Click through and judge the work for yourself.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {demoSites.map((site) => (
              <motion.div
                key={site.name}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ boxShadow: `0 0 60px ${site.glow}` }}
                className={`relative bg-gradient-to-br ${site.gradient} bg-[#153243] border border-slate-800/80 ${site.accentBorder} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-default`}
              >
                <div>
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">{site.tag}</span>
                  <h3 className="font-heading font-bold text-slate-50 text-xl mt-1">{site.name}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{site.desc}</p>
                <motion.a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="flex items-center gap-2 text-[#B4B8AB] hover:text-[#B4B8AB] text-sm font-semibold transition-colors duration-200 cursor-pointer"
                >
                  View live site <ExternalLink size={14} />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-slate-800/40 bg-[#153243]/30">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#B4B8AB] block mb-3">
              Questions
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl md:text-4xl text-slate-50">
              Straight answers
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FAQ />
          </motion.div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-28 relative overflow-hidden">
        {/* Animated glow orbs + pulse rings */}
        <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute"
          >
            <div className="w-[600px] h-[300px] rounded-full bg-[#153243] blur-[100px]" />
          </motion.div>

          {/* Expanding pulse rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-[#284B63]/20"
              style={{ width: 300, height: 300 }}
              animate={{ scale: [0.8, 2.4], opacity: [0.4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.35,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl text-slate-50 mb-5">
              Ready to stop being{' '}
              <span className="gradient-shimmer">invisible on Google?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 text-lg mb-10">
              15-minute call. No pitch deck. Tell me what your business does and I&apos;ll tell you if I can help.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <PrimaryBtn href={CALENDLY}>
                <CalendarDays size={16} />
                Book a 15-min call
              </PrimaryBtn>
              <SecondaryBtn href={WHATSAPP}>
                <MessageCircle size={16} />
                WhatsApp me
              </SecondaryBtn>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-700 text-sm mt-6">
              Replies within 4 hours · Sun–Thu 9am–7pm Dubai time
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
