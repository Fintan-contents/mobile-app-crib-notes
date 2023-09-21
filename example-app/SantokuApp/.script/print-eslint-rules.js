const lodash = require('lodash');
const urlJoin = require('url-join');
const {exec} = require('node:child_process');

const eslint = {
  name: 'eslint',
  url: 'https://eslint.org/docs/latest',
  rulesRootPath: 'rules',
  hasPagePerRule: true,
  description: 'ESLintが提供するルールです。',
};

/**
 * @property {string} name プラグイン名
 * @property {string?} prefix ルール名のプレフィックス（この値がルール名の最初にあるかどうかでプラグインを判定します）
 * @property {string?} url プラグインのURL
 * @property {string?} rulesRootPath ルールが記載されているドキュメントのトップページ（urlからの相対パスを指定します）
 * @property {string?} extension ルールページの拡張子
 * @property {boolean?} hasPagePerRule ルール毎のページがある場合はtrueを設定します
 */
const plugins = [
  eslint,
  {
    name: '@typescript-eslint',
    prefix: '@typescript-eslint',
    url: 'https://typescript-eslint.io/',
    rulesRootPath: 'rules',
    hasPagePerRule: true,
    description: 'TypeScriptに特化したルールを提供するプラグインです。',
  },
  {
    name: 'eslint-plugin-import',
    prefix: 'import',
    url: 'https://github.com/import-js/eslint-plugin-import',
    rulesRootPath: 'blob/main/docs/rules',
    extension: '.md',
    hasPagePerRule: true,
    description: 'ES moduleの`import`/`export`構文に関するルールを提供するプラグインです。',
  },
  {
    name: 'eslint-plugin-eslint-comments',
    prefix: 'eslint-comments',
    url: 'https://mysticatea.github.io/eslint-plugin-eslint-comments',
    rulesRootPath: 'rules',
    extension: '.html',
    hasPagePerRule: true,
    description: '`eslint-disable`のようなディレクティブコメントの使用に関するルールを提供するプラグインです。',
  },
  {
    name: 'eslint-plugin-react-hooks',
    prefix: 'react-hooks',
    url: 'https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks',
    description: 'React Hooksに関するルールを提供するプラグインです。',
  },
  {
    name: 'eslint-plugin-prettier',
    prefix: 'prettier',
    url: 'https://github.com/prettier/eslint-plugin-prettier',
    description: 'ESLintでPrettierを実行し、Prettierのルールに違反する箇所をESLintの警告やエラーとして検出するプラグインです。',
  },
  {
    name: 'eslint-plugin-react',
    prefix: 'react',
    url: 'https://github.com/jsx-eslint/eslint-plugin-react',
    rulesRootPath: 'blob/master/docs/rules',
    extension: '.md',
    hasPagePerRule: true,
    description: 'Reactに関するルールを提供するプラグインです。',
  },
  {
    name: 'eslint-plugin-strict-dependencies',
    prefix: 'strict-dependencies',
    url: 'https://github.com/knowledge-work/eslint-plugin-strict-dependencies',
    description: '`Module`の依存性に関するルールを提供するプラグインです。',
  },
  {
    name: 'eslint-plugin-deprecation',
    prefix: 'deprecation',
    url: 'https://github.com/gund/eslint-plugin-deprecation',
    description: '非推奨コードの使用を検出するプラグインです。',
  },
  {
    name: 'eslint-plugin-node',
    prefix: 'node',
    url: 'https://github.com/mysticatea/eslint-plugin-node',
    rulesRootPath: 'blob/master/docs/rules',
    extension: '.md',
    hasPagePerRule: true,
    description: 'Node.jsに関するルールを提供するプラグインです。',
  },
  {
    name: 'eslint-plugin-jest',
    prefix: 'jest',
    url: 'https://github.com/jest-community/eslint-plugin-jest',
    rulesRootPath: 'blob/main/docs/rules',
    extension: '.md',
    hasPagePerRule: true,
    description: 'Jestに関するルールを提供するプラグインです。',
  },
];

