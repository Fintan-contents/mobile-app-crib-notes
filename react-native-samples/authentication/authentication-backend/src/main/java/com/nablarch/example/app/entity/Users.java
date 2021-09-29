package com.nablarch.example.app.entity;

import javax.annotation.Generated;
import javax.persistence.*;
import java.io.Serializable;

/**
 * ユーザ
 *
 */
@Generated("GSP")
@Entity
@Table(schema = "PUBLIC", name = "USERS")
public class Users implements Serializable {

    private static final long serialVersionUID = 1L;

    /** ユーザID */
    private Integer userId;

    /** 漢字氏名 */
    private String kanjiName;

    /** ふりがな */
    private String kanaName;

    /** systemAccount関連プロパティ */
    private SystemAccount systemAccount;
    /**
     * ユーザIDを返します。
     *
     * @return ユーザID
     */
    @Id
    @Column(name = "USER_ID", precision = 10, nullable = false, unique = true, insertable = false, updatable = false)
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
     * 漢字氏名を返します。
     *
     * @return 漢字氏名
     */
    @Column(name = "KANJI_NAME", length = 128, nullable = false, unique = false)
    public String getKanjiName() {
        return kanjiName;
    }

    /**
     * 漢字氏名を設定します。
     *
     * @param kanjiName 漢字氏名
     */
    public void setKanjiName(String kanjiName) {
        this.kanjiName = kanjiName;
    }
    /**
     * ふりがなを返します。
     *
     * @return ふりがな
     */
    @Column(name = "KANA_NAME", length = 128, nullable = false, unique = false)
    public String getKanaName() {
        return kanaName;
    }

    /**
     * ふりがなを設定します。
     *
     * @param kanaName ふりがな
     */
    public void setKanaName(String kanaName) {
        this.kanaName = kanaName;
    }

    /**
     * systemAccountを返します。
     *
     * @return systemAccount
     */
    @OneToOne
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
