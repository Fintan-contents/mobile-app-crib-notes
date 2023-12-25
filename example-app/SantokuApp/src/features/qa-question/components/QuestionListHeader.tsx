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
