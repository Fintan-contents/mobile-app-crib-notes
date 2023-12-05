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

import {ColorProps} from '@shopify/restyle';
import {formatLargeNumber} from 'bases/core/utils/formatLargeNumber';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {ChatBubbleOutlineIllustration} from 'bases/ui/illustration/ChatBubbleOutlineIllustration';
import {RestyleTheme} from 'bases/ui/theme/restyleTheme';
import React from 'react';

type CommentButtonWithCountProps = {
  onPress: () => void;
  count: number;
} & ColorProps<RestyleTheme>;
export const CommentButtonWithCount: React.FC<CommentButtonWithCountProps> = ({onPress, count, color}) => {
  return (
    <StyledRow space="p8" alignItems="center">
      <StyledTouchableOpacity onPress={onPress}>
        <ChatBubbleOutlineIllustration color={color} />
      </StyledTouchableOpacity>
      <Text fontSize={14} lineHeight={20} letterSpacing={0.25}>
        {formatLargeNumber(count, 999)}
      </Text>
    </StyledRow>
  );
};
