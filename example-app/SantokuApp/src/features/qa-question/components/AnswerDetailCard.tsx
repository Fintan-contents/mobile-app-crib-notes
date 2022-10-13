import {useVisibility} from 'bases/core/utils/useVisibility';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledImage} from 'bases/ui/common/StyledImage';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {MoreVertIllustration} from 'bases/ui/illustration/MoreVertIllustration';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {QuestionAndAnswerAnswerListItem} from 'features/backend/apis/model';
import React, {FC, useMemo} from 'react';

import {AddCommentButton} from './AddCommentButton';
import {CommentButtonWithCount} from './CommentButtonWithCount';
import {CommentCard} from './CommentCard';
import {CommentDivider} from './CommentDivider';
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
      <StyledRow alignItems="center">
        {profile?.avatarImageUrl ? (
          <StyledImage source={{uri: profile.avatarImageUrl}} width={40} height={40} borderRadius="p20" />
        ) : (
          <PersonIllustration size="p40" />
        )}
        <StyledSpace width="p16" />
        <StyledColumn flex={1}>
          <Text variant="font18SemiBold" lineHeight={22} letterSpacing={0.15} color="black2">
            {profile?.nickname}
          </Text>
          <Text variant="font14Regular" letterSpacing={0.25} color="black2">
            {profile?.points}/{profile?.totalPoints}
          </Text>
        </StyledColumn>
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <MoreVertIllustration />
        </StyledTouchableOpacity>
      </StyledRow>
      <StyledSpace height="p16" />
      <Text fontSize={14} lineHeight={28} letterSpacing={0.25}>
        {content}
      </Text>
      <StyledSpace height="p8" />
      <Box flexDirection="row" alignItems="flex-end">
        <Box flex={1} />
        <DiffDaysOrHours datetime={datetime} />
      </Box>
      <Box flexDirection="row" justifyContent="flex-start" alignItems="flex-end">
        <QuestionAndAnswerLikeButtonWithCount onPress={showUnderDevelopment} count={likes} color={likeAnswerColor} />
        <Box flex={1} />
        <CommentButtonWithCount onPress={toggleAnswerCommentsVisible} count={comments} color={commentButtonColor} />
      </Box>
      <StyledSpace height="p16" />
      {isAnswerCommentsVisible && (
        <StyledColumn space="p16">
          {commentList?.map(comment => (
            <StyledColumn key={comment.commentId} space="p16">
              <CommentDivider />
              <CommentCard key={comment.commentId} {...comment} />
            </StyledColumn>
          ))}
          <CommentDivider />
          <AddCommentButton onPress={showUnderDevelopment} />
        </StyledColumn>
      )}
    </Box>
  );
};
