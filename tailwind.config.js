module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Corrected path
  theme: {
    extend: {
      colors: {
        daycareBlue: "#CAB9D9", // Soft baby blue
        daycareYellow: "#B7A8D4", // Gentle pastel yellow
        daycarePink: "#8B72BE", // Light pastel pink
        daycareGreen: "#F4D9C8", // Minty pastel green
      },
      fontFamily: {
        playful: ['"Comic Sans MS"', "cursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
