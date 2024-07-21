/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // आपकी सोर्स फाइलों के पाथ यहां शामिल करें
    './public/index.html',
  ],
  theme: {
    extend: {},

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      // Text color 
      "white": "#e7f3ff",
      // text color
      "black":"#17202A",
      //  bg color
      "bg-color": "#34495E",
      // login Button color
      "primry":"#6495ED",
      "Secondry":"#FFBF00",
      "Tertiary":"#6495ED",
      "primry1": "#FFBF00",
      "Secondry2": "#6495ED",
      "Tertiary3": "#FFBF00",
      "Active":"#40E0D0"
    }
  },
  plugins: [],
}

