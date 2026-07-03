export const EMAIL_HREF = "mailto:saadbhutto@ymail.com";

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Insights", href: "#insights" },
];

export const hero = {
  line1: "Not an agency. Not a team of consultants.",
  line2: "I build AI agents and MCP infrastructure for enterprises.",
  subtext:
    "Senior AI engineering — RAG pipelines, agentic systems, MCP servers, and responsible-AI governance — deployed to production. Without the agency overhead or the six-month hire.",
  ctaPrimary: { label: "Get in touch", href: EMAIL_HREF },
  ctaSecondary: { label: "See work", href: "#work" },
};

export const caseStudies = [
  {
    title: "Production RAG pipeline",
    outcome: "Grounded internal assistants on company data — zero critical data leaks.",
    tags: ["Python", "pgvector", "MCP", "Guardrails"],
  },
  {
    title: "AI recommendation engine",
    outcome: "~30% checkout conversion uplift, owned end-to-end.",
    tags: ["TypeScript", "Laravel", "AWS Personalize", "Algolia"],
  },
  {
    title: "Multi-agent competitive intelligence",
    outcome: "Automated daily competitor digest via Slack & email.",
    tags: ["Cloudflare Workers", "Supabase", "Agents"],
  },
  {
    title: "Internal MCP developer tooling",
    outcome: "Automated code review, research docs & boilerplate across squads.",
    tags: ["Laravel AI SDK", "MCP servers"],
  },
];

export const comparison = {
  columns: ["Fractional AI Lead", "AI Agency", "Full-time hire"],
  rows: [
    { dimension: "Time to start", values: ["Days", "2–4 weeks", "3–6 months"] as [string, string, string] },
    { dimension: "Who you work with", values: ["Principal engineer", "Account manager", "Whoever you find"] as [string, string, string] },
    { dimension: "Commitment", values: ["Flexible", "Project lock-in", "Salary + benefits"] as [string, string, string] },
    { dimension: "Overhead", values: ["None", "Agency margins", "HR, onboarding, ramp-up"] as [string, string, string] },
  ],
};

export const services = [
  { title: "AI Agents & Agentic Systems", description: "Multi-step agents with tool and function calling, orchestrated on Cloudflare Workers and AWS Bedrock." },
  { title: "MCP Infrastructure", description: "Custom MCP servers wiring internal tools and data into LLM workflows — with guardrails and audit logging." },
  { title: "RAG Pipelines", description: "pgvector retrieval grounded on your data, with evaluation and output guardrails you can trust." },
  { title: "AI Governance & Enablement", description: "Responsible-AI frameworks, tooling profiles, and prompt patterns adopted org-wide — without mandate." },
];

export const impact = [
  { value: "~30%", label: "checkout conversion uplift — AI recommendation engine" },
  { value: "60%", label: "incident MTTR reduction — Datadog APM + GitHub Actions" },
  { value: "45%", label: "database load reduction — caching & query optimisation" },
  { value: "2×", label: "team scaled to 9 engineers — zero quality or velocity regression" },
  { value: "1st", label: "place — company-wide AI Developer Competition" },
  { value: "10+", label: "years hands-on — Python, PHP/Laravel, TypeScript, AWS" },
];

export const insights = [
  { category: "AI Engineering", title: "Shipping your first production RAG pipeline", date: "2026" },
  { category: "MCP", title: "Why MCP servers change internal tooling", date: "2026" },
  { category: "Leadership", title: "Rolling out AI governance without a mandate", date: "2026" },
];

export const contact = {
  heading: "Let's see if we're a good fit.",
  lede: "A straight answer on whether I'm the right fit for your AI roadmap — no sales pressure, no follow-up campaigns.",
  email: "saadbhutto@ymail.com",
  linkedin: "https://linkedin.com/in/saadbhutto",
  location: "Melbourne, VIC",
};
