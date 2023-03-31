import {m} from 'bases/message/Message';
import {StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {FilterAltIllustration} from 'bases/ui/illustration/FilterAltIllustration';
import {LocalOfferIllustration} from 'bases/ui/illustration/LocalOfferIllustration';
import {SortIllustration} from 'bases/ui/illustration/SortIllustration';
import React from 'react';

type QuestionListHeaderProps = {
  setVisibleSortSheet: () => false | void;
  sortIconColor?: 'black' | 'blue';
  setVisibleTagSheet?: () => false | void;
  tagIconColor?: 'black' | 'blue';
  showUnderDevelopment: () => void;
};

const QuestionListHeaderComponent: React.FC<QuestionListHeaderProps> = ({
  setVisibleSortSheet,
  sortIconColor,
  setVisibleTagSheet,
  tagIconColor,
  showUnderDevelopment,
}) => {
  return (
    <StyledRow px="p24" pt="p32" pb="p16" justifyContent="space-between" alignItems="center" backgroundColor="orange2">
      <Text variant="font20Bold" lineHeight={24} letterSpacing={0.18}>
        {m('質問')}
      </Text>
      <StyledRow space="p32" alignItems="center">
        <StyledTouchableOpacity onPress={setVisibleSortSheet}>
          <SortIllustration color={sortIconColor} />
        </StyledTouchableOpacity>
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <FilterAltIllustration />
        </StyledTouchableOpacity>
        <StyledTouchableOpacity onPress={setVisibleTagSheet}>
          <LocalOfferIllustration color={tagIconColor} />
        </StyledTouchableOpacity>
      </StyledRow>
    </StyledRow>
  );
};

export const QuestionListHeader = React.memo(QuestionListHeaderComponent);
