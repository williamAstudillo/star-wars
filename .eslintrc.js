module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:@next/next/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "arrow-body-style": 0,
    "react/jsx-props-no-spreading": "off",
    // "no-unused-vars": "off",
    "import/no-unresolved": "off",
    "react/prop-types":"off"
  },
};
