/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,ts}"],
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
        header: "url(./assets/images/header.png)",
        benefits: "url(./assets/images/benefits.png)",
        "header-small": "url(./assets/images/heading-small.png)",
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
        "orange-400": "#FBB040",
        "gray-200": "#F9F9FB",
      },
      fontSize : {
        "5xl" :"3.75rem",
        "4.5xl" : "2.5rem"
      }
    },
  },
  plugins: [],
};
