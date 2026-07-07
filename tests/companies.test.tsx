import { render, screen } from "@testing-library/react";
import { Companies } from "@/components/companies";

test("renders company logos under an #experience anchor with labels + alt", () => {
  render(<Companies />);
  expect(document.getElementById("experience")).not.toBeNull();
  ["Inspiring Vacations", "AroFlo", "carbar", "Devkind"].forEach((name) => {
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByAltText(`${name} logo`)).toBeInTheDocument();
  });
});
