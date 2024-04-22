/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        light: {
          primary: "#FFFFFF",
          secondary: "#e2e8f0",
          inputBg: "#f3f3f5",
        },
        dark: {
          primary: '#242526',
          secondary: '#303030',
          text: "#FFFFFF",
          border: "#393a3b",
          inputBg: "#3a3b3c"
          // Define other dark mode colors here
        },
      },
    },
  },
  plugins: [],
}

