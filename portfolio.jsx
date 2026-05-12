// portfolio.jsx — App root
const { useEffect, useRef, useState } = React;

// ─── Palette definitions ────────────────────────────────────────────────────
const PALETTES = [
  { id: "carbon",    label: "Carbon & Amber",    bg: "#15140F", accent: "#E2A03F", light: false },
  { id: "cream",     label: "Cream & Rust",      bg: "#F1ECE2", accent: "#B23A1F", light: true  },
  { id: "slate",     label: "Slate & Cobalt",    bg: "#0D1117", accent: "#388BFD", light: false },
  { id: "forest",    label: "Forest & Sage",     bg: "#0B1410", accent: "#6BBF6B", light: false },
  { id: "violet",    label: "Obsidian & Violet", bg: "#0F0E14", accent: "#A78BFA", light: false },
  { id: "bone",      label: "Bone & Olive",      bg: "#EFE9DC", accent: "#4A6741", light: true  },
  { id: "rose",      label: "Midnight & Rose",   bg: "#0C0B10", accent: "#E879A0", light: false },
  { id: "parchment", label: "Parchment & Ink",   bg: "#F7F2E8", accent: "#1A1714", light: true  },
];

// ─── Palette switcher panel ─────────────────────────────────────────────────
function PaletteSwitcher() {
  const [active, setActive] = useState("parchment");
  const [open, setOpen] = useState(true);

  const apply = (id) => {
    setActive(id);
    // "parchment" is the default :root, so we clear the attribute for it
    if (id === "parchment") {
      document.documentElement.removeAttribute("data-palette");
    } else {
      document.documentElement.setAttribute("data-palette", id);
    }
  };

  const pal = PALETTES.find(p => p.id === active);

  return (
    <div style={{
      position: "fixed", bottom: 20, right: 20, zIndex: 8000,
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {open ? (
        <div style={{
          background: "rgba(20,18,14,0.92)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: 8,
          padding: "14px 16px 16px",
          width: 240,
          boxShadow: "0 20px 60px rgba(0,0,0,.5)",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", marginBottom: 12,
          }}>
            <span style={{ fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.4)" }}>
              Palette
            </span>
            <button onClick={() => setOpen(false)} style={{
              background: "none", border: "none", color: "rgba(255,255,255,.3)",
              cursor: "pointer", fontSize: 13, padding: "0 2px", lineHeight: 1,
            }}>✕</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {PALETTES.map(p => (
              <button key={p.id} onClick={() => apply(p.id)} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: active === p.id ? "rgba(255,255,255,.08)" : "none",
                border: active === p.id ? "1px solid rgba(255,255,255,.15)" : "1px solid transparent",
                borderRadius: 5, padding: "7px 10px",
                cursor: "pointer", textAlign: "left", width: "100%",
                transition: "background .2s, border-color .2s",
              }}>
                <span style={{ display: "flex", gap: 4, flexShrink: 0 }}>
                  <span style={{ width: 14, height: 14, borderRadius: 3, background: p.bg, border: "1px solid rgba(255,255,255,.15)", display: "block" }} />
                  <span style={{ width: 14, height: 14, borderRadius: 3, background: p.accent, display: "block" }} />
                </span>
                <span style={{ fontSize: 11, color: active === p.id ? "#fff" : "rgba(255,255,255,.5)", letterSpacing: ".02em" }}>
                  {p.label}
                </span>
                {active === p.id && (
                  <span style={{ marginLeft: "auto", fontSize: 10, color: p.accent }}>✓</span>
                )}
              </button>
            ))}
          </div>
          <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,.07)" }}>
            <span style={{ fontSize: 9, letterSpacing: ".06em", textTransform: "uppercase", color: "rgba(255,255,255,.2)" }}>
              Local preview only — not pushed
            </span>
          </div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "rgba(20,18,14,0.92)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,.1)",
          borderRadius: 6, padding: "9px 14px",
          cursor: "pointer", color: "rgba(255,255,255,.6)",
          fontSize: 11, letterSpacing: ".06em", textTransform: "uppercase",
          fontFamily: "'JetBrains Mono', monospace",
          boxShadow: "0 8px 32px rgba(0,0,0,.4)",
        }}>
          <span style={{ display: "flex", gap: 3 }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: pal.bg, border: "1px solid rgba(255,255,255,.2)", display: "block" }} />
            <span style={{ width: 10, height: 10, borderRadius: 2, background: pal.accent, display: "block" }} />
          </span>
          Palette
        </button>
      )}
    </div>
  );
}

