package jp.fintan.mobile.santokuapp.domain.repository;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountPassword;

public interface AccountPasswordRepository {

  void add(AccountPassword account);

  void remove(AccountId accountId);

  AccountPassword findById(AccountId accountId);
}
