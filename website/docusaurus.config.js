const productionOrganization = 'fintan-contents';
const draftOrganization = 'ws-4020';
const project = 'mobile-app-crib-notes';

const organization = process.env.GITHUB_REPOSITORY?.toLowerCase()?.startsWith(`${productionOrganization}/`)
  ? productionOrganization
  : draftOrganization;
const isDraft = organization === draftOrganization;

const copyright = `<div class="no-content">
<div class="copyright">
  ドキュメントは、<a rel="license" href="https://fintan.jp/?page_id=201" target="_blank">Fintan コンテンツ 使用許諾条項</a
  >の下に提供されており、コードサンプルは<a rel="license" href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0 License</a
  >の下に提供されています。
</div>
<div class="supplementary">
  <a href="/${project}/terms-of-use/" class="footer__link-item">当サイトのご利用にあたって</a>
  <a href="/${project}/trademark/" class="footer__link-item">商標について</a>
</div>
</div>
`;

const injectOptions = {
  organization,
  rnSpoilerTag: 'master',
};

module.exports = {
  title: 'Fintan » Mobile App Development',
  tagline: '',
  url: `https://${organization}.github.io`,
  baseUrl: `/${project}/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: organization, // Usually your GitHub org/user name.
  projectName: project, // Usually your repo name.
  noIndex: isDraft,
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      additionalLanguages: ['ruby', 'groovy'],
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Fintan Mobile App',
        src: 'img/fintan-logo.jpg',
        href: 'https://fintan.jp',
      },
      items: [
        {
          label: 'Home',
          to: '/',
          activeBaseRegex: `${project}?$`,
          position: 'left',
        },
        {
          label: 'Reference',
          to: 'reference',
          position: 'left',
        },
        {
          label: 'Distribution',
          to: 'distribution',
          position: 'left',
        },
        {
          label: 'React Native',
          items: [
            {
              label: 'Learn',
              to: 'react-native/learn',
            },
            {
              label: 'Example App',
              to: 'react-native/santoku',
            },
            {
              label: 'Pitfalls',
              to: 'react-native/common-pitfalls',
            },
          ],
        },
        ...(process.env.NODE_ENV === 'development' ? [{label: 'Docusaurus', to: 'docusaurus', position: 'left'}] : []),
        {
          href: `https://github.com/${organization}/${project}`,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'Learn',
              to: 'react-native/learn',
            },
            {
              label: 'Example App',
              to: 'react-native/santoku',
            },
            {
              label: 'Pitfalls',
              to: 'react-native/common-pitfalls',
            },
          ],
        },
        {
          title: 'Related Work',
          items: [
            {
              label: 'Fintan',
              href: 'https://fintan.jp',
            },
            {
              label: 'SPA + REST API構成のサービス開発リファレンス',
              href: 'https://fintan.jp/?p=5952',
            },
            {
              label: 'Fintan » React Native',
              href: 'https://fintan.jp/blog-tag/react-native',
            },
          ],
        },
      ],
      copyright,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./docs/sidebars.js'),
          breadcrumbs: false,
          routeBasePath: '/',
          showLastUpdateTime: true,
          rehypePlugins: [[require('./src/plugins/literal-injector-rehype-plugin'), injectOptions]],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: '../example-app/api-document/openapi.yaml',
            route: '/react-native/santoku/design/api-document',
          },
        ],
        theme: {
          primaryColor: '#3578e5',
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/auth/overview', // string | string[]
            to: '/reference/auth/overview', // string
          },
          {
            from: '/docs/notes-in-mobile-application-development', // string | string[]
            to: '/reference/security/awesome-sites', // string
          },
          {
            from: '/docs/auth/how-to-display-login-page', // string | string[]
            to: '/reference/auth/login-screens', // string
          },
          {
            from: '/docs/auth/management-of-log-in-credentials', // string | string[]
            to: '/reference/auth/manage-credentials', // string
          },
          {
            from: '/docs/auth', // string | string[]
            to: '/reference/auth/authn-architecture', // string
          },
          {
            from: '/docs/auth/authn-architecture', // string | string[]
            to: '/reference/auth/authn-architecture', // string
          },
          {
            from: '/docs/webassets-integration', // string | string[]
            to: '/reference/auth/webassets-integration', // string
          },
          {
            from: '/docs/auth/stateless-authn', // string | string[]
            to: '/reference/auth/stateless-authn', // string
          },
          {
            from: '/docs/auth/authn-with-backend-using-OIDC-and-device-authn', // string | string[]
            to: '/reference/auth/authn-with-backend-using-OIDC-and-device-authn', // string
          },
          {
            from: '/docs', // string | string[]
            to: '/reference', // string
          },
        ],
      },
    ],
    './src/plugins/medium-zoom-docusaurus-plugin',
    './src/plugins/fix-footnote-order-plugin',
  ],
  scripts: [
    // Add plausible script only when built on GitHub Actions.
    !!process.env.GITHUB_REPOSITORY && {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': `${organization}.github.io,all.fintan`,
    },
  ].filter(Boolean),
};
