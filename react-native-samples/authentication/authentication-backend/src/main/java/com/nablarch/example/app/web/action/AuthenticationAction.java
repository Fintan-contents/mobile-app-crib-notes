package com.nablarch.example.app.web.action;

import nablarch.common.dao.UniversalDao;
import nablarch.common.web.session.SessionUtil;
import nablarch.core.beans.BeanUtil;
import nablarch.core.message.ApplicationException;
import nablarch.core.message.MessageLevel;
import nablarch.core.message.MessageUtil;
import nablarch.core.validation.ee.ValidatorUtil;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;
import nablarch.fw.web.HttpResponse;
import nablarch.fw.web.interceptor.OnError;
import nablarch.fw.web.interceptor.OnErrors;

import com.nablarch.example.app.entity.SystemAccount;
import com.nablarch.example.app.entity.Users;
import com.nablarch.example.app.web.common.authentication.AuthenticationUtil;
import com.nablarch.example.app.web.common.authentication.context.LoginUserPrincipal;
import com.nablarch.example.app.web.common.authentication.exception.AuthenticationException;
import com.nablarch.example.app.web.form.LoginForm;

/**
 * 認証アクション。
 * <pre>
 * システム利用者の認証を行う。
 * ログイン／ログアウトの機能を有する。
 * </pre>
 *
 * @author Nabu Rakutaro
 */
public class AuthenticationAction {

    /**
     * ログイン画面を表示。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse index(HttpRequest request, ExecutionContext context) {
        return new HttpResponse("/WEB-INF/view/login/index.jsp");
    }

    /**
     * ログイン。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    @OnError(type = ApplicationException.class, path = "/WEB-INF/view/login/index.jsp",statusCode = 403)
    public HttpResponse login(HttpRequest request, ExecutionContext context) {

        final LoginForm form = BeanUtil.createAndCopy(LoginForm.class, request.getParamMap());

        try {
            ValidatorUtil.validate(form);
        } catch (ApplicationException ignore) {
            throw new ApplicationException(MessageUtil.createMessage(
                    MessageLevel.ERROR, "errors.login"));
        }

        try {
            AuthenticationUtil.authenticate(form.getLoginId(), form.getUserPassword());
        } catch (AuthenticationException ignore) {
            // パスワード不一致、その他認証エラー（ユーザーが存在しない等）
            throw new ApplicationException(MessageUtil.createMessage(
                    MessageLevel.ERROR, "errors.login"));
        }

        // 認証OKの場合、ログイン前のセッションを破棄後、
        // 認証情報をセッション（新規）に格納後、トップ画面にリダイレクトする。
        SessionUtil.invalidate(context);
        LoginUserPrincipal userContext = createLoginUserContext(form.getLoginId());
        SessionUtil.put(context, "userContext", userContext);
        SessionUtil.put(context,"user.id",String.valueOf(userContext.getUserId()));
        return new HttpResponse(303, "redirect:///action/project/index");
    }

    /**
     *認証情報取得。
     *
     * @param loginId ログインID
     * @return 認証情報
     */
    private LoginUserPrincipal createLoginUserContext(String loginId) {
        SystemAccount account = UniversalDao
                .findBySqlFile(SystemAccount.class,
                        "FIND_SYSTEM_ACCOUNT_BY_AK", new Object[]{loginId});
        Users users = UniversalDao.findById(Users.class, account.getUserId());

        LoginUserPrincipal userContext = new LoginUserPrincipal();
        userContext.setUserId(account.getUserId());
        userContext.setKanjiName(users.getKanjiName());
        userContext.setLastLoginDateTime(account.getLastLoginDateTime());

        return userContext;

    }

    /**
     * ログアウト。
     *
     * @param request HTTPリクエスト
     * @param context 実行コンテキスト
     * @return HTTPレスポンス
     */
    public HttpResponse logout(HttpRequest request, ExecutionContext context) {
        SessionUtil.invalidate(context);

        return new HttpResponse(303, "redirect:///action/login");
    }

}
