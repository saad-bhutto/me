import { Inter } from "next/font/google";

// Headings use this same family, styled tighter via the .font-display class
// (letter-spacing + weight) to approximate "Inter Display" from the reference.
export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
