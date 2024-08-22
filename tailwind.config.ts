import { poppins } from "@/config/fonts";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "470px",
        slg: "900px",
        xxl: '1440px',
      },
      zIndex: {
        99999: "99999",
        999: "999",
        1: "1",
      },
      colors: {
        greyHo: '#08090A',
        purpleHo: "#8064A2",
        greyDarkerHo: "#6D747A",
        greyLightHo: "#CED4DA",
        skyHo: "#0096C8",
        heroHo: "#F7F5F9"
      },
      fontFamily: {
        fontSans: ["var(--font-sans)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
