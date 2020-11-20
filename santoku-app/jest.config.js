module.exports = {
  preset: 'jest-expo',
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: '/__tests__/.*\\.[jt]sx?$',
  coverageReporters: ['html', 'cobertura'],
  transformIgnorePatterns: [
    'node_modules/(?!' +
      '(jest-)?react-native|' +
      '@react-native-community|' +
      'expo(nent)?|' +
      '@expo(nent)?/.*|' +
      'react-navigation|' +
      '@react-navigation/.*|' +
      '@unimodules/.*|' +
      'unimodules|' +
      'sentry-expo|' +
      'native-base|' +
      'react-native-svg|' +
      '@codler/react-native-keyboard-aware-scroll-view' +
      ')',
  ],
};
