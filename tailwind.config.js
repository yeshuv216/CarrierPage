const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins"],
        bodoniModa: ["Bodoni Moda"],
      },
      colors: {
        darkGreen: "#133536",
        grey: "#4D4F52",
        cream: "#E8D5C8",
        lightCream: "#faf7f4",
      },
    },
  },
  plugins: [nextui()],
};
