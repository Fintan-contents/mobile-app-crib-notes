import {m} from 'bases/message/Message';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import React from 'react';

type TagClearProps = {
  onPress?: () => void;
};

export const TemplateClearChip: React.FC<TagClearProps> = ({onPress}) => (
  <StyledTouchableOpacity px="p12" py="p4" onPress={onPress}>
    <Text fontSize={14} lineHeight={20}>
      {m('クリア')}
    </Text>
  </StyledTouchableOpacity>
);
