/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#131416",
        panel: "#23272b",
        cream: "#F3EEE7",
        sand: "#E8E0D3",
        gold: { DEFAULT: "#BC8C4D", light: "#D9A867", dark: "#8F6A35" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { page: "1240px" },
    },
  },
  plugins: [],
};
