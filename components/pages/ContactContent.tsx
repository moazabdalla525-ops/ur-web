'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { CalendarDays, MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';
const EMAIL = 'moazabdalla567@gmail.com';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

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
    color: 'bg-[#153243]/10 border-[#284B63]/30 hover:border-[#284B63]/60',
    iconColor: 'text-[#B4B8AB]',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    sublabel: 'Direct message, no bots',
    href: WHATSAPP,
    target: '_blank',
    color: 'bg-green-500/8 border-green-500/30 hover:border-green-400/50',
    iconColor: 'text-green-400',
  },
  {
    icon: Mail,
    label: 'Email',
    sublabel: EMAIL,
    href: `mailto:${EMAIL}`,
    target: '_self',
    color: 'bg-[#153243] border-slate-800/60 hover:border-slate-700/60',
    iconColor: 'text-slate-400',
  },
];

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

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
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="orb-pulse absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#153243] blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-xl">
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#B4B8AB] block mb-4">
              Contact
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-5xl md:text-6xl text-slate-50 mb-5">
              Tell me about your business
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg leading-relaxed">
              Fill in the form or reach me directly below. I reply within 4 hours during Dubai working hours (9am–7pm, Sun–Thu).
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/8 border border-green-500/30 rounded-3xl p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                    className="w-14 h-14 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-5"
                  >
                    <CheckCircle2 className="text-green-400" size={28} />
                  </motion.div>
                  <h2 className="font-heading font-bold text-2xl text-slate-50 mb-3">Message sent</h2>
                  <p className="text-slate-400 text-sm">I&apos;ll get back to you within 4 hours during business hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-2">
                        Your name <span className="text-[#B4B8AB]">*</span>
                      </label>
                      <input id="name" name="name" type="text" required placeholder="Ahmed Al Mansouri"
                        className="w-full bg-[#153243] border border-slate-800/80 focus:border-[#284B63]/60 text-slate-50 placeholder:text-slate-700 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200" />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-2">
                        Business name <span className="text-[#B4B8AB]">*</span>
                      </label>
                      <input id="business" name="business" type="text" required placeholder="Al Noor AC Services"
                        className="w-full bg-[#153243] border border-slate-800/80 focus:border-[#284B63]/60 text-slate-50 placeholder:text-slate-700 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-2">
                      Industry <span className="text-[#B4B8AB]">*</span>
                    </label>
                    <select id="industry" name="industry" required defaultValue=""
                      className="w-full bg-[#153243] border border-slate-800/80 focus:border-[#284B63]/60 text-slate-50 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200 cursor-pointer appearance-none">
                      <option value="" disabled className="text-slate-700 bg-[#153243]">Select your industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind} className="bg-[#153243] text-slate-50">{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-2">
                      Current website URL{' '}
                      <span className="text-slate-700 font-normal normal-case tracking-normal">(optional)</span>
                    </label>
                    <input id="website" name="website" type="url" placeholder="https://yoursite.com"
                      className="w-full bg-[#153243] border border-slate-800/80 focus:border-[#284B63]/60 text-slate-50 placeholder:text-slate-700 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-slate-600 mb-2">
                      Message <span className="text-[#B4B8AB]">*</span>
                    </label>
                    <textarea id="message" name="message" required rows={5}
                      placeholder="Tell me what you do, which area you serve, and what you're hoping a new website will do for the business..."
                      className="w-full bg-[#153243] border border-slate-800/80 focus:border-[#284B63]/60 text-slate-50 placeholder:text-slate-700 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200 resize-none" />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#284B63] to-[#153243] hover:from-[#2A5070] hover:to-[#1C3A52] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-all duration-200 cursor-pointer shadow-lg shadow-[#153243]/40"
                  >
                    {submitting ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send size={16} />Send</>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Direct links */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-2 space-y-4"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-5">Or reach me directly</p>

              {directLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                  className={`flex items-center gap-4 border rounded-2xl p-5 cursor-pointer group ${link.color} transition-colors duration-200`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-800/60`}>
                    <link.icon className={link.iconColor} size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-50 text-sm group-hover:text-[#B4B8AB] transition-colors duration-200">
                      {link.label}
                    </p>
                    <p className="text-slate-600 text-xs mt-0.5 break-all">{link.sublabel}</p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-6 bg-[#153243] border border-slate-800/60 rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-400"
                  />
                  <p className="text-slate-50 text-sm font-medium">Usually online</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  I reply within 4 hours — Sunday to Thursday, 9am to 7pm Dubai time.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
