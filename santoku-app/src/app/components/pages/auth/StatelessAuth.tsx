import React from 'react';
import { ScrollView } from 'react-native';
import { Spinner } from 'native-base';
import { useOidcAuthCodeFlowAuthentication } from '../../../hooks/auth';
import { Container, Title, Text, TextButton, Section, Description, translateToViewData } from '../../basics';

class AuthnStateViewData {
  accessTokenExpirationDate?: string;
  accessToken?: string;
  idToken?: string;
  refreshToken?: string;
}

const StatelessAuth: React.FC = () => {
  const { signIn, signOut, refresh, authState, loading, hasJustSignOut } = useOidcAuthCodeFlowAuthentication();

  const authnStateViewData = translateToViewData<AuthnStateViewData>(authState);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <ScrollView>
          {authState.isAuthenticated() ? (
            <>
              <Description>
                認証が成功して、各種トークンが取得できました。{'\n\n'}
                取得結果を以下に示します。AWS CognitoのOIDC認証ではIDトークン、アクセストークン、リフレッシュトークンの3つが取得できます。{'\n'}
                ここでは便宜上取得結果を画面に表示していますが、
                通常のアプリであれば、ユーザーまたは第三者の目に触れることのないようにセキュアなストレージに保管して管理してください。
                このアプリでは、AndroidではKeyStore、iOSではKeyChainに保管しています。
              </Description>
              <Section>
                <TextButton onPress={signOut} value={'サインアウト'} />
                <TextButton onPress={refresh} value={'トークンをリフレッシュ'} />
              </Section>
              <Section>
                <Title>accessTokenExpirationDate</Title>
                <Text>{authnStateViewData.accessTokenExpirationDate}</Text>
                <Title>idToken</Title>
                <Text>{authnStateViewData.idToken}</Text>
                <Title>accessToken</Title>
                <Text>{authnStateViewData.accessToken}</Text>
                <Title>refreshToken</Title>
                <Text>{authnStateViewData.refreshToken}</Text>
              </Section>
            </>
          ) : (
            <>
              <Description>
                AWS Cognitoを使ったOIDC認証の例を示します。 {'\n\n'}
                以下のボタンをタップするとAWS Cognitoの認証画面に遷移して、認証を求められます。 IDとパスワードはそれぞれ「guest」「P@ssw0rd」
                を入力してください。
              </Description>
              {hasJustSignOut && (
                <Description>
                  ※サインアウトするとトークンは破棄されますが、OpenID Providerの認証状態は一定期間残ります。
                  そのためサインアウト後に再度サインインする場合は、サインイン画面でIDとパスワードの入力が省略され、
                  すぐにアプリに戻ってきてサインインが完了します。
                </Description>
              )}
              <TextButton onPress={signIn} value={'サインイン'} />
            </>
          )}
        </ScrollView>
      )}
    </Container>
  );
};

export default StatelessAuth;
