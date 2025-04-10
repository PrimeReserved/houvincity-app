import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        xs: "450px",
        // => @media (min-width: 450px) { ... }
  
        sm: "575px",
        // => @media (min-width: 576px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "992px",
        // => @media (min-width: 992px) { ... }
  
        xl: "1200px",
        // => @media (min-width: 1200px) { ... }
  
        '2xl': '1536px',
                // => @media (min-width: 1200px) { ... }

      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        heroText: "#CDD0CB",
        // primary: "#4A6CF7",
        primary: "#6DBA3A",
        yellow: "#FBB040",
        // PR PRIMARY COLOR
        customPrimary: "#040A3B",
        // PR SECONDARY COLOR
        customSecondary: "#0E0014",
        // BODY TEXT COLOR
        customTextColor: "#79747E",
        customBg: "#F9ECFF",
        customError: "#B3261E",
        customSuccess: "#21B31E",
        "body-color": "#788293",
        "gray-dark": "#1E232E",
        "gray-light": "#F0F2F9",
        stroke: "#E3E8EF",
        anotherGray: "#717171",
        anotherBlack: "#000528",
        anotherwhite: "#F4F4F4"
      },
    },
  },
  
  daisyui: {
    themes: [],
  },

  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    require('tailwindcss-animated'),
  ],
};

export default config;
