package com.nablarch.example.app.web.common.authentication.exception;

/**
 * アカウント情報の不一致により認証に失敗した場合に発生する例外。
 * <p/>
 * 対象ユーザのユーザIDを保持する。
 * @author Nabu Rakutaro
 */
public class AuthenticationFailedException extends AuthenticationException {

    /** serialVersionUID. */
    private static final long serialVersionUID = 1L;

    /** ユーザID */
    private final String userId;

    /**
     * コンストラクタ。
     * @param userId ユーザID
     */
    public AuthenticationFailedException(String userId) {
        this.userId = userId;
    }

    /**
     * ユーザIDを取得する。
     * @return ユーザID
     */
    public String getUserId() {
        return userId;
    }
}
