/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./server/src/views/**/*.{js,ts,jsx,tsx,ejs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
