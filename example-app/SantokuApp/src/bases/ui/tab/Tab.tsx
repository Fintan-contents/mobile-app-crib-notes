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

import {StyledTouchableOpacity, Text} from '../common';

export type TabProps = {
  isActive?: boolean;
  text: string;
  onPress?: () => void;
  children?: React.ReactElement;
};

export const Tab = ({isActive, text, onPress}: TabProps) => (
  <StyledTouchableOpacity
    key={text}
    flex={1}
    justifyContent="center"
    alignItems="center"
    padding="p8"
    onPress={onPress}
    borderBottomColor={isActive ? 'orange1' : 'divider'}
    borderBottomWidth={isActive ? 2 : 1}
    disabled={isActive}>
    <Text fontSize={16} lineHeight={24} fontWeight="700" color={isActive ? 'black' : 'grey1'}>
      {text}
    </Text>
  </StyledTouchableOpacity>
);
