module.exports = {
  title: 'Fintan - Mobile',
  tagline: '',
  url: 'https://fintan-contents.github.io/mobile-app-crib-notes',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fintan-contents', // Usually your GitHub org/user name.
  projectName: 'mobile-app-crib-notes', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fintan',
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
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
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
