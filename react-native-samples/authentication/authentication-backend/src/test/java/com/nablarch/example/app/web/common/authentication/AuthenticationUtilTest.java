package com.nablarch.example.app.web.common.authentication;

import java.lang.reflect.Constructor;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.nablarch.example.app.web.common.authentication.encrypt.PasswordEncryptor;
import com.nablarch.example.app.web.common.authentication.exception.AuthenticationException;

import nablarch.core.repository.ObjectLoader;
import nablarch.core.repository.SystemRepository;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

/**
 * {@link AuthenticationUtil}のテストクラス
 *
 * @author Nabu Rakutaro
 */
public class AuthenticationUtilTest {

    /**
     * テスト開始時点の {@link PasswordAuthenticator}
     */
    private static PasswordAuthenticator defaultAuthenticator;

    /**
     * テスト開始時点の {@link PasswordEncryptor}
     */
    private static PasswordEncryptor defaultPasswordEncryptor;

    /**
     * {@code authenticator} と {@code passwordEncryptor} を {@link SystemRepository} の
     * "authenticator", "passwordEncryptor" に登録する。
     *
     * @param authenticator {@link SystemRepository} に登録する {@link PasswordAuthenticator}
     * @param encryptor {@link SystemRepository} に登録する {@link PasswordEncryptor}
     */
    private static void setupAuthenticationComponents(final PasswordAuthenticator authenticator, final PasswordEncryptor encryptor) {
        SystemRepository.load(new ObjectLoader() {
            @Override
            public Map<String, Object> load() {
                return new HashMap<String, Object>() {
                    {
                        put("authenticator", authenticator);
                        put("passwordEncryptor", encryptor);
                    }
                };
            }
        });
    }

    /**
     * Delegateを確認するテストのため、 {@link SystemRepository} に、
     * {@code authenticator} として {@link MockAuthenticator} を、
     * {@code passwordEncryptor} として {@link MockPasswordEncryptor} を登録する。
     */
    @BeforeClass
    public static void setupRepository() {
        defaultAuthenticator = SystemRepository.get("authenticator");
        defaultPasswordEncryptor = SystemRepository.get("passwordEncryptor");

        setupAuthenticationComponents(new MockAuthenticator(), new MockPasswordEncryptor());
    }

    /**
     * テスト終了時に、 {@link SystemRepository} に登録されている "authenticator" と "passwordEncryptor" を
     * 元の値に戻す。
     */
    @AfterClass
    public static void revertRepository() {
        if (defaultAuthenticator != null && defaultPasswordEncryptor != null) {
            setupAuthenticationComponents(defaultAuthenticator, defaultPasswordEncryptor);
        }
    }

    /**
     * {@link AuthenticationUtil#encryptPassword(String, String)}のテスト
     */
    @Test
    public void testEncryptPassword() {
        MockPasswordEncryptor sut = SystemRepository.get("passwordEncryptor");
        sut.called(1);
        sut.calledWith("salt", "password");
        AuthenticationUtil.encryptPassword("salt", "password");
        sut.verify("1度だけ呼び出され、引数がそのままpasswordEncryptorに渡されていること。");
    }

    /**
     * {@link AuthenticationUtil#authenticate(String, String)}のテスト
     */
    @Test
    public void testAuthenticate() {
        MockAuthenticator sut = SystemRepository.get("authenticator");
        sut.called(1);
        sut.calledWith("userId", "password");
        AuthenticationUtil.authenticate("userId", "password");
        sut.verify("1度だけ呼び出され、引数がそのままauthenticatorに渡されていること。");
    }

    /**
     * テスト用の {@link PasswordAuthenticator}
     * <p/>
     * 呼び出された回数と、引数として渡されたユーザID・パスワードを検証する。
     *
     * @author Nabu Rakutaro
     * @version 1.4
     */
    private static class MockAuthenticator extends MockSupport implements PasswordAuthenticator {

        @Override
        public void authenticate(String userId, String password) throws AuthenticationException {
            this.actualCalled++;
            this.calledWith.add(Arrays.asList(userId, password));
        }
    }

    /**
     * テスト用の {@link PasswordEncryptor}
     * <p/>
     * 呼び出された回数と、引数として渡されたソルト取得元・パスワードを検証する。
     *
     * @author Nabu Rakutaro
     * @version 1.4
     */
    private static class MockPasswordEncryptor extends MockSupport implements PasswordEncryptor {

        @Override
        public String encrypt(String saltSeed, String password) {
            this.actualCalled++;
            this.calledWith.add(Arrays.asList(saltSeed, password));
            return saltSeed + password;
        }
    }

    /**
     * モッククラス用のサポート。
     * <p/>
     * 呼び出された回数と引数を検証するためのメソッドを定義している。
     *
     * @author Nabu Rakutaro
     * @version 1.4
     */
    private static abstract class MockSupport {

        /**
         * 実際に呼び出された回数
         */
        protected int actualCalled;

        /**
         * 実際の呼び出し時の引数
         * <p/>
         * 複数回呼び出される場合、呼び出された順に格納される。
         */
        protected List<List<String>> calledWith;

        /**
         * 期待する呼び出し回数
         */
        protected int expectedCall;

        /**
         * 呼び出し時の期待する引数
         * <p/>
         * 複数回の呼び出しを期待する場合には、それぞれで期待する引数を呼び出し順に格納する。
         */
        protected List<List<String>> expectedParams;

        /**
         * 期待する呼び出し回数を設定する。
         *
         * @param num 期待する呼び出し回数
         */
        public void called(int num) {
            this.expectedCall = num;
        }

        /**
         * 呼び出し時の期待する引数を追加する。
         *
         * @param params 呼び出し時の期待する引数
         */
        public void calledWith(String... params) {
            this.expectedParams.add(Arrays.asList(params));
        }

        /**
         * 実際の呼び出し回数・引数が、期待値と一致することを検証する。
         *
         * @param msg 検証失敗時のメッセージ
         */
        public void verify(String msg) {
            assertThat(msg + ": 呼び出し回数", actualCalled, is(expectedCall));
            assertThat(msg + ": 呼び出し時の引数", calledWith, is(expectedParams));

            initialize();
        }

        /**
         * 実際の値と、期待値を初期化する。
         */
        void initialize() {
            this.actualCalled = 0;
            this.expectedCall = 0;
            this.calledWith = new ArrayList<List<String>>();
            this.expectedParams = new ArrayList<List<String>>();
        }

        /**
         * デフォルトコンストラクタ
         */
        public MockSupport() {
            initialize();
        }
    }

    /**
     * コンストラクタのカバレッジ
     *
     * @throws Exception コンストラクタの呼び出しに失敗した場合
     */
    @Test
    public void testConstructor() throws Exception {
        Constructor<AuthenticationUtil> constructor = AuthenticationUtil.class.getDeclaredConstructor();
        constructor.setAccessible(true);
        constructor.newInstance();
    }
}
