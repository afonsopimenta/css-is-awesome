module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      "nesting-rules": false,
      autoprefixer: false,
    },
  },
}
