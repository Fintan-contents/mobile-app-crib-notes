package jp.fintan.mobile.santokuapp.domain.model.notification;

import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

/**
 * Push通知のInterruptionLevelを指定します。
 */
public class PushNotificationInterruptionLevel extends StringValue {

  public PushNotificationInterruptionLevel(String value) {
    super(value);
  }
}
