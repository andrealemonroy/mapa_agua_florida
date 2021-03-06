module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#C1BADC",
      secondary: "#F18338",
      danger: "#e3342f",
      mmOrange: '#ea8644ff',
      mmPurple: '#64599eff',
      mmGray: '#bbb7bd'
    }),
    colors:{
      primary: "#C1BADC",
      mmPurple: '#64599eff',
      mmOrange: '#ea8644ff',
      white: "#fff",
      black: "#000",
      mmGray: '#bbb7bd'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
