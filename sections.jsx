// sections.jsx
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

const CALENDLY = 'https://calendly.com/moazabdalla525/30min';
const WHATSAPP  = 'https://wa.me/971528686540';
const EMAIL     = 'moazabdalla567@gmail.com';

// ─── Ticker ────────────────────────────────────────────────────────────────
function Ticker({ items, reverse }) {
  return (
    <div className={"ticker " + (reverse ? "reverse" : "")}>
      <div className="ticker-track">
        {[...Array(6)].map((_, i) => (
          <span className="ticker-item" key={i}>
            {items.map((t, j) => (
              <React.Fragment key={j}>
                <span>{t}</span>
                <span className="aster">✦</span>
              </React.Fragment>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Projects ──────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    n: "01",
    title: "Serenity",
    sub: "Sleep wellness · brand & web",
    year: "2025",
    discipline: ["Identity", "Web design", "Build"],
    url: "https://serenity-sleep.vercel.app",
    description: "A calm, monolithic web presence for a sleep brand. Warm-cool gradients, restful pacing, hand-set serif headlines that whisper.",
    swatch: "linear-gradient(155deg, #3B4B5C 0%, #8DA3B8 55%, #E8DEC8 100%)"
  },
  {
    n: "02",
    title: "Pepperlane",
    sub: "Feast Finder · product design",
    year: "2025",
    discipline: ["Product", "Web app", "Build"],
    url: "https://pepperlane-feast-finder.lovable.app",
    description: "A playful recipe discovery app for home cooks. Saturated, editorial photography pairs with utilitarian forms.",
    swatch: "linear-gradient(135deg, #B23A1F 0%, #E6863E 60%, #F1ECE2 100%)"
  },
  {
    n: "03",
    title: "Goat Burger",
    sub: "Restaurant identity & site",
    year: "2024",
    discipline: ["Identity", "Web design"],
    url: "https://goat-burger.lovable.app",
    description: "Bold, smoky restaurant identity. Burnt-wood palette, a wordmark cut from butcher paper, menu choreography that feels like a film reel.",
    swatch: "linear-gradient(135deg, #2A1F1A 0%, #6B3A1F 50%, #C77A3C 100%)"
  }
];

function SitePreview({ url, title }) {
  const [loaded, setLoaded] = useStateS(false);
  const [errored, setErrored] = useStateS(false);
  const wrapRef = useRefS(null);
  const iframeRef = useRefS(null);
  const BASE_W = 1440, BASE_H = 1024;

  useEffectS(() => {
    const wrap = wrapRef.current, iframe = iframeRef.current;
    if (!wrap || !iframe) return;
    const fit = () => {
      const s = Math.max(wrap.clientWidth / BASE_W, wrap.clientHeight / BASE_H);
      iframe.style.transform = `scale(${s})`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="site-preview" ref={wrapRef}>
      {!errored && (
        <iframe
          ref={iframeRef}
          src={url} title={title + ' preview'}
          loading="lazy" referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin"
          width={BASE_W} height={BASE_H}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          tabIndex={-1} aria-hidden="true"
        />
      )}
      {!loaded && !errored && (
        <div className="sp-loading">loading…</div>
      )}
    </div>
  );
}

function ProjectRow({ p, cardStyle }) {
  if (cardStyle === "index") {
    return (
      <a href={p.url} target="_blank" rel="noreferrer" className="project-index" data-hover="open">
        <span className="pi-num mono">{p.n}</span>
        <span className="pi-title display">{p.title}<em>.</em></span>
        <span className="pi-sub">{p.sub}</span>
        <span className="pi-year mono">↗ {p.year}</span>
      </a>
    );
  }
  if (cardStyle === "grid") {
    return (
      <a href={p.url} target="_blank" rel="noreferrer" className="project-grid" data-hover="view">
        <div className="pg-frame" style={{ background: p.swatch }}>
          <SitePreview url={p.url} title={p.title} />
          <div className="pg-corner mono">[ {p.title.toLowerCase()} ]</div>
        </div>
        <div className="pg-meta">
          <span className="mono small">No. {p.n}</span>
          <span className="display med">{p.title} <em>—</em> <span className="muted">{p.sub}</span></span>
          <span className="mono small">{p.discipline.join(" / ")}</span>
        </div>
      </a>
    );
  }
  return (
    <a href={p.url} target="_blank" rel="noreferrer" className="project-editorial reveal" data-hover="view">
      <div className="pe-num">
        <span className="mono">{p.n} · {p.year}</span>
      </div>
      <div className="pe-thumb" style={{ background: p.swatch }}>
        <SitePreview url={p.url} title={p.title} />
        <div className="pe-corner">
          <span className="pe-tag">/ {p.title.toLowerCase().replace(/\s+/g,'-')}</span>
        </div>
      </div>
      <div className="pe-body">
        <h3 className="display med">{p.title}<em>,</em><br/><span className="muted">{p.sub}</span></h3>
        <p className="pe-desc">{p.description}</p>
        <div className="pe-tags mono small">
          {p.discipline.map((d, i) => <span key={i}>[{d}]</span>)}
          <span className="spacer">→</span>
          <span className="link-arrow">visit live ↗</span>
        </div>
      </div>
    </a>
  );
}

function SelectedWork({ cardStyle }) {
  return (
    <section className="work" id="work">
      <header className="sec-head reveal">
        <div>
          <div className="sec-eyebrow">
            <span className="mono">Selected work</span>
          </div>
          <h2 className="display huge">A small <em>archive</em><br/>of recent things.</h2>
        </div>
        <p className="sec-blurb">
          Three sites built in the last eighteen months — for clients who wanted something more <em>considered</em> than a template. Each one shipped, each one lives on the open web.
        </p>
      </header>
      <div className={"projects " + cardStyle}>
        {PROJECTS.map(p => <ProjectRow key={p.n} p={p} cardStyle={cardStyle} />)}
      </div>
      <div className="work-foot reveal">
        ↳ Curious about something not listed? Email me — happy to share unpublished work.
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="about" id="about">
      <div className="sec-eyebrow reveal">
        <span className="mono">About</span>
      </div>
      <h2 className="display huge reveal">A <em>one-person</em><br/>studio.</h2>

      <div className="about-inner">
        <div className="about-main">
          <p className="reveal">
            I'm <strong>Moaz</strong> — a self-taught designer from the UAE building websites that feel considered, not templated. Started with code, ended up obsessed with the space between pixels.
          </p>
          <p className="reveal reveal-d1">
            I work at the intersection of brand and web — designing and building <em>end-to-end</em> for studios, founders and small brands who care about getting the details right.
          </p>
          <p className="reveal reveal-d2">
            Every project starts with a question: what does this brand actually need to <em>feel</em> like? Then I build toward that feeling — from the typeface to the microinteraction.
          </p>
          <p className="reveal reveal-d3">
            Currently based between Dubai and wherever the work takes me. Open for select projects from Summer 2026.
          </p>
        </div>

        <div className="about-sidebar">
          <div className="about-stats reveal">
            <div className="stat-cell">
              <div className="stat-num">12+</div>
              <div className="stat-label">Projects shipped</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">4</div>
              <div className="stat-label">Years freelancing</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">3</div>
              <div className="stat-label">Countries worked in</div>
            </div>
            <div className="stat-cell">
              <div className="stat-num">1</div>
              <div className="stat-label">Person studio</div>
            </div>
          </div>

          <div className="reveal reveal-d1">
            <div className="skills-label">What I work with</div>
            <div className="skills-grid">
              {["Brand Identity","Web Design","Art Direction","Next.js","Framer","Figma","Typography","Motion","Tailwind CSS","Creative Direction"].map(s => (
                <span className="skill-tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ───────────────────────────────────────────────────────────────
const STEPS = [
  {
    n: "01",
    title: <><em>Discover</em></>,
    body: "Understanding the brief, the audience, and what actually needs to happen. No solutions yet — just questions."
  },
  {
    n: "02",
    title: <><em>Direct</em></>,
    body: "Setting the visual language. Palette, type, tone, reference. This is where the feeling gets defined — before a single layout exists."
  },
  {
    n: "03",
    title: <><em>Design</em></>,
    body: "From layout to interaction to the small details only you'll notice at 2am. Every pixel is a decision."
  },
  {
    n: "04",
    title: <><em>Build</em></>,
    body: "Clean, fast, maintainable code. I hand the file to myself. Shipped, polished, and ready to breathe on the open web."
  }
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="sec-eyebrow reveal">
        <span className="mono">How I work</span>
      </div>
      <h2 className="display huge reveal">Four <em>steps</em>,<br/>no shortcuts.</h2>

      <div className="process-grid">
        {STEPS.map((s, i) => (
          <div className="process-step reveal" style={{ transitionDelay: `${i * 0.08}s` }} key={s.n}>
            <div className="step-num">{s.n}</div>
            <div className="step-title display sm">{s.title}</div>
            <div className="step-body">{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Services ──────────────────────────────────────────────────────────────
const SERVICES = [
  { n: "i",   t: "Brand identity",     b: "Wordmarks, type systems, art-direction. The whole grammar — not just a logo." },
  { n: "ii",  t: "Website design",     b: "From positioning to layout to micro-interactions. Editorial, performant, alive." },
  { n: "iii", t: "Design + build",     b: "I hand the file off to myself. End-to-end, shipped from one head." },
  { n: "iv",  t: "Creative direction", b: "Ongoing partnership for in-house teams who need a sharper visual point of view." }
];

function Services() {
  return (
    <section className="services" id="services">
      <header className="sec-head reveal">
        <div>
          <div className="sec-eyebrow">
            <span className="mono">Services</span>
          </div>
          <h2 className="display huge">What I do, in <em>four</em> verses.</h2>
        </div>
        <p className="sec-blurb">
          Everything from the first brand conversation to the last git push. I work lean, move fast, and don't do unnecessary revisions.
        </p>
      </header>
      <ol className="svc-list">
        {SERVICES.map((s, i) => (
          <li className="svc-row reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={s.n} data-hover="hello">
            <span className="svc-n mono">{s.n}.</span>
            <span className="svc-t display">{s.t}<em>.</em></span>
            <span className="svc-b">{s.b}</span>
            <span className="svc-arrow">→</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────
function Contact() {
  const [copied, setCopied] = useStateS(false);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact" id="contact">
      <div className="sec-eyebrow reveal">
        <span className="mono">Contact</span>
      </div>
      <h2 className="display mega contact-lead reveal">
        Let's make<br/><em>something</em><br/>together<span className="accent-dot">.</span>
      </h2>

      <div className="contact-cards">
        <a className="contact-card reveal" href={"mailto:" + EMAIL} onClick={copyEmail} data-hover="copy">
          <div className="cc-eyebrow">
            <span className="cc-icon">✉</span>
            <span className="mono small">Email</span>
          </div>
          <div className="cc-value">{EMAIL}</div>
          <div className="cc-hint">{copied ? "Copied to clipboard ✓" : "Click to copy →"}</div>
        </a>

        <a className="contact-card reveal reveal-d1" href={CALENDLY} target="_blank" rel="noreferrer" data-hover="book">
          <div className="cc-eyebrow">
            <span className="cc-icon">◷</span>
            <span className="mono small">Calendly</span>
          </div>
          <div className="cc-value">Book a 30-min call</div>
          <div className="cc-hint">Pick a time that works →</div>
        </a>

        <a className="contact-card reveal reveal-d2" href={WHATSAPP} target="_blank" rel="noreferrer" data-hover="chat">
          <div className="cc-eyebrow">
            <span className="cc-icon">◎</span>
            <span className="mono small">WhatsApp</span>
          </div>
          <div className="cc-value">+971 52 868 6540</div>
          <div className="cc-hint">Message me directly →</div>
        </a>
      </div>

      <a className="contact-cta reveal" href={CALENDLY} target="_blank" rel="noreferrer" data-hover="book">
        <div>
          <div className="cta-text">Book a free discovery call</div>
          <div className="cta-meta mono">30 minutes · No commitment · Calendly</div>
        </div>
        <span className="cta-arrow">→</span>
      </a>

      <footer className="footer">
        <div className="footer-left">
          <a className="footer-wordmark" href="#">ur web</a>
          <span className="footer-copy">©︎ ur web — MMXXVI · Moaz Abdalla</span>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <span className="footer-tag">Designed &amp; built by hand. No tracking.</span>
        </div>
      </footer>
    </section>
  );
}

window.Ticker       = Ticker;
window.SelectedWork = SelectedWork;
window.About        = About;
window.Process      = Process;
window.Services     = Services;
window.Contact      = Contact;
