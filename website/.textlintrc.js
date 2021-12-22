module.exports = {
  filters: {
    comments: true,
  },
  plugins: {
    '@textlint/markdown': {
      extensions: ['.mdx'],
    },
  },
  rules: {
    'preset-ja-technical-writing': {
      'sentence-length': {
        max: 100,
        exclusionPatterns: ['/\\(.*\\)/'],
      },
      'ja-no-mixed-period': {
        allowPeriodMarks: [':::'],
      },
      'max-kanji-continuous-len': {
        max: 6,
        allow: [
          '業務委託先社員',
          '不具合発生状況',
          '後方互換性評価',
          '非機能要件定義',
          '非機能要件評価',
          '内閣府消費動向調査',
          '利用規約同意画面',
          '利用規約同意状態確認'
        ],
      },
    },
    'preset-jtf-style': {
      '2.2.1.ひらがなと漢字の使い分け': true,
    },
    'textlint-rule-preset-ja-spacing': true,
    prh: {
      rulePaths: ['./prh.yaml'],
    },
  },
};