// ─── Scroll progress ────────────────────────────────────────────────────────
function useScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('progress');
    if (!bar) return;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
}

// ─── Scroll reveal ──────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

// ─── Nav scroll state ───────────────────────────────────────────────────────
function useNavScroll() {
  useEffect(() => {
    const nav = document.querySelector('.topnav');
    if (!nav) return;
    const update = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
}

// ─── Custom cursor ──────────────────────────────────────────────────────────
function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const lblRef  = useRef(null);
  const pos = useRef({ x: -200, y: -200, rx: -200, ry: -200 });
  const tgt = useRef({ x: -200, y: -200 });

  useEffect(() => {
    let raf;
    const onMove = e => { tgt.current.x = e.clientX; tgt.current.y = e.clientY; };
    const tick = () => {
      pos.current.x = tgt.current.x;
      pos.current.y = tgt.current.y;
      pos.current.rx += (tgt.current.x - pos.current.rx) * 0.15;
      pos.current.ry += (tgt.current.y - pos.current.ry) * 0.15;
      if (dotRef.current)  dotRef.current.style.transform  = `translate(${pos.current.x}px,${pos.current.y}px) translate(-50%,-50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${pos.current.rx}px,${pos.current.ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove);

    const setHover = lbl => {
      ringRef.current?.classList.add('hovering');
      if (lblRef.current) lblRef.current.textContent = lbl;
    };
    const clearHover = () => {
      ringRef.current?.classList.remove('hovering');
      if (lblRef.current) lblRef.current.textContent = '';
    };
    const onOver = e => {
      const el = e.target.closest('[data-hover], a, button');
      if (!el) return;
      setHover(el.getAttribute('data-hover') || (el.tagName === 'A' ? 'open' : 'click'));
    };
    const onOut = e => {
      if (!e.relatedTarget?.closest?.('[data-hover], a, button')) clearHover();
    };

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout',  onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout',  onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring">
        <span className="lbl" ref={lblRef} />
      </div>
    </>
  );
}

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const p = n => String(n).padStart(2, '0');
      setTime(`${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const go = id => e => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="topnav">
      <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="brand">
        <span className="brand-mark">✦</span>
        <span>ur web</span>
      </a>
      <div className="nav-links">
        <a href="#work"     onClick={go('work')}>Work</a>
        <a href="#about"    onClick={go('about')}>About</a>
        <a href="#process"  onClick={go('process')}>Process</a>
        <a href="#services" onClick={go('services')}>Services</a>
        <a href="#contact"  onClick={go('contact')}>Contact</a>
      </div>
      <div className="nav-right">
        <span className="nav-clock mono">{time}</span>
        <a className="nav-cta" href="https://calendly.com/moazabdalla525/30min" target="_blank" rel="noreferrer" data-hover="book">
          Book a call ↗
        </a>
      </div>
    </nav>
  );
}

// ─── App ────────────────────────────────────────────────────────────────────
function App() {
  useScrollProgress();
  useScrollReveal();
  useNavScroll();

  return (
    <div id="top" className="page">
      <Cursor />
      <Nav />
      <HeroStacked />

      <Ticker items={["Selected work", "↓ scroll", "twelve sites", "no templates", "made by hand", "est. 2020"]} />

      <SelectedWork cardStyle="editorial" />
      <About />
      <Process />
      <Services />

      <Ticker reverse items={["Let's talk", EMAIL, "✦", "open for commissions", "summer 2026"]} />

      <Contact />
      <PaletteSwitcher />
    </div>
  );
}

const EMAIL = 'moazabdalla567@gmail.com';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
