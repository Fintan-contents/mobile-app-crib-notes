package com.nablarch.example.app.web.common.authentication.encrypt;

import java.nio.charset.Charset;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import nablarch.core.util.Base64Util;

/**
 * PBKDF2を使用してパスワードの暗号化を行うクラス。
 * <p/>
 * ソルトには、{@link #fixedSalt} に設定された固定文字列と、{@link #encrypt(String, String)}で
 * {@code saltSeed} に指定された文字列を連結して、UTF-8でエンコードしたバイト列を用いる。
 * <p/>
 * {@link #iterationCount} に指定された回数のストレッチングを行って暗号化し、
 * 暗号化後のパスワードは、 {@link #keyLength} に設定された長さ（ビット数）となる。
 *
 * @author Nabu Rakutaro
 */
public class PBKDF2PasswordEncryptor implements PasswordEncryptor {

    /**
     * 暗号化アルゴリズム名
     */
    private static final String CRYPT_ALGORITHM = "PBKDF2WithHmacSha1";

    /**
     * パスワード暗号化のストレッチング回数
     * <p/>
     * デフォルト値は 3966
     */
    private int iterationCount = 3966;

    /**
     * 暗号化されたパスワードの長さ（ビット数）
     * <p/>
     * デフォルト値は 256
     */
    private int keyLength = 256;

    /**
     * システム共通でソルトに利用する固定文字列
     * <p/>
     * デフォルト値は設定されないので、必ず設定が必要。実際のソルトは、この文字列にユーザIDを連結したバイト列となる。
     */
    private String fixedSalt;

    /**
     * スレッドセーフな {@link SecretKeyFactory} 。
     * <p/>
     * シングルトンインスタンスとして使用される想定のため、 {@link SecretKeyFactory} はスレッドローカルとする。
     */
    private static final ThreadLocal<SecretKeyFactory> FACTORY = ThreadLocal.withInitial(() -> {
        try {
            return SecretKeyFactory.getInstance(CRYPT_ALGORITHM);
        } catch (NoSuchAlgorithmException e) {
            // Oracle JRE など、PBKDF2WithHmacSha1が提供されているJREを利用する場合には、アルゴリズムが存在するため、この例外は発生し得ない。
            throw new IllegalStateException("Initialization Failed. Can't get instance of SecretKeyFactory. "
                    + "Algorithm name is '" + CRYPT_ALGORITHM + "'.", e);
        }
    });

    /**
     * PBKDF2で、パスワードを暗号化し、Base64エンコードを行って返却する。
     * <p/>
     * {@code saltSeed}, {@code password} のいずれかが空文字列の場合には、空文字列を返却し、
     * いずれかが {@code null} の場合には {@link IllegalArgumentException} が発生する。
     *
     * @param saltSeed パスワードの暗号化に使用するソルトを生成するために使用する文字列
     * @param password 暗号化前のパスワード
     * @return 暗号化後のパスワードに対して、Base64エンコードを行った文字列
     * @throws IllegalStateException {@link #fixedSalt} が設定されていない場合
     * @see Base64Util#encode(byte[])
     */
    @Override
    public String encrypt(String saltSeed, String password) {
        verifyParameter(saltSeed, password);

        if (saltSeed.isEmpty() || password.isEmpty()) {
            return "";
        }

        KeySpec spec = new PBEKeySpec(password.toCharArray(), getSalt(saltSeed), getIterationCount(), getKeyLength());
        byte[] encryptPassword;
        try {
            do {
                encryptPassword = FACTORY.get()
                                         .generateSecret(spec)
                                         .getEncoded();
            } while (!isSuccessEncryption(encryptPassword));
        } catch (InvalidKeySpecException e) {
            // パスワードが空の場合に発生するが、事前にチェックしているためこの例外は発生しない。
            throw new IllegalStateException(e);
        }
        return Base64Util.encode(encryptPassword);
    }

    /**
     * 暗号化に必要な情報が正しいか検証する。
     * <p>
     * 正しくない場合は、{@link IllegalArgumentException}を送出する。
     *
     * @param saltSeed パスワードの暗号化に使用するソルトを生成するために使用する文字列
     * @param password 暗号化前のパスワード
     */
    private void verifyParameter(String saltSeed, String password) {
        if (saltSeed == null || password == null) {
            throw new IllegalArgumentException("saltSeed and password must not be null.");
        }
    }

    /**
     * 暗号化処理に成功したか否かを返す。
     * <p/>
     * 暗号化されたパスワードの全ての桁が"0"であれば失敗と判定する。
     *
     * @param bytes 暗号化されたパスワード
     * @return 暗号化に成功していれば{@code true}
     */
    private static boolean isSuccessEncryption(byte[] bytes) {
        for (byte b : bytes) {
            if (b != 0) {
                return true;
            }
        }
        return false;
    }

    /**
     * {@link #fixedSalt} と {@code saltSeed} を連結した文字列を、UTF-8でエンコードしたバイト列を返却する。
     *
     * @param saltSeed ソルトを生成するために使用する文字列
     * @return {@link #fixedSalt} と {@code saltSeed} を連結した文字列を、UTF-8でエンコードしたバイト列
     * @throws IllegalStateException {@link #fixedSalt} が設定されていない場合
     */
    private byte[] getSalt(String saltSeed) throws IllegalStateException {
        String fixed = getFixedSalt();
        if (fixed == null) {
            throw new IllegalStateException("Fixed salt string is not set.");
        }
        return (fixed + saltSeed).getBytes(Charset.forName("UTF-8"));
    }

    /**
     * パスワード暗号化のストレッチング回数を返却する。
     *
     * @return ストレッチング回数
     */
    public int getIterationCount() {
        return iterationCount;
    }

    /**
     * パスワード暗号化のストレッチング回数を設定する。必ず、正の値を設定すること。
     *
     * @param iterationCount ストレッチング回数（正の値）
     */
    public void setIterationCount(int iterationCount) {
        this.iterationCount = iterationCount;
    }

    /**
     * 暗号化されたパスワードの長さを返却する。
     *
     * @return 暗号化されたパスワードの長さ
     */
    public int getKeyLength() {
        return keyLength;
    }

    /**
     * 暗号化されたパスワードの長さを設定する。必ず、正の値を設定すること。
     *
     * @param keyLength 暗号化されたパスワードの長さ
     */
    public void setKeyLength(int keyLength) {
        this.keyLength = keyLength;
    }

    /**
     * システム共通でソルトに利用する固定文字列を返却する。
     *
     * @return システム共通でソルトに利用する固定文字列
     */
    public String getFixedSalt() {
        return fixedSalt;
    }

    /**
     * システム共通でソルトに利用する固定文字列を設定する。
     *
     * @param fixedSalt システム共通でソルトに利用する固定文字列
     */
    public void setFixedSalt(String fixedSalt) {
        this.fixedSalt = fixedSalt;
    }
}
