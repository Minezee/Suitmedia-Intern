/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0 1px 15px rgba(51, 51, 51, 0.1)',
      },
    },
  },
  plugins: [],
}

