const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
  },
  theme: {
    colors: {
      primary: '#0581d3'
    },
    extend: {
      fontFamily: {
        latto: ["Lato", "sans-serif"]
      },
    }
  },
  variants: {},
  plugins: [],
};