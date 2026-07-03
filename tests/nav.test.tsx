import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Nav } from "@/components/nav";

test("nav renders monogram, all section links, and a Contact button", () => {
  render(<Nav />);
  expect(screen.getByText("SB")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute("href", "#work");
  expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
  expect(screen.getByRole("link", { name: "Expertise" })).toHaveAttribute("href", "#services");
  const contact = screen.getByRole("link", { name: /contact/i });
  expect(contact).toHaveAttribute("href", "mailto:saadbhutto@ymail.com");
});

test("mobile menu toggle opens the drawer and reveals its Contact link", async () => {
  const user = userEvent.setup();
  render(<Nav />);

  const toggle = screen.getByRole("button", { name: "Open menu" });
  expect(toggle).toHaveAttribute("aria-expanded", "false");

  await user.click(toggle);

  expect(toggle).toHaveAttribute("aria-expanded", "true");
  expect(screen.getByRole("button", { name: "Close menu" })).toBe(toggle);

  const contactLinks = screen.getAllByRole("link", { name: /contact/i });
  expect(contactLinks.length).toBeGreaterThanOrEqual(1);
  expect(
    contactLinks.some((link) => link.getAttribute("href") === "mailto:saadbhutto@ymail.com")
  ).toBe(true);
});
