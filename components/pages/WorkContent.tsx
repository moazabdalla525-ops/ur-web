'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, MessageCircle } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';

const sites = [
  {
    name: 'Serenity Sleep',
    tag: 'Health & Wellness',
    city: 'Dubai',
    year: '2024',
    url: 'https://serenity-sleep.vercel.app/',
    desc: 'A calm, conversion-focused landing page built to book consultations. Clean, trust-first design with clear value proposition above the fold.',
    features: ['Mobile-first, fast-loading design', 'Above-the-fold booking CTA', 'Google Business Profile integration', 'Local SEO for wellness searches'],
    tint: 'rgba(139,92,246,.16)',
    glow: 'rgba(139,92,246,.18)',
    tagColor: '#a78bfa',
    metric: ['+34%', 'consults booked'],
  },
  {
    name: 'Pepperlane',
    tag: 'Restaurant Discovery',
    city: 'Abu Dhabi',
    year: '2024',
    url: 'https://pepperlane-feast-finder.lovable.app',
    desc: 'A modern restaurant finder for the UAE market — search-first, fast, mobile. Card-based UI with location-aware filtering.',
    features: ['Fast, filterable restaurant listings', 'Location-based search UX', 'Mobile-first card layout', 'Clean brand identity throughout'],
    tint: 'rgba(200,154,56,.16)',
    glow: 'rgba(200,154,56,.18)',
    tagColor: '#C89A38',
    metric: ['1.2s', 'avg page load'],
  },
  {
    name: 'Goat Burger',
    tag: 'Fast Food Brand',
    city: 'Sharjah',
    year: '2025',
    url: 'https://goat-burger.lovable.app/',
    desc: 'Bold brand site with menu showcase, location, and one-tap WhatsApp ordering. Leads with the menu, makes ordering frictionless.',
    features: ['Bold, brand-first visual design', 'Menu showcase with photos', 'One-tap WhatsApp ordering flow', 'SEO for local food searches'],
    tint: 'rgba(244,63,94,.18)',
    glow: 'rgba(244,63,94,.18)',
    tagColor: '#fb7185',
    metric: ['×2.1', 'WhatsApp orders'],
  },
];

