module.exports = {
    content: [
      "./src/components/common/navbar.js",
      "./src/components/playerchoose.js",
      "./src/components/chooseplayercomponents/table1.js"
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