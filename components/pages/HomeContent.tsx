'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { CalendarDays, MessageCircle, Check, Plus, ArrowUpRight, Star } from 'lucide-react';
import MarqueeTicker from '@/components/MarqueeTicker';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ── Pill buttons ──────────────────────────────────────────────────────────────

function PrimaryPill({ href, children, big }: { href: string; children: React.ReactNode; big?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`press inline-flex items-center gap-3 rounded-full font-semibold cursor-pointer ${big ? 'px-7 py-4 text-base' : 'px-5 py-3 text-sm'}`}
      style={{
        background: 'linear-gradient(105deg,#E8CF7A 0%, #C89A38 50%, #9B7020 110%)',
        boxShadow: '0 18px 50px -18px rgba(200,154,56,.55), inset 0 1px 0 rgba(255,255,255,.5)',
        color: '#0F0C08',
      }}
    >
      {children}
    </a>
  );
}

function SecondaryPill({ href, children, big }: { href: string; children: React.ReactNode; big?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`press inline-flex items-center gap-3 rounded-full border font-medium cursor-pointer ${big ? 'px-7 py-4 text-base' : 'px-5 py-3 text-sm'}`}
      style={{ borderColor: 'rgba(160,148,120,.30)', color: '#EDE3D0' }}
    >
      {children}
    </a>
  );
}

// ── Section heading ────────────────────────────────────────────────────────────

function SectionHead({ num, eyebrow, title, accent, lede }: { num: string; eyebrow: string; title: string; accent: string; lede?: string }) {
  return (
    <div className="grid grid-cols-12 gap-6 mb-14">
      <div className="col-span-12 md:col-span-1 f-mono text-[11px] tracking-[.2em]" style={{ color: '#475569' }}>{num}</div>
      <div className="col-span-12 md:col-span-7 flex flex-col gap-5">
        <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[.22em] uppercase f-grot" style={{ color: '#C89A38' }}>
          <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: '#C89A38' }}>
            <span className="absolute inset-0 rounded-full ring" style={{ background: '#C89A38' }} />
          </span>
          {eyebrow}
        </span>
        <h2 className="f-display" style={{ color: '#EDE3D0', fontSize: 'clamp(40px,6vw,88px)' }}>
          {title} <span className="italic"><span className="apricot-fill">{accent}</span></span>
        </h2>
      </div>
      {lede && (
        <div className="col-span-12 md:col-span-4 flex md:justify-end items-end">
          <p className="text-[15px] max-w-sm" style={{ color: '#94A3B8' }}>{lede}</p>
        </div>
      )}
    </div>
  );
}

// ── Work cards ─────────────────────────────────────────────────────────────────

const sites = [
  { name: 'Serenity Sleep', tag: 'Health & Wellness', city: 'Dubai', year: '2024', url: 'https://serenity-sleep.vercel.app/', desc: 'Calm, conversion-focused landing page built to book consultations.', tint: 'rgba(139,92,246,.16)', glow: 'rgba(139,92,246,.18)', tagColor: '#a78bfa', metric: ['+34%', 'consults booked'] },
  { name: 'Pepperlane', tag: 'Restaurant Discovery', city: 'Abu Dhabi', year: '2024', url: 'https://pepperlane-feast-finder.lovable.app', desc: 'A modern restaurant finder for the UAE market — search-first, fast, mobile.', tint: 'rgba(200,154,56,.16)', glow: 'rgba(200,154,56,.18)', tagColor: '#C89A38', metric: ['1.2s', 'avg page load'] },
  { name: 'Goat Burger', tag: 'Fast Food Brand', city: 'Sharjah', year: '2025', url: 'https://goat-burger.lovable.app/', desc: 'Bold brand site with menu showcase, location, and one-tap WhatsApp ordering.', tint: 'rgba(244,63,94,.18)', glow: 'rgba(244,63,94,.18)', tagColor: '#fb7185', metric: ['×2.1', 'WhatsApp orders'] },
];

// ── Pricing data ───────────────────────────────────────────────────────────────

const includes = [
  'Custom 5-page website (Home, Services, About, Contact, +1 service page)',
  'Mobile-first design — one-tap call & WhatsApp buttons',
  'On-page SEO setup — titles, meta, schema, sitemap',
  'Google Business Profile cleanup and link',
  'Contact form to your email + SMS',
  'Source code, fully transferred. You own everything.',
  'Delivered in 10 working days from deposit.',
];

