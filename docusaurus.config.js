module.exports = {
  title: 'React Native - Fintan',
  tagline: '',
  url: 'https://fintan-contents.github.io',
  baseUrl: '/mobile-app-crib-notes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fintan-contents', // Usually your GitHub org/user name.
  projectName: 'mobile-app-crib-notes', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'React Native - Fintan',
      logo: {
        alt: 'Fintan Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          label: 'Docs',
          position: 'left',
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
      // TODO: Setup footer links.
      links: [
        {
          title: 'Contents',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: 'Guide',
              to: 'docs/doc2/',
            },
            {
              label: 'Learn',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Related',
          items: [
            {
              label: 'Fintan',
              href: 'https://fintan.jp'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TIS Inc. Built with <a href="https://v2.docusaurus.io/">Docusaurus</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./docs/sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
