/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      itim: ['Itim','sans-serif']
    },
    colors: {
      'precipitation': '#35a2eb',
      'temperature': '#ff6384'
    }
  },
  },
  plugins: [],
}
