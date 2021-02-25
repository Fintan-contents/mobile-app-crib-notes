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
    プッシュ通知: ['doc1', 'doc2', 'doc3'],
  },
  guide: {
    About: ['react-native/guide'],
    環境構築: ['react-native/guide/environment-setup'],
    画面遷移: ['react-native/guide/screen-transitions'],
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
        {
          type: 'category',
          label: 'ToDoアプリの実装',
          items: [
            'react-native/learn/todo-app/app-hands-on',
            'react-native/learn/todo-app/app-hands-on/welcome',
            'react-native/learn/todo-app/app-hands-on/login',
            'react-native/learn/todo-app/app-hands-on/keyboard-avoiding-view'
          ],
        },
      ],
    },
  ],
  troubleshoot: {
    About: ['react-native/troubleshooting'],
    アプリを実行できない: [
      'react-native/troubleshooting/unable-to-load-script',
      'react-native/troubleshooting/debug-keystore-not-found',
      'react-native/troubleshooting/cant-build-in-xcode',
    ],
  },
};
