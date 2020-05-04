module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', '@react-native-community'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 1,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
  },
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
