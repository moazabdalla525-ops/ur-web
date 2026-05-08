'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F1E2B]/95 backdrop-blur-md border-b border-[#284B63]/30 shadow-xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl text-slate-50 hover:opacity-80 transition-opacity duration-200">
          Ur<span className="bg-gradient-to-r from-[#B4B8AB] to-[#EEF0EB] bg-clip-text text-transparent">Web</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                pathname === l.href ? 'text-[#B4B8AB]' : 'text-slate-400 hover:text-slate-50'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <motion.a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center bg-gradient-to-r from-[#284B63] to-[#153243] hover:from-[#2A5070] hover:to-[#1C3A52] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-[#153243]/40"
        >
          Book a call
        </motion.a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-slate-50 transition-colors cursor-pointer p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-[#153243] border-b border-[#284B63]/30"
          >
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    pathname === l.href ? 'text-[#B4B8AB]' : 'text-slate-400'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#284B63] to-[#153243] text-white font-semibold px-5 py-3 rounded-full text-center cursor-pointer"
                >
                  Book a 15-min call
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-700 text-slate-300 font-medium px-5 py-3 rounded-full text-center cursor-pointer hover:border-slate-500 transition-colors duration-200"
                >
                  WhatsApp me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
