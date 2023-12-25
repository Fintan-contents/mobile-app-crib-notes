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

import React, {ReactNode} from 'react';

import {Box} from './index';
import {StyledSpacingKeys} from './types';

export const getSpacedChildren = (
  children: React.ReactNode[] | React.ReactNode,
  space: StyledSpacingKeys,
  direction: 'row' | 'column',
): ReactNode => {
  const childrenArray = React.Children.toArray(children);

  const spacingProp: object = direction === 'row' ? {pl: space} : {pt: space};
  return childrenArray.map((child, index) => {
    return (
      <React.Fragment key={`spaced-child-${index}`}>
        {child}
        {index < childrenArray.length - 1 && <Box {...spacingProp} />}
      </React.Fragment>
    );
  });
};
