const baseUrl = '/mobile-app-crib-notes/';

// TODO: Copyrightのスタイルはもうちょっと（目立たないように）調整したい。
const copyright = `<p>Copyright © ${new Date().getFullYear()} TIS Inc. Built with <a href="https://v2.docusaurus.io/">Docusaurus</a>.</p><p>
  ドキュメントは、<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">クリエイティブ・コモンズ 表示 - 継承 4.0 国際 ライセンス</a
  >の下に提供されており、コードサンプルは<a rel="license" href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a
  >の下に提供されています。
</p>

<div style="display:flex; justify-content: space-between; align-items: flex-start;">
  <p>
    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"
      ><img
        alt="クリエイティブ・コモンズ・ライセンス"
        style="border-width: 0; height: auto;"
        src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
      />
    </a>
  </p>
  <p>
    <a href="${baseUrl}trademark/" class="footer__link-item">商標について</a>
  </p>
</div>
`

module.exports = {
  title: 'Fintan › Mobile App',
  tagline: '',
  url: 'https://fintan-contents.github.io',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://fintan.jp/wp-content/themes/fintan-luxeritas-child-theme_2.70/assets/favicon.ico',
  organizationName: 'fintan-contents', // Usually your GitHub org/user name.
  projectName: 'mobile-app-crib-notes', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Fintan › Mobile App',
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
            {
              label: 'Guide (React Native)',
              to: 'react-native/guide',
            },
            {
              label: 'Learn (React Native)',
              to: 'react-native/learn',
            },
          ],
        },
        {
          title: 'Fintan',
          items: [
            {
              label: 'SPA + REST API構成のサービス開発リファレンス',
              href: 'https://fintan.jp/?p=5952'
            },
            {
              label: 'Tag: React Native',
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
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
