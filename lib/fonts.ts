import { Inter } from "next/font/google";

// Inter Display is Inter's display optical size; we approximate with Inter tight tracking.
// Using Inter for both, differentiated by CSS (tracking/size) to match the reference.
export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Alias for headings; same family, styled tighter via utility classes.
export const interDisplayFont = interFont;
