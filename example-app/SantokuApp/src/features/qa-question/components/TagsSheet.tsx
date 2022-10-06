import {m} from 'bases/message/Message';
import {BottomSheet} from 'bases/ui/bottom-sheet/BottomSheet';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {TagIllustration} from 'bases/ui/illustration/TagIllustration';
import {Tag as TagType} from 'features/backend/apis/model';
import React, {useCallback, useState} from 'react';

import {Tag} from './Tag';

type TagSheetProps = {
  tags?: TagType[];
  isVisible: boolean;
  initialSelectedTagIds: string[];
  select: (tagIds: string[]) => void;
};
export const TagsSheet: React.FC<TagSheetProps> = ({tags, isVisible, initialSelectedTagIds, select}) => {
  const [selectedTagIds, setSelectedTagIds] = useState(initialSelectedTagIds);
  const selectTag = useCallback(
    (value: string) => {
      if (selectedTagIds.includes(value)) {
        setSelectedTagIds(v => v.filter(i => i !== value));
      } else {
        setSelectedTagIds(v => [...v, value]);
      }
    },
    [selectedTagIds],
  );

  const clear = useCallback(() => setSelectedTagIds([]), []);

  const selectTags = useCallback(() => select(selectedTagIds), [select, selectedTagIds]);
  const isActive = useCallback((tagId: string) => selectedTagIds.includes(tagId), [selectedTagIds]);

  return (
    // TODO: BottomSheetは暫定的な実装です。
    <BottomSheet isVisible={isVisible} containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)'}}>
      <StyledColumn p="p16" bg="white" borderTopLeftRadius="p16" borderTopRightRadius="p16">
        <StyledRow justifyContent="space-between" alignItems="center">
          <TagIllustration />
          <StyledRow space="p8">
            <StyledTouchableOpacity px="p8" py="p2" onPress={clear}>
              <Text fontSize={14} lineHeight={20}>
                {m('クリア')}
              </Text>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity px="p8" py="p2" onPress={selectTags}>
              <Text fontSize={14} lineHeight={20} color="blue">
                {m('決定')}
              </Text>
            </StyledTouchableOpacity>
          </StyledRow>
        </StyledRow>
        <StyledSpace height="p24" />
        <StyledRow flex={1} flexWrap="wrap">
          {tags?.map(tag => (
            <StyledTouchableOpacity key={tag.tagId} marginBottom="p8" onPress={() => selectTag(tag.tagId)}>
              <Tag text={tag.tagName} isActive={isActive(tag.tagId)} />
            </StyledTouchableOpacity>
          ))}
        </StyledRow>
      </StyledColumn>
    </BottomSheet>
  );
};
