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

import React from 'react';
import {Path, Circle} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';

export type PersonIllustrationProps = StyledSvgIconBaseProps;

export const PersonIllustration = ({size = 'p40', ...rest}: PersonIllustrationProps) => {
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 40 40" fill="none" {...rest}>
      <Circle cx="20" cy="20" r="20" fill="#E6E6E6" />
      <Path
        d="M20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20ZM20 22C17.33 22 12 23.34 12 26V28H28V26C28 23.34 22.67 22 20 22Z"
        fill="#B8B8B8"
      />
    </StyledSvgIconBase>
  );
};
