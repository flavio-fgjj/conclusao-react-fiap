module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": "off",
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
