package com.nablarch.example.app.web.common.authentication;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

import nablarch.core.db.connection.ConnectionFactory;
import nablarch.core.db.connection.DbConnectionContext;
import nablarch.core.db.transaction.SimpleDbTransactionManager;
import nablarch.core.repository.ObjectLoader;
import nablarch.core.repository.SystemRepository;
import nablarch.core.repository.di.DiContainer;
import nablarch.core.repository.di.config.xml.XmlComponentDefinitionLoader;
import nablarch.core.util.DateUtil;

import org.h2.jdbcx.JdbcDataSource;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import please.change.me.util.FixedSystemTimeProvider;

import com.nablarch.example.app.web.common.authentication.encrypt.PBKDF2PasswordEncryptor;
import com.nablarch.example.app.web.common.authentication.encrypt.PasswordEncryptor;
import com.nablarch.example.app.web.common.authentication.exception.AuthenticationFailedException;
import com.nablarch.example.app.web.common.authentication.exception.PasswordExpiredException;
import com.nablarch.example.app.web.common.authentication.exception.UserIdLockedException;

/**
 * {@link SystemAccountAuthenticator}のテストクラス。
 *
 * @author Nabu Rakutaro
 */
public class SystemAccountAuthenticatorTest {

    /**
     * テストデータなどをセットアップするためのコネクション
     */
    private static Connection con;

    /** パスワード暗号化コンポーネント */
    private static PasswordEncryptor encryptor = getEncryptor();

    /**
     * 必要な初期設定を行った {@link PasswordEncryptor} を返却する。
     *
     * @return 必要な初期設定を行った {@link PasswordEncryptor}
     */
    private static PasswordEncryptor getEncryptor() {
        PBKDF2PasswordEncryptor encryptor = new PBKDF2PasswordEncryptor();
        encryptor.setFixedSalt("fixedSaltString");
        return encryptor;
    }

    /** xml（テスト用設定ファイル）の配置ディレクトリ */
    private static final String COMPONENT_BASE_PATH = "com/nablarch/example/app/web/common/authentication/";

    /**
     * セットアップ。
     *
     * テスト時に使用するデータベース接続の生成及びテスト用のテーブルのセットアップを行う。
     *
     * @throws java.sql.SQLException 例外
     */
    @BeforeClass
    public static void classSetup() throws SQLException {

        JdbcDataSource ds = new JdbcDataSource();
        ds.setURL("jdbc:h2:~/nablarch_test");
        ds.setUser("sa");
        ds.setPassword("");
        con = ds.getConnection();

        // setup test table
        Statement statement = con.createStatement();
        try {
            statement.execute("DROP TABLE SYSTEM_ACCOUNT CASCADE CONSTRAINTS");
        } catch (Exception e) {
            // nop
        }

        statement.execute("CREATE TABLE SYSTEM_ACCOUNT("
                + " USER_ID SERIAL NOT NULL,"
                + " LOGIN_ID VARCHAR(20) NOT NULL,"
                + " USER_PASSWORD VARCHAR(44) NOT NULL,"
                + " USER_ID_LOCKED BOOL NOT NULL,"
                + " PASSWORD_EXPIRATION_DATE DATE NOT NULL,"
                + " FAILED_COUNT SMALLINT NOT NULL,"
                + " EFFECTIVE_DATE_FROM DATE,"
                + " EFFECTIVE_DATE_TO DATE,"
                + " LAST_LOGIN_DATE_TIME TIMESTAMP(6),"
                + " VERSION BIGINT NOT NULL DEFAULT 1,"
                + " PRIMARY KEY (USER_ID))"
                );
        statement.execute("ALTER TABLE SYSTEM_ACCOUNT ADD CONSTRAINT UQ_SYSTEM_ACCOUNT_LOGIN_ID UNIQUE (LOGIN_ID)");

        statement.close();

        XmlComponentDefinitionLoader loader = new XmlComponentDefinitionLoader(
                COMPONENT_BASE_PATH + "authentication-db.xml");
        SystemRepository.load(new DiContainer(loader));

    }

