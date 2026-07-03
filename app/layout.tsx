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
      <body>
        <noscript>
          <style>{`[data-word]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
