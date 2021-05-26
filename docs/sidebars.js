module.exports = {
  reference: {
    このドキュメントについて: ['reference/index'],
    セキュリティ: ['reference/security/awesome-sites'],
    認証: [
      'reference/auth/overview',
      'reference/auth/authn-architecture',
      'reference/auth/login-screens',
      'reference/auth/manage-credentials',
      'reference/auth/stateless-authn',
      'reference/auth/webassets-integration',
      'reference/auth/authn-with-backend-using-OIDC-and-device-authn',
    ],
    プッシュ通知: [
      'reference/notification/overview',
      'reference/notification/infrastructure',
      'reference/notification/configuration',
      'reference/notification/backend',
      'reference/notification/client',
    ],
  },
  distribution: [
    {
      type: 'doc',
      id: 'distribution/index',
    },
    {
      type: 'doc',
      id: 'distribution/ios-license',
    },
    {
      type: 'doc',
      id: 'distribution/usecase/index',
    },
    {
      type: 'category',
      label: 'アプリケーションの配布方法',
      items: [
        {
          type: 'category',
          label: 'iOSアプリ',
          items: [
            'distribution/ios-developer-account',
            'distribution/ios-develop-certificate',
            'distribution/ios-in-house',
            'distribution/ios-testflight',
          ],
        },
        {
          type: 'category',
          label: 'Androidアプリ',
          items: [
            'distribution/android-local',
            'distribution/android-apk-dist',
            'distribution/android-google-play-test',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'アプリケーションのビルド',
      items: [
        'distribution/app-build/ios-build',
        'distribution/app-build/ios-build-setting',
        'distribution/app-build/android-build',
      ],
    },
  ],
  learn: [
    {
      type: 'doc',
      id: 'react-native/learn',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'react-native/learn/getting-started',
        'react-native/learn/getting-started/setting-up-development-environment',
        'react-native/learn/getting-started/create-project',
        'react-native/learn/getting-started/launch-created-app',
      ],
    },
    {
      type: 'category',
      label: 'アプリの実装前に',
      items: [
        'react-native/learn/basic-concepts',
        'react-native/learn/basic-concepts/pre-requisites',
        {
          type: 'category',
          label: 'React Nativeの基本',
          items: [
            'react-native/learn/basic-concepts/react-native-basics',
            {
              type: 'category',
              label: 'Components',
              items: [
                'react-native/learn/basic-concepts/react-native-basics/components',
                'react-native/learn/basic-concepts/react-native-basics/components/view',
                'react-native/learn/basic-concepts/react-native-basics/components/text',
                'react-native/learn/basic-concepts/react-native-basics/components/button',
                'react-native/learn/basic-concepts/react-native-basics/components/touchable-opacity',
                'react-native/learn/basic-concepts/react-native-basics/components/image',
                'react-native/learn/basic-concepts/react-native-basics/components/scroll-view',
                {
                  type: 'category',
                  label: 'Lists',
                  items: [
                    'react-native/learn/basic-concepts/react-native-basics/components/lists',
                    'react-native/learn/basic-concepts/react-native-basics/components/lists/flat-list',
                    'react-native/learn/basic-concepts/react-native-basics/components/lists/section-list',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Design',
              items: [
                'react-native/learn/basic-concepts/react-native-basics/design',
                'react-native/learn/basic-concepts/react-native-basics/design/style',
                'react-native/learn/basic-concepts/react-native-basics/design/height-and-width',
                'react-native/learn/basic-concepts/react-native-basics/design/flexbox',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'React Navigationの基本',
          items: [
            'react-native/learn/basic-concepts/react-navigation-basics',
            'react-native/learn/basic-concepts/react-navigation-basics/stack',
            'react-native/learn/basic-concepts/react-navigation-basics/modal',
            'react-native/learn/basic-concepts/react-navigation-basics/tab',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ToDoアプリの実装',
      items: [
        'react-native/learn/todo-app',
        'react-native/learn/todo-app/app-spec',
        'react-native/learn/todo-app/app-project-desc',
        {
          type: 'category',
          label: '画面の実装',
          items: [
            'react-native/learn/todo-app/screens/welcome',
            'react-native/learn/todo-app/screens/stack',
            'react-native/learn/todo-app/screens/auth',
            'react-native/learn/todo-app/screens/tab',
            'react-native/learn/todo-app/screens/modal',
            'react-native/learn/todo-app/screens/login',
            'react-native/learn/todo-app/screens/keyboard-avoiding-view',
            'react-native/learn/todo-app/screens/alert',
            'react-native/learn/todo-app/screens/todo-board',
            'react-native/learn/todo-app/screens/todo-form',
            'react-native/learn/todo-app/screens/use-focus-effect',
            'react-native/learn/todo-app/screens/basic-components',
            'react-native/learn/todo-app/screens/logo',
            'react-native/learn/todo-app/screens/exercise',
          ],
        },
        {
          type: 'category',
          label: 'REST APIとの接続',
          items: [
            'react-native/learn/todo-app/networking/setting-up-local-server',
            'react-native/learn/todo-app/networking/generate-api-client',
            'react-native/learn/todo-app/networking/api-request',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '応用編',
      items: ['react-native/learn/advance/react-navigation-param'],
    },
  ],
  pitfalls: {
    About: ['react-native/common-pitfalls'],
    アプリを実行できない: [
      'react-native/common-pitfalls/unable-to-load-script',
      'react-native/common-pitfalls/debug-keystore-not-found',
      'react-native/common-pitfalls/react-native-cli-uninstall',
      'react-native/common-pitfalls/cant-build-in-xcode',
    ],
  },
  ...(process.env.NODE_ENV === 'development'
    ? {
        santoku: [
          {
            type: 'doc',
            id: 'react-native/santoku',
          },
          {
            type: 'category',
            label: 'IDE',
            items: ['react-native/settings-vscode'],
          },
          {
            type: 'category',
            label: 'Development',
            items: [
              {
                type: 'doc',
                id: 'react-native/santoku/development',
              },
              {
                type: 'category',
                label: 'ビルド設定',
                items: [
                  'react-native/santoku/development/build-variants',
                  'react-native/santoku/development/build-type-configurations',
                  'react-native/santoku/development/product-flavor-configurations',
                ],
              },
            ],
          },
          {
            type: 'category',
            label: 'Tools',
            items: ['react-native/santoku/flipper'],
          },
        ],
      }
    : {}),
  ...(process.env.NODE_ENV === 'development'
    ? {
        docusaurus: [
          {
            type: 'doc',
            id: 'docusaurus/index',
          },
          {
            type: 'doc',
            id: 'docusaurus/doc1',
          },
          {
            type: 'doc',
            id: 'docusaurus/mdx',
          },
          {
            // TODO: ヘッダリンクの作り方: ['docusaurus/create-link-in-header'],
            // TODO: 目次の作り方: ['docusaurus/create-sidebar-toc'],
          },
        ],
      }
    : {}),
};
