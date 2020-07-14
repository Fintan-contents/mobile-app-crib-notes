module.exports = {
  root: true,
  extends: ['@react-native-community'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      },
      // TODO: ここでも `@react-native-community` を設定する必要はある？
      extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
    },
  ],
};
