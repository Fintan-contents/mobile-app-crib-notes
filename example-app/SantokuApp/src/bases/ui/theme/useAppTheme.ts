import {createUseContextAndProvider} from 'bases/core/contexts/createUseContextAndProvider';

import {AppTheme} from './AppTheme';

export const [useAppTheme, AppThemeContextProvider] = createUseContextAndProvider<AppTheme>();