const monthly = [
  'Hosting & SSL certificate',
  'Security updates & patches',
  'Monthly content edits — text, photos, hours',
  'Uptime monitoring',
  'Direct WhatsApp access · 4-hr reply Sun–Thu',
];

// ── Process steps ──────────────────────────────────────────────────────────────

const steps = [
  { n: '01', t: 'Call', d: 'Free 15-min Calendly. Tell me what you do; I tell you if I can help.', day: 'Day 0' },
  { n: '02', t: 'Brief', d: 'Short questionnaire over WhatsApp. Photos, copy, brand colors, your phone.', day: 'Day 1' },
  { n: '03', t: 'Design', d: 'I design and build in parallel. You see the live URL by day 5.', day: 'Day 2–5' },
  { n: '04', t: 'Revise', d: 'One round of feedback. We fix everything that needs fixing.', day: 'Day 6–8' },
  { n: '05', t: 'Ship', d: 'Site goes live on your domain. Google Business Profile linked. Code transferred.', day: 'Day 9–10' },
];

// ── Compare rows ───────────────────────────────────────────────────────────────

const compareRows = [
  { label: 'Price', a: '5,000–15,000', b: '1,500', spread: '÷ 4–10' },
  { label: 'Timeline', a: '42–84 days', b: '10 days', spread: '÷ 4–8' },
  { label: 'Reply time', a: '24 hrs', b: '4 hrs', spread: '÷ 6' },
  { label: 'People talking', a: '3–5', b: '1', spread: 'just me' },
  { label: 'Source code', a: 'Locked', b: 'Yours', spread: 'day one' },
  { label: 'Office markup', a: 'Built in', b: 'None', spread: 'no rent' },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────

const faqItems = [
  ['Do I own the website after delivery?', 'Yes. Source code, hosting login, and every account get transferred to you on launch day. No lock-in, no "platform tax".'],
  ['What exactly is in the AED 1,500?', 'A 5-page custom website, mobile-first design with one-tap call & WhatsApp, on-page SEO setup, Google Business Profile cleanup, and a contact form to your email. Delivered in 10 working days.'],
  ['Why so cheap compared to agencies?', "I work alone, from home. No office rent, no account managers, no project managers, no markup. You're paying for the build, not the building."],
  ['How long does it really take?', "Ten working days, every time. If I miss the deadline, the monthly care plan is free for a year. Hasn't happened yet."],
  ['What if I don\'t like the design?', "One full revision round is included. We talk on WhatsApp, you tell me what's wrong, I fix it. If it's still wrong, you don't pay the second half."],
  ['Do you do logos / branding?', "Not from scratch. If you have a logo, I'll use it beautifully. If you don't, I'll point you to a designer I trust."],
];

// ── Main component ─────────────────────────────────────────────────────────────

export default function HomeContent() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [openFaq, setOpenFaq] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const f = (e: MouseEvent) => {
      const r = heroRef.current?.getBoundingClientRect();
      if (!r) return;
      setMouse({
        x: (e.clientX - r.left - r.width / 2) / r.width,
        y: (e.clientY - r.top - r.height / 2) / r.height,
      });
    };
    window.addEventListener('mousemove', f);
    return () => window.removeEventListener('mousemove', f);
  }, []);

  // Scroll reveal
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
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-20 pb-28 px-8"
        style={{ minHeight: '92vh' }}
      >
        {/* Ambient */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute orbA rounded-full"
            style={{ width: '620px', height: '620px', background: '#241C10', filter: 'blur(110px)', top: '-180px', left: `${10 + mouse.x * 4}%` }}
          />
          <div
            className="absolute orbB rounded-full"
            style={{ width: '520px', height: '520px', background: 'rgba(155,112,32,.55)', filter: 'blur(120px)', bottom: '-200px', right: `${5 - mouse.x * 4}%` }}
          />
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full drift"
              style={{
                width: `${1 + (i % 4)}px`, height: `${1 + (i % 4)}px`,
                background: i % 3 ? '#A09478' : '#C89A38',
                top: `${(i * 53) % 96}%`, left: `${(i * 37) % 96}%`,
                opacity: 0.35,
                animationDelay: `-${(i * 0.7) % 9}s`,
                animationDuration: `${7 + (i % 6)}s`,
              }}
            />
          ))}
          <div className="absolute inset-y-0 -left-1/3 w-1/3 beam" />
          <div className="absolute inset-0 opacity-[.08]"
            style={{ backgroundImage: 'linear-gradient(to right, rgba(160,148,120,.4) 1px, transparent 1px)', backgroundSize: '160px 100%' }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto grid grid-cols-12 gap-6 pt-12">
          {/* Side label */}
          <div className="col-span-1 hidden md:flex flex-col items-start gap-4 pt-2 f-mono text-[10px] tracking-[.2em] uppercase" style={{ color: '#475569' }}>
            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>№ 001 · Index</span>
          </div>

          {/* Main content */}
          <div className="col-span-12 md:col-span-10 flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[.22em] uppercase f-grot" style={{ color: '#C89A38' }}>
                <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: '#C89A38' }}>
                  <span className="absolute inset-0 rounded-full ring" style={{ background: '#C89A38' }} />
                </span>
                UAE · Independent web shop · est. 2024
              </span>
            </div>

            <h1
              className="f-display font-[500]"
              style={{ color: '#EDE3D0', fontSize: 'clamp(64px,11vw,180px)' }}
            >
              <span className="rise inline-block" style={{ animationDelay: '0s' }}>Websites</span><br />
              <span className="rise inline-block mr-4" style={{ animationDelay: '.08s' }}>that</span>
              <span className="rise inline-block italic" style={{ animationDelay: '.16s' }}>
                <span className="apricot-fill">actually</span>
              </span><br />
              <span className="rise inline-block mr-4" style={{ animationDelay: '.24s' }}>get</span>
              <span className="rise inline-block" style={{ animationDelay: '.32s' }}>
                <span className="shimmer">customers.</span>
              </span>
            </h1>

            <div className="grid md:grid-cols-12 gap-10 pt-2">
              <div className="md:col-span-7">
                <p className="text-[19px] leading-[1.55] max-w-2xl" style={{ color: '#CBD5E1' }}>
                  Not an agency. Just me — Moaz. I design and build clean, fast, mobile-first marketing sites for UAE businesses.
                  Delivered in <span style={{ color: '#C89A38' }}>10 working days</span>, for <span style={{ color: '#C89A38' }}>AED 1,500</span>, fixed.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-7">
                  <PrimaryPill href={CALENDLY} big>
                    <CalendarDays size={16} />
                    Book a 15-min call
                    <ArrowUpRight size={16} />
                  </PrimaryPill>
                  <SecondaryPill href={WHATSAPP} big>
                    <MessageCircle size={16} />
                    WhatsApp me
                  </SecondaryPill>
                </div>
              </div>

              {/* Calendar widget */}
              <div className="md:col-span-5 flex md:justify-end items-end">
                <div
                  className="grad-border rounded-2xl p-5 max-w-[320px] w-full"
                  style={{ background: 'rgba(23,19,14,.55)' }}
                >
                  <div className="flex items-center justify-between text-[10px] f-mono uppercase tracking-[.18em]" style={{ color: '#475569' }}>
                    <span>Live · Calendly</span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full pulse" style={{ background: '#7BCBA1' }} />
                      Online
                    </span>
                  </div>
                  <p className="f-display text-[42px] mt-2" style={{ color: '#EDE3D0' }}>
                    15<span style={{ color: '#475569' }}>m</span>
                  </p>
                  <p className="text-[13px] mt-1" style={{ color: '#94A3B8' }}>Free intro · I&apos;ll quote you on the call.</p>
                  <div className="mt-4 grid grid-cols-7 gap-1 text-[10px] f-mono text-center" style={{ color: '#475569' }}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <span key={i} className="py-1">{d}</span>)}
                    {Array.from({ length: 14 }).map((_, i) => {
                      const taken = [2, 5, 9, 11].includes(i);
                      const open = [1, 3, 7, 12].includes(i);
                      return (
                        <span
                          key={i}
                          className="aspect-square rounded-md flex items-center justify-center text-[9px]"
                          style={{
                            background: taken ? 'rgba(100,116,139,.18)' : open ? 'rgba(200,154,56,.20)' : 'transparent',
                            color: taken ? '#475569' : open ? '#C89A38' : '#64748B',
                            border: open ? '1px solid rgba(200,154,56,.4)' : '1px solid transparent',
                          }}
                        >
                          {i + 8}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 hidden md:flex justify-end items-start pt-2 f-mono text-[10px] tracking-[.2em] uppercase" style={{ color: '#475569' }}>
            <span>Scroll ↓</span>
          </div>
        </div>
      </section>

      {/* ── Marquee ───────────────────────────────────────────────── */}
      <MarqueeTicker />

      {/* ── Work ──────────────────────────────────────────────────── */}
      <section className="relative py-28 px-8">
        <div className="max-w-[1400px] mx-auto">
          <SectionHead
            num="§ 02 · Work"
            eyebrow="Recent shipments"
            title="Sites that earned"
            accent="their keep."
            lede="Four most recent. Each one launched in under 12 working days. Click through — they're all live."
          />

          <div className="h-scroll overflow-x-auto -mx-8 px-8 pb-6">
            <div className="flex gap-6">
              {sites.map((s, i) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap reveal group press tilt relative shrink-0 w-[78vw] md:w-[480px] rounded-3xl overflow-hidden grad-border block"
                  style={{
                    background: `linear-gradient(165deg, ${s.tint}, rgba(15,12,8,.85))`,
                    boxShadow: `0 30px 80px -30px ${s.glow}`,
                    transitionDelay: `${i * 0.05}s`,
                  }}
                >
                  {/* Browser mockup */}
                  <div
                    className="aspect-[4/3] relative overflow-hidden"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${s.tint}, transparent 60%), #171310` }}
                  >
                    <div
                      className="absolute inset-x-6 top-6 bottom-6 rounded-2xl border"
                      style={{ borderColor: 'rgba(160,148,120,.18)', background: 'rgba(15,12,8,.7)' }}
                    >
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
                      className="absolute top-5 right-5 inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[.2em] uppercase px-2.5 py-1 rounded-full backdrop-blur"
                      style={{ color: s.tagColor, background: `${s.tagColor}20`, border: `1px solid ${s.tagColor}40` }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-7 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <p className="f-display text-[32px]" style={{ color: '#EDE3D0' }}>{s.name}</p>
                      <span className="f-mono text-[10px] tracking-[.18em] uppercase" style={{ color: '#475569' }}>{s.city} · {s.year}</span>
                    </div>
                    <p className="text-[14px] leading-relaxed" style={{ color: '#94A3B8' }}>{s.desc}</p>
                    <div className="flex items-end justify-between pt-3 mt-3 border-t" style={{ borderColor: 'rgba(160,148,120,.10)' }}>
                      <div>
                        <p className="f-display text-[24px]" style={{ color: '#C89A38' }}>{s.metric[0]}</p>
                        <p className="text-[10px] f-mono uppercase tracking-[.18em]" style={{ color: '#475569' }}>{s.metric[1]}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-[13px] font-medium underline-grow" style={{ color: '#EDE3D0' }}>
                        View live <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
              <div className="snap shrink-0 w-[1px]" />
            </div>
          </div>
          <p className="f-mono text-[11px] tracking-[.2em] uppercase mt-6" style={{ color: '#475569' }}>
            ← Drag · scroll · tap any case to open the live site.
          </p>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────── */}
      <section className="relative py-28 px-8" id="pricing">
        <div className="max-w-[1400px] mx-auto">
          <SectionHead
            num="§ 03 · Pricing"
            eyebrow="One honest number"
            title="No retainers."
            accent="No surprises."
            lede="Pay 50% to start. Pay the rest on launch. Monthly care plan is optional — cancel anytime."
          />

          <div className="grid grid-cols-12 gap-6 reveal">
            {/* Main price block */}
            <div
              className="col-span-12 md:col-span-7 relative grad-border rounded-3xl p-10 md:p-14 overflow-hidden"
              style={{ background: 'linear-gradient(160deg, rgba(45,34,18,.45), rgba(15,12,8,.85))' }}
            >
              <span
                className="absolute -top-3 left-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[.2em] uppercase"
                style={{ background: 'linear-gradient(105deg,#E8CF7A,#9B7020)', color: '#0F0C08' }}
              >
                One-time · pay once
              </span>
              <p className="text-[11px] f-mono uppercase tracking-[.22em] mb-3" style={{ color: '#475569' }}>Fixed price · no add-ons</p>
              <div className="flex items-end gap-4">
                <p className="f-display glow leading-none" style={{ color: '#EDE3D0', fontSize: 'clamp(80px,13vw,180px)' }}>1,500</p>
                <div className="pb-6">
                  <p className="f-display text-[28px]" style={{ color: '#C89A38' }}>AED</p>
                  <p className="text-[12px] f-mono uppercase tracking-[.18em]" style={{ color: '#475569' }}>≈ USD 408</p>
                </div>
              </div>
              <p className="mt-4 text-[15px] max-w-md" style={{ color: '#CBD5E1' }}>
                Complete website, ready to rank. Same scope, same price, whether you sell cakes or run a clinic.
              </p>

              {/* Ledger */}
              <div className="mt-10 grid gap-px rounded-xl overflow-hidden" style={{ background: 'rgba(160,148,120,.10)' }}>
                {includes.map((d, i) => (
                  <div key={d} className="flex items-start gap-4 px-5 py-3.5" style={{ background: 'rgba(15,12,8,.7)' }}>
                    <span className="f-mono text-[10px] mt-0.5 shrink-0" style={{ color: '#475569', width: '24px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-0.5 shrink-0" style={{ color: '#C89A38' }}><Check size={16} /></span>
                    <span className="text-[14px] leading-relaxed flex-1" style={{ color: '#EDE3D0' }}>{d}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-10">
                <PrimaryPill href={CALENDLY} big>
                  <CalendarDays size={16} />
                  Reserve my slot
                  <ArrowUpRight size={16} />
                </PrimaryPill>
                <SecondaryPill href={WHATSAPP} big>
                  <MessageCircle size={16} />
                  Question first?
                </SecondaryPill>
              </div>
            </div>

            {/* Monthly + testimonial */}
            <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
              <div className="rounded-3xl p-9" style={{ background: 'rgba(23,19,14,.65)', border: '1px solid rgba(160,148,120,.12)' }}>
                <p className="text-[11px] f-mono uppercase tracking-[.22em]" style={{ color: '#475569' }}>Optional · monthly care</p>
                <div className="flex items-end gap-3 mt-2">
                  <p className="f-display text-[64px] leading-none" style={{ color: '#EDE3D0' }}>250</p>
                  <p className="pb-3 text-[14px]" style={{ color: '#94A3B8' }}>AED / mo</p>
                </div>
                <p className="mt-3 text-[14px]" style={{ color: '#94A3B8' }}>So your site stays fast, safe, and current. Cancel any time.</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {monthly.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-[13px]" style={{ color: '#CBD5E1' }}>
                      <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ background: '#C89A38' }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl p-9 grad-border relative overflow-hidden" style={{ background: 'rgba(200,154,56,.05)' }}>
                <Star size={28} style={{ color: '#C89A38' }} />
                <p className="f-display text-[26px] mt-3" style={{ color: '#EDE3D0' }}>
                  &ldquo;Done in 11 days, came in on price, ranked us in a month.&rdquo;
                </p>
                <p className="mt-4 text-[12px] f-mono uppercase tracking-[.18em]" style={{ color: '#475569' }}>
                  Faisal · Al Noor AC, Ajman
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-8 border-y"
        style={{ borderColor: 'rgba(160,148,120,.08)', background: 'rgba(23,19,14,.35)' }}
      >
        <div className="max-w-[1400px] mx-auto">
          <SectionHead
            num="§ 04 · Process"
            eyebrow="From hello to launch"
            title="Ten working days."
            accent="That's it."
            lede="No agency game of phone tag. WhatsApp, weekly checkpoints, a live URL by day five."
          />
          <div
            className="relative grid grid-cols-1 md:grid-cols-5 gap-px rounded-2xl overflow-hidden"
            style={{ background: 'rgba(160,148,120,.10)' }}
          >
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal flex flex-col gap-5 p-7 md:p-9 floatY"
                style={{ background: 'rgba(15,12,8,.72)', transitionDelay: `${i * 0.06}s`, animationDelay: `${i * 0.4}s` }}
              >
                <div className="flex items-baseline justify-between">
                  <p className="f-display text-[44px]" style={{ color: '#C89A38' }}>{s.n}</p>
                  <span className="f-mono text-[10px] tracking-[.18em] uppercase" style={{ color: '#475569' }}>{s.day}</span>
                </div>
                <p className="f-display text-[26px]" style={{ color: '#EDE3D0' }}>{s.t}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: '#94A3B8' }}>{s.d}</p>
                <div className="mt-auto flex items-center gap-2">
                  <span className="h-px flex-1" style={{ background: 'rgba(160,148,120,.15)' }} />
                  <span className="f-mono text-[10px]" style={{ color: '#475569' }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compare ───────────────────────────────────────────────── */}
      <section className="relative py-20 px-8">
        <div className="max-w-[1100px] mx-auto">
          <SectionHead
            num="§ 05 · Why"
            eyebrow="Tale of the tape"
            title="Agency, vs"
            accent="just me."
            lede="Same result, a fraction of the cost and time."
          />

          {/* ── Mobile: stacked cards ── */}
          <div className="reveal md:hidden space-y-3">
            {compareRows.map((r, i) => (
              <div
                key={r.label}
                className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(15,12,8,.6)', border: '1px solid rgba(160,148,120,.10)' }}
              >
                <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ borderColor: 'rgba(160,148,120,.10)', background: 'rgba(23,19,14,.4)' }}>
                  <span className="f-mono text-[10px]" style={{ color: '#475569' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="f-display text-[20px]" style={{ color: '#EDE3D0' }}>{r.label}</span>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-5 py-4 border-r" style={{ borderColor: 'rgba(160,148,120,.10)' }}>
                    <p className="f-mono text-[9px] uppercase tracking-[.18em] mb-2" style={{ color: '#475569' }}>Agency</p>
                    <p className="f-display text-[20px]" style={{ color: '#475569', textDecoration: 'line-through', textDecorationColor: 'rgba(244,63,94,.5)' }}>{r.a}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="f-mono text-[9px] uppercase tracking-[.18em] mb-2" style={{ color: '#C89A38' }}>ur/web</p>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <p className="f-display text-[24px]" style={{ color: '#EDE3D0' }}>{r.b}</p>
                      <span className="f-mono text-[9px] tracking-[.15em] uppercase px-2 py-0.5 rounded-full" style={{ color: '#C89A38', border: '1px solid rgba(200,154,56,.3)', background: 'rgba(200,154,56,.08)' }}>{r.spread}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Desktop: table ── */}
          <div className="reveal hidden md:block rounded-2xl overflow-hidden border" style={{ background: 'rgba(15,12,8,.55)', borderColor: 'rgba(160,148,120,.10)' }}>
            <div
              className="grid grid-cols-12 items-center px-6 py-4 border-b"
              style={{ borderColor: 'rgba(160,148,120,.10)', background: 'rgba(23,19,14,.4)' }}
            >
              <div className="col-span-4 f-mono text-[10px] tracking-[.22em] uppercase" style={{ color: '#475569' }}>Metric</div>
              <div className="col-span-4 text-right f-mono text-[10px] tracking-[.22em] uppercase" style={{ color: '#475569' }}>Typical agency</div>
              <div className="col-span-4 text-right f-mono text-[10px] tracking-[.22em] uppercase" style={{ color: '#C89A38' }}>ur/web</div>
            </div>
            {compareRows.map((r, i) => (
              <div
                key={r.label}
                className="grid grid-cols-12 items-center px-6 py-4"
                style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(160,148,120,.07)' }}
              >
                <div className="col-span-4 flex items-baseline gap-3">
                  <span className="f-mono text-[10px]" style={{ color: '#475569' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="f-display text-[16px]" style={{ color: '#EDE3D0' }}>{r.label}</span>
                </div>
                <div className="col-span-4 text-right f-display text-[18px]" style={{ color: '#475569', textDecoration: 'line-through', textDecorationColor: 'rgba(244,63,94,.4)' }}>{r.a}</div>
                <div className="col-span-4 text-right flex items-center justify-end gap-3">
                  <span className="f-display text-[22px]" style={{ color: '#EDE3D0' }}>{r.b}</span>
                  <span className="f-mono text-[9.5px] tracking-[.18em] uppercase px-2 py-0.5 rounded-full" style={{ color: '#C89A38', border: '1px solid rgba(200,154,56,.3)', background: 'rgba(200,154,56,.05)' }}>
                    {r.spread}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6 px-2">
            <p className="text-[12px] max-w-md" style={{ color: '#94A3B8' }}>
              You weren&apos;t paying for the math, you were paying for the office.
            </p>
            <PrimaryPill href={CALENDLY}>
              <CalendarDays size={14} />
              Book the corner
            </PrimaryPill>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-8 border-y"
        style={{ borderColor: 'rgba(160,148,120,.08)' }}
      >
        <div className="max-w-[1400px] mx-auto">
          <SectionHead
            num="§ 06 · FAQ"
            eyebrow="Common questions"
            title="Things people"
            accent="ask first."
          />
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-9">
              <div className="flex flex-col">
                {faqItems.map(([q, a], i) => (
                  <button
                    key={q}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="text-left border-t"
                    style={{ borderColor: 'rgba(160,148,120,.10)' }}
                  >
                    <div className="flex items-start justify-between gap-6 py-7">
                      <div className="flex items-baseline gap-5">
                        <span className="f-mono text-[11px] tracking-[.18em] shrink-0" style={{ color: '#475569' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="f-display" style={{ color: '#EDE3D0', fontSize: 'clamp(22px,3vw,32px)' }}>{q}</span>
                      </div>
                      <span
                        className="mt-3 transition-transform duration-300"
                        style={{ color: '#C89A38', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}
                      >
                        <Plus size={22} />
                      </span>
                    </div>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="overflow-hidden pb-7 pl-14 max-w-3xl text-[15px] leading-relaxed"
                          style={{ color: '#CBD5E1' }}
                        >
                          {a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
                <div className="border-t" style={{ borderColor: 'rgba(160,148,120,.10)' }} />
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 flex md:justify-end">
              <div className="rounded-2xl p-6 max-w-[280px] grad-border self-start mt-4" style={{ background: 'rgba(15,12,8,.7)' }}>
                <p className="text-[11px] f-mono uppercase tracking-[.22em]" style={{ color: '#475569' }}>Different question?</p>
                <p className="f-display text-[24px] mt-3" style={{ color: '#EDE3D0' }}>Ask me on WhatsApp.</p>
                <p className="mt-2 text-[13px]" style={{ color: '#94A3B8' }}>Sun–Thu 9am–7pm Dubai time. Usually online.</p>
                <div className="mt-5">
                  <PrimaryPill href={WHATSAPP}>
                    <MessageCircle size={14} />
                    +971 52 868 6540
                  </PrimaryPill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="relative py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute orbA rounded-full"
            style={{ width: '700px', height: '700px', background: 'rgba(200,154,56,.16)', filter: 'blur(120px)', top: '30%', left: '50%', transform: 'translate(-50%,-50%)' }}
          />
          <div className="absolute beam inset-y-0 -left-1/3 w-1/3" />
        </div>
        <div className="relative max-w-[1100px] mx-auto text-center flex flex-col items-center gap-9">
          <div className="relative w-40 h-40 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="absolute inset-0 rounded-full ring"
                style={{ border: '1px solid rgba(200,154,56,.5)', animationDelay: `${i * 1}s` }}
              />
            ))}
            <span
              className="relative w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#E8CF7A,#9B7020)', color: '#0F0C08', boxShadow: '0 30px 80px -20px rgba(200,154,56,.45)' }}
            >
              <CalendarDays size={32} />
            </span>
          </div>

          <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[.22em] uppercase f-grot" style={{ color: '#C89A38' }}>
            <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: '#C89A38' }}>
              <span className="absolute inset-0 rounded-full ring" style={{ background: '#C89A38' }} />
            </span>
            Ready when you are
          </span>

          <h2 className="f-display" style={{ color: '#EDE3D0', fontSize: 'clamp(56px,9vw,140px)' }}>
            Let&apos;s build the site<br />your business <span className="italic"><span className="apricot-fill">deserves.</span></span>
          </h2>

          <p className="text-[17px] max-w-xl" style={{ color: '#94A3B8' }}>
            Fifteen minutes. No pitch deck. Tell me what you do and I&apos;ll tell you exactly what I&apos;d build — and what it&apos;ll cost (it&apos;s AED 1,500).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <PrimaryPill href={CALENDLY} big>
              <CalendarDays size={16} />
              Book a 15-min call
              <ArrowUpRight size={16} />
            </PrimaryPill>
            <SecondaryPill href={WHATSAPP} big>
              <MessageCircle size={16} />
              WhatsApp me
            </SecondaryPill>
          </div>
        </div>
      </section>
    </>
  );
}