const isDisabled = level => {
  // https://eslint.org/docs/latest/use/configure/configuration-files-new#rule-severities
  if (typeof level === 'number' && level === 0) {
    return true;
  }
  return level === 'off';
};

/**
 * 以下の形式でルールページを作成します。
 * [プラグインURL]/[ルールページのルートパス]/[プレフィックスを除いたルール名][拡張子]
 */
const generateRuleUrl = ({prefix, url, rulesRootPath, extension = '', hasPagePerRule, rule}) => {
  if (hasPagePerRule) {
    const rulePagePath = rule.replace(prefix, '') + extension;
    return urlJoin(url, rulesRootPath, rulePagePath);
  }
  return url;
};

const tableHeader = `|ルール|レベル|推奨設定からの変更|\n|:--|:--|:--|`;
const transformToTableRow = ({rule, ruleUrl, level}) => `|[${rule}](${ruleUrl})|${level}|-|`;
const transformToH3 = ({pluginName, pluginUrl}) => `### [${pluginName}](${pluginUrl})`;

/**
 * ESLintのルール一覧をマークダウン形式で標準出力します。
 * 出力形式は以下とします。
 * H3: プラグイン名
 * プラグイン概要
 * Table: 以下のカラムを表示します。
 *   - ルール名
 *   - レベル
 *   - 推奨設定からの変更（このツールでは、全て「-」を設定）
 *
 * e.g.
 * ### [@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
 *
 * TypeScriptに特化したルールを提供するプラグインです。

 * |ルール|レベル|推奨設定からの変更|
 * |:--|:--|:--|
 * |[@typescript-eslint/array-type](https:/github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/array-type.md)|warn|-|
 * |[@typescript-eslint/await-thenable](https:/github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/await-thenable.md)|error|-|
 */
const print = json => {
  const jsonObject = JSON.parse(json);
  const rules = [];
  const warns = [];

  for (const [rule, value] of Object.entries(jsonObject.rules)) {
    const level = value[0];
    if (isDisabled(level)) {
      continue;
    }

    const found = plugins.find(plugin => rule.startsWith(plugin.prefix));
    if (!found) {
      if (rule.includes('/')) {
        warns.push(`[WARN] プラグイン情報が定義されていません。ルール名: ${rule}`);
        continue;
      }
    }
    // プレフィックスがない場合は、eslintのルールとする
    const plugin = found ?? eslint;
    const pluginName = plugin.name;
    const pluginUrl = plugin.url;
    const ruleUrl = generateRuleUrl({...plugin, rule});
    const description = plugin.description;

    rules.push({
      pluginName,
      pluginUrl,
      rule,
      ruleUrl,
      level,
      description,
    });
  }

  const grouped = lodash.groupBy(rules, 'pluginName');

  const pluginMarkdowns = Object.entries(grouped)
    .sort((a, b) => a[0].localeCompare(b[0])) // プラグイン名でsort
    .map(([pluginName, rules]) => {
      const pluginUrl = rules[0].pluginUrl;
      const description = rules[0].description;
      rules.sort((a, b) => a.rule.localeCompare(b.rule)); // ルール名でsort
      const h3 = transformToH3({pluginName, pluginUrl});
      const rows = rules.map(transformToTableRow);
      return `${h3}\n\n${description}\n\n${tableHeader}\n${rows.join('\n')}`;
    });

  // プラグインとそのルール一覧を標準出力
  console.log(pluginMarkdowns.join('\n\n'));
  // プラグイン情報が定義されていないルールについては、WARNとして標準出力
  if (warns.length) {
    console.log(warns.join('\n'));
  }
};

const printConfigDefaultPath = 'src/apps/app/App.tsx';
const execEslintWithPrintConfig = () =>
  new Promise((resolve, reject) => {
    const targetPath = process.argv[2] ?? printConfigDefaultPath;
    // npm run lint:esだと、eslintを実行するパスが指定されていて--print-configを指定できなかったので、npxを使う
    const command = `npx eslint --ext .jsx,.js,.tsx,.ts --print-config ${targetPath}`;
    exec(command, (err, stdout) => {
      if (err) reject(err);
      else resolve(stdout);
    });
  });

execEslintWithPrintConfig().then(print);
