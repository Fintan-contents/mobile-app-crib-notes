// To show all ESLint rules, run the following command.
// npx eslint --print-config src/App.tsx

module.exports = {
  plugins: ['strict-dependencies'],
  root: true,
  extends: [
    // universe/native: https://github.com/expo/expo/tree/master/packages/eslint-config-universe
    'universe/native',
    'plugin:react-hooks/recommended',
    // eslint-comments/recommended: https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
    'plugin:eslint-comments/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      plugins: ['deprecation'],
      rules: {
        'deprecation/deprecation': 'error', // or "error" to have stricter rule
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      // universe/shared/typescript-analysis: https://github.com/expo/expo/tree/master/packages/eslint-config-universe
      // recommended-requiring-type-checking: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
      extends: ['universe/shared/typescript-analysis', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      // https://github.com/jest-community/eslint-plugin-jest#shareable-configurations
      extends: ['plugin:jest/recommended'],
      rules: {
        // you should turn the original rule off *only* for test files
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Disallow @ts-<directive> comments or require descriptions after directives.
        // https://typescript-eslint.io/rules/ban-ts-comment/
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
          },
        ],
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        // It is too strict to prohibit passing async functions to `onPress`, so disable the rule in JSX.
        '@typescript-eslint/no-misused-promises': [
          'error',
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
      },
    },
    {
      files: ['metro.config.js'],
      env: {
        node: true,
      },
    },
  ],
  ignorePatterns: [
    'src/features/backend/apis/**/*.ts',
    'src/features/sandbox/apis/**/*.ts',
    'src/features/acknowledgements/constants/ThirdPartyDependencies.ts',
    'config/plugin/build/**',
  ],
  rules: {
    'strict-dependencies/strict-dependencies': [
      'error',
      [
        {
          module: 'apps/**',
          allowReferenceFrom: ['src/apps/**'],
        },
        {
          module: 'features/**',
          allowReferenceFrom: ['src/apps/**', 'src/features/**', 'src/fixtures/**'],
        },
        {
          module: 'bases/**',
          allowReferenceFrom: ['src/apps/**', 'src/features/**', 'src/bases/**', 'src/fixtures/**'],
        },
        {
          module: '@react-navigation/**',
          allowReferenceFrom: [
            'src/apps/**',
            'src/bases/focus-manager/**',
            'jest/types/global.d.ts',
            'jest/__mocks__/@react-navigation/**',
            'src/@types/**',
          ],
        },
      ],
    ],
    // https://eslint.org/docs/latest/rules/curly
    curly: ['error', 'all'],
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html
    'eslint-comments/no-unused-disable': 'error',
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html
    'eslint-comments/no-use': ['error', {allow: ['eslint-disable-line', 'eslint-disable-next-line']}],
    // https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
    'eslint-comments/require-description': 'error',
  },
};
