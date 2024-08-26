/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "460px",
      "mid-sm": "600px",
      "high-sm": "720px",
      md: "917px",
      lg: "1100px",
      xl: "1320px",
    },
    extend: {
      backgroundImage: {
        travel: "url(./assets/images/travel.png)",
        "travel-small": "url(./assets/images/travel-small.png)",
      },
      backgroundPosition: {
        start: "initial",
      },
      backgroundColor: {
        "black-19": "rgba(0,0,0,19%)",
        "gray-300": "#F7F7F7",
        "green-600": "#2FAC66",
      },
      colors: {
        "green-700": "#2DB674",
      },
    },
  },
  plugins: [],
};
