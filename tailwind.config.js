/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        theme: {
          mainColor: "#e07404",
          grayColor: "#676c7d",
          disAgree: "#8f61f4",
        },
        light: {
          primary: "#FFFFFF",
          secondary: "#f3f4f6",
          text: "black",
          inputBg: "#f3f3f5",
        },
        dark: {
          primary: "#242526",
          secondary: "#303030",
          text: "#FFFFFF",
          border: "#393a3b",
          inputBg: "#3a3b3c",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
