import {m} from 'bases/message/Message';
import {BottomSheet} from 'bases/ui/bottom-sheet/BottomSheet';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {DoneIllustration} from 'bases/ui/illustration/DoneIllustration';
import {GetListQuestionsSort} from 'features/backend/apis/model';
import React from 'react';

const sortConditions: {value?: GetListQuestionsSort; label: string}[] = [
  {value: undefined, label: m('最新順')},
  {value: 'like', label: m('いいね順')},
  {value: 'update', label: m('更新日順')},
];

type SingleSelectableSortSheetProps = {
  isVisible: boolean;
  initialSelectedSort?: GetListQuestionsSort;
  select: (sort?: GetListQuestionsSort) => void;
  close: () => void;
};
export const SingleSelectableSortSheet: React.FC<SingleSelectableSortSheetProps> = ({
  isVisible,
  initialSelectedSort,
  select,
  close,
}) => {
  return (
    <BottomSheet isVisible={isVisible} modalBackdropProps={{onPress: close}}>
      <Box py="p16" bg="white" borderTopLeftRadius="p16" borderTopRightRadius="p16">
        {sortConditions.map((condition, index) => {
          return (
            <StyledTouchableOpacity key={condition.value ?? index} onPress={() => select(condition.value)}>
              <StyledRow py="p16" justifyContent="center" alignItems="center">
                <Box flex={1} alignItems="center">
                  {initialSelectedSort === condition.value && <DoneIllustration color="blue" />}
                </Box>
                <Text variant="font16Regular">{condition.label}</Text>
                <Box flex={1} />
              </StyledRow>
              {index < sortConditions.length - 1 && <Box height={1} px="p16" backgroundColor="grey2" />}
            </StyledTouchableOpacity>
          );
        })}
      </Box>
    </BottomSheet>
  );
};
