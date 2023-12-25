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

import {m} from 'bases/message/Message';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {ChatBubbleOutlineIllustration} from 'bases/ui/illustration/ChatBubbleOutlineIllustration';
import React from 'react';

type AddCommentButtonType = {
  onPress: () => void;
};
export const AddCommentButton: React.FC<AddCommentButtonType> = ({onPress}) => {
  return (
    <StyledTouchableOpacity py="p16" onPress={onPress}>
      <StyledRow space="p8" justifyContent="center" alignItems="center">
        <ChatBubbleOutlineIllustration color="blue" />
        <Text color="blue">{m('コメントを追加する')}</Text>
      </StyledRow>
    </StyledTouchableOpacity>
  );
};
