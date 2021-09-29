package com.nablarch.example.app.entity;

import javax.annotation.Generated;
import javax.persistence.*;
import java.io.Serializable;

/**
 * パスワード変更履歴
 *
 */
@Generated("GSP")
@Entity
@Table(schema = "PUBLIC", name = "PASSWORD_HISTORY")
public class PasswordHistory implements Serializable {

    private static final long serialVersionUID = 1L;

    /** パスワード履歴 */
    private Long passwordHistoryId;

    /** ユーザID */
    private Integer userId;

    /** パスワード */
    private String userPassword;

    /** systemAccount関連プロパティ */
    private SystemAccount systemAccount;
    /**
     * パスワード履歴を返します。
     *
     * @return パスワード履歴
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PASSWORD_HISTORY_ID", precision = 19, nullable = false, unique = true)
    public Long getPasswordHistoryId() {
        return passwordHistoryId;
    }

    /**
     * パスワード履歴を設定します。
     *
     * @param passwordHistoryId パスワード履歴
     */
    public void setPasswordHistoryId(Long passwordHistoryId) {
        this.passwordHistoryId = passwordHistoryId;
    }
    /**
     * ユーザIDを返します。
     *
     * @return ユーザID
     */
    @Column(name = "USER_ID", precision = 10, nullable = true, unique = false, insertable = false, updatable = false)
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
     * systemAccountを返します。
     *
     * @return systemAccount
     */
    @ManyToOne
    @JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID")
    public SystemAccount getSystemAccount() {
        return systemAccount;
    }

    /**
     * systemAccountを設定します。
     *
     * @param systemAccount systemAccount
     */
    public void setSystemAccount(SystemAccount systemAccount) {
        this.systemAccount = systemAccount;
    }
}
