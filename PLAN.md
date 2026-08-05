# Marothi Pty Ltd — Website Project Plan

## 1. Project overview
- Company: Marothi Pty Ltd (South Africa)
- Name meaning: water droplets — small, persistent actions that wear down even the hardest resistance (a rock). This is the core brand narrative and should be visible in the product, not just the name.
- Deliverable: a conversion-first, skim-first website covering four service lines.
- Business goal: generate qualified WhatsApp enquiries and direct demo bookings from South African SME owners.
- Success metrics: enquiries per week, calculator/demo interactions, average time-on-page, bounce rate.

## 2. Services covered by the site
1. **Supply of software and IoT** — reseller partnerships (Telemetrics, Microsoft 365, Sage) and non-security IoT devices; positions Marothi as a one-stop tech procurement partner.
2. **Custom software development** — email design tools, mobile apps, internal dashboards, bespoke systems; shows Marothi can build what off-the-shelf can't solve.
3. **Website design and development** — the service the visitor is likely shopping for right now; the site itself is proof.
4. **WhatsApp bot and chat automation** — flagship service, highest conversion potential; leads with the homepage hero calculator.

## 3. Core philosophy (drives every decision below)
1. **Show, don't make people read.** Every claim should be demonstrable through a small interaction before it's explained in text.
2. **Interactivity over video.** Motion should come from things people click or drag, not autoplay media — cheaper on South African mobile data, more memorable, and it doubles as proof.
3. **Conversion rate is prioritised over pure SEO volume.** SEO-rich content still exists, but lives one layer deeper, on the service pages, not on the skimmable homepage.
4. **Mobile-first, data-conscious.** Every asset must justify its kilobyte; no autoplay, no heavy libraries, no layout shifts.

## 4. Site structure
- **Landing page** (hub) — hero plus one teaser section per service, each with a light interactive proof and one to two lines of copy, linking to its full service page.
- **Four service pages** (deep layer): WhatsApp Bots (flagship), Custom Software and Apps, Websites, Software and IoT Supply.
- Each service page contains: full interactive demo, optional short video (30-60s, not autoplay), expandable "read more" text panels, a case study, a pricing indicator, and a closing call to action.
- **Shared pages**: About, Contact, Privacy Policy (POPIA), Terms of Service — linked from footer.
- **Navigation**: single top bar with logo left, service dropdown or horizontal links centre, WhatsApp CTA button right. No hamburger on desktop; minimal mobile menu.

## 5. Primary audience
- SME and small business owners in South Africa (restaurants, trades, professional services, retail, small logistics).
- Time-poor, price-conscious, want proof before reading, respond better to peer stories than enterprise logos.
- Typical device: mid-range Android phone on 4G or WiFi. Connectivity is often load-shedding-dependent.
- Decision triggers: seeing rand savings, seeing a peer business succeed, ease of setup ("we handle everything").

## 6. Homepage hero
WhatsApp bot automation, presented through the interactive "hours and rand saved per week" calculator — the visitor drags a slider for daily enquiry volume and sees hours saved, rand saved, and a reply-time comparison update live.

### Calculator logic
- Slider range: 5–200 daily enquiries.
- Assumptions (editable): avg. time per manual reply = 4 minutes, staff cost per hour = R180.
- Output: hours saved/week, R saved/week, reply time comparison (manual ~12 min vs bot ~15 sec).
- CTA below calculator: "See it live — try a demo chat" → simulated WhatsApp-style chat widget.

## 7. Confirmed technical stack
| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | Server components where possible, client components only for interactivity |
| Styling | CSS Modules, using the shared `/styles/tokens.css` | Tokens: colour, spacing, type, breakpoints |
| Animation and scroll | Framer Motion (reveal-on-scroll) + Lenis (smooth inertia scroll) | Framer for `whileInView`; Lenis for feel |
| Hosting | Cloudflare Pages (Johannesburg edge node) | Near-zero cold start, edge caching |
| Images | `next/image` (automatic optimisation, lazy loading) | WebP/AVIF auto, blur placeholders |
| CMS | Sanity (headless) | Lets non-devs update case studies, copy, pricing |
| Analytics | Plausible (lightweight, no cookie banner required) | Privacy-first, EU-hosted option available |
| Lead capture | Direct WhatsApp click-to-chat plus Sanity-backed forms where needed | No form library needed beyond native + Sanity |
| Fonts | Inter or system font stack | Avoids FOUT and extra network requests |

Note: a WhatsApp Business API provider (Meta Cloud API, Twilio, 360dialog, etc.) is **not** part of this stack. That decision belongs to the actual bot product Marothi builds for clients, and is tracked separately.

