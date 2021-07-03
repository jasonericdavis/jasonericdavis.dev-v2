const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: '#0581d3',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber
    },
    extend: {
      fontFamily: {
        latto: ["Lato", "sans-serif"],
      },

      /**
       * allows for site-specific dimensions
       * using the following classes:
       *  - grid-columns-layout
       *  - grid-rows-layout
       * */
      gridTemplateColumns: {
        layout: "100px 1fr",
      },
      gridTemplateRows: {
        layout: "50px 1fr",
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
};
