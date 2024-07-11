/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01170D",
        secondary: "#18472A",
        accent: "#FFDA16",
        card: "#E0E0E0",
      },
    },
  },
  plugins: [],
};

