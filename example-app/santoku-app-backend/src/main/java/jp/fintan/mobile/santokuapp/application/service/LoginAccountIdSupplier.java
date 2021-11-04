package jp.fintan.mobile.santokuapp.application.service;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;

public interface LoginAccountIdSupplier {

  AccountId supply();
}
