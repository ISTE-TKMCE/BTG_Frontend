module.exports = {
    content: [
      "./src/**/*.{html,js}"
    ],
    theme: {
      extend: {
        fontFamily:{
          Rajdhani:["Rajdhani"]
        },
        colors: {
          'gradient1': '#4608F6'
        },
      },
    },
    plugins: [require("daisyui")],
  }