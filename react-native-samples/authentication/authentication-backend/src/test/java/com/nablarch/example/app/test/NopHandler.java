package com.nablarch.example.app.test;

import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpRequestHandler;
import nablarch.fw.web.HttpResponse;

/**
 * 何も処理しないハンドラ。
 * <p>
 * テスト時に処理を行いたくないハンドラを差し替えるのに使用する。
 * </p>
 */
public class NopHandler implements HttpRequestHandler {
    @Override
    public HttpResponse handle(HttpRequest request, ExecutionContext context) {
        return context.handleNext(request);
    }
}
