import React from 'react';
import { KeyboardAvoidingView as RNKeyboardAvoidingView, ScrollView, Platform, StatusBar, ScrollViewProps, StyleSheet } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';

type Props = {
  children: React.ReactNode;
  scrollViewProps?: ScrollViewProps;
};

const KeyboardAvoidingView: React.FC<Props> = ({ children, scrollViewProps }) => {
  const headerHeight = useHeaderHeight();

  return (
    // iOSで画面下部の入力項目がキーボードに隠れないようにする
    <RNKeyboardAvoidingView
      behavior={Platform.select({
        ios: 'padding',
        android: 'height',
      })}
      style={styles.container}
      keyboardVerticalOffset={Platform.select({
        ios: headerHeight,
        android: headerHeight + (StatusBar.currentHeight ?? 0),
      })}
    >
      {/* 一旦キーボードを表示して非表示にした時に、画面の高さが大幅に下に伸びてしまわないようにScrollViewを設定しておく */}
      <ScrollView {...scrollViewProps}>{children}</ScrollView>
    </RNKeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardAvoidingView;
