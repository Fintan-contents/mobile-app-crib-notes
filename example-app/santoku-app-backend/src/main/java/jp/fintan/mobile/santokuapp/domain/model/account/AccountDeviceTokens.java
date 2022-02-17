package jp.fintan.mobile.santokuapp.domain.model.account;

import java.util.List;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.domain.model.core.ListValue;

public class AccountDeviceTokens extends ListValue<AccountDeviceToken> {

  public AccountDeviceTokens(List<AccountDeviceToken> value) {
    super(value);
  }

  /** デバイスの更新期限を超過しているものを除外します。 */
  public AccountDeviceTokens excludeOverdueRenewals() {
    return new AccountDeviceTokens(
        value().stream()
            .filter(accountDeviceToken -> !accountDeviceToken.isOverdueRenewals())
            .collect(Collectors.toList()));
  }
}
