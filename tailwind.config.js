module.exports = {
    content: [
      "./src/components/common/navbar.js",
      "./src/components/playerchoose.js"
    ],
    theme: {
      extend: {
        colors: {
          'gradient1': '#4608F6'
        },
      },
    },
    plugins: [require("daisyui")],
  }