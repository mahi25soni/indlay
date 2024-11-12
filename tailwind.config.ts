import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        mobile: "390px",
      },
      borderColor: {
        basic: "var(--border-color)",
      },
      borderRadius: {
        "20": "20px",
        "70": "70px",
        "1.5": "1.5px",
      },
      colors: {
        cta: "#074A6A",
        "cta-darker": "#022D42",
        secondary: "var(--filtered-btn-secondary)",
        primary: "var(--filtered-btn-active)",
        "light-gray": "var(--light-text)",
        basic: "var(--border-color)",
        bestseller: "var(--bg-bestseller)",
      },
      padding: {
        "15": "60px",
      },
      zIndex: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        999: "999", // Navbar
        1000: "1000", // Listing Individual property
      },
    },
  },
  plugins: [],
};
export default config;
