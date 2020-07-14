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
      // FIXME: ここは全て空にしなくてはいけない。
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
  rules: {
    'no-undef': 'off',
  },
};
