module.exports = {
  // universe/native: https://github.com/expo/expo/tree/master/packages/eslint-config-universe
  // react-hooks: https://ja.react.dev/learn/editor-setup#linting
  extends: ['universe/web', 'plugin:react-hooks/recommended'],
  overrides: [
    {
      // universe/shared/typescript-analysis: https://github.com/expo/expo/tree/master/packages/eslint-config-universe
      // recommended-requiring-type-checking: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
      extends: ['universe/shared/typescript-analysis', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['src/plugins/medium-zoom-docusaurus-plugin/index.js', 'src/plugins/fix-footnote-order-plugin/index.js'],
      env: {
        node: true,
      },
    },
  ],
};
