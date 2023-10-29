// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MainBlack: ["MainBlack"],
        MainBold: ["MainBold"],
        MainLight: ["MainLight"],
        MainRegular: ["MainRegular"],
        MainMedium: ["MainMedium"],
        MainThin: ["MainThin"],
        MainExtraBold: ["MainExtraBold"],
        MainExtraLight: ["MainExtraLight"],
        MainSemiBold: ["MainSemiBold"],
      },
    },
  },
  plugins: [],
};
