'use client';

import { motion, type Variants, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  AirVent, Keyboard, Wrench, Truck, ChefHat, Waves, UtensilsCrossed,
  CheckCircle2, ExternalLink, ArrowRight, CalendarDays, MessageCircle,
} from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';
import FAQ from '@/components/FAQ';

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

const cardHover = { y: -6, scale: 1.01 };

const niches = [
  { icon: AirVent,         title: 'AC Service Contractors',      desc: "Get found when someone Googles 'AC repair near me' in your area." },
  { icon: Keyboard,        title: 'Typing Centers',              desc: "Capture customers searching 'Tasheel near me' or 'Amer [your area].'" },
  { icon: Wrench,          title: 'Plumbers',                    desc: 'Show up for emergency searches at midnight.' },
  { icon: Truck,           title: 'Movers & Packers',            desc: 'Look professional enough to win the corporate jobs.' },
  { icon: ChefHat,         title: 'Home Kitchens & Cake Artists',desc: 'Stop losing the Google search wave to bigger brands.' },
  { icon: Waves,           title: 'Pool Maintenance',            desc: 'Win the recurring contracts in your villa community.' },
  { icon: UtensilsCrossed, title: 'Restaurants',                 desc: "Every time someone searches 'burger spot near me' — you pop up." },
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
      className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-blue-900/30 hover:shadow-blue-800/40"
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
          <div className="orb-pulse absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-900 blur-[120px]" />
          <div className="orb-pulse-slow absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-slate-700 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'radial-gradient(circle, #93C5FD 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-start">
              {/* Animated badge */}
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-800/20 border border-blue-700/30 px-3 py-1.5 rounded-full">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-400"
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

      {/* ── Who I work with ── */}
      <section className="py-24 border-t border-slate-800/40">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-3">
              Who I work with
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-4">
              Built for businesses that need to be <span className="gradient-shimmer">found</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-xl mx-auto text-base">
              Not pretty for pretty&apos;s sake — built to rank for the exact searches your customers are already making.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {niches.map((n) => (
              <motion.div
                key={n.title}
                variants={fadeUp}
                whileHover={cardHover}
                className="bg-[#0C1024] border border-slate-800/80 rounded-2xl p-6 transition-colors duration-300 cursor-default group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-10 h-10 bg-blue-800/20 group-hover:bg-blue-700/30 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                >
                  <n.icon className="text-blue-400" size={20} aria-hidden="true" />
                </motion.div>
                <h3 className="font-heading font-semibold text-slate-50 mb-2 text-base">{n.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{n.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="py-24 bg-[#0C1024]/50 border-y border-slate-800/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-3">
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
                      <CheckCircle2 className="text-blue-400 flex-shrink-0 mt-0.5" size={18} aria-hidden="true" />
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
              className="relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-blue-800/5 rounded-3xl blur-2xl" />
              <div className="relative bg-[#0C1024] border border-blue-800/30 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <p className="text-slate-500 text-sm mb-2">One-time investment</p>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="font-heading font-bold text-5xl text-slate-50 mb-1"
                  >
                    AED 1,500
                  </motion.p>
                  <p className="text-slate-600 text-sm">+ AED 250/month after launch (optional)</p>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Delivery time', value: '10 working days' },
                    { label: 'Revision rounds', value: '1 included' },
                    { label: 'Pages included', value: '5 pages' },
                    { label: 'SEO setup', value: 'Included', accent: true },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-3 border-b border-slate-800/60">
                      <span className="text-slate-500 text-sm">{row.label}</span>
                      <span className={`font-medium text-sm ${row.accent ? 'text-blue-400' : 'text-slate-50'}`}>{row.value}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 cursor-pointer shadow-lg shadow-blue-900/30"
                >
                  Get started <ArrowRight size={16} />
                </motion.a>
                <p className="text-center text-xs text-slate-600 mt-4">No contract. 50% deposit to start.</p>
              </div>
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
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-3">
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
                className={`relative bg-gradient-to-br ${site.gradient} bg-[#0C1024] border border-slate-800/80 ${site.accentBorder} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-default`}
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
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-200 cursor-pointer"
                >
                  View live site <ExternalLink size={14} />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-slate-800/40 bg-[#0C1024]/30">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-12"
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-3">
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
        {/* Animated glow orbs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[600px] h-[300px] rounded-full bg-blue-900 blur-[100px]" />
          </motion.div>
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
