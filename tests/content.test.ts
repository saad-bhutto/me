// tests/content.test.ts
import { hero, caseStudies, comparison, services, impact, contact, EMAIL_HREF } from "@/lib/content";

test("hero headline positions full-stack engineer + AI-native tech lead", () => {
  expect(hero.line1).toBe("Full-stack engineer. AI-native tech lead.");
  expect(hero.line2).toBe("I ship production AI and lead the teams behind it.");
});

test("primary CTA is the mailto email", () => {
  expect(hero.ctaPrimary.href).toBe(EMAIL_HREF);
  expect(EMAIL_HREF).toBe("mailto:saadbhutto@ymail.com");
});

test("has four case studies each with an outcome", () => {
  expect(caseStudies).toHaveLength(4);
  caseStudies.forEach((c) => expect(c.outcome.length).toBeGreaterThan(0));
});

test("comparison has 3 columns and 4 rows with 3 values each", () => {
  expect(comparison.columns).toHaveLength(3);
  expect(comparison.rows).toHaveLength(4);
  comparison.rows.forEach((r) => expect(r.values).toHaveLength(3));
});

test("services and impact populated", () => {
  expect(services).toHaveLength(4);
  expect(impact.length).toBeGreaterThanOrEqual(5);
});

test("contact uses the resume linkedin and Melbourne location", () => {
  expect(contact.email).toBe("saadbhutto@ymail.com");
  expect(contact.linkedin).toContain("linkedin.com/in/saadbhutto");
  expect(contact.location).toBe("Melbourne, VIC");
});
