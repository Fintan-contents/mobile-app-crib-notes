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
