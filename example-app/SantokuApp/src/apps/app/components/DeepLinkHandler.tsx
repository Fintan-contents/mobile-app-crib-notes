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
