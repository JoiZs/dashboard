/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        9: "repeat(9, minmax(0,1fr))",
      },
      colors: {
        "blue-shop": "#3C91E6",
        primary: "#3C91E6",
      },
    },
    fontFamily: {
      display: ["Lato", "san-serif"],
      body: ["Poppins", "san-serif"],
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#3C91E6",
          "primary-focus": "#1C81C2",
        },
      },
    ],
  },
};
