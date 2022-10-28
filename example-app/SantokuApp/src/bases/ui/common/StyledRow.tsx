import {BoxProps} from '@shopify/restyle';
import React from 'react';

import {RestyleTheme} from '../theme/restyleTheme';
import {getSpacedChildren} from './getSpacedChildren';
import {Box} from './index';
import {StyledSpaceProps} from './types';

export const StyledRow: React.FC<
  React.PropsWithChildren<Omit<BoxProps<RestyleTheme>, 'flexDirection'> & Partial<StyledSpaceProps>>
> = ({space, children, ...rest}) => {
  return (
    <Box flexDirection="row" {...rest}>
      {space ? getSpacedChildren(children, space, 'row') : children}
    </Box>
  );
};
