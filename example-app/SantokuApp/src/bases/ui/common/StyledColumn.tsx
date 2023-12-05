/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {BoxProps} from '@shopify/restyle';
import React from 'react';

import {getSpacedChildren} from './getSpacedChildren';
import {Box} from './index';
import {StyledSpaceProps} from './types';
import {RestyleTheme} from '../theme/restyleTheme';

export const StyledColumn: React.FC<
  React.PropsWithChildren<Omit<BoxProps<RestyleTheme>, 'flexDirection'> & Partial<StyledSpaceProps>>
> = ({space, children, ...rest}) => {
  return (
    <Box flexDirection="column" {...rest}>
      {space ? getSpacedChildren(children, space, 'column') : children}
    </Box>
  );
};
