const baseUrl = '/mobile-app-crib-notes/';

// TODO: Copyrightのスタイルはもうちょっと（目立たないように）調整したい。
const copyright = `<div class="no-content">
<div class="copyright">
  <div class="copyrightImage">
    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" style="border-width: 0; height: auto;" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
  </div>
  <div class="copyrightText">
    ドキュメントは、<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</a
    >の下に提供されており、コードサンプルは<a rel="license" href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a
    >の下に提供されています。
  </div>
</div>
<div class="supplementary">
  <a href="${baseUrl}trademark/" class="footer__link-item">商標について</a>
</div>
</div>
`

module.exports = {
  title: 'Fintan » Mobile App Development',
  tagline: '',
  url: 'https://fintan-contents.github.io',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://fintan.jp/wp-content/themes/fintan-luxeritas-child-theme_2.70/assets/favicon.ico',
  organizationName: 'fintan-contents', // Usually your GitHub org/user name.
  projectName: 'mobile-app-crib-notes', // Usually your repo name.
  i18n: {
    defaultLocale: 'ja-JP',
    locales: ['ja-JP']
  },
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Fintan » Mobile App',
      logo: {
        alt: 'Fintan Logo',
        src: 'https://fintan.jp/wp-content/themes/fintan-luxeritas-child-theme_2.70/assets/favicon.ico',
      },
      items: [
        {
          label: 'Reference',
          to: 'reference',
          position: 'left',
        },
        {
          label: 'React Native',
          items: [
            {
              label: 'Guide',
              to: 'react-native/guide',
              position: 'left',
            },
            {
              label: 'Learn',
              to: 'react-native/learn',
              position: 'left',
            },
            {
              label: 'Troubleshoot',
              to: 'react-native/troubleshooting',
              position: 'left',
            },
          ]
        },
        {
          label: 'GitHub',
          href: 'https://github.com/fintan-contents/mobile-app-crib-notes',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contents',
          items: [
            {
              label: 'Reference',
              to: 'reference',
            },
          ],
        },
        {
          title: 'React Native',
          items: [
            {
              label: 'Guide',
              to: 'react-native/guide',
            },
            {
              label: 'Learn',
              to: 'react-native/learn',
            },
          ],
        },
        {
          title: 'Related Work',
          items: [
            {
              label: 'Fintan',
              href: 'https://fintan.jp'
            },
            {
              label: 'SPA + REST API構成のサービス開発リファレンス',
              href: 'https://fintan.jp/?p=5952'
            },
            {
              label: 'Fintan » React Native',
              href: 'https://fintan.jp/?tag=react-native'
            },
          ]
        }
      ],
      copyright
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./docs/sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
