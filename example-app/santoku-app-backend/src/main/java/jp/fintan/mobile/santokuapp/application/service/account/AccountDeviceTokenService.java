package jp.fintan.mobile.santokuapp.application.service.account;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountDeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceTokenCreatedAt;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountDeviceTokens;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotifier;
import jp.fintan.mobile.santokuapp.domain.repository.AccountDeviceTokenRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AccountDeviceTokenService {

  private final AccountDeviceTokenRepository accountDeviceTokenRepository;
  private final PushNotifier pushNotifier;

  public AccountDeviceTokenService(
      AccountDeviceTokenRepository accountDeviceTokenRepository, PushNotifier pushNotifier) {
    this.accountDeviceTokenRepository = accountDeviceTokenRepository;
    this.pushNotifier = pushNotifier;
  }

  public AccountDeviceTokens findByAccountId(AccountId accountId) {
    return accountDeviceTokenRepository.findBy(accountId);
  }

  public void registerDevice(AccountId accountId, DeviceToken deviceToken) {
    if (!accountDeviceTokenRepository.existsBy(accountId, deviceToken)) {
      if (pushNotifier.verifyDeviceToken(deviceToken)) {
        AccountDeviceToken newAccountDeviceToken = new AccountDeviceToken(accountId, deviceToken, DeviceTokenCreatedAt.now());
        accountDeviceTokenRepository.add(newAccountDeviceToken);
      }
    }
  }

  public void deleteDevice(AccountId accountId, DeviceToken deviceToken) {
    accountDeviceTokenRepository.remove(accountId, deviceToken);
  }
}
