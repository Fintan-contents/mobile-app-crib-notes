package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.List;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.core.ListValue;

public class SuccessDeviceTokens extends ListValue<DeviceToken> {

  public SuccessDeviceTokens(List<DeviceToken> value) {
    super(value);
  }
}
