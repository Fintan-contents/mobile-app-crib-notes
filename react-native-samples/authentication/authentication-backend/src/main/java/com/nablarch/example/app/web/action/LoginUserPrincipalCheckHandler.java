package com.nablarch.example.app.web.action;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.regex.Pattern;

import nablarch.common.web.session.SessionUtil;
import nablarch.fw.ExecutionContext;
import nablarch.fw.Handler;
import nablarch.fw.web.HttpErrorResponse;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;

/**
 * ログイン状態チェックハンドラ 。
 *
 * @author Nabu Rakutaro
 */
public class LoginUserPrincipalCheckHandler implements Handler<HttpRequest, Object> {
    
    /** チェック対象外のリクエストID **/
    private static final Set<String> IGNORE_REQUEST_IDS = new HashSet<>(Arrays.asList(
            "/",
            "/action/login",
            "/action/Authentication/login"
    ));
    
    /**
     * セッションからユーザ情報を取得できなかった場合は、ログイン画面を表示。
     *
     * @param request リクエストデータ
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @Override
    public Object handle(HttpRequest request, ExecutionContext context) {
        if (Objects.isNull(SessionUtil.orNull(context, "userContext"))
                && !IGNORE_REQUEST_IDS.contains(request.getRequestPath())) {
            throw new HttpErrorResponse(HttpResponse.Status.FORBIDDEN.getStatusCode(),"/WEB-INF/view/login/index.jsp");
        }
        return context.handleNext(request);
    }
}
