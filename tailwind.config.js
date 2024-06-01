/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        customColor: "rgb(94, 234, 212)",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       p: {
      //         "text-align": "justify",
      //       },
      //     },
      //   },
      // }),
    },
  },
  plugins: [],
};
