package com.nablarch.example.app.web.common.file;

/**
 * 一時ファイルの操作に失敗した場合に発生する例外。
 *
 * @author Nabu Rakutaro
 */
public class TemporaryFileFailedException extends RuntimeException {

    /** シリアルバージョンUID */
    private static final long serialVersionUID = 1L;

    /**
     * コンストラクタ。
     *
     * @param cause 起因例外
     */
    public TemporaryFileFailedException(Throwable cause) {
        super(cause);
    }
}
