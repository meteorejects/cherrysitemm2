/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        sakura: '#FFC0CB',
        softsakura: '#FFD7E5',
        charcoal: '#111111',
        glass: 'rgba(255, 255, 255, 0.05)',
        glassborder: 'rgba(255, 192, 203, 0.2)'
      }
    }
  },
  plugins: []
};
