/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
      },
      boxShadow: {
        glow: "0 40px 120px -60px rgba(90,0,160,0.35)",
      },
      colors: {
        primary: "#6A0AE2",
        secondary: "#D744B3",
        accent: "#F4359D",
        night: "#1F1A3D",
      },
    },
  },
  plugins: [],
}