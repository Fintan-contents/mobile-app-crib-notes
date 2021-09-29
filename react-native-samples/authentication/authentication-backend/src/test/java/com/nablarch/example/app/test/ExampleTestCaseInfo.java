package com.nablarch.example.app.test;

import nablarch.core.util.StringUtil;
import nablarch.test.core.http.TestCaseInfo;

import java.util.List;
import java.util.Map;

/**
 * {@link TestCaseInfo}を、HTTPメソッドを指定できるように拡張したクラス。
 */
public class ExampleTestCaseInfo extends TestCaseInfo {
    /** コンテキスト */
    private List<Map<String, String>> context;

    public ExampleTestCaseInfo(String sheetName, Map<String, String> testCaseParams, List<Map<String, String>> context, List<Map<String, String>> request, List<Map<String, String>> expectedResponseListMap, List<Map<String, String>> cookie) {
        super(sheetName, testCaseParams, context, request, expectedResponseListMap, cookie);
        this.context = context;
    }

    /**
     * テスト対象とするリクエストのHTTPメソッドを返却する。
     *
     * @return HTTPメソッド
     */
    public String getHttpMethod() {
        String httpMethod = context.get(0).get("HTTP_METHOD");
        return StringUtil.hasValue(httpMethod) ? httpMethod : "POST";
    }
}
