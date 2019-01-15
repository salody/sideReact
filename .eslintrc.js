module.exports = {
  parser: "babel-eslint",
  extends: 'standard',
  plugins: ['standard', 'promise', 'json'],
  rules: {
    'handle-callback-err': 0,
    'space-before-function-paren': 0,
    'key-spacing': [2, { mode: 'minimum', align: 'value' }],
    'no-callback-literal': 0,
    'no-new': 0
  },
  globals: {
    // configure global variables avoid no-undef error
    CONFIG: true
  }
}
