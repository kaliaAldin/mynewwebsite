import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        fog: "var(--color-fog)",
        line: "var(--color-line)",
        accent: "var(--color-accent)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
      letterSpacing: {
        brutal: "-0.06em"
      },
      boxShadow: {
        frame: "0 0 0 1px var(--color-line)"
      }
    }
  },
  plugins: []
};

export default config;
