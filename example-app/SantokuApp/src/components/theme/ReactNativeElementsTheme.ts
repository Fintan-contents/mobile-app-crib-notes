import {AppTheme} from './AppTheme';

export const getReactNativeElementsTheme = (appTheme: AppTheme) => {
  const colors = appTheme.colors;
  return {
    // Buttonはタイプによってスタイルが変わるのでここでは設定しない
    Text: {
      style: {
        color: colors.text,
      },
      h1Style: {
        color: colors.textStrong,
      },
      h2Style: {
        color: colors.textStrong,
      },
      h3Style: {
        color: colors.textStrong,
      },
      h4Style: {
        color: colors.textStrong,
      },
    },
    Input: {
      style: {
        fontSize: 17,
        color: colors.text,
        includeFontPadding: false,
      },
      labelStyle: {
        fontSize: 15,
        fontWeight: 'normal',
        color: colors.text,
      },
      containerStyle: {
        paddingHorizontal: 0,
      },
      inputContainerStyle: {
        borderBottomColor: colors.borderStrong,
        borderBottomWidth: 2,
      },
      errorStyle: {
        fontSize: 12,
        color: colors.error,
        includeFontPadding: false,
      },
    },
  };
};
