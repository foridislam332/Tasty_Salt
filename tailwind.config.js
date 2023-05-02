/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'title-font': ['Cormorant Garamond', 'serif']
    },
    extend: {
      colors: {
        'primary': '#2e2f31',
        'secondary': '#f89223'
      }
    },
  },
  plugins: [],
}

