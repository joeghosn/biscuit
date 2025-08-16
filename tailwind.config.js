/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        biscuit: {
          cream: "#FFF6E8",
          peach: "#FFD7B3",
          orange: "#FF9F58",
          brown: "#5E3B2B",
          pink: "#FFB4C6",
        },
      },
      dropShadow: { logo: "0 6px 16px rgba(255,159,88,0.45)" },
    },
  },
  plugins: [],
};
