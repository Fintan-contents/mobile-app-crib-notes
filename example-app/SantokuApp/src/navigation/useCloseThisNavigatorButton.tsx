import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {GestureResponderEvent, Platform} from 'react-native';
import {Button} from 'react-native-elements';

type HeaderRightCloseButtonProps = {
  tintColor?: string;
  onPress: (event: GestureResponderEvent) => void;
};

const HeaderRightCloseButton: React.FC<HeaderRightCloseButtonProps> = ({tintColor, onPress}) => {
  if (Platform.OS === 'android') {
    return null;
  }

  return <Button title="閉じる" type="clear" titleStyle={{color: tintColor}} onPress={onPress} />;
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
    <HeaderRightCloseButton tintColor={tintColor} onPress={closeThisNavigator} />
  );

  return {CloseThisNavigatorButton};
};
