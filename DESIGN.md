# Marothi — Design System and UX Philosophy

## 1. Brand core
Name meaning: water droplets — small, repeated actions producing outsized results, the way water wears down rock. This should show up in the interaction language itself (ripple effects, gradual reveal, layered motion depth), not only as a story on an about page.

## 2. Design philosophy (non-negotiable rules)
1. **Show before you tell.** Every section leads with an interaction or visual proof; text is secondary, optional depth.
2. **Interactivity, not video.** Motion earns its place by being informative, not merely decorative.
3. **Desktop and mobile are separate layout decisions**, not one layout stretched or shrunk. Build each breakpoint intentionally.
4. **Conversion over pure SEO.** The visible top layer stays skimmable; SEO-rich content lives one click deeper.
5. **Parallax and reveal motion are welcome; scroll-jacking is not.** The visitor always keeps control of their own scroll. Depth and atmosphere come from layered motion speed, never from taking the wheel away from them. See Section 5 for the distinction and implementation rules.

## 3. Visual identity
- **Colour:** blue-led palette, evoking water, drawn from the shared design tokens (`/styles/tokens.css`). Exact values live in tokens, not duplicated here.
- **Typography:** clean modern sans for UI and body copy; consider reserving a distinct serif or "voice" font for storytelling moments (about page, brand narrative) to signal a tonal shift. Family still to be confirmed — see Section 10 for the sizing system this will slot into.
- **Art style:** abstract, painterly, African-inspired blue washes, used strictly as accents — never as full backgrounds.
- **Photography:** real, local, SME-representative. A person holding a phone, using the product, in a real business setting — not generic international stock.

## 4. The "sprinkle, don't saturate" rule
- One art accent per image or section, maximum.
- The accent sits behind or beside a photo, in a single corner, rotated and organic — never centred, never symmetric.
- Vary accent placement across sections and pages so nothing feels templated.
- No patterns behind body text or inside content-dense areas — reserve them for hero and card imagery only.
- **This same restraint applies to motion** (Section 5): not every section needs parallax or a reveal animation. Overusing either works against the show-first, skim-first goal just as visually busy backgrounds would.

## 5. Motion system

