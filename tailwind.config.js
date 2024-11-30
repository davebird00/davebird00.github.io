/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
    extend: {

      /* Animation for the dropdown */
      keyframes: {
        slideDown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },

      animation: {
        slideDown: 'slideDown 1s ease'
      },

      colors: {
        'forest-green': '#304b34',
        'background': '#205556',
        'text': '#F4EFE6',
        'secondary': '#46A07E',
        'tertiary': '#376D5D'
      },

      fontSize: {
        'vw-1': '2vw',
        'vw-5': '5vw',
        'vw-10': '10vw',
        'vw-15': '15vw'
      },
    },
  },
  plugins: [],
}

