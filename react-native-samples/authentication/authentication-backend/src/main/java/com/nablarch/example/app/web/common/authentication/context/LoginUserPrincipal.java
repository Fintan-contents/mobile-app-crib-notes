package com.nablarch.example.app.web.common.authentication.context;

import java.io.Serializable;
import java.util.Date;

/**
 * ログインユーザー情報
 *
 * @author Nabu Rakutaro
 */
public class LoginUserPrincipal implements Serializable {

    /**
     * serialVersionUID.
     */
    private static final long serialVersionUID = 1L;

    /** ユーザID */
    private Integer userId;

    /** 漢字氏名 */
    private String kanjiName;

    /** 最終ログイン日時 */
    private Date lastLoginDateTime;

    /**
     * ユーザIDを取得する。
     *
     * @return ユーザID
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * ユーザIDを設定する。
     *
     * @param userId ユーザID
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * 漢字氏名を取得する。
     *
     * @return 漢字氏名
     */
    public String getKanjiName() {
        return kanjiName;
    }

    /**
     * 漢字氏名を設定する。
     *
     * @param kanjiName 漢字氏名
     */
    public void setKanjiName(String kanjiName) {
        this.kanjiName = kanjiName;
    }

    /**
     * 最終ログイン日時を取得する。
     *
     * @return 最終ログイン日時
     */
    public Date getLastLoginDateTime() {
        return lastLoginDateTime;
    }

    /**
     * 最終ログイン日時を設定する。
     *
     * @param lastLoginDateTime 最終ログイン日時
     */
    public void setLastLoginDateTime(Date lastLoginDateTime) {
        this.lastLoginDateTime = lastLoginDateTime;
    }

}
