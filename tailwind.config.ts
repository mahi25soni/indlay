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
        "20" : "20px",
        "70" : "70px"
      },
      colors: {
        "cta" : "#074A6A",
        "cta-darker" : "#022D42",
        "primary" : "#FE6240"
      },
      padding : {
        "15" : "60px"
      }

    },
  },
  plugins: [],
};
export default config;
