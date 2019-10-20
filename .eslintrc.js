module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": 0,
    "no-param-reassign": 0,
    "no-console": 0,
    "eqeqeq": 0,
    "camelcase": 0,
    "no-const-assign": 0,
    "no-plusplus": 0,
    "linebreak-style": 0,
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
  },
};
