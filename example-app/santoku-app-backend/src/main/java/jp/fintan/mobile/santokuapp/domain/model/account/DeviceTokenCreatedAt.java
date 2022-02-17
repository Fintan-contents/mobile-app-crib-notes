package jp.fintan.mobile.santokuapp.domain.model.account;

import java.time.OffsetDateTime;
import jp.fintan.mobile.santokuapp.domain.model.core.OffsetDateTimeValue;

public class DeviceTokenCreatedAt extends OffsetDateTimeValue {
  public DeviceTokenCreatedAt(OffsetDateTime value) {
    super(value);
  }

  public static DeviceTokenCreatedAt now() {
    return new DeviceTokenCreatedAt(OffsetDateTime.now());
  }
}
