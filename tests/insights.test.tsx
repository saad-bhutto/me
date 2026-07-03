import { render, screen } from "@testing-library/react";
import { Insights } from "@/components/insights";

test("renders three insight cards under a #insights anchor", () => {
  render(<Insights />);
  expect(document.getElementById("insights")).not.toBeNull();
  expect(screen.getByText("Shipping your first production RAG pipeline")).toBeInTheDocument();
  expect(screen.getAllByText(/AI Engineering|MCP|Leadership/).length).toBeGreaterThanOrEqual(3);
});
