let colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: false,
    content: ["./src/*.js"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: { colors },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
