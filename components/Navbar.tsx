'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CalendarDays } from 'lucide-react';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';

const links = [
  { href: '/', label: 'Work' },
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
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Top rail */}
      <div className="hidden md:flex items-center justify-between text-[11px] f-mono tracking-wider uppercase border-b"
           style={{ borderColor: 'rgba(160,148,120,.10)', color: '#64748B' }}>
        <div className="flex items-center gap-6 px-8 py-2.5">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full pulse" style={{ background: '#7BCBA1' }} />
            <span style={{ color: '#EDE3D0' }}>Open for May–Jun · 2 slots</span>
          </span>
          <span>UAE · GMT+4</span>
        </div>
        <div className="flex items-center gap-6 px-8 py-2.5">
          <span>moazabdalla567@gmail.com</span>
          <span style={{ color: 'rgba(160,148,120,.30)' }}>/</span>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-[#EDE3D0] transition-colors">+971 52 868 6540</a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${scrolled ? 'backdrop-blur-md' : ''}`}
        style={{
          background: scrolled ? 'rgba(15,12,8,.88)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(160,148,120,.08)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 cursor-pointer group">
            <span className="w-2 h-2 rounded-full" style={{ background: '#C89A38' }} />
            <span className="f-grot text-[17px] font-semibold tracking-tight" style={{ color: '#EDE3D0' }}>
              ur<span className="apricot-fill">/web</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9 text-[13px] f-grot">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="underline-grow cursor-pointer transition-colors duration-200"
                style={{ color: pathname === l.href ? '#EDE3D0' : '#64748B' }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 press rounded-full px-5 py-2.5 text-sm font-semibold cursor-pointer"
            style={{
              background: 'linear-gradient(105deg,#E8CF7A 0%, #C89A38 50%, #9B7020 110%)',
              boxShadow: '0 18px 50px -18px rgba(200,154,56,.55), inset 0 1px 0 rgba(255,255,255,.5)',
              color: '#0F0C08',
            }}
          >
            <CalendarDays size={14} />
            Book a 15-min call
          </motion.a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-400 hover:text-slate-50 transition-colors cursor-pointer p-2 -mr-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(15,12,8,.96)', borderBottom: '1px solid rgba(160,148,120,.10)', backdropFilter: 'blur(16px)' }}
          >
            <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-base font-medium f-grot transition-colors duration-200"
                  style={{ color: pathname === l.href ? '#EDE3D0' : '#64748B' }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center font-semibold px-5 py-3 rounded-full text-sm cursor-pointer"
                  style={{
                    background: 'linear-gradient(105deg,#E8CF7A 0%, #C89A38 50%, #9B7020 110%)',
                    color: '#0F0C08',
                  }}
                >
                  Book a 15-min call
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center font-medium px-5 py-3 rounded-full text-sm cursor-pointer transition-colors duration-200"
                  style={{ border: '1px solid rgba(160,148,120,.25)', color: '#EDE3D0' }}
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
