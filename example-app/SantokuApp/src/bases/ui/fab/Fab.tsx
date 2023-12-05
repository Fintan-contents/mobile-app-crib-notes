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

import React, {useMemo} from 'react';

import {Box, StyledTouchableOpacity} from '../common';

export type FabProps = {
  size?: 'small' | 'medium';
  color?: 'blue' | 'white';
  onPress?: () => void;
};

export const Fab: React.FC<React.PropsWithChildren<FabProps>> = ({
  size = 'medium',
  color = 'blue',
  onPress,
  children,
}) => {
  const side = useMemo(() => {
    if (size === 'small') {
      return 40;
    } else {
      return 56;
    }
  }, [size]);
  const borderRadius = useMemo(() => {
    if (size === 'small') {
      return 'p20';
    } else {
      return 'p28';
    }
  }, [size]);
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <Box
        backgroundColor={color === 'blue' ? 'blue' : 'white'}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        shadowColor="black"
        shadowOffset={{width: 0, height: 4}}
        shadowRadius={4}
        shadowOpacity={0.35}
        elevation={1}
        borderRadius={borderRadius}
        margin="p8"
        width={side}
        height={side}>
        {children}
      </Box>
    </StyledTouchableOpacity>
  );
};
