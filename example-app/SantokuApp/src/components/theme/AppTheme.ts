export type AppTheme = {
  name: string;
  colors: {
    background: string;
    backgroundHeader: string;
    backgroundBottomTab: string;
    backgroundSnackbar: string;
    text: string;
    textInverted: string;
    textStrong: string;
    textWeak: string;
    border: string;
    borderStrong: string;
    primary: string;
    primaryVariant: string;
    secondary: string;
    secondaryVariant: string;
    inactive: string;
    danger: string;
    error: string;
    warning: string;
  };
};

export const lightModeAppTheme: AppTheme = {
  name: 'lightTheme',
  colors: {
    background: '#ffffff',
    backgroundHeader: '#fafafa',
    backgroundBottomTab: '#fafafa',
    backgroundSnackbar: '#404040',
    text: '#212935',
    textInverted: '#ffffff',
    textStrong: '#000000',
    textWeak: '#9e9e9e',
    border: '#e0e0e0',
    borderStrong: '#9e9e9e',
    primary: '#3a6be8',
    primaryVariant: '#85a3f1',
    secondary: '#e8b73a',
    secondaryVariant: '#f8f3dd',
    inactive: '#e0e0e0',
    danger: '#d33246',
    error: '#d33246',
    warning: '#e8b73a',
  },
};

export const darkModeAppTheme: AppTheme = {
  ...lightModeAppTheme,
  name: 'darkTheme',
};
