/*eslint-disable */

module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', '@react-native-community'],
  plugins: ['prettier', 'detox'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 1,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx'],
      },
    ],
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
