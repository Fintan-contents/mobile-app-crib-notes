import React, { useCallback, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { Container, Section, Title, Description } from '../basics';
import { useValidation, CommonErrorKey } from '../../hooks/validation';
import type { Errors, ErrorsKey, Values } from '../../hooks/validation';

enum FormData {
  USER_ID = 'userId',
  PASSWORD = 'password',
}

const { USER_ID, PASSWORD } = FormData;
const { COMMON } = CommonErrorKey;

const errorMessage = (errors: Errors<FormData>, key: ErrorsKey<FormData>): JSX.Element[] | null => {
  const messages = errors[key];
  if (!messages || messages.length === 0) {
    return null;
  }

  return messages.map((e, i) => (
    <Text key={i} style={styles.errorMessage}>
      {e}
    </Text>
  ));
};

const validate = ({ userId, password }: Values<FormData>) => {
  const result: Errors<FormData> = {
    userId: [],
    password: [],
  };

  if (!userId) {
    result.userId = ['ユーザーIDを入力してください。'];
  }
  if (!password) {
    result.password = ['パスワードを入力してください。'];
  }

  return result;
};

const initialValues: Values<FormData> = {
  userId: '10000001',
  password: 'pass123-',
};

type Props = {
  login: (userId: string, password: string) => Promise<void>;
};

const StatefulLoginForm: React.FC<Props> = ({ login }) => {
  const { values, errors, setCommonErrors, inputProps, invalid, shouldShowErrorMessage, clearStatus } = useValidation<FormData>(
    initialValues,
    validate
  );

  // 入力中キーボードのNextボタンをタップした時に次の入力項目にフォーカスを移すために使う
  // Native BaseのInputタグの場合refの取得方法が独特のためuserRefではrefが取得できない
  // そのためuseStateを使う
  const [, setUserIdRef] = useState<TextInput | null>(null);
  const [passwordRef, setPasswordRef] = useState<TextInput | null>(null);

  const onSubmit = useCallback(async () => {
    try {
      await login(values.userId, values.password);
    } catch (e) {
      if (e.response.status === 400) {
        setCommonErrors(['ユーザーIDまたはパスワードが正しくありません。']);
      } else {
        setCommonErrors(['システムエラーが発生しました。管理者にお問いあわせください。']);
      }
      clearStatus();
    }
  }, [clearStatus, login, setCommonErrors, values.password, values.userId]);

  return (
    <Container>
      <Description>
        ネイティブ側で既存Web資産にログインすれば、そのままWebViewで認証が必要な画面を開けるという例を示します。{'\n\n'}
        まずはネイティブ側から既存Web資産にログインAPIを読んでセッションIDを取得します。{'\n\n'}
        以下ログインフォームにログインIDに10000001にパスワードにpass123-を入力してログインボタンをタップしてください。
      </Description>
      <Section>
        <Title>ログインフォーム</Title>

        {shouldShowErrorMessage(COMMON) && errorMessage(errors, COMMON)}
        <Form>
          <Item floatingLabel error={shouldShowErrorMessage(USER_ID)}>
            <Label>ユーザーID</Label>
            <Input
              {...inputProps(USER_ID)}
              getRef={setUserIdRef}
              onSubmitEditing={() => {
                passwordRef._root.focus();
              }}
              returnKeyType="next"
            />
          </Item>
          {shouldShowErrorMessage(USER_ID) && errorMessage(errors, USER_ID)}

          <Item floatingLabel last error={shouldShowErrorMessage(PASSWORD)}>
            <Label>パスワード</Label>
            <Input {...inputProps(PASSWORD)} getRef={setPasswordRef} returnKeyType="done" />
          </Item>
          {shouldShowErrorMessage(PASSWORD) && errorMessage(errors, PASSWORD)}
          <Button style={styles.submitButton} disabled={invalid} onPress={onSubmit}>
            <Text>ログイン</Text>
          </Button>
        </Form>
      </Section>
    </Container>
  );
};

export default StatefulLoginForm;

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 24,
  },
  errorMessage: {
    color: 'red',
    marginLeft: 14,
    fontSize: 14,
  },
});
