import {Box, Text} from 'bases/ui/common';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {Comment} from 'features/backend/apis/model';
import React, {FC, useMemo} from 'react';

import {CommentsLikeButtonWithCount} from './CommentsLikeButtonWithCount';
import {DiffDaysOrHours} from './DiffDaysOrHours';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type CommentProps = Comment & {liked?: boolean};

export const CommentCard: FC<CommentProps> = ({content, likes, profile, datetime, liked}) => {
  const likeColor = useMemo(() => (liked ? 'blue' : 'grey1'), [liked]);
  return (
    <Box flex={1} flexDirection="row">
      <Box>
        <CommentsLikeButtonWithCount onPress={showUnderDevelopment} count={likes} color={likeColor} />
      </Box>
      <Box px="p8" />
      <Box flex={1} flexDirection="column">
        <Text variant="font13Regular" lineHeight={19} letterSpacing={0.25}>
          {content}
        </Text>
        <Box py="p8" />
        <Box flexDirection="row">
          <Text variant="font13Regular" lineHeight={24} letterSpacing={0.15} textDecorationLine="underline">
            {profile?.nickname}
          </Text>
          <Box flex={1} />
          <DiffDaysOrHours datetime={datetime} />
        </Box>
      </Box>
    </Box>
  );
};
