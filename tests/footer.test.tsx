import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer";

test("footer renders brand, both link columns, and legal bar", () => {
  render(<Footer />);
  // Brand
  expect(screen.getByText("SB")).toBeInTheDocument();
  expect(screen.getByText(/Full-stack engineer & AI-native tech lead/)).toBeInTheDocument();
  // Column headers
  expect(screen.getByText("Explore")).toBeInTheDocument();
  expect(screen.getByText("Connect")).toBeInTheDocument();
  // Explore links + Connect socials
  expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "#contact");
  expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
    "href",
    "https://linkedin.com/in/saadbhutto",
  );
  expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
    "href",
    "mailto:saadbhutto@ymail.com",
  );
  // Legal
  expect(screen.getByText(/Saad Bhutto — Melbourne, VIC/)).toBeInTheDocument();
});
