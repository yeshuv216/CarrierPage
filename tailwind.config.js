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
        optima: ["Optima"],
        bodoniModa: ["Bodoni Moda"],
      },
      colors: {
        gold: "#BB9C65",
      },
    },
  }
};
