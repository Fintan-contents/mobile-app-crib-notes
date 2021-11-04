package jp.fintan.mobile.santokuapp.presentation.restapi;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import nablarch.common.web.session.SessionUtil;
import nablarch.fw.ExecutionContext;

public class LoginContext {

  private final ExecutionContext executionContext;

  public LoginContext(ExecutionContext executionContext) {
    this.executionContext = executionContext;
  }

  public void login(AccountId accountId) {
    SessionUtil.invalidate(executionContext);

    // NablarchのThreadContextでユーザーIDを使用するための設定
    SessionUtil.put(executionContext, "user.id", accountId.value());
  }
}
