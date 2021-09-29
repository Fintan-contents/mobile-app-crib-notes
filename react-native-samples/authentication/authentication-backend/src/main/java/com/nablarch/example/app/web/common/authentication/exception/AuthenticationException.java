package com.nablarch.example.app.web.common.authentication.exception;


/**
 * ユーザの認証に失敗した場合に発生する例外。<br>
 * <br>
 * 認証方式に応じて、本クラスを継承した例外クラスを作成する。<br>
 * 本クラス及びサブクラスでは、ユーザへ提示するメッセージの作成に必要な情報を保持し、メッセージの作成は行わない。
 * @author Nabu Rakutaro
 */
public class AuthenticationException extends RuntimeException {

    /**
     * serialVersionUID.
     */
    private static final long serialVersionUID = 1L;
}
