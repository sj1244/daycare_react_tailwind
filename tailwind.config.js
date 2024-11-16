module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Corrected path
  theme: {
    extend: {
      colors: {
        daycareBlue: "purple", // Soft baby blue
        daycareYellow: "pink", // Gentle pastel yellow
        daycarePink: "violet", // Light pastel pink
        daycareGreen: "beige", // Minty pastel green
      },
      fontFamily: {
        playful: ['"Comic Sans MS"', "cursive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
