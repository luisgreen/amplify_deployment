module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'eol-last': ['error', 'always'],
  },
};
