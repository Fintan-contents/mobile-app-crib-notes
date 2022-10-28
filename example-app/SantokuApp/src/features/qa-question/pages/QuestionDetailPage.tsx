import {m} from 'bases/message/Message';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {StyledActivityIndicator} from 'bases/ui/common/StyledActivityIndicator';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {Fab} from 'bases/ui/fab/Fab';
import {ExpandLessIllustration} from 'bases/ui/illustration/ExpandLessIllustration';
import {QuestionAnswerIllustration} from 'bases/ui/illustration/QuestionAnswerIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {useAccountQuestionLikes} from 'features/account/services/account/useAccountQuestionLikes';
import React, {useCallback, useRef} from 'react';
import {Platform, ScrollView} from 'react-native';

import {AnswerDetailCard} from '../components/AnswerDetailCard';
import {QuestionDetailCard} from '../components/QuestionDetailCard';
import {useQuestion} from '../services/useQuestion';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

type QuestionDetailPageProps = {
  questionId: string;
};
export const QuestionDetailPage: React.FC<QuestionDetailPageProps> = ({questionId}) => {
  const {data: question, isLoading: isQuestionLoading} = useQuestion(questionId);
  const {data: questionLikes} = useAccountQuestionLikes(questionId);
  const scrollViewRef = useRef<ScrollView>();

  const scrollToTop = useCallback(() => scrollViewRef.current?.scrollTo({y: 0, animated: true}), []);

  if (isQuestionLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <StyledActivityIndicator />
      </Box>
    );
  }

  if (!question) {
    return <Text>{m('質問は削除されました')}</Text>;
  }

  return (
    <StyledSafeAreaView flex={1}>
      <StyledScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <QuestionDetailCard
          {...question.question}
          liked={questionLikes?.liked}
          likedCommentIds={questionLikes?.commentId}
        />
        <StyledRow space="p16" px="p24" py="p32" justifyContent="flex-start" alignItems="center">
          <Text variant="font20Bold" lineHeight={24}>
            {m('回答')}
          </Text>
          <Text variant="font14Bold" lineHeight={24}>
            {question.answerList.length}
            {m('件')}
          </Text>
        </StyledRow>
        <StyledColumn space="p16">
          {question.answerList.map(answer => {
            const answerLikes = questionLikes?.answer.find(v => v.answerId === answer.answer?.answerId);
            return (
              <AnswerDetailCard
                key={answer.answer?.answerId}
                {...answer}
                liked={answerLikes?.liked}
                likedCommentIds={answerLikes?.commentId}
              />
            );
          })}
        </StyledColumn>
        <StyledSpace height="p64" />
      </StyledScrollView>
      <Box position="absolute" right={8} bottom={32} flexDirection="column" justifyContent="center" alignItems="center">
        {Platform.OS === 'android' && (
          <Fab size="small" color="white" onPress={scrollToTop}>
            <ExpandLessIllustration />
          </Fab>
        )}
        <Fab onPress={showUnderDevelopment}>
          <QuestionAnswerIllustration />
        </Fab>
      </Box>
    </StyledSafeAreaView>
  );
};
