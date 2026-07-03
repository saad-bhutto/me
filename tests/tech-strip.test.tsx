import { render, screen } from "@testing-library/react";
import { TechStrip } from "@/components/tech-strip";

test("renders the technologies section with labelled logos", () => {
  render(<TechStrip />);
  // Section is landmarked for assistive tech.
  expect(screen.getByRole("region", { name: /technologies/i })).toBeInTheDocument();
  // A representative spread of career technologies is present (duplicated for the marquee loop).
  ["Python", "TypeScript", "Laravel", "React", "AWS", "PostgreSQL", "Anthropic Claude"].forEach(
    (name) => {
      expect(screen.getAllByText(name).length).toBeGreaterThanOrEqual(1);
    },
  );
});
