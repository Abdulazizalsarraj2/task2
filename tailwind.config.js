// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          cairo: ['Cairo', 'sans-serif'],
        },
        colors: {
          primary: "#5B5BFF",
          secondary: "#B56DFF",
          'purple-700': '#5D3EBF',
          'text-2': '#7B7790',
        },
        dropShadow: {
          'purple-glow': '0 0 75px rgba(140, 106, 249, 0.1)',
        },
      },
    },
    plugins: [],
  }
  