module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-undef': 0,
    'no-console': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
  },
};
