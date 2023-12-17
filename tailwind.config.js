/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6941C6",
        "primary-hover": "#7F56D9",
        secondary: "#FFFFFF",
        default: "#101828",
        "gray-color": "#F2F4F7",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    logs: false,
  },
};
