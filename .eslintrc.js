module.exports = {
  /* your base configuration of choice */
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/base"
  ],

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },

  env: {
    browser: true,
    node: true
  },

  globals: {
    __static: true
  },

  plugins: ["vue", "prettier"],

  rules: {
    "no-console": "off",
    "prettier/prettier": "error"
  }
};
