/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
        'custom-gradient': 'linear-gradient(292.12deg, #62BADA -35.02%, #C9E7F2 78.96%)',
      }},
  },
  plugins: [],
}