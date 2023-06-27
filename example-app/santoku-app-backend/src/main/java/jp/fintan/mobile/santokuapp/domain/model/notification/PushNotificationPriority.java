package jp.fintan.mobile.santokuapp.domain.model.notification;

import jp.fintan.mobile.santokuapp.domain.model.core.IntegerValue;

/**
 * Push通知のPriorityを指定します。
 */
public class PushNotificationPriority extends IntegerValue {

  public PushNotificationPriority(Integer value) {
    super(value);
  }
}
