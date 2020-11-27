import React, { useCallback, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { Container, Section, Title, Description, KeyboardAvoidingView } from '../basics';
import { useValidation, CommonErrorKey } from '../../hooks/validation';
import type { Errors, ErrorsKey, Values } from '../../hooks/validation';
import type { LoginApiAdapter } from '../../context/StatefulLoginContext';

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
  login: LoginApiAdapter;
};

const StatefulLoginForm: React.FC<Props> = ({ login }) => {
  const { values, onBlur, onChangeText, errors, setCommonErrors, invalid, shouldShowErrorMessage, clearStatus } = useValidation<FormData>(
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
      await login(values);
    } catch (e) {
      if (e.response.status === 400) {
        setCommonErrors(['ユーザーIDまたはパスワードが正しくありません。']);
      } else {
        setCommonErrors(['システムエラーが発生しました。管理者にお問いあわせください。']);
      }
      clearStatus();
    }
  }, [clearStatus, login, setCommonErrors, values]);

  return (
    <Container>
      <KeyboardAvoidingView>
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
                value={values[USER_ID]}
                onBlur={() => onBlur(USER_ID)}
                onChangeText={(value: string) => onChangeText(USER_ID, value)}
                getRef={setUserIdRef}
                onSubmitEditing={() => {
                  if (passwordRef) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore: maybe NativeBase bug? https://github.com/GeekyAnts/NativeBase/issues/1803
                    passwordRef._root.focus();
                    // TODO: passwordRefがTextInputなら、`_root`を経由しないで直接`focus`を呼べるのでは、、、？型定義が間違えている？
                  }
                }}
                returnKeyType="next"
              />
            </Item>
            {shouldShowErrorMessage(USER_ID) && errorMessage(errors, USER_ID)}

            <Item floatingLabel last error={shouldShowErrorMessage(PASSWORD)}>
              <Label>パスワード</Label>
              <Input
                value={values[PASSWORD]}
                onBlur={() => onBlur(PASSWORD)}
                onChangeText={(value: string) => onChangeText(PASSWORD, value)}
                getRef={setPasswordRef}
                returnKeyType="done"
              />
            </Item>
            {shouldShowErrorMessage(PASSWORD) && errorMessage(errors, PASSWORD)}
            <Button style={styles.submitButton} disabled={invalid} onPress={onSubmit}>
              <Text>ログイン</Text>
            </Button>
          </Form>
        </Section>
      </KeyboardAvoidingView>
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
