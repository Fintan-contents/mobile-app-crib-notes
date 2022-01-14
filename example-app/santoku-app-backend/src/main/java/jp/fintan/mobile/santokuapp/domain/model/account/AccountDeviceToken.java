package jp.fintan.mobile.santokuapp.domain.model.account;

import java.time.OffsetDateTime;

public class AccountDeviceToken {

  private final AccountId id;

  private final DeviceToken deviceToken;

  private final DeviceTokenCreatedAt createdAt;

  private static final long DEVICE_TOKEN_RENEWAL_DEADLINE_MONTH = 1;

  public AccountDeviceToken(AccountId id, DeviceToken deviceToken, DeviceTokenCreatedAt createdAt) {
    this.id = id;
    this.deviceToken = deviceToken;
    this.createdAt = createdAt;
  }

  public AccountId accountId() {
    return id;
  }

  public DeviceToken deviceToken() {
    return deviceToken;
  }

  public DeviceTokenCreatedAt createdAt() {
    return createdAt;
  }

  /**
   * デバイスの更新期限が超過しているかを判定します。
   *
   * @return 更新期限を超過している場合はtrue、超過していない場合はfalseを返却します。
   */
  public boolean isOverdueRenewals() {
    return 0
        <= OffsetDateTime.now()
            .minusMonths(DEVICE_TOKEN_RENEWAL_DEADLINE_MONTH)
            .compareTo(this.createdAt().value());
  }
}
