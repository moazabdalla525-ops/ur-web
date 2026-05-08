import Link from 'next/link';

const CALENDLY = 'https://calendly.com/moaz';
const WHATSAPP = 'https://wa.me/971XXXXXXXXX';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#060912]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-xs">
            <p className="font-heading font-bold text-xl text-slate-50 mb-3">
              Ur<span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Web</span>
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Websites that get UAE businesses found on Google. Fixed price, fixed timeline, no agency markup.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">Pages</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/work', label: 'Work' },
                  { href: '/pricing', label: 'Pricing' },
                  { href: '/about', label: 'About' },
                  { href: '/contact', label: 'Contact' },
                ].map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 cursor-pointer"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">Reach me</p>
              <div className="flex flex-col gap-2.5">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 cursor-pointer">WhatsApp</a>
                <a href="mailto:moazabdalla567@gmail.com"
                  className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 cursor-pointer">Email</a>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 cursor-pointer">Book a call</a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">Pricing</p>
              <div className="flex flex-col gap-2.5">
                <p className="text-sm text-slate-500">AED 1,500 one-time</p>
                <p className="text-sm text-slate-500">AED 250/month support</p>
                <p className="text-sm text-slate-500">10 working days delivery</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">© 2025 Ur Web. All rights reserved.</p>
          <p className="text-xs text-slate-600">Dubai, UAE · Sun–Thu 9am–7pm</p>
        </div>
      </div>
    </footer>
  );
}
