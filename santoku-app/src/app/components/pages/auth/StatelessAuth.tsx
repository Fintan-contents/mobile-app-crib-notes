import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Text, Spinner, Button, Card } from 'native-base';
import useAuthState from '../../../hooks/stateless-auth-hooks';

export default function StatelessAuth() {
  const { authState, loading, signIn, signOut, refresh, hasJustSignOut } = useAuthState();

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <ScrollView style={styles.view}>
          {authState ? (
            <>
              <Button full onPress={signOut}>
                <Text>サインアウト</Text>
              </Button>
              <Text>{'\n'}</Text>
              <Button full onPress={refresh}>
                <Text>トークンをリフレッシュ</Text>
              </Button>
              <Text>{'\n\n'}</Text>

              <Text style={styles.title}>accessTokenExpirationDate{'\n'}</Text>
              <Text>
                {authState.accessTokenExpirationDate}
                {'\n'}
              </Text>
              <Text style={styles.title}>idToken{'\n'}</Text>
              <Text>
                {authState.idToken}
                {'\n'}
              </Text>
              <Text style={styles.title}>accessToken{'\n'}</Text>
              <Text>
                {authState.accessToken}
                {'\n'}
              </Text>
              <Text style={styles.title}>refreshToken{'\n'}</Text>
              <Text>
                {authState.refreshToken}
                {'\n'}
              </Text>
            </>
          ) : (
            <>
              <Button full onPress={signIn}>
                <Text>サインイン</Text>
              </Button>
              {hasJustSignOut && (
                <Card>
                  <Text style={styles.description}>
                    サインアウトするとトークンは破棄されますが、OpenID Providerの認証状態は一定期間残ります。
                    そのためサインアウト後に再度サインインする場合は、サインイン画面でIDとパスワードの入力が省略され、
                    すぐにアプリに戻ってきてサインインが完了します。
                  </Text>
                </Card>
              )}
            </>
          )}
        </ScrollView>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  view: {
    margin: 10,
  },
  description: {
    padding: 20,
  },
});
