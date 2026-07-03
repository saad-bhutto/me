# AI Tech Lead Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Design note:** When building any visual component (Tasks 4–11), first invoke the `frontend-design` skill to guide styling quality. The code blocks here are correct, working starting points; the frontend-design pass refines spacing, motion feel, and polish against the reference (joechiang.com).

**Goal:** Build and statically deploy a single-page AI Tech Lead portfolio for Saad Bhutto that replicates joechiang.com's structure, typography, and signature scroll UX, re-skinned for AI engineering, deployable to Cloudflare Workers static assets.

**Architecture:** Next.js App Router with `output: 'export'` (fully static, no server runtime). Section components composed on one page with anchor navigation. Reusable primitives (`WordReveal`, `PillButton`, `SectionHeading`, `Card`). All copy in a typed `content.ts` sourced from the resume. Framer Motion drives the word-reveal + float animations, gated behind `prefers-reduced-motion`.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Vitest + @testing-library/react + jsdom, Wrangler (Cloudflare Workers static assets), Inter + Inter Display via `next/font`.

## Global Constraints

- **Hero headline copy is fixed verbatim:** "Not an agency. Not a team of consultants." / "I build AI agents and MCP infrastructure for enterprises."
- **Contact = email only:** `mailto:saadbhutto@ymail.com`. No booking tool, no form, no backend.
- **Accent color exact:** `#FB411E`. Used sparingly (one primary CTA per view + active reveal word).
- **Background `#000000`; surface `#1C1C1C`; text `#FFFFFF`; muted `rgba(255,255,255,0.5)`.**
- **Headings use Inter Display at weight 400** (regular, NOT bold), letter-spacing `-0.02em`.
- **Static export only:** `output: 'export'` in `next.config`. No server components requiring a runtime, no API routes, no dynamic rendering.
- **No fabricated content:** every metric/claim traces to `resumes/Saad_Bhutto_AI_Tech_Lead_EM.pdf`.
- **Respect `prefers-reduced-motion`:** all scroll/word animations degrade to static/instant.
- **Single page + anchors** (`#work`, `#services`, `#about`/impact, `#insights`, `#contact`). No multi-page routing.

---

### Task 1: Project scaffold, tokens, fonts & static-export/Cloudflare config

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `wrangler.jsonc`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `lib/fonts.ts`
- Create: `vitest.config.ts`, `vitest.setup.ts`
- Test: `tests/build-smoke.test.tsx`

**Interfaces:**
- Produces: `interFont`, `interDisplayFont` (from `lib/fonts.ts`) — `NextFont` objects exposing `.variable` (`--font-inter`, `--font-inter-display`).
- Produces: CSS variables in `globals.css`: `--bg`, `--surface`, `--surface-2`, `--text`, `--text-muted`, `--border`, `--accent`. Tailwind theme maps these to `bg-bg`, `bg-surface`, `text-text`, `text-muted`, `border-hair`, `bg-accent`/`text-accent`.

- [ ] **Step 1: Initialize the project and install dependencies**

```bash
git init
npm init -y
npm install next@15 react@19 react-dom@19 framer-motion
npm install -D typescript @types/react @types/node @tailwindcss/postcss tailwindcss@4 vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- [ ] **Step 2: Write `package.json` scripts**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run",
    "preview": "npm run build && wrangler dev",
    "deploy": "npm run build && wrangler deploy"
  }
}
```

- [ ] **Step 3: Write `next.config.ts` for static export**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
```

- [ ] **Step 4: Write `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "out"]
}
```

- [ ] **Step 5: Write `postcss.config.mjs`**

```js
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
```

- [ ] **Step 6: Write `lib/fonts.ts`**

```ts
import { Inter } from "next/font/google";

// Inter Display is Inter's display optical size; we approximate with Inter tight tracking.
// Using Inter for both, differentiated by CSS (tracking/size) to match the reference.
export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Alias for headings; same family, styled tighter via utility classes.
export const interDisplayFont = interFont;
```

- [ ] **Step 7: Write `app/globals.css` with tokens**

```css
@import "tailwindcss";

