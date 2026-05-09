'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MessageCircle } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';

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
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden px-8">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="orbA absolute rounded-full" style={{ width: '500px', height: '500px', background: '#1C3A52', filter: 'blur(120px)', top: '-120px', right: '0' }} />
          <div className="orbB absolute rounded-full" style={{ width: '400px', height: '400px', background: 'rgba(194,111,79,.35)', filter: 'blur(100px)', bottom: '-80px', left: '0' }} />
          <AnimatedBackground count={14} />
        </div>
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[.22em] uppercase f-grot mb-4 block" style={{ color: '#E8B98A' }}>
              <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: '#E8B98A' }}>
                <span className="absolute inset-0 rounded-full ring" style={{ background: '#E8B98A' }} />
              </span>
              About
            </span>
            <h1 className="f-display mb-6" style={{ color: '#EEF0EB', fontSize: 'clamp(52px,9vw,120px)' }}>
              Not an agency.<br />
              <span className="italic"><span className="apricot-fill">Just me.</span></span>
            </h1>
            <p className="text-[18px] leading-relaxed max-w-2xl" style={{ color: '#94A3B8' }}>
              One person. Direct communication. Sites that work on a phone at midnight in Ajman.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y px-8" style={{ borderColor: 'rgba(180,184,171,.10)', background: 'rgba(15,30,43,.45)' }}>
        <div className="max-w-[1400px] mx-auto py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
            {facts.map((f, i) => (
              <div key={f.label} className="text-center" style={{ animationDelay: `${i * 0.08}s` }}>
                <p className="f-display text-[32px] md:text-[40px] leading-none mb-1" style={{ color: '#EEF0EB' }}>{f.value}</p>
                <p className="f-mono text-[10px] uppercase tracking-[.2em]" style={{ color: '#475569' }}>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial numbered sections */}
      <section className="py-8 px-8">
        <div className="max-w-[1400px] mx-auto">
          {sections.map((s, i) => (
            <motion.div
              key={s.heading}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="grid grid-cols-12 gap-6 py-16"
              style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(180,184,171,.10)' }}
            >
              {/* Section marker */}
              <div className="col-span-12 md:col-span-1 f-mono text-[11px] tracking-[.2em] pt-1" style={{ color: '#475569' }}>
                § 0{i + 1}
              </div>

              {/* Big number */}
              <div className="col-span-3 md:col-span-2 flex items-start">
                <span className="f-display leading-none" style={{ color: '#E8B98A', fontSize: 'clamp(60px,8vw,120px)' }}>
                  {s.num}
                </span>
              </div>

              {/* Text */}
              <div className="col-span-9 md:col-span-9 pt-1">
                <span className="f-mono text-[10.5px] uppercase tracking-[.22em] block mb-4" style={{ color: '#475569' }}>
                  {s.heading}
                </span>
                <p className="text-[17px] leading-[1.85]" style={{ color: '#CBD5E1' }}>
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t" style={{ borderColor: 'rgba(180,184,171,.10)' }} />
        </div>
      </section>

      {/* Quick facts cards */}
      <section className="py-20 px-8" style={{ background: 'rgba(15,30,43,.35)', borderTop: '1px solid rgba(180,184,171,.08)', borderBottom: '1px solid rgba(180,184,171,.08)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-14 reveal">
            <div className="col-span-12 md:col-span-1 f-mono text-[11px] tracking-[.2em]" style={{ color: '#475569' }}>§ 04</div>
            <div className="col-span-12 md:col-span-11">
              <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[.22em] uppercase f-grot mb-4 block" style={{ color: '#E8B98A' }}>
                By the numbers
              </span>
              <h2 className="f-display" style={{ color: '#EEF0EB', fontSize: 'clamp(36px,5vw,72px)' }}>
                What you actually <span className="italic"><span className="apricot-fill">get.</span></span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: '10', unit: 'working days', desc: 'From deposit to live site — every time. If I miss it, the monthly care plan is on me for a year.' },
              { metric: 'AED 1,500', unit: 'fixed price', desc: 'No hourly billing. No scope creep invoices. The number you see is the number you pay.' },
              { metric: '1', unit: 'revision round', desc: 'You give me feedback once, I fix everything. We go live. Simple.' },
            ].map((c, i) => (
              <motion.div
                key={c.unit}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grad-border rounded-3xl p-9"
                style={{ background: 'rgba(11,26,38,.65)' }}
              >
                <p className="f-display leading-none mb-1" style={{ color: '#E8B98A', fontSize: 'clamp(48px,7vw,80px)' }}>{c.metric}</p>
                <p className="f-mono text-[10px] uppercase tracking-[.2em] mb-5" style={{ color: '#475569' }}>{c.unit}</p>
                <p className="text-[14px] leading-relaxed" style={{ color: '#94A3B8' }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute orbA rounded-full" style={{ width: '600px', height: '600px', background: 'rgba(232,185,138,.12)', filter: 'blur(120px)', top: '20%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          <div className="absolute beam inset-y-0 -left-1/3 w-1/3" />
        </div>
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="f-display mb-6" style={{ color: '#EEF0EB', fontSize: 'clamp(36px,6vw,80px)' }}>
              If that sounds like the person<br />you want building your site —
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold cursor-pointer"
                style={{ background: 'linear-gradient(105deg,#F4D3A8 0%, #E8B98A 50%, #C26F4F 110%)', boxShadow: '0 18px 50px -18px rgba(232,185,138,.55)', color: '#0B1A26' }}
              >
                <CalendarDays size={16} /> Book a discovery call
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 rounded-full border px-7 py-4 text-base font-medium cursor-pointer"
                style={{ borderColor: 'rgba(180,184,171,.30)', color: '#EEF0EB' }}
              >
                <MessageCircle size={16} /> WhatsApp me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
