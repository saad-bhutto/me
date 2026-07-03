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
