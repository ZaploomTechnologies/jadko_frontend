/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jadko-primary': '#2F529B',
        'jadko-secondary': '#C0353D',
        'jadko-accent': '#38B554',
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  }
}