    @Before
    public void setUp() throws Exception {
        DbConnectionContext.removeConnection();

        PreparedStatement truncate = con.prepareStatement("truncate table system_account");
        truncate.execute();
        truncate.close();

        // テストデータのセットアップ
        PreparedStatement insert = con.prepareStatement(
                "insert into SYSTEM_ACCOUNT values (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)");
        // active user
        insert.setString(1, "1");
        insert.setString(2, "active user");
        insert.setString(3, encryptor.encrypt("1", "password"));
        insert.setString(4, "0");
        insert.setString(5, "2013-08-04");
        insert.setInt(6, 0);
        insert.setString(7, "2013-08-02");
        insert.setString(8, "2013-08-05");
        insert.setNull(9, Types.TIMESTAMP);
        insert.execute();

        // locked user
        insert.setString(1, "3");
        insert.setString(2, "locked user");
        insert.setString(3, encryptor.encrypt("1", "password"));
        insert.setString(4, "1");       // locked
        insert.setString(5, "2013-08-04");
        insert.setInt(6, 0);
        insert.setString(7, "2013-08-02");
        insert.setString(8, "2013-08-05");
        insert.setNull(9, Types.TIMESTAMP);
        insert.execute();

        insert.setString(1, "4");
        insert.setString(2, "active user 2 failed");
        insert.setString(3, encryptor.encrypt("4", "password"));
        insert.setString(4, "0");
        insert.setString(5, "2013-08-04");
        insert.setInt(6, 2);
        insert.setString(7, "2013-08-02");
        insert.setString(8, "2013-08-05");
        insert.setNull(9, Types.TIMESTAMP);
        insert.execute();

        insert.setString(1, "5");
        insert.setString(2, "active user2");
        insert.setString(3, encryptor.encrypt("5", "pass!!!"));
        insert.setString(4, "0");
        insert.setString(5, "2013-08-05");
        insert.setInt(6, 0);
        insert.setString(7, "2013-08-02");
        insert.setString(8, "2013-08-05");
        insert.setNull(9, Types.TIMESTAMP);
        insert.execute();

        insert.close();
        con.commit();

        ConnectionFactory factory = SystemRepository.get("connectionFactory");
        DbConnectionContext.setConnection("transaction", factory.getConnection("transaction"));

    }

    @After
    public void tearDown() throws Exception {
        DbConnectionContext.getTransactionManagerConnection("transaction").commit();
        DbConnectionContext.removeConnection();
    }

    /**
     * クラス終了時の処理。
     *
     * @throws Exception 例外
     */
    @AfterClass
    public static void classDown() throws Exception {
        if (con != null) {
            con.close();
        }
    }

