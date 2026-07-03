import { render, screen } from "@testing-library/react";
import { FeaturedWork } from "@/components/featured-work";

test("renders all case study titles and outcomes under a #work anchor", () => {
  render(<FeaturedWork />);
  expect(document.getElementById("work")).not.toBeNull();
  expect(screen.getByText("Production RAG pipeline")).toBeInTheDocument();
  expect(screen.getByText(/~30% checkout conversion uplift/)).toBeInTheDocument();
  expect(screen.getByText("Internal MCP developer tooling")).toBeInTheDocument();
});