:root {
  --bg: #000000;
  --surface: #1c1c1c;
  --surface-2: #0e0e0e;
  --text: #ffffff;
  --text-muted: rgba(255, 255, 255, 0.5);
  --border: rgba(255, 255, 255, 0.08);
  --accent: #fb411e;
}

@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-surface-2: var(--surface-2);
  --color-text: var(--text);
  --color-muted: var(--text-muted);
  --color-hair: var(--border);
  --color-accent: var(--accent);
  --font-sans: var(--font-inter);
}

html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-inter), sans-serif;
  -webkit-font-smoothing: antialiased;
}
.font-display { letter-spacing: -0.02em; font-weight: 400; line-height: 1.05; }
.tracking-tight-2 { letter-spacing: -0.02em; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

- [ ] **Step 8: Write `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { interFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saad Bhutto — AI Tech Lead | AI Agents & MCP Infrastructure",
  description:
    "Not an agency. Not a team of consultants. I build AI agents and MCP infrastructure for enterprises. RAG pipelines, agentic systems, MCP servers, and responsible-AI governance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interFont.variable}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 9: Write a minimal `app/page.tsx` placeholder**

```tsx
export default function Home() {
  return (
    <main>
      <h1 className="font-display">Saad Bhutto</h1>
    </main>
  );
}
```

- [ ] **Step 10: Write `wrangler.jsonc` for static assets**

```jsonc
{
  "name": "saad-portfolio",
  "compatibility_date": "2025-07-01",
  "assets": { "directory": "./out" }
}
```

- [ ] **Step 11: Write `vitest.config.ts` and `vitest.setup.ts`**

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  test: { environment: "jsdom", globals: true, setupFiles: ["./vitest.setup.ts"] },
  resolve: { alias: { "@": fileURLToPath(new URL("./", import.meta.url)) } },
});
```

```ts
// vitest.setup.ts
import "@testing-library/jest-dom/vitest";

// jsdom lacks matchMedia and IntersectionObserver; stub them.
if (!window.matchMedia) {
  window.matchMedia = (q: string) => ({
    matches: false, media: q, onchange: null,
    addEventListener() {}, removeEventListener() {},
    addListener() {}, removeListener() {}, dispatchEvent() { return false; },
  }) as unknown as MediaQueryList;
}
class IO { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
// @ts-expect-error test stub
window.IntersectionObserver = IO;
```

- [ ] **Step 12: Write the build-smoke test**

```tsx
// tests/build-smoke.test.tsx
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("home page renders the name", () => {
  render(<Home />);
  expect(screen.getByText("Saad Bhutto")).toBeInTheDocument();
});
```

- [ ] **Step 13: Run the test to verify it passes**

Run: `npm test`
Expected: PASS (1 test).

- [ ] **Step 14: Verify static export builds**

Run: `npm run build`
Expected: build succeeds and produces an `out/` directory containing `index.html`.

- [ ] **Step 15: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js static-export portfolio with tokens, fonts, Cloudflare config"
```

---

### Task 2: Typed content module

**Files:**
- Create: `lib/content.ts`
- Test: `tests/content.test.ts`

**Interfaces:**
- Produces: named exports consumed by every section:
  - `nav: { label: string; href: string }[]`
  - `hero: { line1: string; line2: string; subtext: string; ctaPrimary: { label: string; href: string }; ctaSecondary: { label: string; href: string } }`
  - `caseStudies: { title: string; outcome: string; tags: string[] }[]`
  - `comparison: { columns: string[]; rows: { dimension: string; values: [string, string, string] }[] }`
  - `services: { title: string; description: string }[]`
  - `impact: { value: string; label: string }[]`
  - `insights: { category: string; title: string; date: string }[]`
  - `contact: { heading: string; lede: string; email: string; linkedin: string; location: string }`
  - `EMAIL_HREF = "mailto:saadbhutto@ymail.com"` constant.

- [ ] **Step 1: Write the failing test**

```ts
// tests/content.test.ts
import { hero, caseStudies, comparison, services, impact, contact, EMAIL_HREF } from "@/lib/content";

test("hero headline is verbatim per spec", () => {
  expect(hero.line1).toBe("Not an agency. Not a team of consultants.");
  expect(hero.line2).toBe("I build AI agents and MCP infrastructure for enterprises.");
});

test("primary CTA is the mailto email", () => {
  expect(hero.ctaPrimary.href).toBe(EMAIL_HREF);
  expect(EMAIL_HREF).toBe("mailto:saadbhutto@ymail.com");
});

test("has four case studies each with an outcome", () => {
  expect(caseStudies).toHaveLength(4);
  caseStudies.forEach((c) => expect(c.outcome.length).toBeGreaterThan(0));
});

test("comparison has 3 columns and 4 rows with 3 values each", () => {
  expect(comparison.columns).toHaveLength(3);
  expect(comparison.rows).toHaveLength(4);
  comparison.rows.forEach((r) => expect(r.values).toHaveLength(3));
});

test("services and impact populated", () => {
  expect(services).toHaveLength(4);
  expect(impact.length).toBeGreaterThanOrEqual(5);
});

test("contact uses the resume linkedin and Melbourne location", () => {
  expect(contact.email).toBe("saadbhutto@ymail.com");
  expect(contact.linkedin).toContain("linkedin.com/in/saadbhutto");
  expect(contact.location).toBe("Melbourne, VIC");
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- content`
Expected: FAIL — cannot resolve `@/lib/content`.

- [ ] **Step 3: Write `lib/content.ts`**

```ts
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- content`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add lib/content.ts tests/content.test.ts
git commit -m "feat: add typed content module sourced from resume"
```

---

### Task 3: Core primitives — `usePrefersReducedMotion`, `WordReveal`, `PillButton`, `SectionHeading`, `Card`

**Files:**
- Create: `lib/use-prefers-reduced-motion.ts`
- Create: `components/word-reveal.tsx`
- Create: `components/pill-button.tsx`
- Create: `components/section-heading.tsx`
- Create: `components/card.tsx`
- Test: `tests/primitives.test.tsx`

**Interfaces:**
- Produces:
  - `usePrefersReducedMotion(): boolean`
  - `WordReveal({ text, className, as }: { text: string; className?: string; as?: keyof JSX.IntrinsicElements })` — renders `text` split into `<span>` words; each word has `data-word`. With reduced motion, renders all words immediately.
  - `PillButton({ href, children, variant }: { href: string; children: React.ReactNode; variant?: "accent" | "dark" })` — anchor styled as pill.
  - `SectionHeading({ eyebrow, children, id }: { eyebrow?: string; children: React.ReactNode; id?: string })`
  - `Card({ children, className }: { children: React.ReactNode; className?: string })`

- [ ] **Step 1: Write the failing tests**

```tsx
// tests/primitives.test.tsx
import { render, screen } from "@testing-library/react";
import { WordReveal } from "@/components/word-reveal";
import { PillButton } from "@/components/pill-button";
import { SectionHeading } from "@/components/section-heading";

test("WordReveal renders every word as a span", () => {
  render(<WordReveal text="I build AI agents" />);
  const words = document.querySelectorAll("[data-word]");
  expect(words).toHaveLength(4);
  expect(screen.getByText(/agents/)).toBeInTheDocument();
});

test("PillButton accent variant renders an anchor to href with accent class", () => {
  render(<PillButton href="mailto:saadbhutto@ymail.com" variant="accent">Get in touch</PillButton>);
  const a = screen.getByRole("link", { name: "Get in touch" });
  expect(a).toHaveAttribute("href", "mailto:saadbhutto@ymail.com");
  expect(a.className).toMatch(/accent/);
});

test("SectionHeading renders an eyebrow and sets id", () => {
  render(<SectionHeading eyebrow="WHAT I DO" id="services">Services heading</SectionHeading>);
  expect(screen.getByText("WHAT I DO")).toBeInTheDocument();
  expect(document.getElementById("services")).not.toBeNull();
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- primitives`
Expected: FAIL — modules not found.

- [ ] **Step 3: Write `lib/use-prefers-reduced-motion.ts`**

```ts
"use client";
import { useEffect, useState } from "react";

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}
```

- [ ] **Step 4: Write `components/word-reveal.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type Props = { text: string; className?: string; as?: keyof JSX.IntrinsicElements };

export function WordReveal({ text, className }: Props) {
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span data-word key={i}>{w}{i < words.length - 1 ? " " : ""}</span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          data-word
          key={i}
          initial={{ opacity: 0.12, color: "var(--text)" }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
```

> Note: the accent "flash" on the active word is added during the frontend-design pass via a keyframe on `color` (dim → `var(--accent)` → `var(--text)`). The test only asserts word spans exist.

- [ ] **Step 5: Write `components/pill-button.tsx`**

```tsx
type Props = { href: string; children: React.ReactNode; variant?: "accent" | "dark" };

export function PillButton({ href, children, variant = "accent" }: Props) {
  const base = "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "accent"
      ? "accent bg-accent text-black hover:opacity-90"
      : "bg-surface text-text hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
```

- [ ] **Step 6: Write `components/section-heading.tsx`**

```tsx
type Props = { eyebrow?: string; children: React.ReactNode; id?: string; className?: string };

export function SectionHeading({ eyebrow, children, id, className }: Props) {
  return (
    <div id={id} className={`scroll-mt-24 ${className ?? ""}`}>
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.08em] text-muted">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-6xl text-text">{children}</h2>
    </div>
  );
}
```

- [ ] **Step 7: Write `components/card.tsx`**

```tsx
type Props = { children: React.ReactNode; className?: string };

export function Card({ children, className }: Props) {
  return (
    <div className={`rounded-xl bg-surface p-6 md:p-8 ${className ?? ""}`}>{children}</div>
  );
}
```

- [ ] **Step 8: Run tests to verify they pass**

Run: `npm test -- primitives`
Expected: PASS (3 tests).

- [ ] **Step 9: Commit**

```bash
git add lib/use-prefers-reduced-motion.ts components/ tests/primitives.test.tsx
git commit -m "feat: add core primitives (WordReveal, PillButton, SectionHeading, Card)"
```

---

### Task 4: Nav + Footer shell

> Invoke `frontend-design` skill before styling.

**Files:**
- Create: `components/nav.tsx`
- Create: `components/footer.tsx`
- Test: `tests/nav.test.tsx`

**Interfaces:**
- Consumes: `nav`, `contact`, `EMAIL_HREF` from `@/lib/content`.
- Produces: `Nav()`, `Footer()`.

- [ ] **Step 1: Write the failing test**

```tsx
// tests/nav.test.tsx
import { render, screen } from "@testing-library/react";
import { Nav } from "@/components/nav";

test("nav renders monogram, all section links, and a Contact button", () => {
  render(<Nav />);
  expect(screen.getByText("SB")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
  expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "#services");
  const contact = screen.getByRole("link", { name: /contact/i });
  expect(contact).toHaveAttribute("href", "mailto:saadbhutto@ymail.com");
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- nav`
Expected: FAIL — `@/components/nav` not found.

- [ ] **Step 3: Write `components/nav.tsx`**

```tsx
import { nav, EMAIL_HREF } from "@/lib/content";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      <a href="#top" className="font-display text-lg font-medium tracking-tight-2">SB</a>
      <nav className="hidden items-center gap-1 rounded-full bg-surface/80 px-2 py-1 backdrop-blur md:flex">
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="rounded-full px-3 py-1.5 text-sm text-muted hover:text-text">
            {n.label}
          </a>
        ))}
      </nav>
      <a href={EMAIL_HREF} className="rounded-full bg-surface px-4 py-2 text-sm text-text hover:bg-white/10">
        Contact
      </a>
    </header>
  );
}
```

- [ ] **Step 4: Write `components/footer.tsx`**

```tsx
import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] flex-col items-center gap-2 px-6 py-16 text-sm text-muted md:flex-row md:justify-between">
      <span>Saad Bhutto — {contact.location}</span>
      <a href={contact.linkedin} className="hover:text-text" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </footer>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- nav`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add components/nav.tsx components/footer.tsx tests/nav.test.tsx
git commit -m "feat: add nav and footer shell"
```

---

### Task 5: Hero section

> Invoke `frontend-design` skill before styling.

**Files:**
- Create: `components/hero.tsx`
- Test: `tests/hero.test.tsx`

**Interfaces:**
- Consumes: `hero` from `@/lib/content`; `WordReveal`, `PillButton`.
- Produces: `Hero()`.

- [ ] **Step 1: Write the failing test**

```tsx
// tests/hero.test.tsx
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/hero";

test("hero shows both headline lines and both CTAs", () => {
  render(<Hero />);
  expect(screen.getByText(/Not an agency\. Not a team of consultants\./)).toBeInTheDocument();
  expect(screen.getByText(/I build AI agents and MCP infrastructure for enterprises\./)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute("href", "mailto:saadbhutto@ymail.com");
  expect(screen.getByRole("link", { name: "See work" })).toHaveAttribute("href", "#work");
});
```

> Note: `WordReveal` splits into per-word spans, so assert with a regex/`textContent` matcher rather than exact single-node text. If `getByText` fails on split words, use `screen.getByText((_, el) => el?.textContent === hero.line1)`.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- hero`
Expected: FAIL — module not found.

- [ ] **Step 3: Write `components/hero.tsx`**

```tsx
import { hero } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";
import { PillButton } from "@/components/pill-button";

export function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-[92vh] max-w-[1200px] flex-col justify-center px-6 pt-28">
      <h1 className="font-display max-w-5xl text-4xl leading-[1.05] md:text-7xl">
        <WordReveal text={hero.line1} className="text-muted" />{" "}
        <WordReveal text={hero.line2} className="text-text" />
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-muted">{hero.subtext}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <PillButton href={hero.ctaPrimary.href} variant="accent">{hero.ctaPrimary.label}</PillButton>
        <PillButton href={hero.ctaSecondary.href} variant="dark">{hero.ctaSecondary.label}</PillButton>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- hero`
Expected: PASS (adjust the matcher per the note if needed).

- [ ] **Step 5: Commit**

```bash
git add components/hero.tsx tests/hero.test.tsx
git commit -m "feat: add hero section with word-reveal headline"
```

---

### Task 6: Featured work section

> Invoke `frontend-design` skill before styling.

**Files:**
- Create: `components/featured-work.tsx`
- Test: `tests/featured-work.test.tsx`

**Interfaces:**
- Consumes: `caseStudies` from `@/lib/content`; `SectionHeading`, `Card`.
- Produces: `FeaturedWork()`.

- [ ] **Step 1: Write the failing test**

```tsx
// tests/featured-work.test.tsx
import { render, screen } from "@testing-library/react";
import { FeaturedWork } from "@/components/featured-work";

test("renders all case study titles and outcomes under a #work anchor", () => {
  render(<FeaturedWork />);
  expect(document.getElementById("work")).not.toBeNull();
  expect(screen.getByText("Production RAG pipeline")).toBeInTheDocument();
  expect(screen.getByText(/~30% checkout conversion uplift/)).toBeInTheDocument();
  expect(screen.getByText("Internal MCP developer tooling")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- featured-work`
Expected: FAIL.

- [ ] **Step 3: Write `components/featured-work.tsx`**

```tsx
import { caseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";

export function FeaturedWork() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading id="work" eyebrow="FEATURED WORK">What I've shipped</SectionHeading>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {caseStudies.map((c) => (
          <Card key={c.title}>
            <div className="mb-6 aspect-[16/9] rounded-lg bg-surface-2" aria-hidden />
            <h3 className="text-xl text-text">{c.title}</h3>
            <p className="mt-2 text-muted">{c.outcome}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t) => (
                <span key={t} className="rounded-full border border-hair px-2.5 py-1 text-xs text-muted">{t}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- featured-work`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/featured-work.tsx tests/featured-work.test.tsx
git commit -m "feat: add featured work section"
```

---

### Task 7: Comparison table section

> Invoke `frontend-design` skill before styling.

**Files:**
- Create: `components/comparison-table.tsx`
- Test: `tests/comparison-table.test.tsx`

**Interfaces:**
- Consumes: `comparison` from `@/lib/content`; `WordReveal`.
- Produces: `ComparisonTable()`.

- [ ] **Step 1: Write the failing test**

```tsx
// tests/comparison-table.test.tsx
import { render, screen } from "@testing-library/react";
import { ComparisonTable } from "@/components/comparison-table";

test("renders all column headers and every dimension row", () => {
  render(<ComparisonTable />);
  expect(screen.getByText("Fractional AI Lead")).toBeInTheDocument();
  expect(screen.getByText("AI Agency")).toBeInTheDocument();
  expect(screen.getByText("Full-time hire")).toBeInTheDocument();
  expect(screen.getByText("Time to start")).toBeInTheDocument();
  expect(screen.getByText("Overhead")).toBeInTheDocument();
  expect(screen.getAllByText("Days")).toHaveLength(1);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- comparison-table`
Expected: FAIL.

- [ ] **Step 3: Write `components/comparison-table.tsx`**

```tsx
import { comparison } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";

export function ComparisonTable() {
  const [you, agency, hire] = comparison.columns;
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <h2 className="font-display max-w-3xl text-3xl md:text-5xl">
        <WordReveal text="Skip the hiring queue. Ship AI now." />
      </h2>
      <div className="mt-12 overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="text-sm text-muted">
              <th className="py-4 pr-4 font-normal" />
              <th className="rounded-t-xl bg-surface px-4 py-4 font-medium text-text">{you}</th>
              <th className="px-4 py-4 font-normal">{agency}</th>
              <th className="px-4 py-4 font-normal">{hire}</th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, i) => (
              <tr key={row.dimension} className="border-t border-hair align-top">
                <td className="py-4 pr-4 text-muted">{row.dimension}</td>
                <td className={`bg-surface px-4 py-4 text-text ${i === comparison.rows.length - 1 ? "rounded-b-xl" : ""}`}>{row.values[0]}</td>
                <td className="px-4 py-4 text-muted">{row.values[1]}</td>
                <td className="px-4 py-4 text-muted">{row.values[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- comparison-table`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/comparison-table.tsx tests/comparison-table.test.tsx
git commit -m "feat: add comparison table section"
```

---

### Task 8: Services (bento) section

> Invoke `frontend-design` skill before styling.

**Files:**
- Create: `components/services.tsx`
- Test: `tests/services.test.tsx`

**Interfaces:**
- Consumes: `services` from `@/lib/content`; `SectionHeading`, `Card`.
- Produces: `Services()`.

- [ ] **Step 1: Write the failing test**

```tsx
// tests/services.test.tsx
import { render, screen } from "@testing-library/react";
import { Services } from "@/components/services";

test("renders all four services under a #services anchor", () => {
  render(<Services />);
  expect(document.getElementById("services")).not.toBeNull();
  expect(screen.getByText("AI Agents & Agentic Systems")).toBeInTheDocument();
  expect(screen.getByText("MCP Infrastructure")).toBeInTheDocument();
  expect(screen.getByText("RAG Pipelines")).toBeInTheDocument();
  expect(screen.getByText("AI Governance & Enablement")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- services`
Expected: FAIL.

- [ ] **Step 3: Write `components/services.tsx`**

```tsx
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";

export function Services() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading id="services" eyebrow="WHAT I DO">
        You don't need a full AI team. You need the right expertise at the right time.
      </SectionHeading>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <Card key={s.title} className="min-h-[220px]">
            <h3 className="text-xl text-text">{s.title}</h3>
            <p className="mt-3 text-muted">{s.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- services`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/services.tsx tests/services.test.tsx
git commit -m "feat: add services bento section"
```

---

### Task 9: Impact wall section

> Invoke `frontend-design` skill before styling.

**Files:**
- Create: `components/impact.tsx`
- Test: `tests/impact.test.tsx`

**Interfaces:**
- Consumes: `impact` from `@/lib/content`; `SectionHeading`.
- Produces: `Impact()`.

- [ ] **Step 1: Write the failing test**

```tsx
// tests/impact.test.tsx
import { render, screen } from "@testing-library/react";
import { Impact } from "@/components/impact";

test("renders metric values under a #impact anchor", () => {
  render(<Impact />);
  expect(document.getElementById("impact")).not.toBeNull();
  expect(screen.getByText("~30%")).toBeInTheDocument();
  expect(screen.getByText("60%")).toBeInTheDocument();
  expect(screen.getByText("2×")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- impact`
Expected: FAIL.

- [ ] **Step 3: Write `components/impact.tsx`**

```tsx
import { impact } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Impact() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading id="impact" eyebrow="IMPACT">Proof, not promises.</SectionHeading>
      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-hair bg-hair sm:grid-cols-2 md:grid-cols-3">
        {impact.map((m) => (
          <div key={m.label} className="bg-bg p-8">
            <div className="font-display text-5xl text-accent">{m.value}</div>
            <p className="mt-3 text-sm text-muted">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- impact`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/impact.tsx tests/impact.test.tsx
git commit -m "feat: add impact metrics wall"
```

---

### Task 10: Insights section

> Invoke `frontend-design` skill before styling.

**Files:**
- Create: `components/insights.tsx`
- Test: `tests/insights.test.tsx`

**Interfaces:**
- Consumes: `insights` from `@/lib/content`; `SectionHeading`, `Card`.
- Produces: `Insights()`.

- [ ] **Step 1: Write the failing test**

```tsx
// tests/insights.test.tsx
import { render, screen } from "@testing-library/react";
import { Insights } from "@/components/insights";

test("renders three insight cards under a #insights anchor", () => {
  render(<Insights />);
  expect(document.getElementById("insights")).not.toBeNull();
  expect(screen.getByText("Shipping your first production RAG pipeline")).toBeInTheDocument();
  expect(screen.getAllByText(/AI Engineering|MCP|Leadership/).length).toBeGreaterThanOrEqual(3);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- insights`
Expected: FAIL.

- [ ] **Step 3: Write `components/insights.tsx`**

```tsx
import { insights } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/card";

export function Insights() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-24">
      <SectionHeading id="insights" eyebrow="INSIGHTS">Good reads</SectionHeading>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {insights.map((p) => (
          <Card key={p.title}>
            <span className="text-xs uppercase tracking-[0.08em] text-accent">{p.category}</span>
            <h3 className="mt-3 text-lg text-text">{p.title}</h3>
            <p className="mt-4 text-sm text-muted">{p.date}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- insights`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add components/insights.tsx tests/insights.test.tsx
git commit -m "feat: add insights section"
```

---

### Task 11: Footer CTA + full page assembly + a11y/responsive pass

> Invoke `frontend-design` skill before styling. This task assembles all sections and is where the overall visual rhythm gets tuned against the reference.

**Files:**
- Create: `components/footer-cta.tsx`
- Modify: `app/page.tsx`
- Test: `tests/page.test.tsx`

**Interfaces:**
- Consumes: `contact`, `EMAIL_HREF` from `@/lib/content`; `WordReveal`, `PillButton`; all section components.
- Produces: `FooterCta()`; assembled `Home()`.

- [ ] **Step 1: Write the failing test**

```tsx
// tests/page.test.tsx
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("full page renders one h1 and all section anchors", () => {
  render(<Home />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  ["work", "services", "impact", "insights", "contact"].forEach((id) => {
    expect(document.getElementById(id)).not.toBeNull();
  });
});

test("footer CTA links to the mailto email", () => {
  render(<Home />);
  const links = screen.getAllByRole("link", { name: /saadbhutto@ymail\.com|Email me|Get in touch/i });
  expect(links.some((l) => l.getAttribute("href") === "mailto:saadbhutto@ymail.com")).toBe(true);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- page`
Expected: FAIL — `footer-cta` missing / anchors absent.

- [ ] **Step 3: Write `components/footer-cta.tsx`**

```tsx
import { contact, EMAIL_HREF } from "@/lib/content";
import { WordReveal } from "@/components/word-reveal";
import { PillButton } from "@/components/pill-button";

export function FooterCta() {
  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-[1200px] px-6 py-32 text-center">
      <p className="mb-6 text-xs uppercase tracking-[0.08em] text-muted">READY TO START?</p>
      <h2 className="font-display mx-auto max-w-3xl text-4xl md:text-6xl">
        <WordReveal text={contact.heading} />
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-muted">{contact.lede}</p>
      <div className="mt-10 flex justify-center">
        <PillButton href={EMAIL_HREF} variant="accent">{contact.email}</PillButton>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Assemble `app/page.tsx`**

```tsx
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { FeaturedWork } from "@/components/featured-work";
import { ComparisonTable } from "@/components/comparison-table";
import { Services } from "@/components/services";
import { Impact } from "@/components/impact";
import { Insights } from "@/components/insights";
import { FooterCta } from "@/components/footer-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedWork />
        <ComparisonTable />
        <Services />
        <Impact />
        <Insights />
        <FooterCta />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- page`
Expected: PASS.

- [ ] **Step 6: Run the full test suite**

Run: `npm test`
Expected: ALL tests pass.

- [ ] **Step 7: Verify the static export builds**

Run: `npm run build`
Expected: succeeds; `out/index.html` exists and contains the hero headline text.

- [ ] **Step 8: Manual verification with the run/verify skill**

Run: `npm run dev`, open `http://localhost:3000`. Confirm: dark theme, pill nav, word-reveal on scroll, all sections present, mobile layout collapses to single column at ~375px width, and `prefers-reduced-motion` (toggle in DevTools rendering) disables the reveal animation.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: assemble full portfolio page with footer CTA"
```

---

### Task 12: Cloudflare deploy readiness

**Files:**
- Modify: `package.json` (verify scripts), `wrangler.jsonc`

- [ ] **Step 1: Install Wrangler (dev dependency)**

```bash
npm install -D wrangler
```

- [ ] **Step 2: Build and preview locally on the Workers runtime**

Run: `npm run preview`
Expected: `wrangler dev` serves `out/` at a local URL; the site loads identically to `next dev`.

- [ ] **Step 3: Document deploy (user-run action)**

Deployment to Cloudflare requires the user's authenticated Wrangler session. The deploy command is `npm run deploy` (runs `next build` then `wrangler deploy`). Do NOT run `wrangler deploy` on the user's behalf without explicit confirmation — surface the command and let the user run it (e.g. via `! npm run deploy`).

- [ ] **Step 4: Commit**

```bash
git add package.json wrangler.jsonc
git commit -m "chore: add Cloudflare Workers deploy readiness"
```

---

## Self-Review

**Spec coverage:**
- §3 stack (static export, Tailwind, Framer Motion, self-hosted fonts, Wrangler) → Tasks 1, 12. ✓
- §4 tokens & typography → Task 1 (globals.css, fonts). ✓
- §4 word-reveal motion + reduced-motion → Task 3 (`WordReveal`, `usePrefersReducedMotion`), verified Task 11 Step 8. ✓
- §5.1 shell/nav/footer → Tasks 4, 11. ✓
- §5.2 hero (verbatim headline, CTAs, mailto) → Task 5, Global Constraints. ✓
- §5.3 featured work (4 case studies) → Task 6. ✓
- §5.4 comparison table (3 cols, highlighted, 4 rows) → Task 7. ✓
- §5.5 services (4 bento cards) → Task 8. ✓
- §5.6 impact wall (≥5 metrics, replaces testimonials) → Task 9. ✓
- §5.7 insights (3 placeholder cards) → Task 10. ✓
- §5.8 footer CTA + minimal footer → Tasks 11, 4. ✓
- §7 responsive/a11y (one h1, landmarks, reduced-motion, keyboard) → Tasks 3, 11 (Step 8), section anchors throughout. ✓
- §8 out of scope respected (no form/booking/CMS/multi-page). ✓

**Placeholder scan:** No "TBD/TODO/handle edge cases" steps; every code step contains complete code. The Insights *content* is intentionally placeholder copy per spec §5.7 (a product decision, not a plan gap). ✓

**Type consistency:** `WordReveal({text,className,as})`, `PillButton({href,children,variant})`, `SectionHeading({eyebrow,children,id,className})`, `Card({children,className})`, `usePrefersReducedMotion(): boolean` — names/signatures match across all consuming tasks (5–11). Content export names (`hero`, `caseStudies`, `comparison`, `services`, `impact`, `insights`, `contact`, `nav`, `EMAIL_HREF`) defined in Task 2 and consumed with identical names downstream. ✓

**Note on `next/font/google` in tests:** component tests import content/logic; the font import lives in `layout.tsx`/`lib/fonts.ts` which the unit tests do not render, so no network font fetch occurs during `vitest`. The `build-smoke` test renders `page.tsx` only after Task 11 — if font import ever leaks into a unit test, mock `@/lib/fonts`.
