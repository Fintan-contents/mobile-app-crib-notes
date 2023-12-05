/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as SplashScreen from 'expo-splash-screen';

const hideSplashScreen = async () => {
  // スプラッシュスクリーンを閉じる前に100ms程度は待たないと、コンポーネントのレンダリングが完了せず画面が一瞬白くなってしまいます。
  // expo-app-loadingでも200ms待っているので、ここでも200ms待つようにしています。
  // cf: https://github.com/expo/expo/blob/sdk-41/packages/expo-app-loading/src/AppLoadingNativeWrapper.tsx#L27
  await new Promise(resolve => setTimeout(resolve, 200));
  try {
    await SplashScreen.hideAsync();
  } catch {
    // 既にSplashScreenが消えていた場合はそのまま継続
  }
};

export {hideSplashScreen};
