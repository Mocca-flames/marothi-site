// Marothi — Phase 1 content source
// ---------------------------------------------------------------------------
// All site copy drafted for Phase 1 (see PLAN.md §12 / CONTENT.md §9).
// This is the single source of truth until Sanity (Phase 6) takes over.
//
// DRAFT FLAGS
//  - testimonials and caseStudies below are SAMPLE drafts pending client
//    sign-off. Replace with real, approved SME testimonials and case studies.
//  - All other copy (hero, services, explainers, scenarios, pricing, FAQs,
//    CTA pre-fill, POPIA microcopy) is authored and ready for build.
// ---------------------------------------------------------------------------

export type ServiceKey =
  | "whatsapp-bots"
  | "professional-email"
  | "custom-software"
  | "websites"
  | "software-iot";

export interface Scenario {
  id: string;
  industry: string;
  tag: string;
  before: string;
  after: string;
}

export interface Explainer {
  definition: string;
  inShort: { is: string[]; isnt: string[] };
  howItWorks: { title: string; body: string }[];
  whatYouProvide: string[];
  howLong: { label: string; note: string }[];
  setupSummary: string;
  misconceptions: { myth: string; reality: string }[];
}

export interface Pricing {
  fromLabel: string;
  included: string[];
  affectsPrice: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface CtaPreFill {
  step: string;
  text: string;
}

export interface ServiceTeaser {
  badge: string;
  headline: string;
  copy: string;
  ctaLabel: string;
}

export interface Service {
  key: ServiceKey;
  name: string;
  slug: string;
  leadStat: string;
  sceneCaption: string;
  teaser: ServiceTeaser;
  explainer: Explainer;
  scenarios: Scenario[];
  pricing: Pricing;
  faqs: Faq[];
  ctaPrefill: CtaPreFill[];
}

// ---------------------------------------------------------------------------
// Brand
// ---------------------------------------------------------------------------
export const brand = {
  name: "Marothi",
  tagline: "small drops. lasting impact.",
  meaning:
    "Water droplets — small, persistent actions that wear down even the hardest resistance. The brand is built on that idea: small, repeated work that produces outsized results.",
  whatsappNumber: "+27000000000", // TODO(Phase 3): replace with the live Marothi WhatsApp Business number
} as const;

// ---------------------------------------------------------------------------
// Landing page — hero (flagship: WhatsApp bots)
// ---------------------------------------------------------------------------
export const hero = {
  badge: "WhatsApp automation for South African SMEs",
  headline: "small drops. lasting impact.",
  subhead:
    "A WhatsApp bot that answers your customers the moment they message — even at 6pm on a Thursday. More enquiries booked, fewer missed.",
  primaryCta: { label: "See it live — try the demo", href: "#demo" },
  secondaryCta: { label: "Get a free quote", href: "#quote" },
} as const;

// ---------------------------------------------------------------------------
// Landing page — service teasers (one per service, in display order)
// ---------------------------------------------------------------------------
export const landingTeasers: { key: ServiceKey; teaser: ServiceTeaser }[] = [
  {
    key: "whatsapp-bots",
    teaser: {
      badge: "Never miss another enquiry",
      headline: "Your WhatsApp, answering itself",
      copy: "Customers get replies in seconds, 24/7 — while you're serving, sleeping, or closed. See the hours and rand you get back.",
      ctaLabel: "See how it works",
    },
  },
  {
    key: "professional-email",
    teaser: {
      badge: "Get into the inbox",
      headline: "you@yourbusiness.co.za",
      copy: "A free gmail address lands in spam. A branded email lands in the inbox — and customers open it. See it switch.",
      ctaLabel: "See the inbox difference",
    },
  },
  {
    key: "custom-software",
    teaser: {
      badge: "Built for how you work",
      headline: "Off-the-shelf doesn't fit? We build it.",
      copy: "Stop bending your business around spreadsheets. See the before/after of a tool made for you.",
      ctaLabel: "See the before/after",
    },
  },
  {
    key: "websites",
    teaser: {
      badge: "Fast on mobile data",
      headline: "A site that respects their data",
      copy: "Most local sites are slow on a phone. Ours load fast — and turn visitors into WhatsApp enquiries.",
      ctaLabel: "See the speed difference",
    },
  },
  {
    key: "software-iot",
    teaser: {
      badge: "One view of your business",
      headline: "The software and devices you run on",
      copy: "Microsoft 365, Sage, Telemetrics, IoT — supplied, set up, and showing what's happening in real time.",
      ctaLabel: "See the live dashboard",
    },
  },
];

// ---------------------------------------------------------------------------
// Per-service content
// ---------------------------------------------------------------------------
export const services: Record<ServiceKey, Service> = {
  "whatsapp-bots": {
    key: "whatsapp-bots",
    name: "WhatsApp Bots",
    slug: "whatsapp-bots",
    leadStat: "Hours and rand saved per week",
    sceneCaption:
      "Thursday, 6:40pm. Three missed orders while you were plating up. This is your week — until it isn't.",
    teaser: {
      badge: "Never miss another enquiry",
      headline: "Your WhatsApp, answering itself",
      copy: "Customers get replies in seconds, 24/7 — while you're serving, sleeping, or closed. See the hours and rand you get back.",
      ctaLabel: "See how it works",
    },
    explainer: {
      definition: "A bot that answers your customers on WhatsApp while you're busy.",
      inShort: {
        is: [
          "Answers common questions instantly, any time of day",
          "Books enquiries and collects details while you sleep",
          "Speaks in your tone, on the channel your customers already use",
        ],
        isnt: [
          "A robot that replaces you — it handles the repeat questions, you handle the rest",
          "A cold call centre — it only replies to people who message you first",
          "A big IT project — setup is days, not months",
        ],
      },
      howItWorks: [
        {
          title: "You tell us your common questions",
          body: "The ones you answer every day: prices, hours, booking, location.",
        },
        {
          title: "We build your bot",
          body: "We turn those into friendly replies your customers get on WhatsApp.",
        },
        {
          title: "It goes live",
          body: "Messages come to your phone; the bot handles the repeat stuff and hands over when needed.",
        },
      ],
      whatYouProvide: [
        "Your business name and WhatsApp number",
        "The 5–10 questions customers ask most",
        "Any prices, hours, or booking links you want included",
        "No technical skills, no IT department",
      ],
      howLong: [
        { label: "Day 1", note: "Set up" },
        { label: "Day 2", note: "Test with you" },
        { label: "Day 3", note: "Go live" },
      ],
      setupSummary: "Most businesses are live within a week.",
      misconceptions: [
        {
          myth: "Customers hate bots.",
          reality:
            "They hate slow replies. A bot that answers in 15 seconds beats a business that replies tomorrow.",
        },
        {
          myth: "It'll sound robotic.",
          reality:
            "It uses your words and tone — most customers can't tell it's automated for the simple stuff.",
        },
        {
          myth: "It's expensive to build.",
          reality:
            "No code, no developers on retainer. Setup is a few days, not a project.",
        },
      ],
    },
    scenarios: [
      {
        id: "restaurant",
        industry: "Restaurant",
        tag: "Food",
        before: "After-hours orders lost to a closed phone.",
        after: "Bot takes the order and sends it through.",
      },
      {
        id: "plumbing",
        industry: "Plumbing",
        tag: "Trades",
        before: "Weekend burst pipe, no reply till Monday.",
        after: "Bot books the job and shares your rates.",
      },
      {
        id: "retail",
        industry: "Retail",
        tag: "Shop",
        before: "'Do you have this in stock?' goes unanswered.",
        after: "Bot checks and replies in seconds.",
      },
    ],
    pricing: {
      fromLabel: "From R450/month",
      included: [
        "Unlimited automated replies",
        "Up to 10 common questions handled",
        "Handover to you for anything complex",
        "Monthly tweak of replies",
      ],
      affectsPrice:
        "Price grows with the number of languages, integrations (e.g. booking systems), and whether you need AI that understands free-text replies.",
    },
    faqs: [
      {
        q: "Will customers know it's a bot?",
        a: "For simple questions, many don't — and that's fine. The bot introduces itself on the first message and hands over to you for anything it can't handle.",
      },
      {
        q: "What if it gives the wrong answer?",
        a: "It only answers from what you give us. You can review and edit replies anytime, and it always escalates uncertain questions to a person.",
      },
      {
        q: "Do I need the WhatsApp Business app?",
        a: "Yes — it runs on your existing WhatsApp Business number. No new phone, no new SIM.",
      },
      {
        q: "Can it take bookings or payments?",
        a: "It can collect booking details and send links. Full payments depend on your provider; we'll set up what fits.",
      },
      {
        q: "What about POPIA?",
        a: "We only store what's needed to help the customer, with their consent, and you control the data. A short privacy note shows in the chat.",
      },
      {
        q: "How long until it's live?",
        a: "Most businesses are live within a week — Day 1 setup, Day 2 test, Day 3 live.",
      },
    ],
    ctaPrefill: [
      {
        step: "05-proof",
        text: "Hi Marothi, I'd like a free 15-min demo of a WhatsApp bot for my business.",
      },
      {
        step: "09-pricing",
        text: "Hi Marothi, can you quote a WhatsApp bot for my [business type]? Around [X] enquiries a day.",
      },
      {
        step: "11-final",
        text: "Hi Marothi, I'm ready to set up a WhatsApp bot. Can we book a quick call?",
      },
    ],
  },

  "professional-email": {
    key: "professional-email",
    name: "Professional Email",
    slug: "professional-email",
    leadStat: "Inbox delivery and open rates",
    sceneCaption:
      "You send a quote from a free gmail address. Your competitor's lands in the inbox. Guess who gets the job.",
    teaser: {
      badge: "Get into the inbox",
      headline: "you@yourbusiness.co.za",
      copy: "A free gmail address lands in spam. A branded email lands in the inbox — and customers open it. See it switch.",
      ctaLabel: "See the inbox difference",
    },
    explainer: {
      definition:
        "A business email address on your own domain (you@yourbusiness.co.za) instead of a free gmail address.",
      inShort: {
        is: [
          "Sends from your own domain, so it looks and feels like your business",
          "Trusted by spam filters, so it reaches the inbox",
          "Works with the tools you already use (Outlook, phone, web)",
        ],
        isnt: [
          "Just a fancy address — it also improves deliverability and trust",
          "Only for big companies — any SME can have one",
          "Hard to set up — we handle the technical part",
        ],
      },
      howItWorks: [
        {
          title: "We register your domain",
          body: "yourbusiness.co.za, matched to your name.",
        },
        {
          title: "We set up your mailbox",
          body: "Branded addresses for you and your team, on a secure provider.",
        },
        {
          title: "You send with confidence",
          body: "Quotes and invoices now arrive in your customer's inbox, not their spam.",
        },
      ],
      whatYouProvide: [
        "The business name you want (e.g. yourbusiness.co.za)",
        "Who needs an address (you, a colleague)",
        "No technical skills needed — we do the setup",
      ],
      howLong: [
        { label: "Day 1", note: "Register domain" },
        { label: "Day 2", note: "Create mailboxes" },
        { label: "Day 3", note: "You're sending" },
      ],
      setupSummary: "Most businesses are sending from their own domain within a week.",
      misconceptions: [
        {
          myth: "A gmail address is fine for business.",
          reality:
            "It signals 'hobby', and spam filters treat it differently — your quote can land in junk.",
        },
        {
          myth: "It's expensive.",
          reality: "A domain and mailbox cost less than a missed quote.",
        },
        {
          myth: "I'll lose my old emails.",
          reality: "We help you keep what matters and move it across.",
        },
      ],
    },
    scenarios: [
      {
        id: "plumber",
        industry: "Plumber",
        tag: "Quotes",
        before: "Quote sent from gmail, lands in spam.",
        after: "Quote from you@yourplumbing.co.za, opened and accepted.",
      },
      {
        id: "accountant",
        industry: "Accountant",
        tag: "Invoices",
        before: "Invoice from a personal address, looks suspicious.",
        after: "Invoice from you@youraccountant.co.za, trusted and paid.",
      },
      {
        id: "salon",
        industry: "Salon",
        tag: "Bookings",
        before: "Booking request from free mail, buried.",
        after: "Booking from branded mail, seen and confirmed.",
      },
    ],
    pricing: {
      fromLabel: "From R99/month",
      included: [
        "Your .co.za domain",
        "1 branded mailbox",
        "Spam and virus filtering",
        "Setup and move of old mail",
      ],
      affectsPrice:
        "More mailboxes, extra storage, and Microsoft 365 or advanced security add to the base price.",
    },
    faqs: [
      {
        q: "Do I keep my current email?",
        a: "If you want, yes — we can forward or move it. Many clients keep a personal address separate.",
      },
      {
        q: "What if I already own a domain?",
        a: "Great — we'll use it. If not, we register one for you.",
      },
      {
        q: "Can my team each have an address?",
        a: "Yes, each person gets their own branded mailbox.",
      },
      {
        q: "Will it work on my phone?",
        a: "Yes — iPhone, Android, and web. Set up in minutes.",
      },
      {
        q: "Is it secure?",
        a: "We use providers with spam filtering and encryption in transit. You control access.",
      },
    ],
    ctaPrefill: [
      {
        step: "05-proof",
        text: "Hi Marothi, I'd like a professional email for my business.",
      },
      {
        step: "09-pricing",
        text: "Hi Marothi, can you set up a branded email (you@mybusiness.co.za)? I need [X] mailboxes.",
      },
      {
        step: "11-final",
        text: "Hi Marothi, let's set up my professional email this week.",
      },
    ],
  },

  "custom-software": {
    key: "custom-software",
    name: "Custom Software and Apps",
    slug: "custom-software",
    leadStat: "Time and errors saved",
    sceneCaption:
      "You're running the whole operation from a stack of spreadsheets — and one wrong cell costs you a customer.",
    teaser: {
      badge: "Built for how you work",
      headline: "Off-the-shelf doesn't fit? We build it.",
      copy: "Stop bending your business around spreadsheets. See the before/after of a tool made for you.",
      ctaLabel: "See the before/after",
    },
    explainer: {
      definition:
        "Software built specifically for how your business works — instead of forcing your business to fit off-the-shelf tools.",
      inShort: {
        is: [
          "Does the exact job you need, nothing you don't",
          "Talks to the tools you already use",
          "Grows as you grow",
        ],
        isnt: [
          "A giant enterprise system — it's sized to your business",
          "Something only a developer can change — you can request tweaks",
          "A quick template — real custom work takes a little time",
        ],
      },
      howItWorks: [
        {
          title: "We learn your workflow",
          body: "You show us the messy bits — the manual steps, the spreadsheets, the repeats.",
        },
        {
          title: "We build the tool",
          body: "A simple app or dashboard that does those steps for you.",
        },
        {
          title: "You use it daily",
          body: "Less admin, fewer mistakes, more time on the work that pays.",
        },
      ],
      whatYouProvide: [
        "A walkthrough of how things work today",
        "The pain points you want gone",
        "No coding from you — we build it",
      ],
      howLong: [
        { label: "Week 1", note: "Discovery" },
        { label: "Week 2–4", note: "Build" },
        { label: "Week 5", note: "Launch" },
      ],
      setupSummary: "Small tools ship in weeks, not months.",
      misconceptions: [
        {
          myth: "Custom software is only for corporates.",
          reality:
            "SMEs lose the most to manual work — a small tool pays back fast.",
        },
        {
          myth: "It'll cost a fortune.",
          reality: "We scope to your budget; many tools start small and grow.",
        },
        {
          myth: "I'll be stuck if you leave.",
          reality: "You own the code and we document it — it's yours.",
        },
      ],
    },
    scenarios: [
      {
        id: "retail",
        industry: "Retail",
        tag: "Stock",
        before: "Stock counted by hand, often wrong.",
        after: "Live stock levels on a phone, updated as you sell.",
      },
      {
        id: "logistics",
        industry: "Logistics",
        tag: "Jobs",
        before: "Jobs tracked in group chats and memory.",
        after: "One dashboard shows every job and driver.",
      },
      {
        id: "cleaning",
        industry: "Cleaning",
        tag: "Schedules",
        before: "Rotas and client notes in scattered docs.",
        after: "A single schedule everyone can see.",
      },
    ],
    pricing: {
      fromLabel: "Quote per project",
      included: [
        "Discovery session",
        "A working first version",
        "Training for your team",
        "First month of support",
      ],
      affectsPrice:
        "Price depends on scope, number of users, and integrations with existing systems. We quote after discovery — no surprises.",
    },
    faqs: [
      {
        q: "How do we start?",
        a: "With a free discovery chat. We map the problem, then quote.",
      },
      {
        q: "Do I own the software?",
        a: "Yes. The code is yours, documented and handed over.",
      },
      {
        q: "Can it connect to what I use now?",
        a: "Usually yes — accounting, WhatsApp, stock systems. We'll confirm in discovery.",
      },
      {
        q: "What if I need changes later?",
        a: "Easy — you can request tweaks; small changes are quick.",
      },
      {
        q: "How long does it take?",
        a: "Small tools in a few weeks. We give a timeline up front.",
      },
    ],
    ctaPrefill: [
      {
        step: "05-proof",
        text: "Hi Marothi, I have a manual process I'd like turned into software. Can we talk?",
      },
      {
        step: "09-pricing",
        text: "Hi Marothi, please quote a custom tool for [process]. We have about [X] users.",
      },
      {
        step: "11-final",
        text: "Hi Marothi, I'm ready to start a custom software project. Book me in.",
      },
    ],
  },

  websites: {
    key: "websites",
    name: "Websites",
    slug: "websites",
    leadStat: "Load time vs a typical local site",
    sceneCaption:
      "A customer on mobile data, watching a slow local site spin. They leave. Your competitor loads in two seconds.",
    teaser: {
      badge: "Fast on mobile data",
      headline: "A site that respects their data",
      copy: "Most local sites are slow on a phone. Ours load fast — and turn visitors into WhatsApp enquiries.",
      ctaLabel: "See the speed difference",
    },
    explainer: {
      definition:
        "A website designed to load fast on mobile data and turn visitors into WhatsApp or phone enquiries.",
      inShort: {
        is: [
          "Loads fast even on 4G",
          "Built mobile-first, not shrunk desktop",
          "Made to get you enquiries, not just look nice",
        ],
        isnt: [
          "A pretty brochure — it's built to convert",
          "Heavy with video and big images",
          "Something you can't update — you can",
        ],
      },
      howItWorks: [
        {
          title: "We learn your offer",
          body: "What you sell and what a visitor should do first.",
        },
        {
          title: "We build a fast site",
          body: "Light, mobile-first, with clear paths to WhatsApp or call.",
        },
        {
          title: "You get enquiries",
          body: "Visitors turn into messages and calls, not bounces.",
        },
      ],
      whatYouProvide: [
        "Your services and prices",
        "Photos or we use placeholders",
        "Your WhatsApp number and contact details",
      ],
      howLong: [
        { label: "Week 1", note: "Design" },
        { label: "Week 2", note: "Build" },
        { label: "Week 3", note: "Launch" },
      ],
      setupSummary: "Most sites are live within three weeks.",
      misconceptions: [
        {
          myth: "Any website will do.",
          reality:
            "A slow site on mobile data loses the customer before they read a word.",
        },
        {
          myth: "Pretty means effective.",
          reality: "Clarity and speed convert; decoration doesn't.",
        },
        {
          myth: "I'll be locked in.",
          reality: "You can edit content yourself; we show you how.",
        },
      ],
    },
    scenarios: [
      {
        id: "restaurant",
        industry: "Restaurant",
        tag: "Menu",
        before: "Menu buried in a slow PDF.",
        after: "Menu and bookings one tap, loads instantly.",
      },
      {
        id: "trades",
        industry: "Trades",
        tag: "Quotes",
        before: "No clear way to request a quote.",
        after: "WhatsApp quote button front and centre.",
      },
      {
        id: "salon",
        industry: "Salon",
        tag: "Bookings",
        before: "Customers can't find hours or book.",
        after: "Hours, services, and booking in view on load.",
      },
    ],
    pricing: {
      fromLabel: "From R2,500 once-off",
      included: [
        "Mobile-first design",
        "WhatsApp and call buttons",
        "Up to 5 pages",
        "Basic SEO setup",
      ],
      affectsPrice:
        "More pages, a blog, booking forms, or ongoing edits add to the base. We quote before we build.",
    },
    faqs: [
      {
        q: "Will it work on a phone?",
        a: "That's the priority — built mobile-first, fast on 4G.",
      },
      {
        q: "Can I update it myself?",
        a: "Yes, simple edits are yours to make; we train you.",
      },
      {
        q: "Do you write the words?",
        a: "We can draft clear copy, or use yours.",
      },
      {
        q: "How fast will it load?",
        a: "We target under 2.5s on mid-range Android on mobile data.",
      },
      {
        q: "Is it found on Google?",
        a: "Basic SEO is included; deeper work is an add-on.",
      },
    ],
    ctaPrefill: [
      {
        step: "05-proof",
        text: "Hi Marothi, I'd like a fast website for my business.",
      },
      {
        step: "09-pricing",
        text: "Hi Marothi, can you quote a website? About [X] pages, I need [booking/WhatsApp/forms].",
      },
      {
        step: "11-final",
        text: "Hi Marothi, let's build my website. When can we start?",
      },
    ],
  },

  "software-iot": {
    key: "software-iot",
    name: "Software and IoT Supply",
    slug: "software-iot",
    leadStat: "Real-time visibility",
    sceneCaption:
      "You open three different systems to answer one question about your business. It shouldn't be this hard.",
    teaser: {
      badge: "One view of your business",
      headline: "The software and devices you run on",
      copy: "Microsoft 365, Sage, Telemetrics, IoT — supplied, set up, and showing what's happening in real time.",
      ctaLabel: "See the live dashboard",
    },
    explainer: {
      definition:
        "Getting the software and connected devices your business runs on — and seeing what's happening in real time.",
      inShort: {
        is: [
          "One place to get the tools you need",
          "Devices that report back live (IoT)",
          "Set up and supported locally",
        ],
        isnt: [
          "Just a reseller — we also configure and support",
          "Only big brands — we match to your size",
          "A one-time sale — support continues",
        ],
      },
      howItWorks: [
        {
          title: "We map what you need",
          body: "Software, licences, and devices matched to your business.",
        },
        {
          title: "We supply and set up",
          body: "Microsoft 365, Sage, Telemetrics, IoT — configured, not just boxed.",
        },
        {
          title: "You see it live",
          body: "Dashboards show stock, fleet, or usage in real time.",
        },
      ],
      whatYouProvide: [
        "What you run today",
        "What you'd like to track",
        "We handle the rest — no procurement headaches",
      ],
      howLong: [
        { label: "Week 1", note: "Assess" },
        { label: "Week 2", note: "Supply & configure" },
        { label: "Week 3", note: "Live dashboards" },
      ],
      setupSummary: "Most setups are live within three weeks.",
      misconceptions: [
        {
          myth: "It's just buying licences.",
          reality: "We configure and connect them so they actually talk to each other.",
        },
        {
          myth: "IoT is only for factories.",
          reality: "A small shop can track stock or a van in real time.",
        },
        {
          myth: "I'll be tied to one vendor.",
          reality: "We mix best-fit tools; you're not locked in.",
        },
      ],
    },
    scenarios: [
      {
        id: "logistics",
        industry: "Logistics",
        tag: "Fleet",
        before: "No idea where the van is.",
        after: "Live map of every vehicle.",
      },
      {
        id: "retail",
        industry: "Retail",
        tag: "Stock",
        before: "Stock guessed at month-end.",
        after: "Live stock counts from the shelf.",
      },
      {
        id: "workshop",
        industry: "Workshop",
        tag: "Equipment",
        before: "Equipment failures surprise you.",
        after: "Sensors flag issues before they break.",
      },
    ],
    pricing: {
      fromLabel: "Quote per setup",
      included: [
        "Needs assessment",
        "Supply of licences/devices",
        "Configuration and setup",
        "Ongoing local support",
      ],
      affectsPrice:
        "Depends on the number of users, devices, and how many systems we integrate into one dashboard.",
    },
    faqs: [
      {
        q: "Which brands do you supply?",
        a: "Microsoft 365, Sage, Telemetrics, and a range of IoT devices — matched to you.",
      },
      {
        q: "Do you just sell or also set up?",
        a: "We set up and configure, not just deliver boxes.",
      },
      {
        q: "Can it connect to my existing systems?",
        a: "Yes — that's the point. We integrate into one view.",
      },
      {
        q: "Is there support after?",
        a: "Yes, local ongoing support is part of it.",
      },
      {
        q: "What's IoT exactly?",
        a: "Sensors and devices (like fleet trackers or stock counters) that report data live so you see what's happening.",
      },
    ],
    ctaPrefill: [
      {
        step: "05-proof",
        text: "Hi Marothi, I'd like one view of my business systems. Can we talk?",
      },
      {
        step: "09-pricing",
        text: "Hi Marothi, please quote a setup: [X] users, [Y] devices, integrate [systems].",
      },
      {
        step: "11-final",
        text: "Hi Marothi, let's get my software and IoT set up.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Social proof — SAMPLE drafts, replace with signed testimonials
// ---------------------------------------------------------------------------
export interface Testimonial {
  draft: true;
  quote: string;
  name: string;
  businessType: string;
  city: string;
}

export const testimonials: Testimonial[] = [
  {
    draft: true,
    quote:
      "Since the bot went live, we book orders at 9pm that we'd have missed before.",
    name: "Nomsa K.",
    businessType: "Restaurant",
    city: "Soweto",
  },
  {
    draft: true,
    quote: "Customers actually open my quotes now they come from my own domain.",
    name: "Justin P.",
    businessType: "Plumbing",
    city: "Pretoria",
  },
  {
    draft: true,
    quote: "The stock app saved me from overselling twice last month.",
    name: "Ayesha M.",
    businessType: "Retail",
    city: "Durban",
  },
  {
    draft: true,
    quote: "Our site loads fast on my customers' phones — enquiries jumped.",
    name: "Sipho D.",
    businessType: "Salon",
    city: "Cape Town",
  },
  {
    draft: true,
    quote: "I finally see where every van is without five phone calls.",
    name: "Pieter V.",
    businessType: "Logistics",
    city: "Midrand",
  },
];

// ---------------------------------------------------------------------------
// Case studies — SAMPLE drafts, one per service, replace with real ones
// ---------------------------------------------------------------------------
export interface CaseStudy {
  draft: true;
  service: ServiceKey;
  businessType: string;
  city: string;
  challenge: string;
  solution: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    draft: true,
    service: "whatsapp-bots",
    businessType: "Restaurant",
    city: "Soweto",
    challenge:
      "After-hours orders were missed because the phone wasn't answered past 6pm, and the owner was busy serving.",
    solution:
      "A WhatsApp bot now takes orders and captures pickup details after hours, handing complex ones to the owner by morning.",
    result: "Recovered an estimated 12 missed orders per week.",
  },
  {
    draft: true,
    service: "professional-email",
    businessType: "Plumbing",
    city: "Pretoria",
    challenge:
      "Quotes sent from a free gmail address kept landing in spam, and jobs went to competitors.",
    solution:
      "Set up a branded mailbox on the business domain with spam filtering and a moved history of old mail.",
    result: "Quote open-rate visibly up; more jobs confirmed by return message.",
  },
  {
    draft: true,
    service: "custom-software",
    businessType: "Retail",
    city: "Durban",
    challenge:
      "Stock was tracked by hand and oversells happened when the floor and the books disagreed.",
    solution:
      "A simple stock app on the owner's phone updates levels as sales happen and flags low stock.",
    result: "Two oversells avoided in the first month; counts accurate at close.",
  },
  {
    draft: true,
    service: "websites",
    businessType: "Salon",
    city: "Cape Town",
    challenge:
      "The old site was slow on mobile data and bookings bounced before loading.",
    solution:
      "A mobile-first site with hours, services, and a WhatsApp booking button, built light for 4G.",
    result: "Faster loads and more booking messages from mobile visitors.",
  },
  {
    draft: true,
    service: "software-iot",
    businessType: "Logistics",
    city: "Midrand",
    challenge:
      "No single view of where vans were; the owner made five calls to answer one question.",
    solution:
      "Supplied and configured fleet tracking with a live dashboard pulling the data into one screen.",
    result: "One screen now answers 'where's the van?' without a phone call.",
  },
];

// ---------------------------------------------------------------------------
// Trust strip + POPIA microcopy
// ---------------------------------------------------------------------------
export const trustStrip = {
  popiaNote: "POPIA-aligned. Your details stay yours.",
  responsePromise: "Replies in seconds, 24/7.",
  localSupport: "Built and supported in South Africa.",
} as const;

export const popia = {
  badge:
    "Your details stay yours. We only use what you share to help you, with your consent. POPIA-aligned.",
  footerNote:
    "Marothi respects your privacy. We don't sell your data. Any info you share is used only to help with your request, stored securely, and removed on request — in line with POPIA.",
} as const;

// ---------------------------------------------------------------------------
// Footer CTA
// ---------------------------------------------------------------------------
export const footerCta = {
  statement: "Ready to start?",
  whatsappLabel: "Chat on WhatsApp",
  demoLabel: "Book a 15-min demo",
  demoPreFill: "Hi Marothi, I'd like to book a 15-min demo. What times work for you?",
} as const;
