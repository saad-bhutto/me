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
