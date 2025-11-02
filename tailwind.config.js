module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fbb03b",
        secondary: "#7a5af8",
        accent: "#008c7a",
        pastel: "#fdebd3",
        dark: "#121212"
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 10px rgba(255,255,255,0.5)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #fbb03b, #7a5af8)"
      }
    }
  },
  plugins: []
}