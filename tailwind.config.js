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
        'text-primary': '#f89223',
      }
    },
  },
  plugins: [],
}

