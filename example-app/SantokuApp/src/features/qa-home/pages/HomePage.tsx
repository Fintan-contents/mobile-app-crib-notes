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

import {handleErrorWithSnackbar} from 'bases/core/errors/handleErrorWithSnackbar';
import {useVisibility} from 'bases/core/utils/useVisibility';
import {isGetFcmTokenError} from 'bases/firebase/messaging/getFcmToken';
import {isRequestPushPermissionError} from 'bases/firebase/messaging/requestPushPermission';
import {useFocusEffect} from 'bases/focus-manager/useFocusEffect';
import {m} from 'bases/message/Message';
import {Box, StyledSafeAreaView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledActivityIndicator} from 'bases/ui/common/StyledActivityIndicator';
import {StyledFlatList} from 'bases/ui/common/StyledFlatList';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {Fab} from 'bases/ui/fab/Fab';
import {AddIllustration} from 'bases/ui/illustration/AddIllustration';
import {ExpandLessIllustration} from 'bases/ui/illustration/ExpandLessIllustration';
import {NotificationsIllustration} from 'bases/ui/illustration/NotificationsIllustration';
import {SearchIllustration} from 'bases/ui/illustration/SearchIllustration';
import {SettingsIllustration} from 'bases/ui/illustration/SettingsIllustration';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {GetListQuestionsSort, Question} from 'features/backend/apis/model';
import {EventList} from 'features/qa-event/components/EventList';
import {QuestionListCard} from 'features/qa-question/components/QuestionListCard';
import {QuestionListHeader} from 'features/qa-question/components/QuestionListHeader';
import {SingleSelectableSortSheet} from 'features/qa-question/components/SingleSelectableSortSheet';
import {SingleSelectableTagSheet} from 'features/qa-question/components/SingleSelectableTagSheet';
import {useTags} from 'features/qa-question/services/useTags';
import {useShowTermsAgreementOverlay} from 'features/terms/use-cases/useShowTermsAgreementOverlay';
import React, {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {FlatList, ListRenderItemInfo, Platform} from 'react-native';

import {useEventsAndQuestions} from '../services/useEventsAndQuestions';
import {useRequestPermissionAndRegisterToken} from '../services/useRequestPermissionAndRegisterToken';

const showUnderDevelopment = () => Snackbar.show('現在開発中です。');

const HeaderLeft = () => (
  <Box px="p16">
    <StyledTouchableOpacity onPress={showUnderDevelopment}>
      <SearchIllustration />
    </StyledTouchableOpacity>
    <Box py="p4" />
  </Box>
);

const HeaderRight = () => (
  <Box px="p24">
    <Box flexDirection="row" alignItems="center">
      <StyledTouchableOpacity onPress={showUnderDevelopment}>
        <NotificationsIllustration />
      </StyledTouchableOpacity>
      <Box px="p8" />
      <StyledTouchableOpacity onPress={showUnderDevelopment}>
        <SettingsIllustration />
      </StyledTouchableOpacity>
    </Box>
    <Box py="p4" />
  </Box>
);

const addOnPressHandlerToQuestions =
  (navigateToQuestionDetail: (questionId: string) => void) => (question: Question) => {
    return {
      question,
      navigateToQuestionDetail: () => navigateToQuestionDetail(question.questionId),
    };
  };

const ListSeparator = () => <StyledSpace height="p16" />;

export type HomePageProps = {
  navigateToQuestionAndEventPost: () => void;
  navigateToQuestionDetail: (questionId: string) => void;
  setHeader: (options: {headerLeft: () => React.ReactNode; headerRight: () => React.ReactNode}) => void;
};

export const HomePage: React.FC<HomePageProps> = ({
  navigateToQuestionAndEventPost,
  navigateToQuestionDetail,
  setHeader,
}) => {
  const {requestPermissionAndRegisterToken: callRequestPermissionAndRegisterToken} =
    useRequestPermissionAndRegisterToken();
  // Push通知の許可ダイアログ表示とFCM登録トークンの登録・更新
  const requestPermissionAndRegisterToken = useCallback(async () => {
    try {
      await callRequestPermissionAndRegisterToken();
    } catch (e) {
      // Firebase Crashlyticsにエラーログを送信して、ユーザにはスナックバーでPush通知の受信ができない旨を伝える
      if (isRequestPushPermissionError(e) || isGetFcmTokenError(e)) {
        handleErrorWithSnackbar(e, 'app.push.notification.プッシュ通知の設定エラー');
      }
    }
  }, [callRequestPermissionAndRegisterToken]);

  useEffect(() => {
    requestPermissionAndRegisterToken().catch(() => {
      // requestPermissionAndRegisterTokenでエラーハンドリングを実施しているので、ここでは特に何もしない
    });
  }, [requestPermissionAndRegisterToken]);

  // 利用規約に未同意の場合は、利用規約を表示します。
  const showTermsAgreementOverlay = useShowTermsAgreementOverlay();
  useFocusEffect(showTermsAgreementOverlay);

  useLayoutEffect(() => {
    setHeader({
      headerLeft: () => <HeaderLeft />,
      headerRight: () => <HeaderRight />,
    });
  }, [setHeader]);

  const {
    events,
    questions,
    refresh,
    pullToRefresh,
    setQuestionsParams,
    isLoading,
    isRefreshing,
    isPullToRefreshing,
    isEventsLoading,
  } = useEventsAndQuestions({eventsParams: {target: 'active'}});
  // ボトムタブ切り替え時に、イベントと質問一覧を再取得します。
  useFocusEffect(refresh);

  const [selectedSort, setSelectedSort] = useState<GetListQuestionsSort>();
  const {
    isVisible: isVisibleSortSheet,
    setVisible: setVisibleSortSheet,
    setInvisible: setInvisibleSortSheet,
  } = useVisibility();
  const selectSort = useCallback(
    (sort?: GetListQuestionsSort) => {
      setSelectedSort(sort);
      setInvisibleSortSheet();
      setQuestionsParams(prevState => ({...prevState, sort}));
    },
    [setInvisibleSortSheet, setQuestionsParams],
  );
  const sortIconColor = useMemo(() => (selectedSort ? 'blue' : 'black'), [selectedSort]);

  const {data: tags} = useTags();
  const [selectedTagId, setSelectedTagId] = useState<string>();
  const {
    isVisible: isVisibleTagSheet,
    setVisible: setVisibleTagSheet,
    setInvisible: setInvisibleTagSheet,
  } = useVisibility();
  const selectTag = useCallback(
    (tagId?: string) => {
      setSelectedTagId(tagId);
      setInvisibleTagSheet();
      setQuestionsParams(prevState => ({...prevState, tag: tagId}));
    },
    [setInvisibleTagSheet, setQuestionsParams],
  );
  const tagIconColor = useMemo(() => (selectedTagId ? 'blue' : 'black'), [selectedTagId]);

  const flatListRef = useRef<FlatList>(null);
  const scrollToTop = useCallback(() => flatListRef.current?.scrollToOffset({offset: 0, animated: true}), []);

  // 質問一覧先頭にラベルを表示するためのダミーオブジェクトを挿入する
  const questionItems = useMemo(() => {
    return [...[{} as Question], ...(questions ?? [])].map(addOnPressHandlerToQuestions(navigateToQuestionDetail));
  }, [questions, navigateToQuestionDetail]);

  const [containerWidth, setContainerWidth] = useState(0);

  return (
    <StyledSafeAreaView flex={1} testID="HomePage">
      <StyledFlatList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        refreshing={isPullToRefreshing}
        onRefresh={pullToRefresh}
        onLayout={event => setContainerWidth(event.nativeEvent.layout.width)}
        stickyHeaderIndices={[1]}
        ListHeaderComponent={
          <>
            <Box px="p24" py="p32">
              <Text variant="font20Bold" lineHeight={24} letterSpacing={0.18}>
                {m('募集中のイベント')}
              </Text>
            </Box>
            {!isEventsLoading && <EventList data={events} containerWidth={containerWidth} />}
          </>
        }
        data={questionItems}
        renderItem={useCallback(
          (
            listRenderItemInfo: ListRenderItemInfo<{
              question: Question;
              navigateToQuestionDetail: () => void;
            }>,
          ) => {
            if (listRenderItemInfo.index === 0) {
              return (
                <QuestionListHeader
                  setVisibleSortSheet={setVisibleSortSheet}
                  sortIconColor={sortIconColor}
                  setVisibleTagSheet={setVisibleTagSheet}
                  tagIconColor={tagIconColor}
                  showUnderDevelopment={showUnderDevelopment}
                />
              );
            }
            return <QuestionListCard {...listRenderItemInfo} />;
          },
          [setVisibleSortSheet, setVisibleTagSheet, sortIconColor, tagIconColor],
        )}
        ItemSeparatorComponent={ListSeparator}
      />
      <StyledSafeAreaView>
        <Box
          position="absolute"
          right={8}
          bottom={32}
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          {Platform.OS === 'android' && (
            <Fab size="small" color="white" onPress={scrollToTop}>
              <ExpandLessIllustration />
            </Fab>
          )}
          <Fab onPress={navigateToQuestionAndEventPost}>
            <AddIllustration />
          </Fab>
        </Box>
      </StyledSafeAreaView>
      <SingleSelectableSortSheet
        isVisible={isVisibleSortSheet}
        initialSelectedSort={selectedSort}
        select={selectSort}
        close={setInvisibleSortSheet}
      />
      <SingleSelectableTagSheet
        tags={tags}
        isVisible={isVisibleTagSheet}
        initialSelectedTagId={selectedTagId}
        select={selectTag}
        close={setInvisibleTagSheet}
      />
      {(isRefreshing || isLoading) && (
        <StyledSafeAreaView>
          <Box position="absolute" top={10} right={10}>
            <StyledActivityIndicator />
          </Box>
        </StyledSafeAreaView>
      )}
    </StyledSafeAreaView>
  );
};
