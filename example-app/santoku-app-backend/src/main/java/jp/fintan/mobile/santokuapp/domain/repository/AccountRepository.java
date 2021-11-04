package jp.fintan.mobile.santokuapp.domain.repository;

import jp.fintan.mobile.santokuapp.domain.model.account.*;

public interface AccountRepository {

  void add(Account account);

  void remove(AccountId accountId);

  Account findById(AccountId accountId);

  boolean existsBy(AccountId accountId);
}
