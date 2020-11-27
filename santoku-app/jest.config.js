module.exports = {
  preset: 'jest-expo',
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: '/__tests__/.*\\.[jt]sx?$',
  coverageReporters: ['html', 'cobertura'],
};
