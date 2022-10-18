/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#001c27",
        footer: "#0d2833",
        primary: "#8E0D92",
        custom: "#A9C2CF",
      },
    },
  },
  plugins: [],
};
