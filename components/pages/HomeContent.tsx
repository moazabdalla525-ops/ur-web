'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import {
  AirVent,
  Keyboard,
  Wrench,
  Truck,
  ChefHat,
  Waves,
  UtensilsCrossed,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  CalendarDays,
  MessageCircle,
} from 'lucide-react';
import PhoneMockup from '@/components/PhoneMockup';
import FAQ from '@/components/FAQ';

const CALENDLY = 'https://calendly.com/moaz';
const WHATSAPP = 'https://wa.me/971XXXXXXXXX';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const niches = [
  {
    icon: AirVent,
    title: 'AC Service Contractors',
    desc: "Get found when someone Googles 'AC repair near me' in your area.",
  },
  {
    icon: Keyboard,
    title: 'Typing Centers',
    desc: "Capture customers searching 'Tasheel near me' or 'Amer [your area].'",
  },
  {
    icon: Wrench,
    title: 'Plumbers',
    desc: 'Show up for emergency searches at midnight.',
  },
  {
    icon: Truck,
    title: 'Movers & Packers',
    desc: 'Look professional enough to win the corporate jobs.',
  },
  {
    icon: ChefHat,
    title: 'Home Kitchens & Cake Artists',
    desc: 'Stop losing the Google search wave to bigger brands.',
  },
  {
    icon: Waves,
    title: 'Pool Maintenance',
    desc: 'Win the recurring contracts in your villa community.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants',
    desc: "Every time someone searches 'burger spot near me' — you pop up.",
  },
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
    desc: 'A calm, conversion-focused landing page for a sleep wellness brand — built to book consultations.',
    url: 'https://serenity-sleep.vercel.app/',
    color: 'from-violet-500/10 to-indigo-500/10',
    border: 'hover:border-violet-500/40',
  },
  {
    name: 'Pepperlane',
    tag: 'Restaurant Discovery',
    desc: 'A modern restaurant finder built for the UAE market. Search, filter, and find your next meal.',
    url: 'https://pepperlane-feast-finder.lovable.app',
    color: 'from-orange-500/10 to-amber-500/10',
    border: 'hover:border-orange-500/40',
  },
  {
    name: 'Goat Burger',
    tag: 'Fast Food Brand',
    desc: 'A bold, appetite-driven website for a burger restaurant — menu showcase, location, and WhatsApp ordering.',
    url: 'https://goat-burger.lovable.app/',
    color: 'from-red-500/10 to-rose-500/10',
    border: 'hover:border-red-500/40',
  },
];

export default function HomeContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 50%, rgba(59,130,246,0.08) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(99,102,241,0.06) 0%, transparent 45%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                UAE Web Developer
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-heading font-bold text-5xl md:text-6xl lg:text-[4rem] text-slate-50 mb-6 leading-[1.1]"
              >
                Websites that{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  actually get
                </span>{' '}
                customers
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              >
                I build clean, fast, mobile-first websites for UAE businesses.
                Fixed price, fixed timeline, ranked on Google.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-3 mb-6"
              >
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  <CalendarDays size={16} />
                  Book a 15-min call
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle size={16} />
                  WhatsApp me
                </a>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-sm text-slate-500"
              >
                <span className="text-slate-400 font-medium">AED 1,500 fixed</span>
                <span className="mx-2 text-slate-700">·</span>
                <span className="text-slate-400 font-medium">10 working days</span>
                <span className="mx-2 text-slate-700">·</span>
                <span className="text-slate-400 font-medium">No agency markup</span>
              </motion.p>
            </motion.div>

            {/* Right — Phone Mockup */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who I work with ── */}
      <section className="py-24 border-t border-slate-800/60">
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
              Built for businesses that need to be found
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-xl mx-auto text-base">
              Not a pretty website for pretty&apos;s sake. Every site is built to rank for the exact searches your customers are already making.
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
                className="bg-slate-800/40 border border-slate-700/40 hover:bg-slate-800/70 hover:border-blue-500/25 rounded-2xl p-6 transition-all duration-300 cursor-default group"
              >
                <div className="w-10 h-10 bg-blue-500/10 group-hover:bg-blue-500/15 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <n.icon className="text-blue-400" size={20} aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-slate-50 mb-2 text-base">
                  {n.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{n.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800/60">
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
              <motion.p variants={fadeUp} className="text-slate-400 text-base mb-8">
                One price. One timeline. No surprises at the end. Here&apos;s exactly what&apos;s included.
              </motion.p>

              <motion.ul variants={stagger} className="space-y-4">
                {deliverables.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="text-blue-400 flex-shrink-0 mt-0.5"
                      size={18}
                      aria-hidden="true"
                    />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8"
            >
              <div className="text-center mb-8">
                <p className="text-slate-400 text-sm mb-2">One-time investment</p>
                <p className="font-heading font-bold text-5xl text-slate-50 mb-1">
                  AED 1,500
                </p>
                <p className="text-slate-500 text-sm">+ AED 250/month after launch (optional)</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
                  <span className="text-slate-400 text-sm">Delivery time</span>
                  <span className="text-slate-50 font-medium text-sm">10 working days</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
                  <span className="text-slate-400 text-sm">Revision rounds</span>
                  <span className="text-slate-50 font-medium text-sm">1 included</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
                  <span className="text-slate-400 text-sm">Pages included</span>
                  <span className="text-slate-50 font-medium text-sm">5 pages</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-400 text-sm">SEO setup</span>
                  <span className="text-green-400 font-medium text-sm">Included</span>
                </div>
              </div>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-2xl transition-colors duration-200 cursor-pointer shadow-lg shadow-blue-500/20"
              >
                Get started
                <ArrowRight size={16} />
              </a>

              <p className="text-center text-xs text-slate-500 mt-4">
                No contract. 50% deposit to start.
              </p>
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
            <motion.p variants={fadeUp} className="text-slate-400 max-w-xl mx-auto">
              These are live demo websites — click through and see the quality for yourself.
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
                className={`relative bg-gradient-to-br ${site.color} border border-slate-700/50 ${site.border} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 group cursor-default`}
              >
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    {site.tag}
                  </span>
                  <h3 className="font-heading font-bold text-slate-50 text-xl mt-1">
                    {site.name}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{site.desc}</p>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors duration-200 cursor-pointer group-hover:gap-3"
                >
                  View live site
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-slate-800/60 bg-slate-900/20">
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
            initial={{ opacity: 0, y: 20 }}
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
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at center, rgba(59,130,246,0.07) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-heading font-bold text-4xl md:text-5xl text-slate-50 mb-5"
            >
              Ready to stop being{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                invisible on Google?
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg mb-10">
              15-minute call. No pitch deck. Just tell me what your business does and I&apos;ll tell you if I can help.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                <CalendarDays size={16} />
                Book a 15-min call
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer"
              >
                <MessageCircle size={16} />
                WhatsApp me
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-600 text-sm mt-6">
              Replies within 4 hours · Sun–Thu 9am–7pm Dubai time
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
