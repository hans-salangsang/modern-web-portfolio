/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#FFF8E8",
        black: "#FFF8E8",
        background: "#080808",
        foreground: "#FFF8E8",
        accent: "#CCD0F8",
      },
      fontFamily: {
        heading: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        "mono-narrow": ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        "mono-condensed": ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        "mono-wide": ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.4" }],
        "3xl": ["1.875rem", { lineHeight: "1.3" }],
        "4xl": ["2.25rem", { lineHeight: "1.25" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
};
