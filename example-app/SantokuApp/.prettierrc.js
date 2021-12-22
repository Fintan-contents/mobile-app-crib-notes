// https://prettier.io/docs/en/options.html
module.exports = {
  // https://prettier.io/docs/en/options.html#bracket-spacing
  // import {React} from 'React' のように、{}の間にスペースを含まないようにする。
  bracketSpacing: false,
  // https://prettier.io/docs/en/options.html#bracket-line
  // JSXのタグが複数行になったときに、最後の'>'の前で改行しない。
  bracketSameLine: true,
  // https://prettier.io/docs/en/options.html#deprecated-jsx-brackets
  // 【Deprecated】 JSXのタグが複数行になったときに、最後の'>'の前で改行しない。
  // IntelliJ IDEAのPrettierプラグインでbracketSameLineがまだサポートされていないようなので残しておく
  jsxBracketSameLine: true,
  // https://prettier.io/docs/en/options.html#quotes
  // ダブルクオートではなく、シングルクオートに統一する。
  singleQuote: true,
  // https://prettier.io/docs/en/options.html#trailing-commas
  // 配列などの最後の要素の後にもカンマを付けるようにする。（順番を入れ替えたりするときに行を入れ替えるだけで良くなるので便利です。）
  trailingComma: 'all',
  // https://prettier.io/docs/en/options.html#arrow-function-parentheses
  // アロー関数の引数に不要なカッコを付けないようにする。
  arrowParens: 'avoid',
};
