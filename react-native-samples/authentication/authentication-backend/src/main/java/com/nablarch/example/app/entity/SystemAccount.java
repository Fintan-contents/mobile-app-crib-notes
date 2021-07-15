package com.nablarch.example.app.entity;

import javax.annotation.Generated;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * システムアカウント
 *
 */
@Generated("GSP")
@Entity
@Table(schema = "PUBLIC", name = "SYSTEM_ACCOUNT")
public class SystemAccount implements Serializable {

    private static final long serialVersionUID = 1L;

    /** ユーザID */
    private Integer userId;

    /** ログインID */
    private String loginId;

    /** パスワード */
    private String userPassword;

    /** ユーザIDロック */
    private boolean userIdLocked;

    /** パスワード有効期限 */
    private Date passwordExpirationDate;

    /** 認証失敗回数 */
    private Short failedCount;

    /** 有効期限(FROM) */
    private Date effectiveDateFrom;

    /** 有効期限(TO) */
    private Date effectiveDateTo;

    /** 最終ログイン日時 */
    private Date lastLoginDateTime;

    /** バージョン番号 */
    private Long version;

    /** passwordHistoryList関連プロパティ */
    private List<PasswordHistory> passwordHistoryList;

    /** projectList関連プロパティ */
    private List<Project> projectList;

    /** users関連プロパティ */
    private Users users;
    /**
     * ユーザIDを返します。
     *
     * @return ユーザID
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "USER_ID", precision = 10, nullable = false, unique = true)
    public Integer getUserId() {
        return userId;
    }

    /**
     * ユーザIDを設定します。
     *
     * @param userId ユーザID
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    /**
     * ログインIDを返します。
     *
     * @return ログインID
     */
    @Column(name = "LOGIN_ID", length = 20, nullable = false, unique = true)
    public String getLoginId() {
        return loginId;
    }

    /**
     * ログインIDを設定します。
     *
     * @param loginId ログインID
     */
    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }
    /**
     * パスワードを返します。
     *
     * @return パスワード
     */
    @Column(name = "USER_PASSWORD", length = 44, nullable = false, unique = false)
    public String getUserPassword() {
        return userPassword;
    }

    /**
     * パスワードを設定します。
     *
     * @param userPassword パスワード
     */
    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }
    /**
     * ユーザIDロックを返します。
     *
     * @return ユーザIDロック
     */
    @Column(name = "USER_ID_LOCKED", length = 1, nullable = false, unique = false)
    public boolean isUserIdLocked() {
        return userIdLocked;
    }

    /**
     * ユーザIDロックを設定します。
     *
     * @param userIdLocked ユーザIDロック
     */
    public void setUserIdLocked(boolean userIdLocked) {
        this.userIdLocked = userIdLocked;
    }
    /**
     * パスワード有効期限を返します。
     *
     * @return パスワード有効期限
     */
    @Temporal(TemporalType.DATE)
    @Column(name = "PASSWORD_EXPIRATION_DATE", nullable = false, unique = false)
    public Date getPasswordExpirationDate() {
        return passwordExpirationDate;
    }

    /**
     * パスワード有効期限を設定します。
     *
     * @param passwordExpirationDate パスワード有効期限
     */
    public void setPasswordExpirationDate(Date passwordExpirationDate) {
        this.passwordExpirationDate = passwordExpirationDate;
    }
    /**
     * 認証失敗回数を返します。
     *
     * @return 認証失敗回数
     */
    @Column(name = "FAILED_COUNT", precision = 5, nullable = false, unique = false)
    public Short getFailedCount() {
        return failedCount;
    }

    /**
     * 認証失敗回数を設定します。
     *
     * @param failedCount 認証失敗回数
     */
    public void setFailedCount(Short failedCount) {
        this.failedCount = failedCount;
    }
    /**
     * 有効期限(FROM)を返します。
     *
     * @return 有効期限(FROM)
     */
    @Temporal(TemporalType.DATE)
    @Column(name = "EFFECTIVE_DATE_FROM", nullable = true, unique = false)
    public Date getEffectiveDateFrom() {
        return effectiveDateFrom;
    }

    /**
     * 有効期限(FROM)を設定します。
     *
     * @param effectiveDateFrom 有効期限(FROM)
     */
    public void setEffectiveDateFrom(Date effectiveDateFrom) {
        this.effectiveDateFrom = effectiveDateFrom;
    }
    /**
     * 有効期限(TO)を返します。
     *
     * @return 有効期限(TO)
     */
    @Temporal(TemporalType.DATE)
    @Column(name = "EFFECTIVE_DATE_TO", nullable = true, unique = false)
    public Date getEffectiveDateTo() {
        return effectiveDateTo;
    }

    /**
     * 有効期限(TO)を設定します。
     *
     * @param effectiveDateTo 有効期限(TO)
     */
    public void setEffectiveDateTo(Date effectiveDateTo) {
        this.effectiveDateTo = effectiveDateTo;
    }
    /**
     * 最終ログイン日時を返します。
     *
     * @return 最終ログイン日時
     */
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "LAST_LOGIN_DATE_TIME", nullable = true, unique = false)
    public Date getLastLoginDateTime() {
        return lastLoginDateTime;
    }

    /**
     * 最終ログイン日時を設定します。
     *
     * @param lastLoginDateTime 最終ログイン日時
     */
    public void setLastLoginDateTime(Date lastLoginDateTime) {
        this.lastLoginDateTime = lastLoginDateTime;
    }
    /**
     * バージョン番号を返します。
     *
     * @return バージョン番号
     */
    @Version
    @Column(name = "VERSION", precision = 19, nullable = false, unique = false)
    public Long getVersion() {
        return version;
    }

    /**
     * バージョン番号を設定します。
     *
     * @param version バージョン番号
     */
    public void setVersion(Long version) {
        this.version = version;
    }

    /**
     * passwordHistoryListを返します。
     *
     * @return passwordHistoryList
     */
    @OneToMany(mappedBy = "systemAccount")
    public List<PasswordHistory> getPasswordHistoryList() {
        return passwordHistoryList;
    }

    /**
     * passwordHistoryListを設定します。
     *
     * @param passwordHistoryList passwordHistoryList
     */
    public void setPasswordHistoryList(List<PasswordHistory> passwordHistoryList) {
        this.passwordHistoryList = passwordHistoryList;
    }

    /**
     * projectListを返します。
     *
     * @return projectList
     */
    @OneToMany(mappedBy = "systemAccount")
    public List<Project> getProjectList() {
        return projectList;
    }

    /**
     * projectListを設定します。
     *
     * @param projectList projectList
     */
    public void setProjectList(List<Project> projectList) {
        this.projectList = projectList;
    }

    /**
     * usersを返します。
     *
     * @return users
     */
    @OneToOne(mappedBy = "systemAccount")
    public Users getUsers() {
        return users;
    }

    /**
     * usersを設定します。
     *
     * @param users users
     */
    public void setUsers(Users users) {
        this.users = users;
    }
}
