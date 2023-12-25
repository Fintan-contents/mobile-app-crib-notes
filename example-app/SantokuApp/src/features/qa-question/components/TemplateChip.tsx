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

import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import React from 'react';

type TemplateChipProps = {
  isActive?: boolean;
  text: string;
  onPress: () => void;
};

export const TemplateChip: React.FC<TemplateChipProps> = ({text, isActive, onPress}) => (
  <StyledTouchableOpacity onPress={onPress}>
    <Box px="p12" py="p4" backgroundColor={isActive ? 'grey1' : 'grey2'} borderRadius="p16">
      <Text fontSize={14} lineHeight={20}>
        {text}
      </Text>
    </Box>
  </StyledTouchableOpacity>
);
