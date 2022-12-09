module.exports = [
  // Android related build artifacts and caches
  {
    name: 'Delete Android build artifacts and build cache',
    enabled: true,
    commands: [
      {
        command: 'gradlew',
        args: ['clean'],
        cwd: 'android',
      },
      {
        command: 'gradlew',
        args: ['--stop'],
        cwd: 'android',
      },
    ],
  },

  // React Native related build artifacts and caches
  {
    name: 'Delete React Native cache',
    enabled: true,
    commands: [
      {
        command: 'del',
        args: ['/F', '/Q', '%temp%\\react-*'],
      },
    ],
  },
  {
    name: 'Delete Metro bundler cache',
    enabled: true,
    commands: [
      {
        command: 'del',
        args: ['/F', '/Q', '%temp%\\metro-*'],
      },
      {
        command: 'del',
        args: ['/F', '/Q', '%temp%\\haste-map-metro-*'],
      },
    ],
  },
  {
    name: 'Delete NPM modules',
    enabled: true,
    commands: [
      {
        command: 'del',
        args: ['/F', '/Q', 'node_modules'],
      },
      {
        command: 'npm',
        args: ['cache', 'verify'],
      },
    ],
  },
  {
    name: 'Clean install NPM modules and Pods',
    enabled: true,
    commands: [
      {
        command: 'npm',
        args: ['-s', 'clean-install'],
      },
    ],
  },
];
