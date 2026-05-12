# ur/web — Developer Handoff

**Live:** https://ur-web.vercel.app  
**GitHub:** https://github.com/moazabdalla525-ops/ur-web  
**Owner:** Moaz Abdalla · moazabdalla567@gmail.com

---

## Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js App Router | 16.2.6 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS v4 | 4.x |
| Animation | Framer Motion | 12.x |
| Icons | Lucide React | 1.x |
| Fonts | next/font/google | — |
| Deployment | Vercel (auto from main) | — |

No shadcn/ui. No database. No auth. Static site, all pages pre-rendered.

---

## Running locally

```bash
# Dev server — use this exact command, not `npm run dev`
node node_modules/next/dist/bin/next dev --port 3001

# Build
node node_modules/next/dist/bin/next build
```

> **Why not `npm run dev`?** `node_modules/.bin/next` is a broken non-symlink file in this install. Call the Next.js binary directly via `node node_modules/next/dist/bin/next`.

---

## File structure

```
app/
  layout.tsx          # Root layout — fonts, metadata, Navbar, Footer
  globals.css         # All CSS: palette vars, utility classes, animations
  page.tsx            # / → renders HomeContent
  about/page.tsx      # /about
  contact/page.tsx    # /contact
  pricing/page.tsx    # /pricing
  work/page.tsx       # /work

components/
  Navbar.tsx          # TopRail availability bar + logo + nav + mobile drawer
  Footer.tsx          # Editorial 12-col grid footer
  MarqueeTicker.tsx   # Auto-scrolling industry marquee (used on Home hero)
  AnimatedBackground.tsx  # Floating particle dots background
  FAQ.tsx             # Accordion component (used on Home)
  PhoneMockup.tsx     # Decorative phone frame

  pages/
    HomeContent.tsx   # Full home page — hero, work cards, pricing ledger,
                      # process timeline, compare table, FAQ, CTA
    WorkContent.tsx   # Portfolio page — 3 live sites
    PricingContent.tsx  # Pricing page — ledger, compare table, monthly card
    AboutContent.tsx  # About page — editorial numbered sections
    ContactContent.tsx  # Contact page — form + sidebar links
```

All `pages/` components are `'use client'` because they use Framer Motion and `useEffect`. The `app/*/page.tsx` files are server components that export `metadata` then render the matching content component.

---

## Design system

### Fonts (loaded in `app/layout.tsx`)

| Class | Font | Use |
|---|---|---|
| `.f-display` | Fraunces (variable: opsz 144, SOFT 100) | Big headings, numbers |
| `.f-grot` | Space Grotesk | Body, labels, buttons |
| `.f-mono` | JetBrains Mono | Captions, section markers, metadata |

### Color palette (`app/globals.css` `:root`)

| Var | Hex | Use |
|---|---|---|
| `--navy` | `#0F0C08` | Page background |
| `--navy-2` | `#171310` | Card backgrounds |
| `--teal` | `#1C1710` | Subtle card tints |
| `--teal-2` | `#241C10` | Section backgrounds |
| `--teal-3` | `#2D2212` | Hover states |
| `--sage` | `#A09478` | Muted text |
| `--cream` | `#EDE3D0` | Primary text |
| `--paper` | `#F5EEE0` | Lightest text |
| `--apricot` | `#C89A38` | Gold accent — CTAs, highlights |
| `--rust` | `#9B7020` | Dark gold — button gradient end |

Body background is a fixed radial gradient, not a solid color.

### Key CSS utility classes

| Class | Effect |
|---|---|
| `.f-display` | Fraunces display font + tight tracking |
| `.apricot-fill` | Animated gold shimmer on text (background-clip) |
| `.shimmer` | Muted cream shimmer on text |
| `.grain` | Fixed noise texture overlay (on `<body>`) |
| `.grad-border` | Pseudo-element gold gradient border |
| `.press` | Scale-down on active (button press feel) |
| `.tilt` | 3D tilt preserve on hover |
| `.reveal` | Scroll-reveal — starts invisible, `.in` class triggers animation |
| `.underline-grow` | Animated underline on hover |
| `.orbA` / `.orbB` | Floating ambient glow orbs |
| `.beam` | Diagonal sweep highlight animation |
| `.rise` | Hero word entrance (translateY + blur) |
| `.mq-track` | Marquee auto-scroll animation |
| `.pulse` | Pulsing ring on availability dot |
| `.glow` | Gold text glow/shimmer (used on pricing number) |
| `.h-scroll` | Horizontal scroll container (mobile work cards) |
| `.snap` | Scroll-snap child (mobile work cards) |

---

## Pending TODOs before launch

### 1. Formspree — contact form
`components/pages/ContactContent.tsx` line 77:
```ts
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```
Replace `YOUR_FORM_ID` with a real Formspree endpoint. Create one free at formspree.io — connect the form to moazabdalla567@gmail.com.

### 2. Calendly URL
Currently: `https://calendly.com/moazabdalla525/30min`  
Set in all 5 page content files as `const CALENDLY = '...'`. If the Calendly link changes, update all 5 files:
- `HomeContent.tsx`
- `WorkContent.tsx`
- `PricingContent.tsx`
- `AboutContent.tsx`
- `ContactContent.tsx`

### 3. WhatsApp number
Currently: `https://wa.me/971528686540`  
Set the same way — `const WHATSAPP = '...'` in all 5 files.

### 4. Portfolio sites (WorkContent.tsx)
Three demo sites are live and linked. If Moaz builds more sites, add them to the `sites` array in `components/pages/WorkContent.tsx` and `HomeContent.tsx` (the horizontal scroll section).

---

## Deployment

Vercel auto-deploys on every push to `main`. No manual step needed. Build command is `next build`, output directory is `.next`. All pages are statically pre-rendered (SSG) — no server runtime required.

Domain: currently on Vercel's default subdomain (`ur-web.vercel.app`). To add a custom domain, go to Vercel project settings → Domains.

---

## Known quirks

- **`.bin/next` is broken** — always use `node node_modules/next/dist/bin/next` directly (see Running locally above).
- **Tailwind v4 config** — there is no `tailwind.config.ts`. All theme config lives in the `@theme {}` block inside `app/globals.css`. Arbitrary values (`text-[#C89A38]`, `px-[72px]`) work as expected.
- **`'use client'` on all page content** — required because Framer Motion hooks can't run on the server. The thin `app/*/page.tsx` server wrappers export metadata separately.
- **Scroll-reveal pattern** — each page content component runs a `useEffect` with `IntersectionObserver` to add the `.in` class to `.reveal` elements. This is intentional and repeated per page (not a shared hook) to avoid SSR issues.
- **Mobile compare section** — uses a single flex-row card list (`md:hidden`), not the desktop 3-col grid table (`hidden md:block`). Both exist in `HomeContent.tsx` and `PricingContent.tsx`.
