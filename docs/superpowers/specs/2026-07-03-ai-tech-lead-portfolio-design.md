# AI Tech Lead Portfolio — Design Spec

**Date:** 2026-07-03
**Owner:** Saad Bhutto — AI Tech Lead / Engineering Manager / Principal Engineer (Melbourne, VIC)
**Reference:** [joechiang.com](https://joechiang.com/) (Framer "Quattro" template DNA) — replicate its structure, typography, color restraint, and signature scroll UX 1:1, re-skinned for AI engineering.

---

## 1. Purpose & positioning

A single-page marketing portfolio positioning Saad as an **independent / fractional AI engineering lead** — not an agency, not a team of consultants. The rhetorical hook mirrors joechiang.com's "Not an agency. Not a freelancer." move.

**Hero headline (fixed copy):**
> Not an agency. Not a team of consultants.
> I build AI agents and MCP infrastructure for enterprises.

Success = a visitor (enterprise hiring manager / founder) immediately understands the offer, sees proof (case studies + hard metrics), and emails to start a conversation.

## 2. Confirmed decisions

| Decision | Choice |
|---|---|
| Testimonials section | **Replaced** with an Impact / Metrics wall (resume has no quotes; metrics are stronger for an engineering lead) |
| Primary CTA | **Email only** — `mailto:` link, no booking tool, no form |
| Contact email | `saadbhutto@ymail.com` |
| Accent color | Keep reference exactly: `#FB411E` (vivid orange-red) |
| Stack | Next.js (App Router) static export → Cloudflare Workers static assets |
| Insights section | Included but low-priority / collapsible; placeholder content |

## 3. Tech stack & deployment

- **Next.js (App Router)** with `output: 'export'` — fully static, no server runtime.
- **Tailwind CSS** for styling; design tokens (below) as CSS variables + Tailwind theme extension.
- **Framer Motion** for the signature scroll word-reveal and card/mockup float.
- **Fonts:** Inter Display (headings) + Inter (body), self-hosted via `next/font/local` or `next/font/google` so rendering matches the reference.
- **Deploy:** Cloudflare Workers static assets via Wrangler (`wrangler.jsonc` with `assets` binding pointing at the exported `out/` dir). No OpenNext SSR adapter — revisit only if dynamic data (form/CMS) is added later.
- **Repo:** currently not a git repo; initialize git as first implementation step.

## 4. Design system (extracted from the live reference)

### Color
| Token | Value | Use |
|---|---|---|
| `--bg` | `#000000` | page background |
| `--surface` | `#1C1C1C` | nav pill, cards, table highlight column |
| `--surface-2` | `#0E0E0E` / `#141414` | layered/nested surfaces |
| `--text` | `#FFFFFF` | headings, key text |
| `--text-muted` | `rgba(255,255,255,0.5)` | body, labels, secondary |
| `--border` | `rgba(255,255,255,0.08)` | hairline dividers |
| `--accent` | `#FB411E` | ONE primary CTA + active word in reveal headings. Used sparingly — restraint is the aesthetic. |

### Typography
- **Headings:** Inter Display, **weight 400 (regular, not bold)**, letter-spacing `-0.02em`, line-height ~1.1. Hero ~clamp(48px, 8vw, 96px); section headings ~clamp(32px, 5vw, 64px).
- **Body:** Inter, 16–18px, letter-spacing `-0.02em`, line-height 1.4, color `--text-muted`.
- **Eyebrows / micro-labels:** Inter, uppercase, ~12px, letter-spacing `0.08em`, muted (e.g. `WHAT I DO`).

### Layout & motion
- Content max-width ~1200px, centered, generous vertical whitespace between sections (~120–160px desktop).
- **Floating pill nav**, sticky, backdrop-blur on scroll.
- Buttons/CTAs: pill radius `99px`, padding `10px 20px`. Cards: radius `~8–12px`, borderless dark surfaces with soft shadow on floating mockups.
- **Signature motion:** big statement headings reveal word-by-word on scroll into view; each word transitions from dim → accent `#FB411E` → settle to white. This is the core identity — implement it as a reusable component.
- Respect `prefers-reduced-motion` (reveal falls back to a simple fade/instant state).

## 5. Section architecture

Each section is an isolated, independently-testable component.

### 5.1 Global shell (`SiteShell`, `Nav`, `Footer`)
- Pure black background, font wiring, container.
- Nav: `SB` monogram (left) · center pill with `Work · Services · About · Insights` · `Contact` button (right). Smooth-scroll anchors. Sticky + blur.

### 5.2 Hero (`Hero`)
- Word-reveal headline (fixed copy above), active word flashes accent.
- Subtext: "Senior AI engineering — RAG pipelines, agentic systems, MCP servers, and responsible-AI governance — deployed to production. Without the agency overhead or the six-month hire."
- CTAs: **Get in touch** (accent pill, `mailto:saadbhutto@ymail.com`) · **See work** (dark pill, anchor `#work`).

### 5.3 Featured work (`FeaturedWork`)
Section eyebrow + heading + "View all" affordance (no-op/anchor). 4 case-study cards, each: visual/mockup + title + one-line outcome.
1. **Production RAG pipeline** — Python over pgvector, MCP tools, function calling, output guardrails; grounded internal assistants, zero critical data leaks.
2. **AI recommendation engine** — TS frontend + Laravel pipeline + AWS Personalize + Algolia; **~30% checkout conversion uplift**.
3. **Multi-agent competitive intelligence** — Cloudflare Workers + Supabase; scraper + gap-analysis agents → automated daily Slack/email digest.
4. **Internal MCP developer tooling** — Laravel AI SDK + custom MCP servers automating code review, research docs, boilerplate across squads.

### 5.4 Comparison table (`ComparisonTable`)
Heading (word-reveal): "Skip the hiring queue. Ship AI now." + short lede.
Columns: **Fractional AI Lead (highlighted center column)** · **AI Agency** · **Full-time hire**.
Rows:
| Dimension | Fractional AI Lead | AI Agency | Full-time hire |
|---|---|---|---|
| Time to start | Days | 2–4 weeks | 3–6 months |
| Who you work with | Principal engineer | Account manager | Whoever you find |
| Commitment | Flexible | Project lock-in | Salary + benefits |
| Overhead | None | Agency margins | HR, onboarding, ramp-up |

Middle column visually highlighted (surface bg), borderless, airy.

### 5.5 What I do (`Services`)
Eyebrow `WHAT I DO` + heading. Bento-style cards (2-col desktop) with a title + description; optional floating mock/diagram visual.
1. **AI Agents & Agentic Systems** — multi-step agents, tool/function calling, orchestration on Workers/Bedrock.
2. **MCP Infrastructure** — custom MCP servers wiring internal tools & data into LLM workflows, with guardrails and audit logging.
3. **RAG Pipelines** — pgvector retrieval, grounding on company data, evaluation and output guardrails.
4. **AI Governance & Enablement** — responsible-AI frameworks, tooling profiles, prompt patterns adopted org-wide without mandate.

### 5.6 Impact wall (`Impact`) — replaces testimonials
Eyebrow + heading ("Proof, not promises."). Metric tiles:
- **~30%** — checkout conversion uplift (AI recommendation engine)
- **60%** — incident MTTR reduction (Datadog APM + GitHub Actions)
- **45%** — database load reduction (caching + query optimisation)
- **2×** — team scaled (9 engineers), zero quality/velocity regression
- **1st** — company-wide AI Developer Competition winner
- **10+** — years hands-on across Python, PHP/Laravel, TypeScript, AWS

### 5.7 Insights (`Insights`) — optional / low priority
Eyebrow + heading + 3 placeholder cards (category · title · date). Clearly editable placeholder copy; can be removed without affecting other sections.

### 5.8 Footer CTA (`FooterCta`, `Footer`)
Big centered word-reveal: "Let's see if we're a good fit." + short lede ("A straight answer on whether I'm the right fit for your AI roadmap — no sales pressure."). Email button (`mailto:`). Minimal footer: name, "Melbourne, VIC", LinkedIn link (`linkedin.com/in/saadbhutto`), year.

## 6. Component boundaries

Reusable primitives:
- `WordReveal` — scroll-triggered word-by-word reveal with accent flash; `prefers-reduced-motion` aware. Used by Hero, Comparison, Footer CTA headings.
- `PillButton` — accent + dark variants.
- `SectionHeading` — eyebrow + heading wrapper.
- `Card` — dark surface card shell.

Data: section content lives in a typed `content.ts` (or per-section constants) sourced from the resume — no CMS. Keeps copy editable in one place.

## 7. Responsive & accessibility
- Mobile-first: nav collapses (pill → compact / menu), grids collapse to single column, hero type scales via `clamp()`.
- Semantic landmarks (`header`/`main`/`section`/`footer`), one `h1`, logical heading order.
- Color contrast: white/muted-white on black meets AA; accent used for emphasis not sole meaning.
- `prefers-reduced-motion` disables word-reveal/parallax.
- Keyboard-navigable nav + focus-visible states.

## 8. Out of scope (YAGNI)
- No booking tool, no contact form, no backend, no CMS, no blog engine (Insights is static placeholder), no testimonials, no analytics (can add later), no multi-page routing (single page + anchors).

## 9. Content source
All copy derived from `resumes/Saad_Bhutto_AI_Tech_Lead_EM.pdf`. Hero headline is fixed per client instruction. No fabricated metrics — every number traces to the resume.
