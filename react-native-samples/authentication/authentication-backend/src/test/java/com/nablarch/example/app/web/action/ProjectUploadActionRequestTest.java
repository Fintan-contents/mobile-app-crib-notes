package com.nablarch.example.app.web.action;

import com.nablarch.example.app.test.advice.SignedInAdvice;
import com.nablarch.example.app.test.ExampleHttpRequestTestTemplate;
import org.junit.Test;

/**
 * {@link ProjectUploadAction} のリクエスト単体テストクラス。
 *
 * @author Nabu Rakutaro
 */
public class ProjectUploadActionRequestTest extends ExampleHttpRequestTestTemplate {

    @Override
    protected String getBaseUri() {
        return "/action/projectUpload/";
    }

    /**
     * プロジェクト登録確認画面表示正常系ケース。
     */
    @Test
    public void indexNormal() {
        execute("indexNormal", new SignedInAdvice());
    }

    /**
     * プロジェクト一括登録正常系ケース。
     */
    @Test
    public void uploadNormal() {
        execute("uploadNormal", new SignedInAdvice());
    }

    /**
     * プロジェクト一括登録異常系ケース。
     */
    @Test
    public void uploadAbNormal() {
        execute("uploadAbNormal", new SignedInAdvice());
    }

}
