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

import {usePrevious} from 'bases/core/utils/usePrevious';
import {useVisibility} from 'bases/core/utils/useVisibility';
import {useWorkletCallback} from 'bases/core/utils/useWorkletCallback';
import {useCallback, useEffect} from 'react';
import {BackHandler, NativeEventSubscription} from 'react-native';

type BackdropAnimationConfig = {
  isVisible: boolean;
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
};

export const useOverlayBackdrop = ({isVisible, enteringCallback, exitingCallback}: BackdropAnimationConfig) => {
  const {isVisible: isOverlayVisible, setVisible: show, setInvisible: setOverlayInvisible} = useVisibility(isVisible);

  const composedEnteringCallback = useWorkletCallback(enteringCallback);
  const composedExitingCallback = useWorkletCallback(
    useCallback(
      (finished: boolean) => {
        setOverlayInvisible();
        if (exitingCallback) {
          exitingCallback(finished);
        }
      },
      [setOverlayInvisible, exitingCallback],
    ),
  );

  const isVisiblePrevious = usePrevious(isVisible);
  useEffect(() => {
    if (!isVisiblePrevious && isVisible) {
      show();
    }
  }, [isVisible, isVisiblePrevious, show]);

  useEffect(() => {
    // Androidの仮想バックキーの制御
    // オーバレイ表示中は仮想バックキーをタップしても何も動作しないようにする
    let subscription: NativeEventSubscription | undefined;
    if (isOverlayVisible) {
      subscription = BackHandler.addEventListener('hardwareBackPress', () => true);
    }
    return () => {
      subscription?.remove();
    };
  }, [isOverlayVisible]);

  return {
    isOverlayVisible,
    show,
    composedEnteringCallback,
    composedExitingCallback,
  };
};
