package com.nablarch.example.app.web.action;

import com.nablarch.example.app.entity.SystemAccount;
import com.nablarch.example.app.entity.Users;
import com.nablarch.example.app.web.common.authentication.AuthenticationUtil;
import com.nablarch.example.app.web.common.authentication.context.LoginUserPrincipal;
import com.nablarch.example.app.web.common.authentication.exception.AuthenticationException;
import com.nablarch.example.app.web.form.LoginForm;
import nablarch.common.dao.UniversalDao;
import nablarch.common.web.session.SessionManager;
import nablarch.common.web.session.SessionStoreHandler;
import nablarch.common.web.session.SessionUtil;
import nablarch.core.message.ApplicationException;
import nablarch.core.message.MessageLevel;
import nablarch.core.message.MessageUtil;
import nablarch.core.repository.SystemRepository;
import nablarch.core.validation.ee.ValidatorUtil;
import nablarch.fw.ExecutionContext;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * モバイルアプリケーション用認証API
 *
 * @author Nabu Rakutaro
 */
public class MobileAuthenticationAction {

    /**
     * ログイン。
     *
     * @param form ログイン入力フォーム
     * @param context 実行コンテキスト
     * @return 認証情報
     */
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON})
    public LoginUserPrincipal login(LoginForm form, ExecutionContext context) {

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

        return userContext;
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
     * @param context 実行コンテキスト
     * @return 実行結果
     */
    @Produces({MediaType.APPLICATION_JSON})
    public String logout(ExecutionContext context) {
        SessionUtil.invalidate(context);
        return "OK";
    }
}
