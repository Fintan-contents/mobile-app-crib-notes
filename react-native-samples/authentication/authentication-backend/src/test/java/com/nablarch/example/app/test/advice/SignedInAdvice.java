package com.nablarch.example.app.test.advice;

import com.nablarch.example.app.test.ExampleTestCaseInfo;
import com.nablarch.example.app.web.common.authentication.context.LoginUserPrincipal;
import nablarch.common.web.session.SessionUtil;
import nablarch.fw.ExecutionContext;


/**
 * テストケースの事前準備で毎回ログイン処理を実装しなくて済むように、
 * 自動的にログイン状態になるように設定した {@link ExampleAdvice}の拡張クラス。
 *</p>
 * ログインユーザのIDは、デフォルトでは {@code 105} となる。
 * ユーザIDは {@link #setUserId(Integer)} で指定可能。
 *
 * @author Nabu Rakutaro
 */
public class SignedInAdvice extends ExampleAdvice {

    /** ログインユーザのID */
    private Integer userId = 105;

    /**
     * ユーザIDを取得する。
     * @return ユーザID
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * ユーザIDを設定する。
     * @param userId ユーザID
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * {@inheritDoc}
     * ログイン状態にしてからテストケース個別の事前処理を実行する。
     */
    @Override
    public final void beforeExecute(ExampleTestCaseInfo testCaseInfo,
                                    ExecutionContext context) {
        setLoginUser(context);
        signedInBeforeExecute(testCaseInfo, context);
    }

    /**
     * {@inheritDoc}
     * テストの事前処理を実装する。
     * <p>
     * 本メソッド実行前にログイン処理が自動実行される。
     */
    protected void signedInBeforeExecute(ExampleTestCaseInfo testCaseInfo,
                                         ExecutionContext context) {
        // NOP。必要があればケースごとに事前準備を実装する。
    }

    /**
     * ユーザをログイン済みにする。
     *
     * @param context 実行コンテキスト
     */
    private void setLoginUser(ExecutionContext context) {
        LoginUserPrincipal userContext = new LoginUserPrincipal();
        userContext.setUserId(userId);
        SessionUtil.put(context, "userContext", userContext);
    }
}