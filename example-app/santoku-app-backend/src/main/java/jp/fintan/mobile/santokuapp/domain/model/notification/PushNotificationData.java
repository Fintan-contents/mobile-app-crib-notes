package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.Map;
import jp.fintan.mobile.santokuapp.domain.model.core.MapValue;

/**
 * Push通知のData属性を指定します。
 */
public class PushNotificationData extends MapValue<String, String> {

  public PushNotificationData(Map<String, String> value) {
    super(value);
  }
}
