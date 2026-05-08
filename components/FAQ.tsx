'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What exactly is included in the AED 1,500?',
    a: 'You get a 5-page custom website (Home, Services, About, Contact, plus one service-specific page), mobile-first design with one-tap call and WhatsApp buttons, on-page SEO setup (titles, meta descriptions, schema markup, sitemap), Google Business Profile cleanup and linking, and a contact form that sends directly to your email. The first month of hosting is included.',
  },
  {
    q: 'Do I own the website after delivery?',
    a: "Yes, completely. You get the source files, the domain can be registered in your name, and the code is yours — forever. You're not renting it from me or locked into any platform. If you want to take it to another developer in 3 years, you can.",
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Minor updates — text edits, new photos, updated hours or pricing — are covered in the AED 250/month maintenance plan. Larger changes like adding pages or a new section are quoted separately, but most clients rarely need them past the first few weeks.',
  },
  {
    q: 'How does the Google SEO setup work?',
    a: "I set up the on-page foundation: page titles, meta descriptions, structured data (schema markup), XML sitemap, and link your Google Business Profile to the site. This gives you the technical groundwork. Ranking itself usually takes 2–6 weeks and depends on your local competition, but you'll start right.",
  },
  {
    q: 'Do you only work with businesses in Dubai?',
    a: 'No — I work with businesses across the UAE: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah. As long as you have a service or location you want to show up for on Google, we can work together.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-colors duration-200"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
            aria-expanded={open === i}
          >
            <span className="font-heading font-medium text-slate-50 text-base leading-snug group-hover:text-indigo-300 transition-colors duration-200">
              {faq.q}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.22 }}
              className="text-slate-500 flex-shrink-0"
            >
              <ChevronDown size={18} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
