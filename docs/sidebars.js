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
      id: 'distribution/ios_lisence',
    },
    {
      type: 'doc',
      id: 'distribution/usecase/index',
    },
    {
      type: 'category',
      label: 'アプリケーションの配布',
      items: [
        {
          type: 'category',
          label: 'iOSアプリ',
          items: [
            'distribution/build/ios/developer_account',
            'distribution/build/ios/adp_local',
            'distribution/build/ios/adep_in_house',
            'distribution/build/ios/adp_testflight',
          ],
        },
        {
          type: 'category',
          label: 'Androidアプリ',
          items: [
            'distribution/build/android/local',
            'distribution/build/android/apk_dist',
            'distribution/build/android/google_play_test',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'アプリケーションのビルド',
      items: ['distribution/build/ios/overview', 'distribution/build/android/overview'],
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
        'react-native/learn/todo-app/welcome',
        'react-native/learn/todo-app/login',
        'react-native/learn/todo-app/keyboard-avoiding-view',
        'react-native/learn/todo-app/auth',
        'react-native/learn/todo-app/alert',
        'react-native/learn/todo-app/split-navigation',
        'react-native/learn/todo-app/navigation-hook',
        'react-native/learn/todo-app/tab',
        'react-native/learn/todo-app/todo-board',
        'react-native/learn/todo-app/todo-form',
        'react-native/learn/todo-app/use-focus-effect',
        'react-native/learn/todo-app/modal',
        'react-native/learn/todo-app/basic-components',
        'react-native/learn/todo-app/logo',
        'react-native/learn/todo-app/exercise',
      ],
    },
  ],
  troubleshoot: {
    About: ['react-native/troubleshooting'],
    アプリを実行できない: [
      'react-native/troubleshooting/unable-to-load-script',
      'react-native/troubleshooting/debug-keystore-not-found',
      'react-native/troubleshooting/react-native-cli-uninstall',
      'react-native/troubleshooting/cant-build-in-xcode',
    ],
  },
  ...(process.env.NODE_ENV === 'development'
    ? {
        santoku: [
          {
            type: 'doc',
            id: 'react-native/santoku',
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
