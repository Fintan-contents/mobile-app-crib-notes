const prepareBundler = [
  {
    name: 'Install bundle gems',
    enabled: true,
    commands: [
      {
        command: 'rm',
        args: ['-rf', '.bundle/vendor'],
      },
      {
        command: 'bundle',
        args: ['install'],
      },
    ],
  },
];

const resetCache = [
  {
    name: 'Reset cache',
    enabled: true,
    commands: [
      {
        command: 'npm',
        args: ['run', 'reset-cache'],
      },
    ],
  },
];

const buildAndroidVariantsUsingGradle = [
  'bundleDevSantokuAppDebug',
  'bundleDevSantokuAppDebugAdvanced',
  'bundleDevSantokuAppReleaseInHouse',
  'bundleDevSantokuAppRelease',
  'bundleSantokuAppDebug',
  'bundleSantokuAppDebugAdvanced',
  'bundleSantokuAppReleaseInHouse',
  'bundleSantokuAppRelease',
].map(task => {
  return {
    name: `Build app with Gradle (${task})`,
    enabled: true,
    commands: [
      {
        command: 'bash',
        args: ['./gradlew', task],
        cwd: 'android',
      },
    ],
  };
});

const buildIosVariantsUsingXcode = ['DevSantokuApp', 'SantokuApp'].flatMap(scheme => {
  return ['Debug', 'DebugAdvanced', 'ReleaseInHouse', 'Release'].map(configuration => {
    return {
      name: `Build app with Xcode (${scheme}, ${configuration})`,
      enabled: true,
      commands: [
        {
          command: 'xcodebuild',
          args: [
            '-scheme',
            scheme,
            '-configuration',
            configuration,
            '-workspace',
            'SantokuApp.xcworkspace',
            '-sdk',
            'iphonesimulator',
            'build',
          ],
          cwd: 'ios',
        },
      ],
    };
  });
});

const runAndroidVariants = [
  ['devSantokuAppDebug', 'dev.debug'],
  ['devSantokuAppDebugAdvanced', 'dev.debugAdvanced'],
  ['devSantokuAppReleaseInHouse', 'dev.house'],
  ['devSantokuAppRelease', 'dev'],
  ['santokuAppDebug', 'debug'],
  ['santokuAppDebugAdvanced', 'debugAdvanced'],
  ['santokuAppReleaseInHouse', 'house'],
  ['santokuAppRelease', '""'],
].map(([variant, suffix]) => {
  return {
    name: `Run app on Android (${variant})`,
    enabled: true,
    commands: [
      {
        command: 'npm',
        args: ['run', 'android', '--', '--variant', variant, '--appIdSuffix', suffix],
        cwd: 'android',
      },
    ],
  };
});

const runIosVariantsOnSimulator = ['DevSantokuApp', 'SantokuApp'].flatMap(scheme => {
  return ['Debug', 'DebugAdvanced', 'ReleaseInHouse', 'Release'].map(configuration => {
    return {
      name: `Build app with Xcode (${scheme}, ${configuration})`,
      enabled: true,
      commands: [
        {
          command: 'npm',
          args: ['run', 'ios', '--', '--scheme', scheme, '--configuration', configuration],
          cwd: 'ios',
        },
      ],
    };
  });
});

const runIosVariantsOnDevice = ['DevSantokuApp', 'SantokuApp'].flatMap(scheme => {
  return ['Debug', 'DebugAdvanced', 'ReleaseInHouse', 'Release'].map(configuration => {
    return {
      name: `Run app on iOS Simulator(${scheme}, ${configuration})`,
      enabled: !!process.env.IOS_DEVICE_NAME,
      commands: [
        {
          command: 'npm',
          args: [
            'run',
            'ios',
            '--',
            '--scheme',
            scheme,
            '--configuration',
            configuration,
            '--device',
            `"${process.env.IOS_DEVICE_NAME}"`,
          ],
          cwd: 'ios',
        },
      ],
    };
  });
});

const buildAllVariantsUsingFastlane = ['android', 'ios'].flatMap(platform => {
  return ['release', 'release_in_house', 'dev_release_in_house', 'debug_advanced', 'dev_debug_advanced'].map(lane => {
    return {
      name: `Build app with Fastlane (${platform}, ${lane})`,
      enabled: true,
      commands: [
        {
          command: 'bundle',
          args: ['exec', 'fastlane', platform, lane],
          env: {CI: 'true'},
        },
      ],
    };
  });
});

module.exports = [
  ...prepareBundler,
  ...resetCache,
  ...buildAndroidVariantsUsingGradle,
  ...buildIosVariantsUsingXcode,
  ...runAndroidVariants,
  ...runIosVariantsOnSimulator,
  ...runIosVariantsOnDevice,
  ...buildAllVariantsUsingFastlane,
];
