export const EMAIL_HREF = "mailto:saadbhutto@ymail.com";

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Insights", href: "#insights" },
];

export const hero = {
  line1: "Full-stack engineer. AI-native tech lead.",
  line2: "I ship production AI and lead the teams behind it.",
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