    /**
     * 認可対象のユーザIDがnullの場合は、{@link AuthenticationFailedException}が送出されること。
     */
    @Test
    public void testUserIdIsNull() {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130802");

        try {
            authenticator.authenticate(null, "password");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is(nullValue()));
        }
    }

    /**
     * 認可対象のユーザIDが空文字列の場合は、{@link AuthenticationFailedException}が送出されること。
     */
    @Test
    public void testUserIdIsEmptyString() {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130802");

        try {
            authenticator.authenticate("", "password");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is(""));
        }
    }

    /**
     * 認可対象のユーザIDがデータベースに存在しないので、{@link AuthenticationFailedException}が送出されること。
     */
    @Test
    public void testUserIsNotFound() {

        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130802");

        try {
            authenticator.authenticate("no exists", "password");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("no exists"));
        }
    }

    /**
     * 認可対象のユーザIDが存在しているが、有効期限が到来していない場合は{@link AuthenticationFailedException}が送出されること。
     */
    @Test
    public void testEffectiveDateIsNonArrival() {

        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130801");

        try {
            authenticator.authenticate("active user", "password");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("active user"));
        }
    }

    /**
     * 認可対象のユーザIDが存在しているが、有効期限を超過している場合は{@link AuthenticationFailedException}が送出されること。
     */
    @Test
    public void testEffectiveDateIsOver() {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130806");

        try {
            authenticator.authenticate("active user", "password");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("active user"));
        }
    }

    /**
     * 認可対象のパスワードがnullなので、{@link AuthenticationFailedException}が送出されること。
     */
    @Test
    public void testPasswordIsNull() {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130802");

        try {
            authenticator.authenticate("active user", null);
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("active user"));
        }
    }

    /**
     * 認可対象のパスワードが空文字列なので、{@link AuthenticationFailedException}が送出されること。
     */
    @Test
    public void testPasswordIsEmptyString() {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130802");

        try {
            authenticator.authenticate("active user", "");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("1"));
        }
    }

    /**
     * 認可対象のユーザIDが存在しているが、パスワードが一致しないため{@link AuthenticationFailedException}が送出されること。
     */
    @Test
    public void testPasswordIsUnMatch() {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130802");

        try {
            authenticator.authenticate("active user", "password1");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("1"));
        }
    }

    /**
     * パスワードの有効期限切れの場合は、{@link PasswordExpiredException}が送出されること。
     */
    @Test
    public void testPasswordExpiryIsOver() {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130805");
        authenticator.setFailedCountToLock(0);

        try {
            authenticator.authenticate("active user", "password");
            fail("エラーが発生するので、ここは通過しない");
        } catch (PasswordExpiredException e) {
            assertThat(e.getUserId(), is("1"));
            assertThat(e.getPasswordExpirationDate(), is(DateUtil.getDate("20130804")));
            assertThat(e.getBusinessDate(), is(DateUtil.getDate("20130805")));
        }
    }

    /**
     * 対象のユーザがロックされている場合は、{@link UserIdLockedException}が送出されること。
     */
    @Test
    public void testAccountLocked() {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130802");
        authenticator.setFailedCountToLock(5);

        try {
            authenticator.authenticate("locked user", "password");
            fail("エラーが発生するので、ここは通過しない");
        } catch (UserIdLockedException e) {
            assertThat(e.getUserId(), is("3"));
            assertThat(e.getFailedCountToLock(), is(5));
        }
    }

    /**
     * ログイン成功の場合、最終ログイン日時が更新されること。
     */
    @Test
    public void testLoginSuccess() throws Exception {

        //**********************************************************************
        // 業務日付がユーザの有効期限（開始日）と同日
        //**********************************************************************
        createPasswordAuthenticator("20130802").authenticate("active user2", "pass!!!");

        PreparedStatement statement = con.prepareStatement("select * from system_account where user_id = ?");
        statement.setString(1, "5");
        ResultSet resultSet = statement.executeQuery();
        assertThat(resultSet.next(), is(true));
        assertThat("ユーザはロック中のまま", resultSet.getString("USER_ID_LOCKED"), is("FALSE"));
        assertThat("失敗回数は変わらない", resultSet.getInt("FAILED_COUNT"), is(0));
        assertThat("最終ログイン日時が更新されること", resultSet.getTimestamp("LAST_LOGIN_DATE_TIME"),
                is(Timestamp.valueOf("2013-08-02 00:11:22.000")));

        //**********************************************************************
        // 業務日付がユーザの有効期限（終了日）と同日
        //**********************************************************************
        createPasswordAuthenticator("20130805").authenticate("active user2", "pass!!!");
    }

    /**
     * 対象のユーザが未ロックだが、認証失敗しロックされた場合{@link UserIdLockedException}が送出されること。
     * また、対象のユーザのロック状態が未ロックからロックに変更されること。
     *
     * 以下の順でテストを実施する。
     * <ol>
     *     <li>認証が成功することを確認</li>
     *     <li>認証失敗でアカウントがロックされ、認証失敗回数がインクリメントされる。</li>
     *     <li>認証成功するがアカウントがロックされているので、ロック中例外</li>
     * </ol>
     */
    @Test
    public void testFailedAndAccountLock() throws Exception {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130802");
        authenticator.setFailedCountToLock(3);

        //**********************************************************************
        // 認証が成功する(認証回数リセット)
        //**********************************************************************
        authenticator.authenticate("active user 2 failed", "password");

        // assertion
        PreparedStatement statement1 = con.prepareStatement("select * from system_account where user_id = ?");
        statement1.setString(1, "4");
        ResultSet resultSet1 = statement1.executeQuery();

        assertThat(resultSet1.next(), is(true));
        assertThat("認証失敗回数は0", resultSet1.getInt("FAILED_COUNT"), is(0));

        statement1.close();

        //**********************************************************************
        // 認証が失敗する(3回失敗するとロックされる)
        //**********************************************************************
        try {
            // 1回目
            authenticator.authenticate("active user 2 failed", "password un match");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("4"));
        }
        try {
            // 2回目
            authenticator.authenticate("active user 2 failed", "password un match");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("4"));
        }
        try {
            // 3回目
            authenticator.authenticate("active user 2 failed", "password un match");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("4"));
        }

        // assertion
        PreparedStatement statement2 = con.prepareStatement("select * from system_account where user_id = ?");
        statement2.setString(1, "4");
        ResultSet resultSet2 = statement2.executeQuery();

        assertThat(resultSet2.next(), is(true));
        assertThat("ユーザがロック済('1')みに変更されること", resultSet2.getString("USER_ID_LOCKED"), is("TRUE"));
        assertThat("認証失敗回数がインクリメントされること", resultSet2.getInt("FAILED_COUNT"), is(3));

        statement2.close();

        //**********************************************************************
        // 認証成功するがユーザロック中
        //**********************************************************************
        try {
            authenticator.authenticate("active user 2 failed", "password");
            fail("エラーが発生するので、ここは通過しない");
        } catch (UserIdLockedException e) {
            assertThat(e.getUserId(), is("4"));
            assertThat(e.getFailedCountToLock(), is(3));
        }

        PreparedStatement statement3 = con.prepareStatement("select * from system_account where user_id = ?");
        statement3.setString(1, "4");
        ResultSet resultSet3 = statement3.executeQuery();

        assertThat(resultSet3.next(), is(true));
        assertThat("ユーザはロック中のまま", resultSet3.getString("USER_ID_LOCKED"), is("TRUE"));
        assertThat("失敗回数は変わらない", resultSet3.getInt("FAILED_COUNT"), is(3));

        statement3.close();
    }

    /**
     * ユーザのロック機能を使用しない（認証エラー上限回数が0の場合）
     */
    @Test
    public void testUnsupportedUserLock() throws Exception {
        SystemAccountAuthenticator authenticator = createPasswordAuthenticator("20130802");
        // ロックされる上限回数を0に設定
        authenticator.setFailedCountToLock(0);

        //*********************************************************************
        // 認証成功
        //*********************************************************************
        authenticator.authenticate("active user 2 failed", "password");

        PreparedStatement statement1 = con.prepareStatement("select * from system_account where user_id = ?");
        statement1.setString(1, "4");
        ResultSet resultSet1 = statement1.executeQuery();

        assertThat(resultSet1.next(), is(true));
        assertThat("パスワード失敗回数は変更されない", resultSet1.getInt("FAILED_COUNT"), is(2));

        statement1.close();

        //*********************************************************************
        // 認証失敗
        //*********************************************************************
        try {
            authenticator.authenticate("active user 2 failed", "wrong-password");
            fail("エラーが発生するので、ここは通過しない");
        } catch (AuthenticationFailedException e) {
            assertThat(e.getUserId(), is("4"));
        }

        PreparedStatement statement2 = con.prepareStatement("select * from system_account where user_id = ?");
        statement2.setString(1, "4");
        ResultSet resultSet2 = statement2.executeQuery();

        assertThat(resultSet2.next(), is(true));
        assertThat("パスワード失敗回数は変更されない", resultSet2.getInt("FAILED_COUNT"), is(2));

        statement2.close();
    }

    /**
     * テスト対象の{@link SystemAccountAuthenticator}を生成する。
     *
     * @param businessDate 業務日付
     *
     * @return 生成した {@link SystemAccountAuthenticator}
     */
    private SystemAccountAuthenticator createPasswordAuthenticator(final String businessDate) {
        SystemAccountAuthenticator authenticator = new SystemAccountAuthenticator();

        authenticator.setFailedCountToLock(1);

        authenticator.setDbManager(SystemRepository.<SimpleDbTransactionManager>get("dbManager"));
        authenticator.setPasswordEncryptor(encryptor);

        // テストのために固定日付で動作させる。
        final FixedSystemTimeProvider systemTimeProvider = new FixedSystemTimeProvider();
        systemTimeProvider.setFixedDate(businessDate + "001122");
        SystemRepository.load(new ObjectLoader() {

            @Override
            public Map<String, Object> load() {
                return new HashMap<String, Object>() {
                    {
                        put("systemTimeProvider", systemTimeProvider);
                    }
                };
            }
        });

        return authenticator;
    }
}

