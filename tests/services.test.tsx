import { render, screen } from "@testing-library/react";
import { Services } from "@/components/services";

test("renders all four services under a #services anchor", () => {
  render(<Services />);
  expect(document.getElementById("services")).not.toBeNull();
  expect(screen.getByText("AI Agents & Agentic Systems")).toBeInTheDocument();
  expect(screen.getByText("RAG & MCP Infrastructure")).toBeInTheDocument();
  expect(screen.getByText("Full-Stack Product Engineering")).toBeInTheDocument();
  expect(screen.getByText("Engineering Leadership")).toBeInTheDocument();
});
