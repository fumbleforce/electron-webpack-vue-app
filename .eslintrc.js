module.exports = {
  /* your base configuration of choice */
  extends: ["eslint:recommended", "plugin:prettier/recommended"],

  parser: "babel-eslint",

  parserOptions: {
    sourceType: "module"
  },

  env: {
    browser: true,
    node: true
  },

  globals: {
    __static: true
  },

  plugins: ["html", "prettier"],

  rules: {
    "no-console": "off",
    "prettier/prettier": "error"
  }
};
