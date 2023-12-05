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

import {useNavigation} from '@react-navigation/native';
import {StyledTouchableOpacity} from 'bases/ui/common';
import {CloseIllustration} from 'bases/ui/illustration/CloseIllustration';
import React, {useCallback} from 'react';
import {GestureResponderEvent} from 'react-native';

type HeaderRightCloseButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
};

const HeaderCloseButton: React.FC<HeaderRightCloseButtonProps> = ({onPress}) => {
  return (
    <StyledTouchableOpacity onPress={onPress} p="p8">
      <CloseIllustration />
    </StyledTouchableOpacity>
  );
};

type CloseThisNavigatorButtonProps = {
  tintColor?: string;
};

export const useCloseThisNavigatorButton = () => {
  // 親のナビゲータから、ナビゲーションプロパティを取得する。
  const navigation = useNavigation();

  // 親のナビゲータから取得したナビゲーションプロパティなので、goBackで戻ると親のナビゲータ上で戻ることになる。
  // そのため、このスタックナビゲータ自身が閉じられる。
  // もしこのスタックナビゲータ内で画面遷移していたとしても、それらの画面遷移を「戻る」のではなく、スタックナビゲータが「閉じる」。
  const closeThisNavigator = useCallback(() => navigation.goBack(), [navigation]);

  // NativeStackNavigatorのheaderRightに合わせたコンポーネント。
  const CloseThisNavigatorButton: React.FC<CloseThisNavigatorButtonProps> = ({tintColor}: {tintColor?: string}) => (
    <HeaderCloseButton onPress={closeThisNavigator} />
  );

  return {CloseThisNavigatorButton};
};
