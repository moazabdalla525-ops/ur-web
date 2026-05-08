'use client';

import { motion, type Variants } from 'framer-motion';
import { CalendarDays, MessageCircle } from 'lucide-react';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const sections = [
  {
    num: '01',
    heading: 'Why I started',
    body: "Small Dubai businesses pay AED 5,000–15,000 to agencies for sites that take 3 months and need 10 revision rounds. I do the same work for AED 1,500 in 10 days because I cut the meetings, the account managers, and the markup. The output is the same — a fast, SEO-ready website that shows up when someone searches for what you sell. The process is just honest.",
  },
  {
    num: '02',
    heading: 'How I work',
    body: "Every project is just me. You message me on WhatsApp, I respond. You give feedback once, I revise once. There's no project management software, no weekly check-ins, no design decks to approve. I ask what you need, I build it, and we go live. Boring is good.",
  },
  {
    num: '03',
    heading: "What I'm not",
    body: "Not an agency, not a marketplace, not a template seller. Every site is custom-built for the specific business — your niche, your service area, your customers. I won't rank you for searches that don't convert. I won't build something that looks good in a portfolio presentation but doesn't work on a phone at 11pm in Ajman.",
  },
];

const facts = [
  { label: 'Fixed price', value: 'AED 1,500' },
  { label: 'Delivery', value: '10 days' },
  { label: 'Communication', value: 'WhatsApp' },
  { label: 'Revisions', value: '1 round' },
];

export default function AboutContent() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="orb-pulse absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600 blur-[120px]" />
          <div className="orb-pulse-slow absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-600 blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-widest text-indigo-400 block mb-4"
            >
              About
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-5xl md:text-7xl text-slate-50 mb-6 leading-[1.05]"
            >
              Not an agency.{' '}
              <span className="gradient-shimmer">Just me.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-400 text-xl leading-relaxed max-w-2xl">
              One person. Direct communication. Sites that work on a phone at midnight in Ajman.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-slate-800/60 bg-[#0C1024]/40">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <motion.p
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: i * 0.08 }}
                  className="font-heading font-bold text-2xl text-slate-50 mb-1"
                >
                  {f.value}
                </motion.p>
                <p className="text-slate-600 text-xs uppercase tracking-widest">{f.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Editorial sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-0">
            {sections.map((s, i) => (
              <motion.div
                key={s.heading}
                initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 py-16 ${
                  i < sections.length - 1 ? 'border-b border-slate-800/60' : ''
                }`}
              >
                {/* Big number */}
                <div className="flex-shrink-0">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="font-heading font-bold text-7xl md:text-8xl leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.num}
                  </motion.span>
                </div>

                {/* Text */}
                <div className="flex-1 pt-2">
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="text-xs font-semibold uppercase tracking-widest text-indigo-400 block mb-3"
                  >
                    {s.heading}
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-300 text-lg leading-[1.9]"
                  >
                    {s.body}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[500px] h-[200px] rounded-full bg-indigo-600 blur-[80px]" />
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-4">
              If that sounds like the person you want building your site —
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-indigo-500/25"
              >
                <CalendarDays size={16} />
                Book a discovery call
              </motion.a>
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 cursor-pointer"
              >
                <MessageCircle size={16} />
                WhatsApp me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
