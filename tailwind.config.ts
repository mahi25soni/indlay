import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor : {
        "basic" : "#EDF0EF",
      },
      borderRadius : {
        // 12 20 24 70
        "12" : "12px",
        "20" : "20px",
        "24" : "24px",
        "70" : "70px"
      },
      colors: {
        "cta" : "#074A6A",
        "cta-darker" : "#022D42",
        "primary" : "#FE6240"
      },

    },
  },
  plugins: [],
};
export default config;
