import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useAppTheme} from 'bases/ui/theme/useAppTheme';
import {useMemo} from 'react';

export const useDefaultScreenOptions: () => NativeStackNavigationOptions = () => {
  const appTheme = useAppTheme();
  return useMemo(
    () => ({
      contentStyle: {
        backgroundColor: appTheme.colors.background,
      },
      headerStyle: {backgroundColor: appTheme.colors.backgroundHeader},
      headerTitleStyle: {
        fontSize: 17,
        color: appTheme.colors.textStrong,
      },
    }),
    [appTheme.colors.background, appTheme.colors.backgroundHeader, appTheme.colors.textStrong],
  );
};
