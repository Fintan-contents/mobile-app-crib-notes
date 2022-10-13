import {m} from 'bases/message/Message';
import {BottomSheet} from 'bases/ui/bottom-sheet/BottomSheet';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {TagIllustration} from 'bases/ui/illustration/TagIllustration';
import {Tag as TagType} from 'features/backend/apis/model';
import React from 'react';

import {Tag} from './Tag';

type TagSheetProps = {
  tags?: TagType[];
  isVisible: boolean;
  clear: () => void;
  decide: () => void;
  close: () => void;
  selectTag(tagId: string): void;
  isActive(tagId: string): boolean;
};
export const TagSheet: React.FC<TagSheetProps> = ({tags, isVisible, clear, decide, close, selectTag, isActive}) => {
  return (
    <BottomSheet isVisible={isVisible} modalBackdropProps={{onPress: close}}>
      <Box p="p16" bg="white" borderTopLeftRadius="p16" borderTopRightRadius="p16">
        <StyledRow justifyContent="space-between" alignItems="center">
          <TagIllustration />
          <StyledRow space="p8">
            <StyledTouchableOpacity px="p8" py="p2" onPress={clear}>
              <Text fontSize={14} lineHeight={20}>
                {m('クリア')}
              </Text>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity px="p8" py="p2" onPress={decide}>
              <Text fontSize={14} lineHeight={20} color="blue">
                {m('決定')}
              </Text>
            </StyledTouchableOpacity>
          </StyledRow>
        </StyledRow>
        <StyledSpace height="p24" />
        <StyledRow flexWrap="wrap">
          {tags?.map(tag => (
            <StyledTouchableOpacity key={tag.tagId} marginBottom="p8" onPress={() => selectTag(tag.tagId)}>
              <Tag text={tag.tagName} isActive={isActive(tag.tagId)} />
            </StyledTouchableOpacity>
          ))}
        </StyledRow>
      </Box>
    </BottomSheet>
  );
};