### 5.1 Core techniques
- **Smooth inertia scroll** (Lenis) site-wide — makes normal scrolling feel weighted and premium without changing what the user controls.
- **Reveal-on-scroll:** sections and elements fade and slide into view once roughly 20–30% visible (Framer Motion `whileInView`), not before.
- **Parallax:** background and foreground layers move at different speeds as the page scrolls normally. Used for depth and atmosphere, primarily in the hero and at most one or two key section transitions — not applied to every section (see Section 4's restraint principle).
- **No scroll-jacking**, anywhere on the site. The visitor's scroll input is never intercepted or overridden.
- **Micro-interactions** (the actual proof elements — sliders, toggles, click-to-reveal) always respond instantly and are always reversible; these are separate from ambient/atmospheric motion like parallax.
- **Droplet/ripple click effect** is available as a signature micro-interaction, used sparingly (for example the WhatsApp hero, or one brand-story moment).

### 5.2 Parallax vs. scroll-jacking — the line, in practice
| | Parallax (in use) | Scroll-jacking (excluded) |
|---|---|---|
| Who controls scroll speed/position | The visitor, always | The site |
| What changes | Layer offset/opacity as a function of scroll position | Navigation is forced into fixed steps |
| Visitor can scroll past freely | Yes | No |
| Risk it introduces | Performance, if overused | Accessibility, disorientation, SEO crawl issues |

### 5.3 Parallax implementation rules
- Build parallax with GPU-friendly transforms only (`transform: translate3d` / Framer Motion's `useScroll` + `useTransform`) — never with layout-triggering properties like `top`/`margin`, which cause jank on lower-end Android devices common in the SA market.
- Layer speeds: background slowest, midground medium, foreground (actual content and CTAs) moves at normal scroll speed so text never becomes hard to read.
- Cap parallax to a small number of moments per page (hero, plus one or two transitions) — the same discipline as the art-accent "sprinkle" rule.
- Disable parallax offset entirely under `prefers-reduced-motion` (render layers static) — this is in addition to, not instead of, disabling reveal animations.
- Consider a simplified/static fallback on very low-end devices or slow connections, to protect the fast-on-mobile-data promise the whole site is built around.

### 5.4 Animation timing reference
- Standard easing: a smooth decelerating curve (e.g. `cubic-bezier(0.22, 1, 0.36, 1)`).
- Hover/interaction transitions: 200–350ms.
- Reveal-on-scroll transitions: translate + fade, roughly 400–600ms, triggered via Intersection Observer.

## 6. Component and token system
- All colour, spacing, radius, and typography values come from `/styles/tokens.css` — no hardcoded values inside component styles.
- Styling is done through CSS Modules only.
- Components should read tokens consistently across all four service pages, so they feel like one system rather than four separate builds.

## 7. Interaction pattern library (already prototyped as concepts)
1. **WhatsApp time/value calculator** — input: daily enquiry volume (slider) — output: hours saved per week, rand saved per week, reply-time comparison.
2. **Industry chat demo** — input: pick restaurant, plumbing, or type your own industry — output: a simulated conversation showing the bot handling that business's enquiry.
3. **Spam-to-inbox toggle** — input: toggle generic-gmail vs. professional-email — output: inbox placement, delivery rate, and open rate change.
4. **Before/after slider** (custom software) — input: drag a slider — output: spreadsheet chaos vs. custom dashboard clarity.
5. **Load-speed meter** (websites) — input: automatic on scroll into view — output: animated comparison of a typical local site's load time vs. a Marothi-built site.
6. **Live dashboard mockup** (software/IoT supply) — input: automatic — output: a sense of the real-time visibility a client gains from Sage, Telemetrics, or IoT integration.

## 8. Global component architecture
Structural/behavioural patterns only — copy for each lives in `CONTENT.md`, not here.

- **Header/navigation:** floating capsule bar, slight shrink on downward scroll ("stuck" state), hover on links reveals a smooth underline slide. Glass/blur finish is optional polish, not required for the pattern to work.
- **Hero:** tagline badge → headline → the service's interactive proof (per Section 7) → primary CTA. A logo-marquee row is a common pattern here, but Marothi's content strategy favours peer SME testimonials over client-logo walls (see `CONTENT.md`) — swap the marquee for a short peer-proof strip instead of enterprise logos.
- **Featured work / case studies:** numbered ghost index (01, 02, 03…), image scales up slightly on hover, tag pills shift up slightly on hover. Applicable directly to Marothi's per-service case study section.
- **Services grid / accordion:** modular cards or expandable panels for listing sub-capabilities within a service — useful for the Software & IoT Supply page (Telemetrics, Sage, Microsoft Suite, IoT as sub-items).
- **Process timeline:** a 3-step flow with a connecting line (dotted horizontal on desktop, vertical rail on mobile). Not yet in `CONTENT.md` — worth adding a short "how we work" section using this pattern (e.g. Discovery → Build → Launch), since it reinforces the "show, don't just tell" trust story.
- **Pricing grid:** a 3-tier comparison card layout exists as a reference pattern, but **conflicts with Marothi's current pricing decision** (a simple "from R.." indicator per service, not gated project tiers — see `CONTENT.md` Section 8). Keep this pattern on the shelf only; don't build it unless the pricing approach changes.
- **Testimonials + metric counters:** dark/light card testimonials paired with animated counters (e.g. "SMEs supported," "hours saved to date," "average setup time"). Matches the peer-testimonial strategy already in `CONTENT.md`.
- **Insights/articles grid:** a card grid for blog-style content, useful as the home for the SEO-rich deep content described in `CONTENT.md` Section 6.
- **FAQ accordion:** simple expand/collapse cards, already planned per service page in `CONTENT.md`.
- **Footer close:** large closing CTA statement plus stacked navigation — matches the footer CTA already planned in `CONTENT.md`.

## 9. Spacing, grid, and radii system
- **Base unit:** 8px — all margins, padding, and component heights align to multiples of 8.
- **Container max-widths:**
  - Ultra-wide: 1440px
  - Standard desktop: 1200px
  - Tablet: 768px
  - Mobile: 100% width, 16–20px side padding
- **Radii scale:**
  - Small (badges, chips): 4px
  - Medium (cards, inputs): 12px
  - Large (containers, floating widgets): 24px
  - Pill (buttons, tags): fully rounded

## 10. Typography scale (structure — font family still to be confirmed)
| Token | Weight | Desktop | Mobile | Line height |
|---|---|---|---|---|
| `display-xl` | Bold | 72px | 42px | 1.05 |
| `heading-h1` | SemiBold | 52px | 34px | 1.12 |
| `heading-h2` | SemiBold | 38px | 26px | 1.20 |
| `heading-h3` | Medium | 24px | 20px | 1.30 |
| `body-lg` | Regular | 18px | 16px | 1.60 |
| `body-md` | Regular | 15px | 14px | 1.50 |
| `caption-sm` | Medium, uppercase | 12px | 11px | 1.40 |

## 11. Global responsive breakpoint strategy
- **Desktop XL (≥ 1440px):** 12-column grid, 32px gutters.
- **Desktop standard (1024–1439px):** 12-column grid, 24px gutters.
- **Tablet (768–1023px):** 8-column grid, 20px gutters; flex layouts switch to 2-column stacks.
- **Mobile (< 767px):** 4-column grid, 16px margins/gutters, vertical flow.

## 12. Layout principles by breakpoint
- **Mobile:** single column, stacked. Interactive element first, copy below, call to action immediately following.
- **Desktop:** two-column layouts where relevant — interaction paired side-by-side with copy — with generous whitespace. Never a simple stretch of the mobile layout.
- **Tablet:** treated as its own checkpoint. Verify each interactive widget at this width specifically rather than assuming it falls cleanly between mobile and desktop.

## 13. Accessibility and performance guardrails
- `prefers-reduced-motion` disables both reveal-on-scroll animation and parallax offset — not just one of them.
- Colour contrast meets WCAG AA at minimum (4.5:1 for body text), especially text placed over art accents or parallax layers.
- Minimum 44×44px touch target for all buttons and interactive chips on mobile.
- Every interactive demo is usable by keyboard, not only by pointer or touch.
- All art and photo assets are optimised (`next/image`, WebP/AVIF, lazy-loaded) to protect the "fast on mobile data" promise the site is built around.

## 14. Trust and credibility signals
- POPIA-aware messaging near any data-touching interaction (WhatsApp bot, IoT) — a small badge or tooltip, not a wall of legal text.
- Peer-level testimonials (other SME owners) are prioritised over corporate or enterprise logos.
- A visible starting price, or a clearly explained pricing logic, rather than "contact us" as the only option.
