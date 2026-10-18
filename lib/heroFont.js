import localFont from "next/font/local";

// Hero headline: Plus Jakarta Sans (variable weight), a clean, bold, professional sans.
const heroBold = localFont({
  src: "../app/fonts/plus-jakarta-sans.woff2",
  variable: "--f-hero-bold",
  weight: "200 800",
  display: "swap",
  preload: false,
});

export const heroBoldVar = heroBold.variable;
