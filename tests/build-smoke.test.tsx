import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("home page renders the name", () => {
  render(<Home />);
  expect(screen.getByText("Saad Bhutto")).toBeInTheDocument();
});
