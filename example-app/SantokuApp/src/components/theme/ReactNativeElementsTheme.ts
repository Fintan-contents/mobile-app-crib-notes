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
  };
};
