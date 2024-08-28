/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-green1': '#3f673f',
        'back-green': '#5f935f',
      },
      screens: {
        'custom-xs': '320px',    // Custom extra-small screen size
        'custom-sm': '480px',    // Custom small screen size
        'custom-md': '768px',    // Custom medium screen size
        'custom-lg': '1024px',   // Custom large screen size
        'custom-xl': '1280px',   // Custom extra-large screen size
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-spinner::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        '.no-spinner::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          'margin': '0',
        },
        '.no-spinner': {
          '-moz-appearance': 'textfield', /* Firefox */
        },
      }, ['responsive', 'hover']);
    },
  ],
}
