import Link from 'next/link';

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP = 'https://wa.me/971528686540';
const EMAIL = 'moazabdalla567@gmail.com';

export default function Footer() {
  return (
    <footer className="border-t px-8 pt-20 pb-10" style={{ borderColor: 'rgba(160,148,120,.10)' }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
        {/* Display wordmark */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-5">
          <p className="f-display" style={{ color: '#EDE3D0', lineHeight: 0.85, fontSize: 'clamp(72px,11vw,160px)' }}>
            ur<span className="apricot-fill">/web</span>
          </p>
          <p className="text-[14px] max-w-md" style={{ color: '#64748B' }}>
            Independent web shop in the UAE. One person. No office. WhatsApp first.
            Built for businesses that just need a working site, fast.
          </p>
        </div>

        {/* Site links */}
        <div className="col-span-6 md:col-span-2 flex flex-col gap-3 text-[13px]">
          <p className="f-mono text-[10px] uppercase tracking-[.22em]" style={{ color: '#475569' }}>Site</p>
          {[
            { href: '/', label: 'Home' },
            { href: '/work', label: 'Work' },
            { href: '/pricing', label: 'Pricing' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="underline-grow self-start" style={{ color: '#EDE3D0' }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact links */}
        <div className="col-span-6 md:col-span-2 flex flex-col gap-3 text-[13px]">
          <p className="f-mono text-[10px] uppercase tracking-[.22em]" style={{ color: '#475569' }}>Reach me</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline-grow self-start" style={{ color: '#EDE3D0' }}>WhatsApp</a>
          <a href={`mailto:${EMAIL}`} className="underline-grow self-start" style={{ color: '#EDE3D0' }}>Email</a>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="underline-grow self-start" style={{ color: '#EDE3D0' }}>Calendly</a>
        </div>

        {/* Status */}
        <div className="col-span-12 md:col-span-2 flex flex-col gap-3 text-[13px]">
          <p className="f-mono text-[10px] uppercase tracking-[.22em]" style={{ color: '#475569' }}>Status</p>
          <p style={{ color: '#EDE3D0' }} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full pulse" style={{ background: '#7BCBA1' }} />
            Open · 2 slots May–Jun
          </p>
          <p style={{ color: '#64748B' }}>UAE · GMT+4</p>
        </div>

        {/* Bottom bar */}
        <div className="col-span-12 mt-12 flex flex-col md:flex-row md:items-center justify-between gap-3 pt-8 border-t f-mono text-[10px] tracking-[.2em] uppercase"
             style={{ borderColor: 'rgba(160,148,120,.10)', color: '#475569' }}>
          <span>© 2025 Ur Web · Built solo in Dubai</span>
          <span className="flex items-center gap-2">
            <span className="blink">▌</span>
            Last shipped · Goat Burger · 8 days ago
          </span>
        </div>
      </div>
    </footer>
  );
}
