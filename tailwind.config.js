/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Newsreader", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        knoli: {
          purple: "#9333ea",
          pink: "#ec4899",
          orange: "#f97316",
        },
      },
    },
  },
  plugins: [],
};
