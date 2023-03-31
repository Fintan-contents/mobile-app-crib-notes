import {m} from 'bases/message/Message';
import {StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledActivityIndicator} from 'bases/ui/common/StyledActivityIndicator';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {BeginnerMarkIllustration} from 'bases/ui/illustration/BeginnerMarkIllustration';
import {FormatAlignLeftIllustration} from 'bases/ui/illustration/FormatAlignLeftIllustration';
import {MarkdownToolbar} from 'bases/ui/markdown/MarkdownToolbar';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {InputAccessoryView, Keyboard, Platform} from 'react-native';

import {TemplateChip} from './TemplateChip';
import {TemplateClearChip} from './TemplateClearChip';
import {useQuestionForm} from '../forms/useQuestionForm';
import {useTemplates} from '../services/useTemplates';

type QuestionPostProps = {
  isVisibleTagSheet: boolean;
} & ReturnType<typeof useQuestionForm>;

export const QuestionPost: React.FC<QuestionPostProps> = ({form, setContent, setBeginner, clearContent}) => {
  const {data: templates, isFetching: isTemplatesFetching} = useTemplates();
  const beginnerMarkOpacity = useMemo(() => (form.values.beginner ? 1 : 0.2), [form.values.beginner]);
  const toggleBeginner = useCallback(() => setBeginner(!form.values.beginner), [form.values.beginner, setBeginner]);

  const [keyboardHeight, setKeyboardHeight] = useState<number>();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', e => setKeyboardHeight(e.endCoordinates.height));
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => setKeyboardHeight(0));
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <StyledScrollView pt="p16" px="p24" contentInset={{bottom: Platform.select({ios: keyboardHeight})}}>
      <Text fontSize={16} lineHeight={24} color="textRed">
        {m('TISインテックグループで共同利用されるため、社外秘情報（画像含む）を投稿しないでください')}
      </Text>
      <StyledSpace height="p16" />
      <StyledColumn space="p24">
        <StyledRow space="p8" alignItems="center">
          <StyledTouchableOpacity onPress={toggleBeginner}>
            <BeginnerMarkIllustration opacity={beginnerMarkOpacity} />
          </StyledTouchableOpacity>
          <Text fontSize={13} lineHeight={19.5}>
            {m('初歩的な質問内容の場合はチェックしてください')}
          </Text>
        </StyledRow>
        <StyledTextInput
          placeholder={m('タイトル')}
          multiline
          variant="font20Bold"
          lineHeight={24}
          value={form.values.title}
          onChangeText={form.handleChange('title')}
          errorMessage={form.errors.title}
          inputAccessoryViewID="markdown-toolbar"
        />
        <StyledRow space="p8" alignItems="center" height={28}>
          <FormatAlignLeftIllustration />
          {isTemplatesFetching ? (
            <StyledActivityIndicator />
          ) : (
            <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
              <StyledRow space="p8">
                {templates?.map((template, index) => (
                  <TemplateChip
                    key={template.templateId}
                    text={template.title}
                    onPress={() => setContent(template.content)}
                  />
                ))}
                <TemplateClearChip onPress={clearContent} />
              </StyledRow>
            </StyledScrollView>
          )}
        </StyledRow>
        <StyledTextInput
          placeholder={m('コメントを入力')}
          multiline
          variant="font14Bold"
          lineHeight={21}
          value={form.values.content}
          onChangeText={form.handleChange('content')}
          errorMessage={form.errors.content}
          inputAccessoryViewID="markdown-toolbar"
          textAlignVertical="top"
        />
      </StyledColumn>
      <StyledSpace height="p48" />
      {/* TODO: Androidのマークダウンツールバーは未対応 */}
      {Platform.OS === 'ios' && (
        <InputAccessoryView nativeID="markdown-toolbar">
          <MarkdownToolbar />
        </InputAccessoryView>
      )}
    </StyledScrollView>
  );
};
