package com.nablarch.example.app.web.common.authentication.encrypt;


/**
 * パスワードの暗号化を行うインタフェース。<br>
 * <br>
 * 暗号化アルゴリズム毎に本インタフェースの実装クラスを作成する。
 *
 * @author Nabu Rakutaro
 */
public interface PasswordEncryptor {

    /**
     * パスワードを暗号化する。
     * @param saltSeed パスワードの暗号化に使用するソルトを生成するために使用する文字列
     * @param password 暗号化前のパスワード
     * @return 暗号化後のパスワード
     */
    String encrypt(String saltSeed, String password);
}
