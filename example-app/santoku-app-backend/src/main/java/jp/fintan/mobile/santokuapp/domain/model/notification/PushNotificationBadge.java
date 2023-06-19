package jp.fintan.mobile.santokuapp.domain.model.notification;

import jp.fintan.mobile.santokuapp.domain.model.core.IntegerValue;

/**
 * Push通知のバッジを指定します。
 */
public class PushNotificationBadge extends IntegerValue {

  public PushNotificationBadge(Integer value) {
    super(value);
  }
}
