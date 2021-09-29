package com.nablarch.example.app.web.common.authentication;

import java.util.Date;

import nablarch.common.dao.NoDataException;
import nablarch.common.dao.UniversalDao;
import nablarch.core.date.SystemTimeUtil;
import nablarch.core.db.connection.AppDbConnection;
import nablarch.core.db.statement.SqlPStatement;
import nablarch.core.db.transaction.SimpleDbTransactionExecutor;
import nablarch.core.db.transaction.SimpleDbTransactionManager;
import nablarch.core.util.DateUtil;

import com.nablarch.example.app.entity.SystemAccount;
import com.nablarch.example.app.web.common.authentication.encrypt.PasswordEncryptor;
import com.nablarch.example.app.web.common.authentication.exception.AuthenticationFailedException;
import com.nablarch.example.app.web.common.authentication.exception.PasswordExpiredException;
import com.nablarch.example.app.web.common.authentication.exception.UserIdLockedException;

/**
 * データベースに保存されたアカウント情報に対してパスワード認証を行うクラス。<br>
 * <br>
 * PasswordAuthenticatorの特徴を下記に示す。
 * <ul>
 * <li>DBに保存したアカウント情報を使用したパスワード認証ができる。</li>
 * <li>認証時にパスワードの有効期限をチェックできる。</li>
 * <li>連続で指定回数認証に失敗するとユーザIDにロックをかける。(失敗可能回数が指定（0より大きい場合）のみロック機能が有効となる）</li>
 * </ul>
 * PasswordAuthenticatorでは、認証の成功・失敗に関わらず、認証処理においてDBの更新処理が必要なため、内部でトランザクションのコミットを行う。<br>
 * そのため、PasswordAuthenticatorのトランザクション制御が個別アプリケーションの処理に影響を与えないように、
 * 個別アプリケーションとは別のトランザクションを使用するように、PasswordAuthenticatorに{@link SimpleDbTransactionManager}を設定すること。
 *
 * @author Nabu Rakutaro
 */
public class SystemAccountAuthenticator implements PasswordAuthenticator {

    /** ユーザIDをロックする認証失敗回数 */
    private int failedCountToLock;

    /** パスワードの暗号化に使用する{@link PasswordEncryptor} */
    private PasswordEncryptor passwordEncryptor;

    /** データベースへのトランザクション制御を行う{@link SimpleDbTransactionManager} */
    private SimpleDbTransactionManager dbManager;

    /** SQL_IDのプレフィックス */
    private static final String SQL_ID_PREFIX = SystemAccountAuthenticator.class.getName() + '#';

    /** デフォルトコンストラクタ。 */
    public SystemAccountAuthenticator() {
        failedCountToLock = 0;
    }

    /**
     * ユーザIDをロックする認証失敗回数を設定する。
     *
     * @param failedCountToLock ユーザIDをロックする認証失敗回数
     */
    public void setFailedCountToLock(int failedCountToLock) {
        this.failedCountToLock = failedCountToLock;
    }

    /**
     * パスワードの暗号化に使用する{@link PasswordEncryptor}を設定する。
     *
     * @param passwordEncryptor パスワードの暗号化に使用する{@link PasswordEncryptor}
     */
    public void setPasswordEncryptor(PasswordEncryptor passwordEncryptor) {
        this.passwordEncryptor = passwordEncryptor;
    }

    /**
     * データベースへのトランザクション制御を行う{@link SimpleDbTransactionManager}を設定する。
     *
     * @param dbManager データベースへのトランザクション制御を行う{@link SimpleDbTransactionManager}
     */
    public void setDbManager(SimpleDbTransactionManager dbManager) {
        this.dbManager = dbManager;
    }

    /**
     * アカウント情報を使用してユーザを認証する。
     *
     * @param userId ユーザID
     * @param password パスワード
     *
     * @throws AuthenticationFailedException ユーザIDまたはパスワードに一致するユーザが見つからない場合
     * @throws UserIdLockedException ユーザIDがロックされている場合。この例外がスローされる場合は、まだ認証を実施していない。
     * @throws PasswordExpiredException パスワードが有効期限切れの場合。この例外がスローされる場合は、古いパスワードによる認証に成功している。
     */
    @Override
    public void authenticate(final String userId, final String password)
        throws AuthenticationFailedException, UserIdLockedException, PasswordExpiredException {

        if (userId == null || password == null) {
            throw new AuthenticationFailedException(userId);
        }

        // 有効期限は日付単位で管理しているので、現在日時から時間を切り捨てた日付を使用する。
        final Date sysDate = DateUtil.getDate(SystemTimeUtil.getDateString());
        final SystemAccount account;
        try {
            account = UniversalDao.findBySqlFile(
                    SystemAccount.class,
                    "FIND_SYSTEM_ACCOUNT", new Object[]{userId, sysDate});
        } catch (NoDataException ignored) {
            // ユーザIDに一致するユーザーが見つからない場合
            throw new AuthenticationFailedException(userId);
        }

        authenticate(account, password, sysDate);
    }

