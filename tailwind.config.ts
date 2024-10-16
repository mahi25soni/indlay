import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        basic: "var(--border-color)",
      },
      borderRadius: {
        "20": "20px",
        "70": "70px",
      },
      colors: {
        cta: "#074A6A",
        "cta-darker": "#022D42",
        secondary: "var(--filtered-btn-secondary)",
        primary: "var(--filtered-btn-active)",
        "light-gray" : "var(--light-text)",
        basic : "var(--border-color)",
      },
      padding: {
        "15": "60px",
      },
    },
  },
  plugins: [],
};
export default config;
