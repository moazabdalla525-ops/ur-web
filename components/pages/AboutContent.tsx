'use client';

import { motion, type Variants } from 'framer-motion';
import { CalendarDays, MessageCircle } from 'lucide-react';

const CALENDLY = 'https://calendly.com/moaz';
const WHATSAPP = 'https://wa.me/971XXXXXXXXX';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const paragraphs = [
  {
    heading: 'Why I started',
    body: "Small Dubai businesses pay AED 5,000–15,000 to agencies for sites that take 3 months and need 10 revision rounds. I do the same work for AED 1,500 in 10 days because I cut the meetings, the account managers, and the markup. The output is the same — a fast, SEO-ready website that shows up when someone searches for what you sell. The process is just honest.",
  },
  {
    heading: 'How I work',
    body: "Every project is just me. You message me on WhatsApp, I respond. You give feedback once, I revise once. There's no project management software, no weekly check-ins, no design decks to approve. I ask what you need, I build it, and we go live. Boring is good.",
  },
  {
    heading: "What I'm not",
    body: "Not an agency, not a marketplace, not a template seller. Every site is custom-built for the specific business — your niche, your service area, your customers. I won't rank you for searches that don't convert. I won't build something that looks good in a portfolio presentation but doesn't work on a phone at 11pm in Ajman.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 40%, rgba(59,130,246,0.06) 0%, transparent 55%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-4"
            >
              About
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-5xl md:text-6xl text-slate-50 mb-6"
            >
              Hi, I&apos;m Moaz.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-xl leading-relaxed">
              I build websites for UAE businesses that need to be found on Google — not just exist online.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-2"
            >
              <div
                className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center relative overflow-hidden"
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                {/* Glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 60%, rgba(59,130,246,0.08) 0%, transparent 60%)',
                  }}
                />
                {/* Avatar placeholder */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center">
                    <span className="font-heading font-bold text-4xl text-slate-400">M</span>
                  </div>
                  <p className="text-slate-500 text-sm">Photo coming soon</p>
                </div>
              </div>

              {/* Stats below photo */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  { label: 'Fixed price', value: 'AED 1,500' },
                  { label: 'Delivery', value: '10 days' },
                  { label: 'Communication', value: 'WhatsApp' },
                  { label: 'Response time', value: '< 4 hours' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-slate-800/40 border border-slate-700/40 rounded-2xl p-4"
                  >
                    <p className="font-heading font-bold text-slate-50 text-lg">{stat.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3"
            >
              {paragraphs.map((p, i) => (
                <motion.div
                  key={p.heading}
                  variants={fadeUp}
                  className={`${i < paragraphs.length - 1 ? 'mb-10 pb-10 border-b border-slate-800/60' : ''}`}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-3">
                    {p.heading}
                  </span>
                  <p className="text-slate-300 text-base leading-[1.85]">{p.body}</p>
                </motion.div>
              ))}

              {/* CTA */}
              <motion.div variants={fadeUp} className="mt-12">
                <p className="text-slate-400 text-sm mb-5">
                  If that sounds like the kind of person you want building your website:
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 cursor-pointer shadow-lg shadow-blue-500/25"
                  >
                    <CalendarDays size={16} />
                    Book a discovery call
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
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
