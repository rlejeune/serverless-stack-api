module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],
    'class-methods-use-this': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'linebreak-style': 'off',
    'no-unused-vars': 1,
  },
};
