package com.nablarch.example.app.web.common.authentication;

import com.nablarch.example.app.web.common.authentication.exception.AuthenticationException;

/**
 * ユーザの認証を行うインタフェース。
 * <p/>
 * 認証方式毎に本インタフェースの実装クラスを作成する。
 * @author Nabu Rakutaro
 */
public interface PasswordAuthenticator {

    /**
     * アカウント情報を使用してユーザを認証する。
     * <p/>
     * 実装クラスでは、認証方式毎にメソッド引数と送出する可能性がある例外を規定すること。
     *
     * @param userId ユーザID
     * @param password パスワード
     * @throws AuthenticationException 認証例外
     */
    void authenticate(String userId, String password) throws AuthenticationException;
}
