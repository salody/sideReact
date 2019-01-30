module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:node/recommended"
  ],
  plugins: ["standard", "promise", "json"],
  rules: {
    "handle-callback-err": 0,
    "space-before-function-paren": 0,
    "key-spacing": [2, { mode: "minimum", align: "value" }],
    "no-callback-literal": 0,
    "no-new": 0,
    "no-tabs": 0,
    "node/no-unpublished-require": 0,
    "node/no-unsupported-features/es-syntax": 0
  },
  globals: {
    // configure global variables avoid no-undef error
    API: true,
    document: true
  }
};
