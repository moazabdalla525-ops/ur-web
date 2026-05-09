'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, MessageCircle, Check, Plus, Star } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';

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

const compareRows = [
  { label: 'Price', metric: 'AED', a: '5,000–15,000', b: '1,500', spread: '÷ 4–10' },
  { label: 'Timeline', metric: 'Days', a: '42–84', b: '10', spread: '÷ 4–8' },
  { label: 'Reply time', metric: 'Hrs', a: '24', b: '4', spread: '÷ 6' },
  { label: 'People talking', metric: 'Headcount', a: '3–5', b: '1', spread: 'just me' },
  { label: 'Source code', metric: 'Ownership', a: 'Locked', b: 'Yours', spread: 'day one' },
  { label: 'Office markup', metric: 'AED', a: 'Built in', b: 'None', spread: 'no rent' },
];

const pricingFaqs = [
  ['Is there a contract?', 'No. The one-time fee is a one-time project — no contract needed. The monthly support plan is month-to-month; cancel any time.'],
  ['How does payment work?', '50% upfront to start, 50% on delivery before the site goes live. Bank transfer or online payment.'],
  ['What if I need more than 5 pages?', 'Additional pages are AED 150 each. We discuss scope before starting so there are no surprises.'],
  ['Can I host the site myself?', "Yes — I hand over the files and you skip the monthly fee. Most clients keep the support plan because it removes the hassle."],
];

export default function PricingContent() {
  const [openFaq, setOpenFaq] = useState(-1);

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
          <div className="orbA absolute rounded-full" style={{ width: '500px', height: '500px', background: 'rgba(45,34,18,.5)', filter: 'blur(120px)', top: '-100px', right: '10%' }} />
          <AnimatedBackground count={12} />
        </div>
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[.22em] uppercase f-grot mb-4 block" style={{ color: '#C89A38' }}>
              Pricing
            </span>
            <h1 className="f-display mb-6" style={{ color: '#EDE3D0', fontSize: 'clamp(48px,8vw,100px)' }}>
              Transparent.{' '}
              <span className="italic"><span className="apricot-fill">No surprises.</span></span>
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: '#94A3B8' }}>
              One fixed price. One fixed timeline. You know exactly what you&apos;re getting before you pay a dirham.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main pricing */}
      <section className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-6 reveal">
            {/* Big price block */}
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
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold cursor-pointer"
                  style={{ background: 'linear-gradient(105deg,#E8CF7A 0%, #C89A38 50%, #9B7020 110%)', boxShadow: '0 18px 50px -18px rgba(200,154,56,.55)', color: '#0F0C08' }}
                >
                  <CalendarDays size={16} /> Book a discovery call
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press inline-flex items-center gap-2 rounded-full border px-7 py-4 text-base font-medium cursor-pointer"
                  style={{ borderColor: 'rgba(160,148,120,.30)', color: '#EDE3D0' }}
                >
                  <MessageCircle size={16} /> Question first?
                </a>
              </div>
              <p className="text-[12px] f-mono mt-4" style={{ color: '#475569' }}>50% deposit to start · 50% on launch</p>
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
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press mt-8 w-full inline-flex items-center justify-center gap-2 rounded-2xl py-3.5 text-[14px] font-medium cursor-pointer"
                  style={{ border: '1px solid rgba(160,148,120,.20)', color: '#CBD5E1' }}
                >
                  <MessageCircle size={15} /> Ask on WhatsApp
                </a>
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

      {/* Comparison table */}
      <section className="py-20 px-8 border-t" style={{ borderColor: 'rgba(160,148,120,.08)', background: 'rgba(23,19,14,.25)' }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="f-display mb-3" style={{ color: '#EDE3D0', fontSize: 'clamp(36px,6vw,72px)' }}>
              Agency, vs <span className="italic"><span className="apricot-fill">just me.</span></span>
            </h2>
            <p className="text-[15px]" style={{ color: '#94A3B8' }}>Same result, a fraction of the cost and time.</p>
          </div>

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
          <p className="text-[12px] mt-6 px-2" style={{ color: '#94A3B8' }}>
            You weren&apos;t paying for the math, you were paying for the office.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="f-display mb-10 reveal" style={{ color: '#EDE3D0', fontSize: 'clamp(32px,5vw,64px)' }}>
            Pricing <span className="italic"><span className="apricot-fill">questions.</span></span>
          </h2>
          <div className="flex flex-col">
            {pricingFaqs.map(([q, a], i) => (
              <button
                key={q}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="text-left border-t reveal"
                style={{ borderColor: 'rgba(160,148,120,.10)' }}
              >
                <div className="flex items-start justify-between gap-6 py-7">
                  <div className="flex items-baseline gap-5">
                    <span className="f-mono text-[11px] tracking-[.18em] shrink-0" style={{ color: '#475569' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span className="f-display" style={{ color: '#EDE3D0', fontSize: 'clamp(20px,3vw,30px)' }}>{q}</span>
                  </div>
                  <span
                    className="mt-3 transition-transform duration-300 shrink-0"
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
      </section>

      {/* CTA */}
      <section className="py-20 px-8 border-t" style={{ borderColor: 'rgba(160,148,120,.08)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="f-display mb-4" style={{ color: '#EDE3D0', fontSize: 'clamp(32px,5vw,64px)' }}>Still have questions?</h2>
            <p className="mb-8 text-[15px]" style={{ color: '#94A3B8' }}>Message me on WhatsApp or book a free 15-min call. No commitment.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold cursor-pointer"
                style={{ background: 'linear-gradient(105deg,#E8CF7A 0%, #C89A38 50%, #9B7020 110%)', color: '#0F0C08' }}
              >
                <CalendarDays size={16} /> Book a free call
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
