import { render, screen } from "@testing-library/react";
import { Services } from "@/components/services";

test("renders all four services under a #services anchor", () => {
  render(<Services />);
  expect(document.getElementById("services")).not.toBeNull();
  expect(screen.getByText("AI Agents & Agentic Systems")).toBeInTheDocument();
  expect(screen.getByText("MCP Infrastructure")).toBeInTheDocument();
  expect(screen.getByText("RAG Pipelines")).toBeInTheDocument();
  expect(screen.getByText("AI Governance & Enablement")).toBeInTheDocument();
});
