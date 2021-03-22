module.exports = {
  reference: {
    このドキュメントについて: ['reference/index'],
    セキュリティ: ['reference/security/awesome-sites'],
    認証: [
      'reference/auth/authn-architecture',
      'reference/auth/login-screens',
      'reference/auth/manage-credentials',
      'reference/auth/stateless-authn',
      'reference/auth/webassets-integration',
    ],
    プッシュ通知: [
      'reference/notification/overview',
      'reference/notification/infrastructure',
      'reference/notification/configuration',
      'reference/notification/backend',
      'reference/notification/client',
    ],
  },
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
};
