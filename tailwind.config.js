/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smMob: "22.5em", // 360px
      smTab: "32.5em", // 520px
      tab: "40em", // 640px
      lgTab: "45em", // 720px
      lap: "63.75em", // 1070px
    },
    colors: {
      purple: "#AD1FEA",
      pink: "#C75AF6",
      blue: "#4661E6",
      blueShade: "#7C91F9",
      navy: "#373F68",
      white: "#FFFFFF",
      slightWhite: "#CDD2EE",
      iceWhite: "#F2F4FF",
      offWhite: "#F7F8FD",
      lightNavy: "#3A4374",
      gray: "#647196",
      lightGray: "#8C92B3",
      orange: "#F49F85",
      lightBlue: "#62BCFA",
    },
    fontFamily: {
      jost: ["var(--font-jost)", "sans-serif"],
    },
    gridTemplateColumns: {
      mob: "24px repeat(10,1fr) 24px",
      smTab: "40px repeat(10,1fr) 40px",
      sortBarMob: "1fr auto",
      feebackBox: "1fr auto",
      feebackBoxTablet: "auto 1fr auto",
      lap: "40px auto 30px 1fr 40px",
      commentMob: "auto 1fr",
      commentTab: "auto 30px 1fr",
    },
    boxShadow: {
      sortDropdown: "0px 10px 40px -7px rgba(55, 63, 104, 0.35)",
    },
    extend: {},
  },
  plugins: [],
};
