/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        primary_1: "#495E57",
        primary_2: "#F4CE14",
        secondary_1: "#EE9972",
        secondary_2: "#FBDABB",
        secondary_3: "#EEDDEE",
        secondary_4: "#333333",
      },
    },
  },
  plugins: [],
};
