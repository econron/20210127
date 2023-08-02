/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lime: "#46fa07",
        yellow: "#f6ed0e",
        mediumblue: {
          "100": "#4d0cd7",
          "200": "rgba(77, 12, 215, 0.99)",
        },
        black: "#000",
        fuchsia: "#e009e4",
        snow: "#fefbfb",
        gainsboro: {
          "100": "#e8e6e6",
          "200": "#e9e4e4",
        },
        gray: "#8a898c",
        lightgray: {
          "100": "#e0cfcf",
          "200": "#d4c9c9",
        },
      },
      fontFamily: {
        inter: "Inter",
        "iowan-old-style": "'Iowan Old Style'",
        arial: "Arial",
      },
      borderRadius: {
        "10xs": "3px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "8xs": "5px",
      "10xs": "3px",
      "9xs": "4px",
      xs: "12px",
      "5xs": "8px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
