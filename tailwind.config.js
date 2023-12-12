/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        "light-blue": "#227fb4",
        lightGrey: "#9ca3af",
        darkGrey: "#202020",
      },
    },
  },
  plugins: [],
};
