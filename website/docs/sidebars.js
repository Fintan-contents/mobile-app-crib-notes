module.exports = {
  reference: [
    {
      type: 'doc',
      id: 'reference',
    },
    {
      type: 'category',
      label: 'セキュリティ',
      items: ['reference/security/awesome-sites'],
    },
    {
      type: 'category',
      label: '認証',
      items: [
        'reference/auth/overview',
        'reference/auth/authn-architecture',
        'reference/auth/login-screens',
        'reference/auth/manage-credentials',
        'reference/auth/stateless-authn',
        'reference/auth/webassets-integration',
        'reference/auth/authn-with-backend-using-OIDC-and-device-authn',
      ],
    },
    {
      type: 'category',
      label: 'プッシュ通知',
      items: [
        'reference/notification/overview',
        'reference/notification/infrastructure',
        'reference/notification/configuration',
        'reference/notification/backend',
        'reference/notification/client',
      ],
    },
  ],
  distribution: [
    {
      type: 'doc',
      id: 'distribution',
    },
    {
      type: 'doc',
      id: 'distribution/ios-license',
    },
    {
      type: 'doc',
      id: 'distribution/usecase',
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
        'react-native/learn/getting-started/supplement',
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
          ],
        },
        {
          type: 'category',
          label: 'REST APIとの接続',
          items: [
            'react-native/learn/todo-app/networking/setting-up-local-server',
            'react-native/learn/todo-app/networking/generate-api-client',
            'react-native/learn/todo-app/networking/api-request',
            'react-native/learn/todo-app/networking/activity-indicator',
            'react-native/learn/todo-app/networking/activity-indicator-each-todo',
          ],
        },
        'react-native/learn/todo-app/screens/exercise',
      ],
    },
    {
      type: 'category',
      label: '応用編',
      items: ['react-native/learn/advance/react-navigation-param'],
    },
  ],
  pitfalls: [
    {
      type: 'doc',
      id: 'react-native/common-pitfalls',
    },
    {
      type: 'category',
      label: 'アプリを実行できない',
      items: [
        'react-native/common-pitfalls/overview',
        'react-native/common-pitfalls/unable-to-load-script',
        'react-native/common-pitfalls/debug-keystore-not-found',
        'react-native/common-pitfalls/react-native-cli-uninstall',
        'react-native/common-pitfalls/cant-build-in-xcode',
      ],
    },
  ],
  santoku: [
    {
      type: 'doc',
      id: 'react-native/santoku',
    },
    {
      type: 'doc',
      id: 'react-native/santoku/glossary',
    },
    {
      type: 'category',
      label: 'Requirements',
      items: [
        {
          type: 'doc',
          id: 'react-native/santoku/requirements',
        },
        {
          type: 'category',
          label: '機能要件',
          items: ['react-native/santoku/requirements/functional/overview'],
        },
        {
          type: 'category',
          label: '非機能要件',
          items: [
            'react-native/santoku/requirements/non-functional/overview',
            'react-native/santoku/requirements/non-functional/usability',
            'react-native/santoku/requirements/non-functional/system-method',
            'react-native/santoku/requirements/non-functional/performance',
            'react-native/santoku/requirements/non-functional/test-outline',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Application Architecture',
      items: [
        {
          type: 'doc',
          id: 'react-native/santoku/application-architecture',
        },
        {
          type: 'category',
          label: 'アプリのライフサイクル管理',
          items: [
            'react-native/santoku/application-architecture/life-cycle-management/overview',
            'react-native/santoku/application-architecture/life-cycle-management/initialization',
          ],
        },
        {
          type: 'category',
          label: 'メッセージ管理',
          items: [
            'react-native/santoku/application-architecture/message-configuration/overview',
            'react-native/santoku/application-architecture/message-configuration/load-message',
            'react-native/santoku/application-architecture/message-configuration/managed-message',
          ],
        },
        {
          type: 'category',
          label: 'ディープリンク',
          items: [
            'react-native/santoku/application-architecture/deep-link/overview',
            'react-native/santoku/application-architecture/deep-link/process-deep-link',
            'react-native/santoku/application-architecture/deep-link/create-deep-link',
            'react-native/santoku/application-architecture/deep-link/react-native-firebase',
          ],
        },
        {
          type: 'category',
          label: 'エラーハンドリング',
          items: [
            'react-native/santoku/application-architecture/error-handling/overview',
            'react-native/santoku/application-architecture/error-handling/how-to-handle-error',
            'react-native/santoku/application-architecture/http-api/http-api-error-handling',
            'react-native/santoku/application-architecture/webview/webview-error-handling',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Design',
      items: [
        {
          type: 'doc',
          id: 'react-native/santoku/design',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/design/screen-list/overview',
        },
        {
          type: 'doc',
          id: 'react-native/santoku/design/screen-transitions/overview',
        },
      ],
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
          label: '開発環境',
          items: [
            'react-native/santoku/development/development-environment',
            {
              type: 'autogenerated',
              dirName: 'react-native/santoku/development/development-environment',
            },
          ],
        },
        {
          type: 'category',
          label: '設計',
          items: [
            'react-native/santoku/development/design',
            'react-native/santoku/development/design/message-configuration',
          ],
        },
        {
          type: 'category',
          label: '実装',
          items: [
            'react-native/santoku/development/implement',
            'react-native/santoku/development/implement/message-configuration',
            'react-native/santoku/development/implement/app-launch-with-build-variants',
            'react-native/santoku/development/implement/cautions-on-using-firebase',
            'react-native/santoku/development/implement/configurations',
          ],
        },
        {
          type: 'category',
          label: 'ビルド',
          items: [
            'react-native/santoku/development/build-configuration',
            'react-native/santoku/development/build-configuration/build-variants',
            'react-native/santoku/development/build-configuration/build-type-configurations',
            'react-native/santoku/development/build-configuration/product-flavor-configurations',
          ],
        },
        {
          type: 'category',
          label: '開発に利用するツール',
          items: [
            'react-native/santoku/development/tools',
            'react-native/santoku/development/tools/vscode',
            'react-native/santoku/development/tools/flipper',
          ],
        },
        {
          type: 'doc',
          id: 'react-native/santoku/development/dependency-management',
        },
      ],
    },
    {
      type: 'category',
      label: 'Decision Records',
      items: [
        'react-native/santoku/decisions',
        'react-native/santoku/decisions/adr-001-error-handling',
        'react-native/santoku/decisions/adr-002-http-api-libraries',
        'react-native/santoku/decisions/adr-003-http-api-error-handling',
        'react-native/santoku/decisions/adr-004-deep-link',
        'react-native/santoku/decisions/adr-005-message',
      ],
    },
  ],
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
      type: 'doc',
      id: 'docusaurus/plugins',
    },
    {
      // TODO: ヘッダリンクの作り方: ['docusaurus/create-link-in-header'],
      // TODO: 目次の作り方: ['docusaurus/create-sidebar-toc'],
    },
  ],
};
