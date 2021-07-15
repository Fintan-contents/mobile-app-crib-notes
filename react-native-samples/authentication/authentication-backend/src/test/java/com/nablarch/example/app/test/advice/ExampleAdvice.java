package com.nablarch.example.app.test.advice;

import com.nablarch.example.app.test.ExampleTestCaseInfo;
import nablarch.fw.ExecutionContext;
import nablarch.test.core.http.Advice;

/**
 * Example用の{@link Advice}実装クラス。
 *
 * @author Nabu Rakutaro
 */
public class ExampleAdvice implements Advice<ExampleTestCaseInfo> {

    @Override
    public void beforeExecute(ExampleTestCaseInfo exampleTestCaseInfo, ExecutionContext executionContext) {

    }

    @Override
    public void afterExecute(ExampleTestCaseInfo exampleTestCaseInfo, ExecutionContext executionContext) {

    }
}
