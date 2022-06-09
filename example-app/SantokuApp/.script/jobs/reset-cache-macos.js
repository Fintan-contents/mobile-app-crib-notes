module.exports = [
  // iOS related build artifacts and caches
  {
    name: 'Delete iOS build artifacts',
    enabled: true,
    commands: [
      {
        command: 'rm',
        args: ['-rf', 'build'],
        cwd: 'ios',
      },
      {
        command: 'xcodebuild',
        args: ['-alltargets', 'clean'],
        cwd: 'ios',
      },
    ],
  },
  {
    name: 'Delete Xcode build cache',
    enabled: true,
    commands: [
      {
        command: 'xcrun',
        args: ['--kill-cache'],
        cwd: 'ios',
      },
    ],
  },
  {
    name: 'Erase all content and settings from Simulator',
    enabled: true,
    commands: [
      {
        command: 'xcrun',
        args: ['simctl', 'shutdown', 'all'],
      },
      {
        command: 'xcrun',
        args: ['simctl', 'erase', 'all'],
      },
    ],
  },
  {
    name: 'Delete Xcode caches',
    enabled: true,
    commands: [
      {
        command: 'rm',
        args: ['-rf', '~/Library/Caches/com.apple.dt.Xcode/'],
      },
      {
        command: 'rm',
        args: ['-rf', '~/Library/Developer/Xcode/DerivedData'],
      },
      {
        command: 'rm',
        args: ['-rf', '~/Library/Developer/Xcode/iOS\\ DeviceSupport/*/Symbols/System/Library/Caches'],
      },
      {
        command: 'rm',
        args: ['-rf', '$(getconf DARWIN_USER_CACHE_DIR)/org.llvm.clang/ModuleCache'],
      },
      {
        command: 'rm',
        args: ['-rf', '$(getconf DARWIN_USER_CACHE_DIR)/org.llvm.clang.$(whoami)/ModuleCache'],
      },
    ],
  },
  {
    name: 'Delete CocoaPods cache',
    enabled: true,
    commands: [
      {
        command: 'bundle',
        args: ['exec', 'pod', 'cache', 'clean', '--all'],
        cwd: 'ios',
      },
    ],
  },
  {
    name: 'Delete ios/Pods directory',
    enabled: true,
    commands: [
      {
        command: 'rm',
        args: ['-rf', 'ios/Pods'],
      },
    ],
  },

  // Android related build artifacts and caches
  {
    name: 'Delete Android build artifacts and build cache',
    enabled: true,
    commands: [
      {
        command: 'bash',
        args: ['./gradlew', 'clean'],
        cwd: 'android',
      },
      {
        command: 'bash',
        args: ['./gradlew', '--stop'],
        cwd: 'android',
      },
    ],
  },

  // React Native related build artifacts and caches
  {
    name: 'Delete watchman cache',
    enabled: true,
    commands: [
      {
        command: 'watchman',
        args: ['watch-del-all'],
      },
    ],
  },
  {
    name: 'Delete React Native cache',
    enabled: true,
    commands: [
      {
        command: 'rm',
        args: ['-rf', '$TMPDIR/react-*'],
      },
    ],
  },
  {
    name: 'Delete Metro bundler cache',
    enabled: true,
    commands: [
      {
        command: 'rm',
        args: ['-rf', '$TMPDIR/metro-*'],
      },
      {
        command: 'rm',
        args: ['-rf', '$TMPDIR/haste-map-metro-*'],
      },
    ],
  },
  {
    name: 'Delete NPM modules',
    enabled: true,
    commands: [
      {
        command: 'rm',
        args: ['-rf', 'node_modules'],
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
      {
        command: 'npm',
        args: ['-s', 'run', 'pod-install'],
      },
    ],
  },
];
