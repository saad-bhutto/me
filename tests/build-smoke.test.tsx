import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

test("home page renders the name", () => {
  render(<Home />);
  const footer = screen.getByRole("contentinfo");
  expect(footer.textContent).toContain("Saad Bhutto");
});
