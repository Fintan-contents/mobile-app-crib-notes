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

import {Box, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {Comment} from 'features/backend/apis/model';
import React, {FC, useMemo} from 'react';

import {CommentLikeButtonWithCount} from './CommentLikeButtonWithCount';
import {DiffInDateTime} from './DiffInDateTime';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type CommentCardProps = Comment & {liked?: boolean};

export const CommentCard: FC<CommentCardProps> = ({content, likes, profile, datetime, liked}) => {
  const likeColor = useMemo(() => (liked ? 'blue' : 'grey1'), [liked]);
  return (
    <StyledRow flex={1} space="p16">
      <Box>
        <CommentLikeButtonWithCount onPress={showUnderDevelopment} count={likes} color={likeColor} />
      </Box>
      <StyledColumn flex={1} space="p16">
        <Text variant="font13Regular" lineHeight={19} letterSpacing={0.25}>
          {content}
        </Text>
        <StyledRow flex={1} justifyContent="space-between" flexWrap="wrap">
          <Text variant="font13Regular" lineHeight={24} letterSpacing={0.15} textDecorationLine="underline">
            {profile?.nickname}
          </Text>
          <DiffInDateTime datetime={datetime} />
        </StyledRow>
      </StyledColumn>
    </StyledRow>
  );
};
