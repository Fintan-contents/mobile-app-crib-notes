const path = require('path');
const baseUrl = '/mobile-app-crib-notes/';

if (!process.env.CI) {
  process.env.GITHUB_REPOSITORY = __dirname.toLowerCase().includes('ws-4020')
    ? 'ws-4020/mobile-app-crib-notes'
    : 'fintan-contents/mobile-app-crib-notes';
}

const injector = (options) => {
  const keys = Object.keys(options);
  const placeHolders = keys.map((key) => new RegExp('{@inject: *' + key + '}'));
  return inject;
  function inject(tree) {
    if (tree.type === 'root' || tree.type === 'element') {
      tree.children = tree.children.map(inject);
      if (tree.tagName === 'a' && tree.properties?.href) {
        const href = decodeURI(tree.properties.href);
        if (hasPlaceHolder(href)) {
          tree.properties.href = encodeURI(replace(href));
        }
      }
    }
    if (tree.type === 'text' && hasPlaceHolder(tree.value)) {
      tree.value = replace(tree.value);
    }
    return tree;
  }

  function hasPlaceHolder(value) {
    return value && value.includes('{@inject:');
  }

  function replace(value) {
    return keys.reduce((replaced, key, index) => {
      return replaced.replace(placeHolders[index], options[key]);
    }, value);
  }
};

// for debug
console.debug(`GITHUB_REPOSITORY: ${process.env.GITHUB_REPOSITORY}`);

const isDraft = !!process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.toLowerCase().startsWith('ws-4020');
const organization = isDraft ? 'ws-4020' : 'fintan-contents';

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
`;

const injectOptions = {
  organization,
  rnSpoilerTag: '2021.05.0',
};

module.exports = {
  title: 'Fintan » Mobile App Development',
  tagline: '',
  url: `https://${organization}.github.io`,
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: organization, // Usually your GitHub org/user name.
  projectName: 'mobile-app-crib-notes', // Usually your repo name.
  noIndex: isDraft,
  i18n: {
    defaultLocale: 'ja-JP',
    locales: ['ja-JP'],
  },
  themeConfig: {
    hideableSidebar: true,
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
    prism: {
      additionalLanguages: ['ruby', 'groovy'],
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Fintan Mobile App',
        src: 'img/fintan-logo-long.svg',
        href: 'https://fintan.jp',
      },
      items: [
        {
          label: 'Home',
          to: '/',
          activeBaseRegex: `${baseUrl}?$`,
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
              position: 'left',
            },
            ...(process.env.NODE_ENV === 'development'
              ? [{label: 'Example App', to: 'react-native/santoku', position: 'left'}]
              : []),
            {
              label: 'ハマりがちな落とし穴',
              to: 'react-native/common-pitfalls',
              position: 'left',
            },
          ],
        },
        ...(process.env.NODE_ENV === 'development' ? [{label: 'Docusaurus', to: 'docusaurus', position: 'left'}] : []),
        {
          href: `https://github.com/${organization}/mobile-app-crib-notes`,
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
              label: 'ハマりがちな落とし穴',
              to: 'react-native/common-pitfalls',
            },
            ...(process.env.NODE_ENV === 'development'
              ? [{label: 'Example App', to: 'react-native/santoku', position: 'left'}]
              : []),
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
              href: 'https://fintan.jp/?tag=react-native',
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
          routeBasePath: '/',
          showLastUpdateTime: true,
          rehypePlugins: [[injector, injectOptions]],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
    path.resolve(__dirname, 'src/plugins/medium-zoom-docusaurus-plugin'),
  ],
};
