module.exports = {
  content: [
    './content/**/*.{md,html,js}',
    './layouts/**/*.{html,js}',
    './themes/**/layouts/**/*.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: "#fffcf9",
        lightgray: "#ede3d9",
        gray: "#c4b1a2",
        darkgray: "#7d6b5d",
        dark: "#352b24",
        primary: "#e07a5f",
        secondary: "#81b29a",
        accent: "#f2cc8f",
        highlight: "rgba(224, 122, 95, 0.15)",
        darkMode: {
          light: "#2b2427",
          lightgray: "#3d353a",
          gray: "#7a6c75",
          darkgray: "#d8c9d3",
          dark: "#f5ecf1",
        }
      },
      fontFamily: {
        header: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

