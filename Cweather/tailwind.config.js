/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      light_blue: "#2F389D",
      medium_blue: "#131856",
      dark_blue: "#0A0D27",
      form_blue: "#45607C",
    },
    fontFamily: {
      black: ["Roboto"],
      bold: ["Roboto"],
      medium: ["Roboto"],
      regular: ["Roboto"],
      light: ["Roboto"],
      thin: ["Roboto"],
    },
    fontWeight: {
      black: 900,
      bold: 700,
      medium: 500,
      regular: 400,
      light: 300,
      thin: 100,
    },
  },
  plugins: [],
};
