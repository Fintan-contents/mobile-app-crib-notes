import * as SplashScreen from 'expo-splash-screen';

const hideSplashScreen = async () => {
  // スプラッシュスクリーンを閉じる前に100ms程度は待たないと、コンポーネントのレンダリングが完了せず画面が一瞬白くなってしまいます。
  // expo-app-loadingでも200ms待っているので、ここでも200ms待つようにしています。
  // cf: https://github.com/expo/expo/blob/sdk-41/packages/expo-app-loading/src/AppLoadingNativeWrapper.tsx#L27
  await new Promise(resolve => setTimeout(resolve, 200));
  try {
    await SplashScreen.hideAsync();
  } catch (e) {
    // 既にSplashScreenが消えていた場合はそのまま継続
  }
};

export {hideSplashScreen};
