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

import {NavigationContainerRef} from '@react-navigation/native';
import {useIsLoggedIn} from 'features/account/client-states/useIsLoggedIn';
import React, {PropsWithChildren, useEffect} from 'react';

import {useRedirectDeepLinkUrl} from '../client-states/useRedirectDeepLinkUrl';
import {RootStackParamList} from '../navigators/types';
import {addDeepLinkListener} from '../services/deep-link/addDeepLinkListener';
import {AppInitialData} from '../types/AppInitialData';
import {handleDeepLink} from '../use-cases/deep-link/handleDeepLink';

/**
 * ディープリンクURLに応じたハンドリングをするコンポーネントです。
 *
 * このコンポーネントは、NavigationContainerの親コンポーネント（もしくはそれより上位のコンポーネント）として配置する必要があります。
 * NavigationContainerよりも上位に配置することで、NavigationContainerの初期化が完了した後に、このコンポーネントのuseEffectが処理されます。
 * useEffect内では、NavigationContainerのnavigationRefを使用して、ディープリンクURLに応じた画面遷移を行います。
 */
export const DeepLinkHandler: React.FC<
  PropsWithChildren<{initialData: AppInitialData; navigationRef: NavigationContainerRef<RootStackParamList>}>
> = ({initialData, navigationRef, children}) => {
  const [redirectDeepLinkUrl, setRedirectDeepLinkUrl] = useRedirectDeepLinkUrl(initialData.deepLinkUrl);
  const [isLoggedIn] = useIsLoggedIn();

  // コールド・ウォームスタート、ログイン後のリダイレクト用
  useEffect(() => {
    if (isLoggedIn && redirectDeepLinkUrl) {
      handleDeepLink(redirectDeepLinkUrl, navigationRef);
      setRedirectDeepLinkUrl(undefined);
    }
  }, [isLoggedIn, navigationRef, redirectDeepLinkUrl, setRedirectDeepLinkUrl]);

  // ホットスタート用
  useEffect(() => {
    const subscription = addDeepLinkListener(url => {
      if (isLoggedIn) {
        handleDeepLink(url, navigationRef);
      } else {
        setRedirectDeepLinkUrl(url);
      }
    });
    return () => subscription.remove();
  }, [isLoggedIn, navigationRef, setRedirectDeepLinkUrl]);
  return <>{children}</>;
};
