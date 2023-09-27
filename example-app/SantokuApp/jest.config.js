module.exports = {
  preset: 'jest-expo',
  // __mocks__ディレクトリをjestディレクトリ内に配置したいので、ルートディレクトリにjestを設定しています。
  roots: ['<rootDir>/src', 'jest'],
  setupFiles: [
    '<rootDir>/jest/setup/global.js',
    '<rootDir>/jest/setup/netinfo.js',
    '<rootDir>/jest/setup/react-native.js',
    '<rootDir>/jest/setup/react-native-gesture-handler.js',
    '<rootDir>/jest/setup/react-native-reanimated.js',
    '<rootDir>/jest/setup/react-native-safe-area-context.js',
    '<rootDir>/jest/setup/react-query.js',
    '<rootDir>/jest/setup/useFocusEffect.js',
  ],
  // https://jestjs.io/ja/docs/configuration#clearmocks-boolean
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/src/features/backend/apis/',
    '<rootDir>/src/features/sandbox/apis/',
    '<rootDir>/src/apps/app/screens/',
    '<rootDir>/src/features/[^/]+/pages/',
  ],
  moduleNameMapper: {
    // Barcode.tsxでESMのコードを直接importしているため、以下のエラーが発生する
    // SyntaxError: Cannot use import statement outside a module
    // そのため、トランスパイルされたソースコードにマッピングする
    '^jsbarcode/src/barcodes/CODE128/CODE128$': 'jsbarcode/bin/barcodes/CODE128/CODE128.js',
    '^jsbarcode/src/barcodes/CODE128/CODE128_AUTO$': 'jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js',
  },
};
