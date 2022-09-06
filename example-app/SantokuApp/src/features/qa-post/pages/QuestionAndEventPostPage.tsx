import {m} from 'bases/message/Message';
import {Box, StyledSafeAreaView, StyledTouchableOpacity} from 'bases/ui/common';
import {StyledButton} from 'bases/ui/common/StyledButton';
import {TagIllustration} from 'bases/ui/illustration/TagIllustration';
import {Tab} from 'bases/ui/tab/Tab';
import {TabBar} from 'bases/ui/tab/TabBar';
import {EventPost} from 'features/qa-event/components/EventPost';
import {QuestionPost} from 'features/qa-question/components/QuestionPost';
import {TagsSheet} from 'features/qa-question/components/TagsSheet';
import {QuestionFormValues, useQuestionForm} from 'features/qa-question/forms/useQuestionForm';
import {useQuestionCommands} from 'features/qa-question/services/useQuestionCommands';
import {useTags} from 'features/qa-question/services/useTags';
import React, {useCallback, useState} from 'react';
import {Alert} from 'react-native';

type QuestionAndEventPostPageProps = {
  setNavigationOptions: (options: {headerRight: () => React.ReactNode}) => void;
  goBack: () => void;
};

export const QuestionAndEventPostPage: React.VFC<QuestionAndEventPostPageProps> = ({setNavigationOptions, goBack}) => {
  const {data: tags} = useTags();
  const {post: postQuestion, isPosting: isQuestionPosting} = useQuestionCommands();
  const [isVisibleTagSheet, setIsVisibleTagSheet] = useState<boolean>(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const submitQuestion = useCallback(
    async (values: QuestionFormValues) => {
      await postQuestion({data: values});
      goBack();
    },
    [goBack, postQuestion],
  );

  const {
    form: questionForm,
    reset: resetQuestionForm,
    setContent: setQuestionContent,
    setTags: setQuestionTags,
    setBeginner: setQuestionBeginner,
    clearContent: clearQuestionContent,
  } = useQuestionForm({onSubmit: submitQuestion});

  const showTagsSheet = useCallback(() => {
    setIsVisibleTagSheet(true);
  }, []);

  const selectTags = useCallback(
    async (tagIds: string[]) => {
      await setQuestionTags(tagIds);
      setIsVisibleTagSheet(false);
    },
    [setQuestionTags],
  );

  const changeTab = useCallback(
    (index: number) => {
      if (questionForm.values.title || questionForm.values.content) {
        Alert.alert('入力中です。', '入力内容が保存されています。入力内容を破棄してタブを切り替えますか？', [
          {text: 'Cancel'},
          {
            text: 'OK',
            onPress: () => {
              setSelectedTabIndex(index);
              resetQuestionForm();
            },
          },
        ]);
        return;
      }
      setSelectedTabIndex(index);
      resetQuestionForm();
    },
    [resetQuestionForm, questionForm.values.content, questionForm.values.title],
  );

  const post = useCallback(async () => {
    if (selectedTabIndex === 0) {
      try {
        await questionForm.submitForm();
      } catch {
        // エラーハンドリングは共通で実施しているので、ここでは何もしない
      }
    }
  }, [questionForm, selectedTabIndex]);

  React.useLayoutEffect(() => {
    setNavigationOptions({
      headerRight: () => {
        return (
          <Box flexDirection="row" alignItems="center">
            {selectedTabIndex === 0 && (
              <StyledTouchableOpacity onPress={showTagsSheet} p="p8">
                <TagIllustration padding="p8" color="blue" />
              </StyledTouchableOpacity>
            )}
            <Box px="p8" />
            <StyledButton title={m('投稿')} onPress={post} isLoading={isQuestionPosting} disabled={isQuestionPosting} />
          </Box>
        );
      },
    });
  }, [isQuestionPosting, post, selectedTabIndex, setNavigationOptions, showTagsSheet]);

  return (
    <>
      <StyledSafeAreaView flex={1} testID="QuestionAndEventPostPage">
        <TabBar selectedIndex={selectedTabIndex} onChange={changeTab}>
          <Tab text={m('質問を投稿')}>
            <QuestionPost
              isVisibleTagSheet={isVisibleTagSheet}
              form={questionForm}
              reset={resetQuestionForm}
              setContent={setQuestionContent}
              setTags={setQuestionTags}
              setBeginner={setQuestionBeginner}
              clearContent={clearQuestionContent}
            />
          </Tab>
          <Tab text={m('イベントを告知')}>
            <EventPost />
          </Tab>
        </TabBar>
      </StyledSafeAreaView>
      <TagsSheet
        tags={tags}
        isVisible={isVisibleTagSheet}
        initialSelectedTagIds={questionForm.values.tags}
        select={selectTags}
      />
    </>
  );
};
