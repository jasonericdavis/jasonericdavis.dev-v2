module.exports = {
  future: {
    // https://github.com/tailwindlabs/tailwindcss/pull/2137
    removeDeprecatedGapUtilities: true,
  },
  purge: [],
  theme: {
    colors: {
      primary: '#0581d3'
    },
    extend: {
      fontFamily: {
        latto: ["Lato", "sans-serif"]
      },

      /**
       * allows for site-specific dimensions
       * using the following classes:
       *  - grid-columns-layout
       *  - grid-rows-layout
       * */ 
      gridTemplateColumns: {
        'layout': '100px 1fr'
      },
      gridTemplateRows: {
        'layout': '1fr 50px'
      }
    },
  },
  variants: {},
  plugins: [],
}
