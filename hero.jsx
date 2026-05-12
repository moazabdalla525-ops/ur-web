// hero.jsx
const { useEffect, useRef } = React;

function HeroStacked({ accent }) {
  return (
    <section className="hero hero-stacked">
      <div className="hero-top">
        <div className="meta-row">
          <span className="dot"></span>
          <span className="mono">Available · Summer 2026</span>
        </div>
        <span className="mono dim">ur/web — No. 01</span>
      </div>

      <div className="headline display">
        <div className="line"><span className="line-inner">Independent</span></div>
        <div className="line"><span className="line-inner"><em>web</em> designer</span></div>
        <div className="line"><span className="line-inner">crafting brands</span></div>
        <div className="line"><span className="line-inner">&amp; <em>digital</em> things.</span></div>
      </div>

      <div className="hero-foot">
        <div className="sig">
          <span className="mono small dim">— Signed,</span>
          <span className="serif-script">Moaz</span>
        </div>
        <button
          className="scroll-cta"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="mono small">Scroll</span>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <circle cx="17" cy="17" r="16.5" stroke="currentColor" opacity=".25"/>
            <path d="M17 10v14M11 18l6 6 6-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

function HeroMarquee({ accent }) {
  return (
    <section className="hero hero-marquee">
      <div className="hero-top">
        <div className="meta-row">
          <span className="dot"></span>
          <span className="mono">Open for commissions · 2026</span>
        </div>
        <span className="mono dim">A portfolio · No. 01</span>
      </div>

      <div className="marquee-stack">
        <div className="marquee">
          <div className="marquee-track">
            {[0,1,2,3].map(i => (
              <span className="marquee-item" key={i}>
                Moaz <em>—</em> independent <em>web</em> designer <span className="aster">✦</span>{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="marquee reverse">
          <div className="marquee-track">
            {[0,1,2,3].map(i => (
              <span className="marquee-item outline" key={i}>
                Brands · Sites · Identities · Made by hand{" "}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="marquee-foot">
        <p className="manifesto">
          Designing <em>websites</em> and brand systems for people who care about <em>the details</em>.
        </p>
        <div className="m-stats">
          <div><span className="num">12+</span><span className="mono small">projects shipped</span></div>
          <div><span className="num">4</span><span className="mono small">years freelancing</span></div>
          <div><span className="num">∞</span><span className="mono small">iterations</span></div>
        </div>
      </div>
    </section>
  );
}

window.HeroStacked  = HeroStacked;
window.HeroMarquee  = HeroMarquee;
