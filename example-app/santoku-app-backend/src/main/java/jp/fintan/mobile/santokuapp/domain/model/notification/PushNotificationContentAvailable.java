package jp.fintan.mobile.santokuapp.domain.model.notification;

import jp.fintan.mobile.santokuapp.domain.model.core.BooleanValue;

/**
 * Push通知のcontent-availableを指定します。
 */
public class PushNotificationContentAvailable extends BooleanValue {

  public PushNotificationContentAvailable(Boolean value) {
    super(value);
  }
}
