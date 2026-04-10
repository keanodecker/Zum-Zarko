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
        zarko: {
          dark: "#1a1a1a",
          darker: "#0f0f0f",
          terra: "#c75b39",      /* Terrakotta - warmes Orange */
          clay: "#e8a87c",       /* Sand/Clay */
          gold: "#d4a574",       /* Warmes Gold */
          cream: "#f5f5f0",      /* Warmes Weiß */
          olive: "#4a5d23",      /* Olivgrün für Akzente */
          gray: "#2d2d2d",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
