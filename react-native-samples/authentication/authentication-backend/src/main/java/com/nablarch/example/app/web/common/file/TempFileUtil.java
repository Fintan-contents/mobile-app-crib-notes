package com.nablarch.example.app.web.common.file;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * 一時ファイルを扱うユーティリティクラス。
 *
 * @author Nabu Rakutaro
 */
public final class TempFileUtil {

    /** 隠蔽コンストラクタ。 */
    private TempFileUtil() { }

    /**
     * 一時ファイルを作成する。
     *
     * @return 作成した一時ファイルのパス
     */
    public static Path createTempFile() {
        try {
            return Files.createTempFile(null, null);
        } catch (IOException e) {
            throw new TemporaryFileFailedException(e);
        }
    }

    /**
     * 一時ファイルの出力ストリームを生成する。
     *
     * @param path 一時ファイルのパス
     * @return 出力ストリーム
     */
    public static OutputStream newOutputStream(Path path) {
        try {
            return Files.newOutputStream(path);
        } catch (IOException e) {
            throw new TemporaryFileFailedException(e);
        }
    }
}
