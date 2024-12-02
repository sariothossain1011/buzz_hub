import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      xs: "375px",
      sm: "640px",
      md: "770px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors:{
      blue:"#5270FF",
      light_red:"#EE474F",
      black:"#000",
      white:"#FFF",
      light_white:"#F5F6FC",
      gray:"#666768",
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1350px",
        },
      },
    },

  },
  plugins: [],
};
export default config;