    /**
     * システムアカウントに対してパスワードによる認証を行う。
     *
     * @param account システムアカウント
     * @param password パスワード
     * @param businessDate 業務日付
     *
     * @throws AuthenticationFailedException ユーザIDまたはパスワードに一致するユーザが見つからない場合
     * @throws UserIdLockedException ユーザIDがロックされている場合。この例外がスローされる場合は、まだ認証を実施していない。
     * @throws PasswordExpiredException パスワードが有効期限切れの場合。この例外がスローされる場合は、古いパスワードによる認証に成功している。
     */
    private void authenticate(SystemAccount account, String password, Date businessDate)
        throws AuthenticationFailedException, UserIdLockedException, PasswordExpiredException {

        if (account.isUserIdLocked()) {
            throw new UserIdLockedException(String.valueOf(account.getUserId()), failedCountToLock);
        }

        // 入力されたパスワードを暗号化ロジックにしたがって暗号化する。
        String encryptedPassword = passwordEncryptor.encrypt(String.valueOf(account.getUserId()), password);

        // アカウントの認証を行う。
        // 本サンプルでは、暗号化後パスワードが一致するか否かのみで認証の判定を行う。
        if (!account.getUserPassword().equals(encryptedPassword)) {

            // ログインの連続失敗回数を記録する場合、
            // 現在の失敗回数に 1 を加算する。
            // 記録しない場合は現在の失敗回数のままとする。（変更しない）
            @SuppressWarnings("NumericCastThatLosesPrecision")
            short failedCount = isChecksFailedCount()
                    ? (short) (account.getFailedCount() + Short.valueOf("1"))
                    : account.getFailedCount();
            updateAuthenticationFailed(account.getUserId(), failedCount);
            throw new AuthenticationFailedException(String.valueOf(account.getUserId()));
        }

        // ここまでで、認証自体は成功しているので、ログインが成功した情報を残しておく。
        updateAuthenticationSucceed(account.getUserId());

        // パスワード有効期限切れの判定
        // パスワードの有効期限が切れていたら例外を送出する。
        if (isExpiredPassword(account, businessDate)) {

            throw new PasswordExpiredException(
                    String.valueOf(account.getUserId()),
                    account.getPasswordExpirationDate(),
                    businessDate);
        }
    }

    /**
     * 判定基準日時点で、パスワードが有効期限切れであるか否か。
     *
     * @param account 判定するアカウント
     * @param businessDate 判定基準日（yyyyMMdd）
     * @return パスワードが有効期限切れの場合　true
     */
    private boolean isExpiredPassword(SystemAccount account, Date businessDate) {
        return businessDate.compareTo(account.getPasswordExpirationDate()) > 0;
    }

    /**
     * 認証失敗回数チェックの使用有無を取得する。
     *
     * @return 認証失敗回数チェックを使用する場合はtrue、使用しない場合はfalse
     */
    private boolean isChecksFailedCount() {
        return failedCountToLock > 0;
    }

    /**
     * 認証成功時のシステムアカウント更新を行う。
     *
     * @param id 更新対象のシステムアカウントを特定するID
     */
    private void updateAuthenticationSucceed(final Integer id) {
        // システムアカウントの更新処理はログインの成否に関わらず実行するため、
        // 業務のトランザクションとは別に実行する必要がある。
        new SimpleDbTransactionExecutor<Void>(dbManager) {
            @Override
            public Void execute(final AppDbConnection connection) {
                final SqlPStatement statement = connection.prepareStatementBySqlId(
                        SQL_ID_PREFIX + "RESET_FAILED_COUNT");
                statement.setInt(1, failedCountToLock);
                statement.setTimestamp(2, SystemTimeUtil.getTimestamp());
                statement.setLong(3, id);
                statement.executeUpdate();
                return null;
            }
        } .doTransaction();
    }

    /**
     * 認証失敗時のシステムアカウント更新を行う。
     * <pre>
     * 本サンプルでは、認証失敗回数の更新と失敗回数がロック回数に達した場合のロックのみ行う。
     * 認証失敗時のロックを実施しない場合はこのメソッド内では何も行わない。
     * </pre>
     * @param id 更新対象のシステムアカウントを特定するID
     * @param failedCount 失敗回数
     */
    private void updateAuthenticationFailed(final Integer id, final Short failedCount) {

        if (!isChecksFailedCount()) {
            // アカウントロックを行わない場合は、失敗時に何もしない。
            return;
        }

        new SimpleDbTransactionExecutor<Void>(dbManager) {
            @Override
            public Void execute(final AppDbConnection connection) {
                final SqlPStatement statement = connection.prepareStatementBySqlId(
                        SQL_ID_PREFIX + "UPDATE_FAILED_COUNT");
                statement.setShort(1, failedCount);
                statement.setBoolean(2, failedCountToLock <= failedCount);
                statement.setLong(3, id);
                statement.executeUpdate();
                return null;
            }
        } .doTransaction();
    }
}

