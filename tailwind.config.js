const { nextui } = require("@nextui-org/react");
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: "#EFF3FA",
        buttonColor: "#5647F9",
        buttonColorHover: "#4031E5",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), flowbite.plugin(),]
}

