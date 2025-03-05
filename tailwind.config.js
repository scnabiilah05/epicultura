// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#063434',
          'secondary': '#B7FE21',
          'text-dark': '#1c1c1c',
        },
      },
    },
    plugins: [],
  }