import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/hero";
import { hero } from "@/lib/content";

test("hero shows both headline lines and both CTAs", () => {
  render(<Hero />);
  // WordReveal splits text into per-word spans, so we need to find parent containers
  // and check their textContent
  const h1 = screen.getByRole("heading", { level: 1 });
  const line1Span = h1.querySelector(".text-muted");
  const line2Span = h1.querySelector(".text-text");

  // Normalize whitespace for comparison (WordReveal removes spaces between words visually)
  const normalize = (text: string) => text.replace(/\s+/g, "");

  expect(normalize(line1Span?.textContent || "")).toBe(normalize(hero.line1));
  expect(normalize(line2Span?.textContent || "")).toBe(normalize(hero.line2));
  expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute("href", "mailto:saadbhutto@ymail.com");
  expect(screen.getByRole("link", { name: "See work" })).toHaveAttribute("href", "#work");
});
