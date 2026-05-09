'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, MessageCircle, Mail, Send, Check } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';
const EMAIL = 'moazabdalla567@gmail.com';

const industries = [
  'AC service', 'Typing center', 'Plumber', 'Mover / packer',
  'Home kitchen', 'Cake artist', 'Pool maintenance', 'Restaurant', 'Other',
];

const directLinks = [
  {
    icon: CalendarDays,
    label: 'Book a call',
    sublabel: 'Free 15-min discovery call',
    href: CALENDLY,
    target: '_blank',
    iconStyle: { color: '#C89A38' },
    borderColor: 'rgba(200,154,56,.20)',
    hoverBorder: 'rgba(200,154,56,.40)',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    sublabel: 'Direct message, no bots',
    href: WHATSAPP,
    target: '_blank',
    iconStyle: { color: '#7BCBA1' },
    borderColor: 'rgba(123,203,161,.20)',
    hoverBorder: 'rgba(123,203,161,.40)',
  },
  {
    icon: Mail,
    label: 'Email',
    sublabel: EMAIL,
    href: `mailto:${EMAIL}`,
    target: '_self',
    iconStyle: { color: '#94A3B8' },
    borderColor: 'rgba(160,148,120,.15)',
    hoverBorder: 'rgba(160,148,120,.30)',
  },
];

