module.exports = {
  purge: [
    "./public/**/*.html",
    "./public/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: "0.6rem"
      },
      boxShadow: {
        cyan: '0 20px 20px -5px hsl(174, 77%, 80%)'
      },
      backgroundSize: {
        "50%": "50%",
      },
      backgroundImage: theme => ({
        "pattern": "url('./images/bg-pattern.svg')",
        "circles": "url('./images/pattern-circles.svg')",
      }),
      fontFamily: {
        body: ['Manrope']        
      },
      colors: {
        primary: {
          softCyan: "hsl(174, 77%, 80%)",
          strongCyan: "hsl(174, 86%, 45%)",
          lGrayRed: "hsl(14, 92%, 95%)",
          lRed: "hsl(15, 100%, 70%)",
          pBlue: "hsl(226, 100%, 87%)"
        },
        neutral: {
          vBlue: "hsl(230, 100%, 99%)",
          lGrayBlue: "hsl(224, 65%, 95%)",
          lGrayBlueToggle: "hsl(223, 50%, 87%)",
          gBlue: "hsl(225, 20%, 60%)",
          dSatBlue: "hsl(227, 35%, 25%)"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
