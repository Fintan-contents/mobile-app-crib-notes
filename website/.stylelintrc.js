module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "selector-class-pattern": null,
    // Safariが16.4以降（2023/03/27リリース）にしか対応していないので一旦無効化
    // https://caniuse.com/css-media-range-syntax
    "media-feature-range-notation": null,
  }
}
