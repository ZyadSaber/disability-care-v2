/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 70s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translate(0)" },
          to: { transform: "translate(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
