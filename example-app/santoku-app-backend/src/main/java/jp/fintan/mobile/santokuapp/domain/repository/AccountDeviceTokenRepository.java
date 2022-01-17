package jp.fintan.mobile.santokuapp.domain.repository;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountDeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountDeviceTokens;

public interface AccountDeviceTokenRepository {
  void add(AccountDeviceToken accountDeviceToken);
  void remove(AccountId accountId, DeviceToken deviceToken);
  AccountDeviceTokens findBy(AccountId accountId);
  boolean existsBy(AccountId accountId, DeviceToken deviceToken);
}
