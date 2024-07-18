import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fef6ee",
          "100": "#fcebd8",
          "200": "#f9d2af",
          "300": "#f4b27d",
          "400": "#ef8848",
          "500": "#ea6723",
          "600": "#dc501a",
          "700": "#b63b18",
          "800": "#91301b",
          "900": "#752a19",
          "950": "#3f120b",
        },
      }
    },
  },
  plugins: [],
};
export default config;
