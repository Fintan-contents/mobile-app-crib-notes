import {Box, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {Comment} from 'features/backend/apis/model';
import React, {FC, useMemo} from 'react';

import {CommentLikeButtonWithCount} from './CommentLikeButtonWithCount';
import {DiffDaysOrHours} from './DiffDaysOrHours';

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
        <StyledRow flex={1} justifyContent="space-between">
          <Text variant="font13Regular" lineHeight={24} letterSpacing={0.15} textDecorationLine="underline">
            {profile?.nickname}
          </Text>
          <DiffDaysOrHours datetime={datetime} />
        </StyledRow>
      </StyledColumn>
    </StyledRow>
  );
};
