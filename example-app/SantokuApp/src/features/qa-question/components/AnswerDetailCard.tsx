import {useVisibility} from 'bases/core/utils/useVisibility';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {MoreVertIllustration} from 'bases/ui/illustration/MoreVertIllustration';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {QuestionAndAnswerAnswerListItem} from 'features/backend/apis/model';
import React, {FC, useMemo} from 'react';

import {AddCommentButton} from './AddCommentButton';
import {CommentCard} from './CommentCard';
import {CommentDivider} from './CommentDivider';
import {CommentsButtonWithCount} from './CommentsButtonWithCount';
import {DiffDaysOrHours} from './DiffDaysOrHours';
import {QuestionAndAnswerLikeButtonWithCount} from './QuestionAndAnswerLikeButtonWithCount';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type AnswerDetailCardProps = QuestionAndAnswerAnswerListItem & {
  liked?: boolean;
  likedCommentIds?: string[];
};

export const AnswerDetailCard: FC<AnswerDetailCardProps> = ({
  answer: {content, likes, datetime, comments, profile},
  commentList,
  liked,
  likedCommentIds,
}) => {
  const {isVisible: isAnswerCommentsVisible, toggleVisibility: toggleAnswerCommentsVisible} = useVisibility(false);
  const likeAnswerColor = useMemo(() => (liked ? 'blue' : 'grey1'), [liked]);
  const commentButtonColor = useMemo(() => (isAnswerCommentsVisible ? 'blue' : 'grey1'), [isAnswerCommentsVisible]);

  return (
    <Box
      backgroundColor="white"
      px="p24"
      pt="p24"
      pb="p16"
      shadowOffset={{width: 4, height: 4}}
      shadowColor="black"
      shadowOpacity={0.25}
      elevation={1}>
      <Box flexDirection="row" alignItems="center">
        <PersonIllustration />
        <Box px="p8" />
        <Box flex={1} flexDirection="column">
          <Text variant="font18SemiBold" lineHeight={22} letterSpacing={0.15} color="black2">
            {profile?.nickname}
          </Text>
          <Text variant="font14Regular" letterSpacing={0.25} color="black2">
            {profile?.points}/{profile?.totalPoints}
          </Text>
        </Box>
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <MoreVertIllustration />
        </StyledTouchableOpacity>
      </Box>
      <Box py="p8" />
      <Text fontSize={14} lineHeight={28} letterSpacing={0.25}>
        {content}
      </Text>
      <Box py="p4" />
      <Box flexDirection="row" alignItems="flex-end">
        <Box flex={1} />
        <DiffDaysOrHours datetime={datetime} />
      </Box>
      <Box flexDirection="row" justifyContent="flex-start" alignItems="flex-end">
        <QuestionAndAnswerLikeButtonWithCount onPress={showUnderDevelopment} count={likes} color={likeAnswerColor} />
        <Box flex={1} />
        <CommentsButtonWithCount onPress={toggleAnswerCommentsVisible} count={comments} color={commentButtonColor} />
      </Box>
      <Box py="p4" />
      {isAnswerCommentsVisible && (
        <>
          {commentList?.map(comment => (
            <Box key={comment.commentId}>
              <Box py="p8" />
              <CommentDivider />
              <Box py="p8" />
              <CommentCard {...comment} />
            </Box>
          ))}
          <Box py="p8" />
          <CommentDivider />
          <Box py="p8" />
          <AddCommentButton onPress={showUnderDevelopment} />
        </>
      )}
    </Box>
  );
};
