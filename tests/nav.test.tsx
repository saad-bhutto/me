import { render, screen } from "@testing-library/react";
import { Nav } from "@/components/nav";

test("nav renders monogram, all section links, and a Contact button", () => {
  render(<Nav />);
  expect(screen.getByText("SB")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
  expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "#services");
  const contact = screen.getByRole("link", { name: /contact/i });
  expect(contact).toHaveAttribute("href", "mailto:saadbhutto@ymail.com");
});