const inputClass = "w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-colors duration-200 f-grot";
const inputStyle = {
  background: 'rgba(15,12,8,.8)',
  border: '1px solid rgba(160,148,120,.15)',
  color: '#EDE3D0',
};

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden px-8">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="absolute orbA rounded-full"
            style={{ width: '600px', height: '400px', background: '#1C1710', filter: 'blur(120px)', top: '-100px', left: '50%', transform: 'translateX(-50%)' }}
          />
          <AnimatedBackground count={12} />
        </div>
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[.22em] uppercase f-grot mb-4 block" style={{ color: '#C89A38' }}>
              <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: '#C89A38' }}>
                <span className="absolute inset-0 rounded-full ring" style={{ background: '#C89A38' }} />
              </span>
              Contact
            </span>
            <h1 className="f-display mb-6" style={{ color: '#EDE3D0', fontSize: 'clamp(48px,8vw,100px)' }}>
              Tell me about your <span className="italic"><span className="apricot-fill">business.</span></span>
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: '#94A3B8' }}>
              Fill in the form or reach me directly. I reply within 4 hours during Dubai working hours (9am–7pm, Sun–Thu).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content grid */}
      <section className="pb-28 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-10 items-start">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="col-span-12 lg:col-span-7"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grad-border rounded-3xl p-14 text-center"
                    style={{ background: 'rgba(15,12,8,.7)' }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: 'rgba(200,154,56,.15)', border: '1px solid rgba(200,154,56,.35)' }}
                    >
                      <Check size={28} style={{ color: '#C89A38' }} />
                    </div>
                    <h2 className="f-display text-[36px] mb-3" style={{ color: '#EDE3D0' }}>Message sent.</h2>
                    <p className="text-[15px]" style={{ color: '#94A3B8' }}>I&apos;ll get back to you within 4 hours during business hours.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    className="grad-border rounded-3xl p-8 md:p-10"
                    style={{ background: 'rgba(15,12,8,.6)' }}
                  >
                    <p className="f-mono text-[10px] uppercase tracking-[.22em] mb-8" style={{ color: '#475569' }}>
                      § 01 · Project brief
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block f-mono text-[10px] uppercase tracking-[.22em] mb-2" style={{ color: '#475569' }}>
                            Your name <span style={{ color: '#C89A38' }}>*</span>
                          </label>
                          <input
                            id="name" name="name" type="text" required
                            placeholder="Ahmed Al Mansouri"
                            className={inputClass}
                            style={{ ...inputStyle, '--placeholder-color': '#334155' } as React.CSSProperties}
                          />
                        </div>
                        <div>
                          <label htmlFor="business" className="block f-mono text-[10px] uppercase tracking-[.22em] mb-2" style={{ color: '#475569' }}>
                            Business name <span style={{ color: '#C89A38' }}>*</span>
                          </label>
                          <input
                            id="business" name="business" type="text" required
                            placeholder="Al Noor AC Services"
                            className={inputClass}
                            style={inputStyle}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="industry" className="block f-mono text-[10px] uppercase tracking-[.22em] mb-2" style={{ color: '#475569' }}>
                          Industry <span style={{ color: '#C89A38' }}>*</span>
                        </label>
                        <select
                          id="industry" name="industry" required defaultValue=""
                          className={`${inputClass} cursor-pointer appearance-none`}
                          style={inputStyle}
                        >
                          <option value="" disabled style={{ color: '#475569', background: '#0F0C08' }}>Select your industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind} style={{ background: '#171310', color: '#EDE3D0' }}>{ind}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="website" className="block f-mono text-[10px] uppercase tracking-[.22em] mb-2" style={{ color: '#475569' }}>
                          Current website URL{' '}
                          <span style={{ color: '#334155', textTransform: 'none', letterSpacing: 'normal', fontFamily: 'inherit' }}>(optional)</span>
                        </label>
                        <input
                          id="website" name="website" type="url"
                          placeholder="https://yoursite.com"
                          className={inputClass}
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block f-mono text-[10px] uppercase tracking-[.22em] mb-2" style={{ color: '#475569' }}>
                          Message <span style={{ color: '#C89A38' }}>*</span>
                        </label>
                        <textarea
                          id="message" name="message" required rows={5}
                          placeholder="Tell me what you do, which area you serve, and what you're hoping a new website will do for the business..."
                          className={`${inputClass} resize-none`}
                          style={inputStyle}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="press w-full inline-flex items-center justify-center gap-2 rounded-xl py-4 text-[15px] font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          background: submitting ? 'rgba(200,154,56,.4)' : 'linear-gradient(105deg,#E8CF7A 0%, #C89A38 50%, #9B7020 110%)',
                          boxShadow: '0 18px 50px -18px rgba(200,154,56,.45)',
                          color: '#0F0C08',
                        }}
                      >
                        {submitting ? (
                          <><span className="w-4 h-4 border-2 border-[#0F0C08]/30 border-t-[#0F0C08] rounded-full animate-spin" /> Sending...</>
                        ) : (
                          <><Send size={16} /> Send message</>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="col-span-12 lg:col-span-5 flex flex-col gap-4"
            >
              <p className="f-mono text-[10px] uppercase tracking-[.22em] mb-2" style={{ color: '#475569' }}>Or reach me directly</p>

              {directLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.2 + i * 0.1 } }}
                  className="flex items-center gap-4 rounded-2xl p-5 cursor-pointer group transition-colors duration-200"
                  style={{ background: 'rgba(15,12,8,.6)', border: `1px solid ${link.borderColor}` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(160,148,120,.08)' }}
                  >
                    <link.icon size={20} aria-hidden="true" style={link.iconStyle} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm f-grot" style={{ color: '#EDE3D0' }}>{link.label}</p>
                    <p className="text-[12px] mt-0.5 break-all f-mono" style={{ color: '#475569' }}>{link.sublabel}</p>
                  </div>
                </motion.a>
              ))}

              {/* Availability card */}
              <div className="mt-2 rounded-2xl p-6 grad-border" style={{ background: 'rgba(15,12,8,.6)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full pulse" style={{ background: '#7BCBA1' }} />
                  <p className="font-semibold text-sm f-grot" style={{ color: '#EDE3D0' }}>Usually online</p>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: '#64748B' }}>
                  I reply within 4 hours — Sunday to Thursday, 9am to 7pm Dubai time.
                </p>

                {/* Process mini timeline */}
                <div className="mt-6 flex flex-col gap-3">
                  {[
                    { label: 'You send this form', done: true },
                    { label: 'I reply within 4 hrs', done: false },
                    { label: 'Free 15-min call', done: false },
                    { label: 'Quote confirmed', done: false },
                  ].map((step) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: step.done ? '#C89A38' : 'rgba(160,148,120,.15)', border: `1px solid ${step.done ? '#C89A38' : 'rgba(160,148,120,.25)'}` }}
                      >
                        {step.done && <Check size={9} style={{ color: '#0F0C08' }} />}
                      </span>
                      <span className="text-[12px] f-mono" style={{ color: step.done ? '#C89A38' : '#475569' }}>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
