import {useVisibility} from 'bases/core/utils/useVisibility';
import {m} from 'bases/message/Message';
import {Box, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {BeginnerMarkIllustration} from 'bases/ui/illustration/BeginnerMarkIllustration';
import {DoneIllustration} from 'bases/ui/illustration/DoneIllustration';
import {MoreVertIllustration} from 'bases/ui/illustration/MoreVertIllustration';
import {PersonIllustration} from 'bases/ui/illustration/PersonIllustration';
import {TagIllustration} from 'bases/ui/illustration/TagIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {useAccountQuestionCommands} from 'features/account/services/account/useAccountQuestionCommands';
import {QuestionAndAnswerQuestion} from 'features/backend/apis/model';
import React, {FC, useCallback, useMemo} from 'react';

import {useTags} from '../services/useTags';
import {AddCommentButton} from './AddCommentButton';
import {CommentCard} from './CommentCard';
import {CommentDivider} from './CommentDivider';
import {CommentsButtonWithCount} from './CommentsButtonWithCount';
import {DiffDaysOrHours} from './DiffDaysOrHours';
import {QuestionAndAnswerLikeButtonWithCount} from './QuestionAndAnswerLikeButtonWithCount';
import {ViewsButtonWithCount} from './ViewsButtonWithCount';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

export type QuestionDetailCardProps = QuestionAndAnswerQuestion & {
  liked?: boolean;
  likedCommentIds?: string[];
};

export const QuestionDetailCard: FC<QuestionDetailCardProps> = ({
  question: {
    questionId,
    title,
    content,
    likes,
    views,
    comments,
    beginner,
    resolved,
    datetime,
    tags: questionTagIds,
    profile,
  },
  commentList,
  liked,
  likedCommentIds,
}) => {
  const {toggleQuestionLike: toggleQuestionLikeCommand} = useAccountQuestionCommands();
  const {data: tags} = useTags();
  const {isVisible: isQuestionCommentsVisible, toggleVisibility: toggleQuestionCommentsVisible} = useVisibility(false);
  const likeQuestionColor = useMemo(() => (liked ? 'blue' : 'grey1'), [liked]);
  const commentButtonColor = useMemo(() => (isQuestionCommentsVisible ? 'blue' : 'grey1'), [isQuestionCommentsVisible]);
  const questionTags = useMemo(() => {
    if (!tags) {
      return [];
    }
    return questionTagIds.map(tagId => tags.find(tag => tag.tagId === tagId));
  }, [questionTagIds, tags]);
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
      <Box flexDirection="row" alignItems="center">
        <PersonIllustration />
        <Box px="p8" />
        <Box flex={1} flexDirection="column">
          <Text variant="font18SemiBold" lineHeight={22} letterSpacing={0.15} color="black2">
            {profile?.nickname}
          </Text>
          <Box flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text variant="font14Regular" letterSpacing={0.25} color="black2">
              {profile?.points}/{profile?.totalPoints}
            </Text>
            <Box py="p12" />
            {resolved && (
              <Box flexDirection="row" justifyContent="flex-end" alignItems="center" px="p8">
                <DoneIllustration color="blue" />
                <Box px="p4" />
                <Text variant="font14Bold" lineHeight={20} color="blue" letterSpacing={0.25}>
                  {m('解決済み')}
                </Text>
              </Box>
            )}
          </Box>
        </Box>
        <StyledTouchableOpacity onPress={showUnderDevelopment}>
          <MoreVertIllustration />
        </StyledTouchableOpacity>
      </Box>
      <Box py="p12" />
      <Text fontSize={22} fontWeight="700" lineHeight={34} letterSpacing={0.18}>
        {beginner && (
          <>
            <BeginnerMarkIllustration />
            <Box px="p4" />
          </>
        )}
        {title}
      </Text>
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
        <QuestionAndAnswerLikeButtonWithCount onPress={toggleQuestionLike} count={likes} color={likeQuestionColor} />
        <Box flex={1} />
        <Box flexDirection="row">
          <ViewsButtonWithCount onPress={showUnderDevelopment} count={views} />
          <Box px="p8" />
          <CommentsButtonWithCount
            onPress={toggleQuestionCommentsVisible}
            count={comments}
            color={commentButtonColor}
          />
        </Box>
      </Box>
      <Box py="p16" />
      <Box flexDirection="row" alignItems="flex-end">
        <TagIllustration />
        <Box flexDirection="row" alignItems="center">
          <Box px="p8" />
          <Text>
            {questionTags?.map(tag => (
              <Box key={tag?.tagId} flexDirection="row">
                <Text variant="font14Regular" textDecorationLine="underline" letterSpacing={0.18}>
                  {tag?.tagName}
                </Text>
                <Box px="p4" />
              </Box>
            ))}
          </Text>
        </Box>
      </Box>
      <Box py="p8" />
      {isQuestionCommentsVisible && (
        <>
          {commentList.map(comment => {
            const liked = likedCommentIds?.some(v => v === comment.commentId);
            return (
              <Box key={comment.commentId}>
                <Box py="p8" />
                <CommentDivider />
                <Box py="p8" />
                <CommentCard {...comment} liked={liked} />
              </Box>
            );
          })}
          <Box py="p8" />
          <CommentDivider />
          <Box py="p8" />
          <AddCommentButton onPress={showUnderDevelopment} />
        </>
      )}
    </Box>
  );
};
