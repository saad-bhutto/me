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
