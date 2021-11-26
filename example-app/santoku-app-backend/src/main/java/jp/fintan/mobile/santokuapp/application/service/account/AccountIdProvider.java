package jp.fintan.mobile.santokuapp.application.service.account;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;

public interface AccountIdProvider {

  AccountId generate();
}
