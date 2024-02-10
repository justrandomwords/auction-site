import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "1rem",
      average: "1.125rem",
      base: ["1.25rem", "1.68rem"],
      xl: "1.875rem",
      "2xl": ["3.125rem","3.8125rem"],
      "3xl": ["4.375rem", "4.8rem"],
    },
    extend: {
      colors: {
        primary: "rgba(var(--primary-rgb), <alpha-value>)",
        secondary: "rgba(var(--secondary-rgb), <alpha-value>)",
        background: "rgba(var(--background-rgb), <alpha-value>)",
      },
      borderRadius: {
        lg: "0.625rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        form: "0px 0px 2rem rgba(0,0,0,0.1)"
      },
    },
  },
  plugins: [],
};
export default config;
