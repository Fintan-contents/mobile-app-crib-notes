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
