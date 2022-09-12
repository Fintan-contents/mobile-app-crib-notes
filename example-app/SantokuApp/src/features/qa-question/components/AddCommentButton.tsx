import {m} from 'bases/message/Message';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {ChatBubbleOutlineIllustration} from 'bases/ui/illustration/ChatBubbleOutlineIllustration';
import React from 'react';

type AddCommentButtonType = {
  onPress: () => void;
};
export const AddCommentButton: React.FC<AddCommentButtonType> = ({onPress}) => {
  return (
    <StyledTouchableOpacity py="p16" flexDirection="row" justifyContent="center" alignItems="center" onPress={onPress}>
      <ChatBubbleOutlineIllustration color="blue" />
      <Box p="p4" />
      <Text color="blue">{m('コメントを追加する')}</Text>
    </StyledTouchableOpacity>
  );
};
