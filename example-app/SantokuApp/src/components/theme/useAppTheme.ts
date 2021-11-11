import {useContext} from 'react';

import {AppThemeContext} from './AppThemeContext';

export const useAppTheme = () => {
  return useContext(AppThemeContext);
};
