module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-console': 0,
    'no-restricted-exports': 0,
    'default-param-last': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 0,
    'react/react-in-jsx-scope': 0,
    'no-unused-vars': 0,
    'no-nested-ternary': 0,
    semi: 0,
    'import/no-unresolved': 0,
    'no-undef': 0,
    camelcase: 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'sx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
};
