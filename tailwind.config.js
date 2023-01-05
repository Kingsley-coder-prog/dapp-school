/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    
    
  ],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976',
      xl: '1440px'
    },
    extend: {
      colors: {
        Gray400: 'rgb(156 163 175)',
        Emerald500: 'rgb(255 255 255',
        Gray600: 'rgb(75 85 99)',
        hoverEmerald700: 'rgb(4 120 87)',
        Emerald100: 'rgb(209 250 229)'
      }
    },
  },
  plugins: [],
}
