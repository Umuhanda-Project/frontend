/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {'hero-image':"URL('./src/assets/hero.png')"}
    },
  },
  plugins: [],
}