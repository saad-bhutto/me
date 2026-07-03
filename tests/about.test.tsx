import { render, screen } from "@testing-library/react";
import { About } from "@/components/about";

test("about section renders under #about with portrait, facts, and CTA", () => {
  render(<About />);
  expect(document.getElementById("about")).not.toBeNull();
  expect(screen.getByText("I lead from inside the codebase.")).toBeInTheDocument();
  // Fact tiles.
  expect(screen.getByText("Melbourne, VIC")).toBeInTheDocument();
  expect(screen.getByText("10+ years")).toBeInTheDocument();
  // CTA.
  expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute(
    "href",
    "mailto:saadbhutto@ymail.com",
  );
});
