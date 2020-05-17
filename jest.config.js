module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/react-native/cleanup-after-each'],
  testPathIgnorePatterns: ['/node_modules', '/e2e/'],
};
