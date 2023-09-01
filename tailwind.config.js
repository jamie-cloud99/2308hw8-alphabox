/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "12px",
    },
    extend: {
      maxWidth: {
        "screen-sm": "540px",
        "screen-md": "720px",
        "screen-lg": "960px",
        "screen-xl": "1140px",
        "screen-2xl": "1320px",
      },
      colors: {
        primary: {
          100: "#E9E2F3",
          200: "#7000FF",
          DEFAULT: "#6D01F7",
          400: "#380C7E",
          500: "#2A085C",
          600: "#1F0F39",
          700: "#11002D",
        },
      },
      fontFamily: {
        sans: ["'Noto Sans TC'", "sans-serif"],
        shrik: ["Shrikhand", "sans-serif", "cursive"],
        saira: ["'Saira Extra Condensed'", "sans-serif"],
      },
      fontSize: {
        xl: ["20px", "1.5"],
        "2xl": ["24px", "1.5"],
        "5xl": ["48px", "1.5"],
        "8xl": ["96px", "1.5"],
        "9xl": ["128px", "1.5"],
        8: ["32px", "1.5"],
        10: ["40px", "1.5"],
        16: ["64px", "1.5"],
      },
      spacing: {
        13: "52px",
        15: "60px",
      },
      letterSpacing: {
        1: "1em",
      },
      flexBasis: {
        "1/3-gap-6": "calc(33.3% - (2/3 * 1.5rem))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin.cjs"),
  ],
};
