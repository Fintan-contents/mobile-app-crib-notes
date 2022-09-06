import {m} from 'bases/message/Message';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';

type TagClearProps = {
  onPress?: () => void;
};

export const TemplateClearChip: React.FC<TagClearProps> = ({onPress}) => (
  <StyledTouchableOpacity marginRight="p8" paddingHorizontal="p8" paddingVertical="p4" onPress={onPress}>
    <Text fontSize={14} lineHeight={20}>
      {m('クリア')}
    </Text>
  </StyledTouchableOpacity>
);
