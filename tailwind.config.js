/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        loading: "url('@/assets/loading.gif')",
      },
      colors: {
        mainColor: "#1F7C65",
        activeColor: "#00A67C",
      },
    },

  },
  plugins: [],
};
