package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.List;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;

public interface PushNotifier {
  PushNotificationResult notifyToDevice(PushNotification notification, List<DeviceToken> deviceTokens);
  boolean verifyDeviceToken(DeviceToken deviceToken);
}
