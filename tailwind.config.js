/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{js,ts,jsx,tsx}", // Include your library files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
