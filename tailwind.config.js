/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#FFBADE",
            secondary: "#FF5370",
            background: "#201f31",
            accent: "#373646",
            accent2: "#4b4b59",
         },
      },
   },
   plugins: [],
};