### Performance budget (initial load on 3G)
- Total JS: < 120 KB gzipped.
- Total CSS: < 20 KB gzipped.
- Largest Contentful Paint (LCP): < 2.5 s on mid-range Android.
- Cumulative Layout Shift (CLS): < 0.1.
- Interaction to Next Paint (INP): < 200 ms.

## 8. Motion and interaction principles
- Smooth inertia scroll (Lenis) site-wide.
- Reveal-on-scroll animation (Framer Motion `whileInView`) for sections entering the viewport.
- Parallax (layered scroll-speed depth) used sparingly — hero plus one or two key transitions — with the visitor always in full control of scroll. See `DESIGN.md` Section 5 for the parallax vs. scroll-jacking distinction and implementation rules.
- No scroll-jacking anywhere on the site.
- `prefers-reduced-motion` fallback required site-wide — all animations disabled or reduced to simple fades.
- Micro-interactions (ripple/droplet clicks, toggles, sliders) function as literal proof of each service, not decoration.
- Animation timing: 200–400 ms for reveals, ease-out curves; no spring physics on scroll elements (Lenis handles feel).

## 9. Visual and art direction summary
- Real, local South African photography as the primary visual layer — Johannesburg streetscapes, small business interiors, hands on devices.
- Blue, procedural, painterly art accents "sprinkled" — one accent per image or section, never a full-canvas pattern.
- No flat corporate vector illustration style.
- Colour palette anchored in Marothi blue (#1A56DB or brand-adjusted) with warm neutrals for text and surfaces.
- Typography: one sans-serif for body (Inter/system), one display weight for headings — no decorative fonts.
- Generous whitespace; content never bleeds edge-to-edge on mobile.

## 10. Per-service interactive proof (already prototyped as concepts)
| Service | Interaction | Placement |
|---|---|---|
| WhatsApp Bots | Time/money-saved slider, plus a simulated chat demo (restaurant, plumbing, or type-your-own industry) | Homepage hero + WhatsApp service page |
| Professional email | Toggle between a generic gmail sender (spam folder) and a professional branded sender (inbox), with live delivery/open-rate stats | Custom Software page |
| Custom software and apps | Before/after slider — manual spreadsheet chaos vs. a clean custom dashboard | Custom Software page |
| Websites | Load-speed comparison meter — typical local site vs. a Marothi-built site | Websites service page |
| Software and IoT supply | Live-updating mini dashboard mockup pulling from a static JSON data set | Software & IoT page |

## 11. Open decisions / next steps
- [ ] Commission a local photographer/illustrator vs. curated stock as a launch placeholder
- [ ] Finalise per-service copy and case studies
- [ ] Choose a WhatsApp Business API provider for the actual bot **product** (separate project, not required for the website build)
- [ ] Confirm pricing display approach per service (starting-from price vs. quote-only)
- [ ] Design the Sanity schema for service pages and case studies
- [ ] Finalise POPIA-related copy and badge placement
- [ ] Decide on a CTA label: "Get a free quote" vs "Book a 15-min demo" vs "Chat on WhatsApp"
- [ ] Confirm Plausible domain and shared dashboard access
- [ ] Set up Cloudflare Pages project and custom domain DNS

## 12. Suggested build phases
1. **Phase 1 — Content and copy** (see `CONTENT.md`)
   - Write hero copy, per-service taglines, pricing copy, case study templates.
   - Gather or commission photography.
2. **Phase 2 — Design system** (see `DESIGN.md`)
   - Tokens (colours, spacing, type scale, breakpoints).
   - Component library: Button, Card, Toggle, Slider, ChatDemo, SectionReveal, PricingBlock, CaseStudy, FAQ.
   - All components built against `tokens.css` and responsive from 320 px up.
3. **Phase 3 — Landing page build**
   - Hero with calculator, four service teasers with mini-proofs, header/footer, WhatsApp CTA.
   - Deploy to Cloudflare Pages for early review.
4. **Phase 4 — WhatsApp Bots service page**
   - Full calculator, chat demo, case study block, pricing, CTA.
   - This is the flagship page — polish it first.
5. **Phase 5 — Remaining three service pages**
   - Custom Software, Websites, Software & IoT — each using the service page template.
6. **Phase 6 — Shared pages and CMS**
   - About, Contact, Privacy Policy (POPIA).
   - Sanity integration for case studies and copy.
7. **Phase 7 — QA**
   - Performance on 3G/4G mobile data (budget enforcement).
   - Accessibility: reduced motion, contrast ratios, keyboard navigation, screen reader labels.
   - Cross-browser: Chrome, Safari, Firefox, Samsung Internet.
8. **Phase 8 — Launch**
   - Plausible configured, Cloudflare Pages custom domain live, DNS propagated.
   - Final Lighthouse audit before go-live.
