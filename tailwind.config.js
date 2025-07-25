/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'bg-page': '#171923',
        'bg-header': '#2d3748',
        'bg-button': '#91def3',
        'bg-cart': '#1a202c',
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

