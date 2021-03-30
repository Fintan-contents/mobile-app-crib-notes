// https://github.com/DavidAnson/markdownlint#rules--aliases
module.exports = {
  default: true,
  // ul-indent: Hugoの定義リスト内でのインデントが誤検知されてしまうので無効化
  MD007: false,
  // line-length: 80文字は短すぎる
  MD013: false,
  // no-inline-html: HugoのShort Codesが誤検知されてしまうので無効化
  MD033: false,
};
