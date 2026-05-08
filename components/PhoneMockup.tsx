'use client';

import { motion } from 'framer-motion';

export default function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, transparent 70%)',
          transform: 'scale(1.2)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-[240px] md:w-[280px]"
      >
        <svg
          viewBox="0 0 200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl"
          aria-label="Phone mockup showing a sample website"
          role="img"
        >
          <defs>
            <linearGradient id="frameFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="screenFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#070D1D" />
            </linearGradient>
            <linearGradient id="btnGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <clipPath id="screenClip">
              <rect x="16" y="26" width="168" height="350" rx="20" />
            </clipPath>
          </defs>

          {/* Phone outer frame */}
          <rect x="4" y="4" width="192" height="392" rx="32" fill="url(#frameFill)" stroke="#334155" strokeWidth="1.5" />

          {/* Side buttons */}
          <rect x="0" y="100" width="4" height="28" rx="2" fill="#1E293B" />
          <rect x="0" y="136" width="4" height="28" rx="2" fill="#1E293B" />
          <rect x="196" y="120" width="4" height="40" rx="2" fill="#1E293B" />

          {/* Screen */}
          <rect x="16" y="26" width="168" height="350" rx="20" fill="url(#screenFill)" />

          {/* Dynamic island */}
          <rect x="72" y="34" width="56" height="14" rx="7" fill="#070D1D" />

          {/* Screen content (clipped) */}
          <g clipPath="url(#screenClip)">

            {/* Navbar */}
            <rect x="16" y="26" width="168" height="26" fill="#111827" />
            <rect x="26" y="33" width="32" height="10" rx="5" fill="#6366F1" />
            <rect x="128" y="35" width="18" height="6" rx="3" fill="#334155" />
            <rect x="152" y="35" width="18" height="6" rx="3" fill="#334155" />

            {/* Hero bg */}
            <rect x="16" y="52" width="168" height="108" fill="#0F172A" />

            {/* Badge */}
            <rect x="26" y="60" width="60" height="10" rx="5" fill="#1E3A5F" />
            <rect x="30" y="63" width="52" height="4" rx="2" fill="#818cf8" opacity="0.7" />

            {/* Headline */}
            <rect x="26" y="76" width="130" height="11" rx="4" fill="#F8FAFC" />
            <rect x="26" y="92" width="110" height="11" rx="4" fill="#F8FAFC" />
            <rect x="26" y="108" width="80" height="11" rx="4" fill="#a5b4fc" />

            {/* Subtext */}
            <rect x="26" y="126" width="112" height="6" rx="3" fill="#475569" />
            <rect x="26" y="136" width="90" height="6" rx="3" fill="#475569" />

            {/* CTAs */}
            <rect x="26" y="148" width="74" height="16" rx="8" fill="url(#btnGrad)" />
            <rect x="106" y="148" width="62" height="16" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1" />

            {/* Features section */}
            <rect x="16" y="168" width="168" height="76" fill="#111827" />
            <rect x="24" y="178" width="70" height="56" rx="10" fill="#1E293B" />
            <rect x="102" y="178" width="70" height="56" rx="10" fill="#1E293B" />

            {/* Icons on cards */}
            <circle cx="49" cy="197" r="9" fill="rgba(59,130,246,0.15)" />
            <circle cx="49" cy="197" r="5" fill="#6366F1" />
            <circle cx="127" cy="197" r="9" fill="rgba(34,197,94,0.12)" />
            <circle cx="127" cy="197" r="5" fill="#22C55E" />

            {/* Card text */}
            <rect x="32" y="212" width="52" height="6" rx="3" fill="#334155" />
            <rect x="32" y="222" width="38" height="5" rx="3" fill="#1E3A5F" />
            <rect x="110" y="212" width="52" height="6" rx="3" fill="#334155" />
            <rect x="110" y="222" width="38" height="5" rx="3" fill="#1A3520" />

            {/* Stats strip */}
            <rect x="16" y="248" width="168" height="52" fill="#0F172A" />
            <rect x="24" y="258" width="44" height="24" rx="6" fill="#1E293B" />
            <rect x="78" y="258" width="44" height="24" rx="6" fill="#1E293B" />
            <rect x="132" y="258" width="44" height="24" rx="6" fill="#1E293B" />
            <rect x="30" y="264" width="32" height="7" rx="2" fill="#6366F1" />
            <rect x="84" y="264" width="32" height="7" rx="2" fill="#6366F1" />
            <rect x="138" y="264" width="32" height="7" rx="2" fill="#6366F1" />
            <rect x="28" y="275" width="36" height="4" rx="2" fill="#334155" />
            <rect x="82" y="275" width="36" height="4" rx="2" fill="#334155" />
            <rect x="136" y="275" width="36" height="4" rx="2" fill="#334155" />

            {/* Testimonial */}
            <rect x="16" y="304" width="168" height="50" fill="#111827" />
            <rect x="24" y="312" width="152" height="34" rx="8" fill="#1E293B" />
            <circle cx="42" cy="325" r="10" fill="#334155" />
            <rect x="58" y="320" width="70" height="6" rx="3" fill="#94A3B8" />
            <rect x="58" y="330" width="50" height="5" rx="3" fill="#475569" />

            {/* Footer */}
            <rect x="16" y="358" width="168" height="36" fill="#0A1020" />
            <rect x="26" y="368" width="44" height="8" rx="3" fill="#6366F1" opacity="0.6" />
            <rect x="80" y="370" width="28" height="5" rx="3" fill="#334155" />
            <rect x="116" y="370" width="28" height="5" rx="3" fill="#334155" />
            <rect x="150" y="370" width="22" height="5" rx="3" fill="#334155" />
          </g>

          {/* Home indicator */}
          <rect x="82" y="386" width="36" height="4" rx="2" fill="#334155" />
        </svg>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute -right-2 top-16 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 shadow-xl"
      >
        <p className="text-xs font-semibold text-slate-50">Google #1</p>
        <p className="text-xs text-slate-400">&apos;AC repair near me&apos;</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute -left-2 bottom-20 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 shadow-xl"
      >
        <p className="text-xs font-semibold text-green-400">+240%</p>
        <p className="text-xs text-slate-400">more calls</p>
      </motion.div>
    </div>
  );
}
