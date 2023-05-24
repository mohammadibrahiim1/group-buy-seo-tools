/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#334155",

          secondary: "#243c5a",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#F0F7F7",

          info: "#3ABFF8",

          success: "#16a34a",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
