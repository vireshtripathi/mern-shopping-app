/** @type {import('tailwindcss').Config} */

const colors = {
  brand: "#63B48F",
  platinum: "#E4E4E4",
  nero: "#222222",
  dimGray: "#717171",
  neutral: "#F3F3F6",
  silver: "#BABABA",
  lightRed: "#FFF1EC",
};

module.exports = {
  content: [
    "./atoms/*.js",
    "./atoms/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
    "./components/**/**/*.js",
    "./components/**/**/**/*.js",
    "./molecules/*.js",
    "./molecules/**/*.js",
    "./molecules/**/**/*.js",
    "./molecules/**/**/**/*.js",
    "./organisms/*.js",
    "./organisms/**/*.js",
    "./organisms/**/**/*.js",
    "./organisms/**/**/**/*.js",
    "./pages/*.js",
    "./pages/**/*.js",
    "./pages/**/**/*.js",
    "./pages/**/**/**/*.js",
    "./templates/*.js",
    "./templates/**/*.js",
    "./templates/**/**/*.js",
    "./templates/**/**/**/*.js",
  ],
  theme: {
    extend: {
      borderColor: () => ({
        ...colors,
      }),

      backgroundColor: () => ({
        ...colors,
      }),

      textColor: () => ({
        ...colors,
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
