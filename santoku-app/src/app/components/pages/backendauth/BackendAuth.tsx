import React, {useCallback, useState} from 'react';
import {Text as RNText} from 'react-native';
import {Content, Spinner} from 'native-base';
import {Container, TextButton, Section, Description, Text, Title} from '../../basics';
import WithBackendAuthContext from '../../parts/WithBackendAuthContext';
import {useBackendAuthContext} from '../../../context/BackendAuthContext';
import {OidcRefreshableAuthenticated} from '../../../backend/authn/oidc/OidcAuthenticationState';
import {BackendAuthnService} from '../../../backend/BackendAuthnService';
import {AxiosResponse} from 'axios';
import {log} from '../../../../framework/logging';

const BackendAuthInner: React.FC = () => {
  const backendAuthContext = useBackendAuthContext();
  const [loading, setLoading] = useState<boolean>(false);

  const signOut = useCallback(async () => {
    setLoading(true);
    await backendAuthContext.signOut();
    setLoading(false);
  }, [setLoading, backendAuthContext]);

  const signIn = useCallback(async () => {
    setLoading(true);
    await backendAuthContext.signIn();
    setLoading(false);
  }, [setLoading, backendAuthContext]);

  if (loading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  } else if (backendAuthContext.isLoggedIn) {
    return (
      <Container>
        <BackendAuthed onSignOut={signOut} />
      </Container>
    );
  } else {
    return (
      <Container>
        <BackendUnauthed onSignIn={signIn} />
      </Container>
    );
  }
};

type Client = {
  clientId: number;
  clientName: string;
  industryCode: string;
  industryName: string;
};

type BackendAuthedProps = {
  onSignOut: () => void;
};

const BackendAuthed: React.FC<BackendAuthedProps> = (props) => {
  const {onSignOut} = props;
  const [clients, setClients] = useState<Array<Client>>([]);
  const backendAuthContext = useBackendAuthContext();

  const getClients = async () => {
    try {
      const response = await BackendAuthnService.getClients();
      const newClients = response?.data || [];
      setClients(newClients);
    } catch (e1) {
      const response = e1.response as AxiosResponse;
      // TODO: backend server returns 403 instead of 401 if session expired.
      if (response.status === 401 || response.status === 403) {
        // refresh idToken and re-login backend
        await backendAuthContext.refreshSession();
        if (backendAuthContext.isLoggedIn) {
          // retry getClients
          try {
            const retryResponse = await BackendAuthnService.getClients();
            const newClients = retryResponse?.data || [];
            setClients(newClients);
          } catch (e2) {
            log.error(() => 'Failed to get clients. exception: %o', e2);
          }
        }
      }
    }
  };

  return (
    <Content>
      <Description>
        認証が成功し、バックエンドサーバーとのセッションが確立できました。
        確立したセッションを用いてバックエンドサーバーから顧客データを取得して以下に表示します。
      </Description>
      <Section>
        <TextButton onPress={onSignOut} value={'サインアウト'} />
        <TextButton onPress={getClients} value={'顧客データ取得'} />
      </Section>
      {clients.length > 0 && (
        <Section>
          <Text>顧客データ件数: {clients.length}</Text>
          {clients.map((client, index) => {
            if (index < 10) {
              return <RNText key={index}>顧客名: {client.clientName}</RNText>;
            }
          })}
          {clients.length > 5 && <RNText>... (以下略)</RNText>}
        </Section>
      )}
    </Content>
  );
};

type BackendUnauthedProps = {
  onSignIn: () => void;
};

const BackendUnauthed: React.FC<BackendUnauthedProps> = (props) => {
  const {onSignIn} = props;
  const backendAuthContext = useBackendAuthContext();
  const oidcAuthnState = backendAuthContext.authnState.getOidcAuthenticationState();
  const refreshToken = oidcAuthnState.isAuthenticated() ? (oidcAuthnState as OidcRefreshableAuthenticated).refreshToken : null;

  return (
    <Content>
      <Section>
        <Description>
          OpenID Connect認証で得たIDトークンを用いて、バックエンドサービスとセッションを確立する例を示します。
          以前取得したリフレッシュトークンが端末内に存在する場合は、そのリフレッシュトークンを用いてIDトークンを再取得します。
          以下のボタンをタップすると、まだAWS Cognitoの認証が完了していない場合はAWS Cognitoの認証画面に遷移し、認証を求められます。
          IDとパスワードはそれぞれ「guest」「P@ssw0rd」を入力してください。
          リフレッシュトークンを用いてIDトークンを再取得する場合、端末所持者の本人確認として端末認証（指紋認証、Face IDなど）が求められます。
        </Description>
        <TextButton onPress={onSignIn} value={'サインイン'} />
        <Description>
          この例ではIDとパスワードの再入力を省略可能にするために、AWS Cognitoから取得したリフレッシュトークンを端末内に保存しています。
          リフレッシュトークンはAndroidではKeyStoreに保存した鍵で暗号化してSharedPreferenceに保管し、iOSではKeychainに保管しています。
          このリフレッシュトークンは、端末認証（指紋認証、Face ID、PIN入力など）に成功しないと利用できないようにしています。
        </Description>
        <Description>
          動作確認のために、保存されているリフレッシュトークンを以下に表示しています。
          通常のアプリであれば、ユーザーまたは第三者の目に触れることのないように扱ってください。
        </Description>
        <Title>refreshToken</Title>
        <Text>{refreshToken ? refreshToken : '保存されていません'}</Text>
      </Section>
    </Content>
  );
};

const BackendAuth: React.FC = () => {
  return (
    <WithBackendAuthContext>
      <BackendAuthInner />
    </WithBackendAuthContext>
  );
};

export default BackendAuth;
