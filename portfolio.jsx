// portfolio.jsx — App root
const { useEffect, useRef, useState } = React;


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
    </div>
  );
}

const EMAIL = 'moazabdalla567@gmail.com';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
