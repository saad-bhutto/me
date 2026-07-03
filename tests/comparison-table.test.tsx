import { render, screen } from "@testing-library/react";
import { ComparisonTable } from "@/components/comparison-table";

test("renders all column headers and every dimension row", () => {
  render(<ComparisonTable />);
  expect(screen.getByText("AI-Native Tech Lead")).toBeInTheDocument();
  expect(screen.getByText("AI specialist")).toBeInTheDocument();
  expect(screen.getByText("Engineering manager")).toBeInTheDocument();
  expect(screen.getByText("Ships production code")).toBeInTheDocument();
  expect(screen.getByText("Owns business outcomes")).toBeInTheDocument();
  expect(screen.getAllByText("Daily — full-stack")).toHaveLength(1);
});
