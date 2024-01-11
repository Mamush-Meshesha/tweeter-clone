/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1DA1F2",
        darkblue: "#279509",
        lightblue: "#EFF9FF",
        dark: "#657786",
        light: "#AABBC2",
        lighter: "#E1EBED",
        lightest: "#F5F8FA",
      },
    },
  },
  plugins: [],
};
