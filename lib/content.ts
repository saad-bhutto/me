export const EMAIL_HREF = "mailto:saadbhutto@ymail.com";

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Impact", href: "#impact" },
  // { label: "Insights", href: "#insights" }, // hidden for now
];

export const hero = {
  line1: "Full-stack engineer. AI-native tech lead.",
  line2: "I ship agents, RAG pipelines and MCP infrastructure to production.",
  subtext:
    "10+ years across TypeScript, Python, PHP/Laravel and AWS — now building RAG pipelines, AI agents and MCP infrastructure, and leading engineering teams to ship them. Based in Melbourne, open to remote.",
  ctaPrimary: { label: "Get in touch", href: EMAIL_HREF },
  ctaSecondary: { label: "See my work", href: "#work" },
};

export const caseStudies = [
  {
    title: "Production RAG pipeline",
    outcome: "Grounded internal assistants on company data — zero critical data leaks.",
    tags: ["Python", "pgvector", "MCP", "Guardrails"],
    visual: "rag" as const,
  },
  {
    title: "AI recommendation engine",
    outcome: "~30% checkout conversion uplift, owned end-to-end.",
    tags: ["TypeScript", "Laravel", "AWS Personalize", "Algolia"],
    visual: "reco" as const,
  },
  {
    title: "Multi-agent competitive intelligence",
    outcome: "Automated daily competitor digest via Slack & email.",
    tags: ["Cloudflare Workers", "Supabase", "Agents"],
    visual: "agents" as const,
  },
  {
    title: "Internal MCP developer tooling",
    outcome: "Automated code review, research docs & boilerplate across squads.",
    tags: ["Laravel AI SDK", "MCP servers"],
    visual: "mcp" as const,
  },
];

// Positioning device: shows the rare full-stack + AI + leadership combination.
// Column 0 is Saad (highlighted); the others are the typical single-lane profiles.
export const comparison = {
  columns: ["AI-Native Tech Lead", "AI specialist", "Engineering manager"],
  rows: [
    {
      dimension: "Ships production code",
      values: ["Daily — full-stack", "Models, not products", "Reviews, rarely writes"] as [string, string, string],
    },
    {
      dimension: "Leads & grows teams",
      values: ["Led 9, through 2× growth", "Individual contributor", "Yes"] as [string, string, string],
    },
    {
      dimension: "Production AI / LLM systems",
      values: ["RAG, agents, MCP", "Yes", "Rarely hands-on"] as [string, string, string],
    },
    {
      dimension: "Owns business outcomes",
      values: ["+30% conversion, 60% MTTR", "Model metrics", "Team metrics"] as [string, string, string],
    },
  ],
};

export const services = [
  {
    title: "AI Agents & Agentic Systems",
    description:
      "Multi-step agents with tool and function calling, orchestrated on Cloudflare Workers and AWS Bedrock.",
  },
  {
    title: "RAG & MCP Infrastructure",
    description:
      "Production retrieval over pgvector and custom MCP servers that wire your data and tools into LLM workflows — with guardrails and audit logging.",
  },
  {
    title: "Full-Stack Product Engineering",
    description:
      "End-to-end delivery in TypeScript, React/Next.js, Python and PHP/Laravel on AWS — from database schema to shipped UI.",
  },
  {
    title: "Engineering Leadership",
    description:
      "Leading and growing teams, design reviews, and rolling out responsible-AI practices org-wide — without slowing delivery.",
  },
];

export const impact = [
  { value: "~30%", label: "checkout conversion uplift — AI recommendation engine, owned end-to-end" },
  { value: "60%", label: "faster incident recovery (MTTR) — Datadog APM + GitHub Actions" },
  { value: "45%", label: "database load reduction — caching & query optimisation at scale" },
  { value: "2×", label: "team growth led to 9 engineers — zero quality or velocity regression" },
  { value: "1st", label: "place — company-wide AI Developer Competition" },
  { value: "10+", label: "years shipping full-stack — Python, TypeScript, PHP/Laravel, AWS" },
];

export const insights = [
  { category: "AI Engineering", title: "Shipping your first production RAG pipeline", date: "2026" },
  { category: "MCP", title: "Why MCP servers are the new internal API", date: "2026" },
  { category: "Leadership", title: "Staying hands-on as an AI-native tech lead", date: "2026" },
];

export const contact = {
  heading: "Let's build something exceptional.",
  lede: "Hiring an AI-native tech lead, or need a senior engineer who ships? Tell me what you're working on — I read every message.",
  email: "saadbhutto@ymail.com",
  linkedin: "https://linkedin.com/in/saadbhutto",
  location: "Melbourne, VIC",
};

export const about = {
  heading: "I lead from inside the codebase.",
  paragraphs: [
    "I'm Saad — an AI-native tech lead and senior full-stack engineer with 10+ years shipping products across e-commerce, SaaS and travel tech. I led a nine-engineer squad through 2× growth with no drop in quality or velocity.",
    "I stay hands-on: production RAG pipelines, agentic systems and MCP servers on one side; TypeScript, Python and PHP/Laravel on AWS and Cloudflare on the other. I measure success in business outcomes — a ~30% conversion lift, 60% faster incident recovery — not just clean code.",
  ],
  facts: [
    { label: "Based in", value: "Melbourne, VIC" },
    { label: "Experience", value: "10+ years" },
    { label: "Availability", value: "Full-time / remote" },
  ],
};

export const footer = {
  tagline: "Full-stack engineer & AI-native tech lead.",
  blurb:
    "Melbourne-based engineering leader building production AI — RAG pipelines, agents and MCP — and the teams that ship it. Open to senior full-time and remote roles.",
};

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/saadbhutto" },
  { label: "GitHub", href: "https://github.com/saad-bhutto" },
  { label: "Email", href: EMAIL_HREF },
];

// Third-party platforms & APIs integrated across e-commerce, logistics,
// analytics and AI work (from the résumés). Icons resolved in the component.
export const integrations = [
  { name: "Shopify", description: "Storefront, product & order sync for multi-carrier fulfilment." },
  { name: "Starshipit", description: "Automated shipping labels & tracking across couriers." },
  { name: "Machship", description: "Multi-carrier logistics API — shipped an open-source client." },
  { name: "ShipStation", description: "Real-time order & shipment sync for e-commerce fulfilment." },
  { name: "Klaviyo", description: "Email & SMS marketing automation tied to store events." },
  { name: "Stripe", description: "Subscription billing & payments for a multi-tenant SaaS." },
  { name: "Xero", description: "Zero-data-loss financial sync via serverless middleware." },
  { name: "Google Analytics", description: "Web analytics feeding a unified experimentation pipeline." },
  { name: "Amplitude", description: "Product analytics & funnels across three product squads." },
  { name: "Optimizely", description: "A/B testing & feature experimentation with hybrid gating." },
  { name: "Algolia", description: "Instant search & discovery powering recommendations." },
  { name: "AWS Personalize", description: "Real-time recommendation inference — ~30% conversion uplift." },
  { name: "Slack", description: "Automated competitive-intelligence digests & alerts." },
  { name: "Datadog", description: "APM alerting wired into deploys — 60% faster MTTR." },
  { name: "Firebase", description: "Cloud messaging & push for a post-purchase mobile app." },
];
