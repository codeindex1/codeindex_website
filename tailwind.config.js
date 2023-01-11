/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
      boxShadow: {
        custom: "-1px 1px 30px 1px rgba(0,0,0,0.40);",
        customLg: "-1px 1px 35px 1px rgba(0,0,0,0.40)",
        teamCardShadow: " -1px 1px 3px 1px rgba(55,24,24,0.1);",
      },
    },
  },
  plugins: [],
};
