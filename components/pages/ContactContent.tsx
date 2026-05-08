'use client';

import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { CalendarDays, MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';

const CALENDLY = 'https://calendly.com/moaz';
const WHATSAPP = 'https://wa.me/971XXXXXXXXX';
const EMAIL = 'moazabdalla567@gmail.com';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const industries = [
  'AC service',
  'Typing center',
  'Plumber',
  'Mover / packer',
  'Home kitchen',
  'Cake artist',
  'Pool maintenance',
  'Restaurant',
  'Other',
];

const directLinks = [
  {
    icon: CalendarDays,
    label: 'Book a call',
    sublabel: 'Free 15-min discovery call',
    href: CALENDLY,
    target: '_blank',
    color: 'bg-blue-500/10 border-blue-500/30 hover:border-blue-400/50',
    iconColor: 'text-blue-400',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    sublabel: 'Direct message, no bots',
    href: WHATSAPP,
    target: '_blank',
    color: 'bg-green-500/10 border-green-500/30 hover:border-green-400/50',
    iconColor: 'text-green-400',
  },
  {
    icon: Mail,
    label: 'Email',
    sublabel: EMAIL,
    href: `mailto:${EMAIL}`,
    target: '_self',
    color: 'bg-slate-800/60 border-slate-700/50 hover:border-slate-600/50',
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
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 55%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-4"
            >
              Contact
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-5xl md:text-6xl text-slate-50 mb-5"
            >
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
            {/* Form — wider column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-10 text-center">
                  <div className="w-14 h-14 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="text-green-400" size={28} />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-slate-50 mb-3">Message sent</h2>
                  <p className="text-slate-400 text-sm">
                    I&apos;ll review your details and get back to you within 4 hours during business hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2"
                      >
                        Your name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ahmed Al Mansouri"
                        className="w-full bg-slate-800/60 border border-slate-700/60 focus:border-blue-500/60 text-slate-50 placeholder:text-slate-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="business"
                        className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2"
                      >
                        Business name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="business"
                        name="business"
                        type="text"
                        required
                        placeholder="Al Noor AC Services"
                        className="w-full bg-slate-800/60 border border-slate-700/60 focus:border-blue-500/60 text-slate-50 placeholder:text-slate-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2"
                    >
                      Industry <span className="text-blue-400">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      defaultValue=""
                      className="w-full bg-slate-800/60 border border-slate-700/60 focus:border-blue-500/60 text-slate-50 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200 cursor-pointer appearance-none"
                    >
                      <option value="" disabled className="text-slate-600 bg-slate-900">
                        Select your industry
                      </option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind} className="bg-slate-900 text-slate-50">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2"
                    >
                      Current website URL{' '}
                      <span className="text-slate-600 font-normal normal-case tracking-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://yoursite.com"
                      className="w-full bg-slate-800/60 border border-slate-700/60 focus:border-blue-500/60 text-slate-50 placeholder:text-slate-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2"
                    >
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me what you do, which area you serve, and what you're hoping a new website will do for the business..."
                      className="w-full bg-slate-800/60 border border-slate-700/60 focus:border-blue-500/60 text-slate-50 placeholder:text-slate-600 rounded-2xl px-4 py-3.5 text-sm outline-none transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-colors duration-200 cursor-pointer shadow-lg shadow-blue-500/25"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right column — direct links + response time */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-2 space-y-4"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                Or reach me directly
              </p>

              {directLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 border rounded-2xl p-5 transition-all duration-200 cursor-pointer group ${link.color}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${link.color}`}>
                    <link.icon className={link.iconColor} size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate-50 text-sm group-hover:text-blue-300 transition-colors duration-200">
                      {link.label}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">{link.sublabel}</p>
                  </div>
                </a>
              ))}

              <div className="mt-8 bg-slate-800/30 border border-slate-700/40 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-slate-50 text-sm font-medium">Usually online</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I reply within 4 hours during Dubai working hours — Sunday to Thursday, 9am to 7pm.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
