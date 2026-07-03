import type { Metadata } from "next";
import { interFont } from "@/lib/fonts";
import "./globals.css";

// Update this to the production domain once deployed — it drives canonical + OG URLs.
const SITE_URL = "https://saadbhutto.com";
const TITLE = "Saad Bhutto — AI-Native Tech Lead & Senior Full-Stack Engineer (Melbourne)";
const DESCRIPTION =
  "Saad Bhutto is an AI-native tech lead and senior full-stack engineer in Melbourne with 10+ years across TypeScript, Python and AWS. I build production AI — RAG pipelines, AI agents and MCP servers — and lead the engineering teams that ship them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Saad Bhutto",
  },
  description: DESCRIPTION,
  applicationName: "Saad Bhutto — Portfolio",
  authors: [{ name: "Saad Bhutto", url: "https://linkedin.com/in/saadbhutto" }],
  creator: "Saad Bhutto",
  keywords: [
    "Saad Bhutto",
    "AI-Native Tech Lead",
    "AI Tech Lead",
    "AI Engineering Manager",
    "Principal Engineer",
    "Senior Full-Stack Engineer",
    "Full Stack Developer Melbourne",
    "TypeScript",
    "Python",
    "PHP Laravel",
    "AWS",
    "RAG pipelines",
    "AI agents",
    "agentic systems",
    "MCP servers",
    "LLM engineering",
    "Melbourne",
    "Australia",
    "remote",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Saad Bhutto",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={interFont.variable}>
      <body>
        <noscript>
          <style>{`[data-word],[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
