const { nextui } = require ("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  plugins: [nextui()]
}

