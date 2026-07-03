import { render, screen } from "@testing-library/react";
import { IntegrationsCarousel } from "@/components/integrations-carousel";

test("renders integration cards under an #integrations anchor with scroll controls", () => {
  render(<IntegrationsCarousel />);
  expect(document.getElementById("integrations")).not.toBeNull();
  // User-requested integrations are present.
  ["Shopify", "Starshipit", "Machship", "Klaviyo", "Optimizely", "Amplitude"].forEach((name) => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
  // Resume-sourced ones too.
  expect(screen.getByText("AWS Personalize")).toBeInTheDocument();
  // Scroll controls exist and are labelled.
  expect(screen.getByRole("button", { name: /scroll integrations left/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /scroll integrations right/i })).toBeInTheDocument();
});
