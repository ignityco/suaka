import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "base-background": "#FAF7F3",
        primary: "#1A501A",
        second: "#223030",
        soft: "#D9F8B2",
        "gray-primary": "#999999",
        "gray-second": "#D9D9D9",
        "brown-soft": "#A37C5D"
      },
    },
  },
  plugins: [],
};
export default config;
