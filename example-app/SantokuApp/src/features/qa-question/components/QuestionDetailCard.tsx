import {useVisibility} from 'bases/core/utils/useVisibility';
import {m} from 'bases/message/Message';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledImage} from 'bases/ui/common/StyledImage';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {BeginnerMarkIllustration} from 'bases/ui/illustration/BeginnerMarkIllustration';
import {DoneIllustration} from 'bases/ui/illustration/DoneIllustration';
import {MoreVertIllustration} from 'bases/ui/illustration/MoreVertIllustration';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {TagIllustration} from 'bases/ui/illustration/TagIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {useAccountQuestionCommands} from 'features/account/services/account/useAccountQuestionCommands';
import {QuestionAndAnswerQuestion} from 'features/backend/apis/model';
import React, {FC, useCallback, useMemo} from 'react';

import {AddCommentButton} from './AddCommentButton';
import {CommentButtonWithCount} from './CommentButtonWithCount';
import {CommentCard} from './CommentCard';
import {CommentDivider} from './CommentDivider';
import {DiffDaysOrHours} from './DiffDaysOrHours';
import {QuestionAndAnswerLikeButtonWithCount} from './QuestionAndAnswerLikeButtonWithCount';
import {ViewButtonWithCount} from './ViewButtonWithCount';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type QuestionDetailCardProps = QuestionAndAnswerQuestion & {
  liked?: boolean;
  likedCommentIds?: string[];
};

export const QuestionDetailCard: FC<QuestionDetailCardProps> = ({
  question: {questionId, title, content, likes, views, comments, beginner, resolved, datetime, tags, profile},
  commentList,
  liked,
  likedCommentIds,
}) => {
  const {toggleQuestionLike: toggleQuestionLikeCommand} = useAccountQuestionCommands();
  const {isVisible: isQuestionCommentsVisible, toggleVisibility: toggleQuestionCommentsVisible} = useVisibility(false);
  const likeQuestionColor = useMemo(() => (liked ? 'blue' : 'grey1'), [liked]);
  const commentButtonColor = useMemo(() => (isQuestionCommentsVisible ? 'blue' : 'grey1'), [isQuestionCommentsVisible]);
  const toggleQuestionLike = useCallback(
    () => toggleQuestionLikeCommand(questionId),
    [questionId, toggleQuestionLikeCommand],
  );

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
          <StyledRow space="p24" alignItems="center" justifyContent="space-between">
            <Text variant="font14Regular" lineHeight={24} letterSpacing={0.25} color="black2">
              {profile?.points}/{profile?.totalPoints}
            </Text>
            {resolved && (
              <StyledRow space="p8" justifyContent="flex-end" alignItems="center" px="p8">
                <DoneIllustration color="blue" />
                <Text variant="font14Bold" lineHeight={20} color="blue" letterSpacing={0.25}>
                  {m('解決済み')}
                </Text>
              </StyledRow>
            )}
          </StyledRow>
        </StyledColumn>
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <MoreVertIllustration />
        </StyledTouchableOpacity>
      </StyledRow>
      <StyledSpace height="p24" />
      <Text variant="font22Bold" lineHeight={34} letterSpacing={0.18}>
        {beginner && (
          <>
            <BeginnerMarkIllustration />
            <StyledSpace width="p8" />
          </>
        )}
        {title}
      </Text>
      <StyledSpace height="p16" />
      <Text variant="font14Regular" lineHeight={28} letterSpacing={0.25}>
        {content}
      </Text>
      <StyledSpace height="p8" />
      <Box flex={1} alignItems="flex-end">
        <DiffDaysOrHours datetime={datetime} />
      </Box>
      <StyledRow justifyContent="flex-start" alignItems="flex-end">
        <QuestionAndAnswerLikeButtonWithCount onPress={toggleQuestionLike} count={likes} color={likeQuestionColor} />
        <Box flex={1} />
        <StyledRow space="p16">
          <ViewButtonWithCount onPress={showUnderDevelopment} count={views} />
          <CommentButtonWithCount onPress={toggleQuestionCommentsVisible} count={comments} color={commentButtonColor} />
        </StyledRow>
      </StyledRow>
      <StyledSpace height="p32" />
      <StyledRow space="p16" alignItems="flex-end">
        <TagIllustration />
        <StyledRow space="p8" flexWrap="wrap">
          {tags.map(tag => (
            <Text key={tag.tagId} variant="font14Regular" textDecorationLine="underline" letterSpacing={0.18}>
              {tag.tagName}
            </Text>
          ))}
        </StyledRow>
      </StyledRow>
      <StyledSpace height="p16" />
      {isQuestionCommentsVisible && (
        <StyledColumn space="p16">
          {commentList.map(comment => {
            const liked = likedCommentIds?.some(v => v === comment.commentId);
            return (
              <StyledColumn key={comment.commentId} space="p16">
                <CommentDivider />
                <CommentCard {...comment} liked={liked} />
              </StyledColumn>
            );
          })}
          <CommentDivider />
          <AddCommentButton onPress={showUnderDevelopment} />
        </StyledColumn>
      )}
    </Box>
  );
};
