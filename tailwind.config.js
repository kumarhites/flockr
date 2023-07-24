/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "440px",
      tablet: "640px",
      laptop: "1060px",
      desktop: "1320px",
    },
  },
  plugins: [],
};