export default function WorkContent() {
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
          <div className="orbA absolute rounded-full" style={{ width: '500px', height: '500px', background: '#1C1710', filter: 'blur(120px)', top: '-180px', left: '0' }} />
          <AnimatedBackground count={12} />
        </div>
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[.22em] uppercase f-grot mb-4 block" style={{ color: '#C89A38' }}>
              Portfolio
            </span>
            <h1 className="f-display mb-6" style={{ color: '#EDE3D0', fontSize: 'clamp(48px,8vw,100px)' }}>
              Recent <span className="italic"><span className="apricot-fill">shipments.</span></span>
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: '#94A3B8' }}>
              Four live sites for UAE businesses. Each launched in under 12 working days. Click through and judge the work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horizontal scroll on mobile, vertical stacked on desktop */}
      <section className="pb-8 px-0 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Mobile: horizontal scroll */}
          <div className="md:hidden h-scroll overflow-x-auto px-8 pb-6">
            <div className="flex gap-6">
              {sites.map((s, i) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap reveal press tilt relative shrink-0 w-[82vw] rounded-3xl overflow-hidden grad-border block"
                  style={{ background: `linear-gradient(165deg, ${s.tint}, rgba(15,12,8,.85))`, boxShadow: `0 30px 80px -30px ${s.glow}`, transitionDelay: `${i * 0.05}s` }}
                >
                  <MobileCard s={s} />
                </a>
              ))}
              <div className="snap shrink-0 w-[1px]" />
            </div>
          </div>
          <p className="md:hidden f-mono text-[11px] tracking-[.2em] uppercase px-8 mt-2 mb-8" style={{ color: '#475569' }}>
            ← Swipe to see all projects
          </p>

          {/* Desktop: stacked articles */}
          <div className="hidden md:flex flex-col gap-8">
            {sites.map((s, i) => (
              <motion.article
                key={s.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
                className="rounded-3xl overflow-hidden grad-border"
                style={{ background: `linear-gradient(165deg, ${s.tint}, rgba(15,12,8,.85))`, boxShadow: `0 30px 80px -30px ${s.glow}` }}
              >
                <div className="grid grid-cols-12 gap-0">
                  {/* Browser mockup side */}
                  <div className="col-span-5 aspect-[4/3] relative overflow-hidden"
                       style={{ background: `radial-gradient(circle at 30% 30%, ${s.tint}, transparent 60%), #171310` }}>
                    <div className="absolute inset-x-6 top-6 bottom-6 rounded-2xl border"
                         style={{ borderColor: 'rgba(160,148,120,.18)', background: 'rgba(15,12,8,.7)' }}>
                      <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: 'rgba(160,148,120,.10)' }}>
                        <span className="w-2 h-2 rounded-full" style={{ background: '#475569' }} />
                        <span className="w-2 h-2 rounded-full" style={{ background: '#475569' }} />
                        <span className="w-2 h-2 rounded-full" style={{ background: '#475569' }} />
                        <span className="ml-3 text-[10px] f-mono" style={{ color: '#475569' }}>
                          {s.name.toLowerCase().replace(/\s+/g, '')}.ae
                        </span>
                      </div>
                      <div className="p-5 flex flex-col gap-3">
                        <div className="h-2 w-3/4 rounded-full" style={{ background: s.tagColor, opacity: 0.55 }} />
                        <div className="h-2 w-1/2 rounded-full" style={{ background: 'rgba(160,148,120,.4)' }} />
                        <div className="h-2 w-2/3 rounded-full" style={{ background: 'rgba(160,148,120,.25)' }} />
                        <div className="grid grid-cols-3 gap-2 mt-3">
                          <div className="aspect-square rounded-lg" style={{ background: `linear-gradient(135deg,${s.tagColor}40,transparent)` }} />
                          <div className="aspect-square rounded-lg" style={{ background: 'rgba(160,148,120,.10)' }} />
                          <div className="aspect-square rounded-lg" style={{ background: 'rgba(160,148,120,.10)' }} />
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 h-7 rounded-full" style={{ background: s.tagColor, opacity: 0.7 }} />
                          <div className="w-7 h-7 rounded-full border" style={{ borderColor: 'rgba(160,148,120,.3)' }} />
                        </div>
                      </div>
                    </div>
                    <span
                      className="absolute top-5 left-5 inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[.2em] uppercase px-2.5 py-1 rounded-full backdrop-blur"
                      style={{ color: s.tagColor, background: `${s.tagColor}20`, border: `1px solid ${s.tagColor}40` }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  {/* Content side */}
                  <div className="col-span-7 p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between mb-4">
                        <p className="f-display text-[40px]" style={{ color: '#EDE3D0' }}>{s.name}</p>
                        <span className="f-mono text-[10px] tracking-[.18em] uppercase" style={{ color: '#475569' }}>{s.city} · {s.year}</span>
                      </div>
                      <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#94A3B8' }}>{s.desc}</p>
                      <ul className="grid grid-cols-2 gap-2.5">
                        {s.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-[13px]" style={{ color: '#CBD5E1' }}>
                            <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#C89A38' }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-end justify-between pt-6 mt-6 border-t" style={{ borderColor: 'rgba(160,148,120,.10)' }}>
                      <div>
                        <p className="f-display text-[28px]" style={{ color: '#C89A38' }}>{s.metric[0]}</p>
                        <p className="text-[10px] f-mono uppercase tracking-[.18em]" style={{ color: '#475569' }}>{s.metric[1]}</p>
                      </div>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="press inline-flex items-center gap-2 text-[13px] font-medium underline-grow"
                        style={{ color: '#EDE3D0' }}
                      >
                        View live <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 border-t" style={{ borderColor: 'rgba(160,148,120,.10)' }}>
        <div className="max-w-[1100px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="f-display mb-4" style={{ color: '#EDE3D0', fontSize: 'clamp(36px,6vw,72px)' }}>
              Want one for your business?
            </h2>
            <p className="mb-8 text-[15px]" style={{ color: '#94A3B8' }}>AED 1,500. 10 working days. Your industry, your area.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold cursor-pointer"
                style={{ background: 'linear-gradient(105deg,#E8CF7A 0%, #C89A38 50%, #9B7020 110%)', boxShadow: '0 18px 50px -18px rgba(200,154,56,.55)', color: '#0F0C08' }}
              >
                <CalendarDays size={16} /> Book a 15-min call
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 rounded-full border px-7 py-4 text-base font-medium cursor-pointer"
                style={{ borderColor: 'rgba(160,148,120,.30)', color: '#EDE3D0' }}
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

function MobileCard({ s }: { s: typeof sites[0] }) {
  return (
    <>
      <div className="aspect-[4/3] relative overflow-hidden"
           style={{ background: `radial-gradient(circle at 30% 30%, ${s.tint}, transparent 60%), #171310` }}>
        <div className="absolute inset-x-6 top-6 bottom-6 rounded-2xl border"
             style={{ borderColor: 'rgba(160,148,120,.18)', background: 'rgba(15,12,8,.7)' }}>
          <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: 'rgba(160,148,120,.10)' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#475569' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#475569' }} />
            <span className="w-2 h-2 rounded-full" style={{ background: '#475569' }} />
          </div>
          <div className="p-5 flex flex-col gap-3">
            <div className="h-2 w-3/4 rounded-full" style={{ background: s.tagColor, opacity: 0.55 }} />
            <div className="h-2 w-1/2 rounded-full" style={{ background: 'rgba(160,148,120,.4)' }} />
            <div className="flex items-center gap-2 mt-3">
              <div className="flex-1 h-7 rounded-full" style={{ background: s.tagColor, opacity: 0.7 }} />
            </div>
          </div>
        </div>
        <span
          className="absolute top-5 right-5 text-[9px] font-semibold tracking-[.2em] uppercase px-2.5 py-1 rounded-full"
          style={{ color: s.tagColor, background: `${s.tagColor}20`, border: `1px solid ${s.tagColor}40` }}
        >
          {s.tag}
        </span>
      </div>
      <div className="p-7 flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <p className="f-display text-[28px]" style={{ color: '#EDE3D0' }}>{s.name}</p>
          <span className="f-mono text-[10px]" style={{ color: '#475569' }}>{s.year}</span>
        </div>
        <p className="text-[13px] leading-relaxed" style={{ color: '#94A3B8' }}>{s.desc}</p>
        <div className="flex items-end justify-between pt-3 mt-3 border-t" style={{ borderColor: 'rgba(160,148,120,.10)' }}>
          <div>
            <p className="f-display text-[22px]" style={{ color: '#C89A38' }}>{s.metric[0]}</p>
            <p className="text-[10px] f-mono uppercase tracking-[.18em]" style={{ color: '#475569' }}>{s.metric[1]}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-[12px] font-medium" style={{ color: '#EDE3D0' }}>
            View live <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </>
  );
}
