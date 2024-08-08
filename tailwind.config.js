/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'metallic-gray': '#b0b0b0', // Add your custom metallic gray color

      }
    },
  },
  plugins: [],
}

