package com.nablarch.example.app.web.common.authentication.encrypt;

import org.junit.Before;
import org.junit.Test;

import com.nablarch.example.app.web.common.authentication.encrypt.PBKDF2PasswordEncryptor;
import com.nablarch.example.app.web.common.authentication.encrypt.PasswordEncryptor;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;

/**
 * {@link PBKDF2PasswordEncryptor} のテストクラス。
 *
 * @author Nabu Rakutaro
 */
public class PBKDF2PasswordEncryptorTest {

    /**
     * テスト対象
     */
    private PasswordEncryptor sut;

    /**
     * テスト対象を初期化する。
     */
    @Before
    public void setUp() {
        this.sut = createEncryptor();
    }

    /**
     * テスト用の {@link PasswordEncryptor} を生成する。
     */
    public PBKDF2PasswordEncryptor createEncryptor() {
        PBKDF2PasswordEncryptor encryptor = new PBKDF2PasswordEncryptor();
        encryptor.setFixedSalt("exampleFixedSaltString");
        return encryptor;
    }

    /**
     * {@link PBKDF2PasswordEncryptor#encrypt(String, String)} のテスト。
     * <p/>
     * 空文字列が引数となる場合の、例外的なケースをテストする。
     */
    @Test
    public void testEncrypt_ExceptionalValue() {
        assertThat("saltSeed, passwordが空文字列の場合には、空文字列が返却されること。", sut.encrypt("", ""), is(""));
        assertThat("passwordが空文字列の場合には、空文字列が返却されること。", sut.encrypt("saltSeed", ""), is(""));
        assertThat("saltSeedが空文字列の場合には、空文字列が返却されること。", sut.encrypt("", "password"), is(""));
    }

    /**
     * {@link PBKDF2PasswordEncryptor#encrypt(String, String)} のテスト。
     */
    @Test
    public void testEncrypt() {
        assertThat("同じパスワードを暗号化すると、同じ文字列となること。", sut.encrypt("salt", "password"), is(sut.encrypt("salt", "password")));
        assertThat("異なるパスワードを暗号化すると、異なる文字列となること。", sut.encrypt("salt", "one"), is(not(sut.encrypt("salt", "another"))));
        assertThat("同じパスワードでも、ソルトが異なると、異なる文字列となること。", sut.encrypt("one", "password"), is(not(sut.encrypt("another", "password"))));

        PBKDF2PasswordEncryptor itr = createEncryptor();
        itr.setIterationCount(1);
        assertThat("設定したiterationCountでストレッチングされること。", itr.encrypt("salt", "password"), is(not(sut.encrypt("salt", "password"))));

        PBKDF2PasswordEncryptor len = createEncryptor();
        len.setKeyLength(160);
        // 160bitをBase64エンコードすると、28byteになる。
        // 160bit -> 6bitずつblock化されて27block -> 1blockが8bitに変換されて27byte -> 4の倍数まで"="でfillされて28byte
        assertThat("設定したkeyLengthの長さの暗号化されたパスワードが生成されること", len.encrypt("salt", "password").length(), is(28));

        PBKDF2PasswordEncryptor fix = createEncryptor();
        fix.setFixedSalt("someOtherFixedSaltString");
        assertThat("設定したfixedSaltを使用してソルトが生成されていること。", fix.encrypt("salt", "password"), is(not(sut.encrypt("salt", "password"))));
    }

    /**
     * {@link PBKDF2PasswordEncryptor#encrypt(String, String)} のテスト。
     * <p/>
     * {@link PBKDF2PasswordEncryptor#fixedSalt} が {@code null} の場合には、例外が発生すること。
     */
    @Test(expected = IllegalStateException.class)
    public void testEncrypt_NoFixedSalt() {
        new PBKDF2PasswordEncryptor().encrypt("salt", "password");
    }

    /**
     * {@link PBKDF2PasswordEncryptor#encrypt(String, String)} のテスト。
     * <p/>
     * {@code saltSeed} が {@code null} の場合には、 {@link IllegalArgumentException} が発生すること。
     */
    @Test(expected = IllegalArgumentException.class)
    public void testEncrypt_NullSaltSeed() {
        sut.encrypt(null, "password");
    }

    /**
     * {@link PBKDF2PasswordEncryptor#encrypt(String, String)} のテスト。
     * <p/>
     * {@code password} が {@code null} の場合には、 {@link IllegalArgumentException} が発生すること。
     */
    @Test(expected = IllegalArgumentException.class)
    public void testEncrypt_NullPassword() {
        sut.encrypt("saltSeed", null);
    }
}
