import { render, screen } from "@testing-library/react";
import { Impact } from "@/components/impact";

test("renders metric values under a #impact anchor", () => {
  render(<Impact />);
  expect(document.getElementById("impact")).not.toBeNull();
  expect(screen.getByText("~30%")).toBeInTheDocument();
  expect(screen.getByText("60%")).toBeInTheDocument();
  expect(screen.getByText("2×")).toBeInTheDocument();
});
