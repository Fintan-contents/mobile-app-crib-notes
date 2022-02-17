package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.Map;

public class PushNotification {

  private final NotificationTitle title;

  private final NotificationBody body;

  private final PushNotificationType type;

  private final Map<String, Object> params;

  private final PushNotificationPriority priority;

  private final PushNotificationTtl ttl;

  public PushNotification(
      NotificationTitle title, NotificationBody body, PushNotificationType type,
      Map<String, Object> params,
      PushNotificationPriority priority, PushNotificationTtl ttl) {
    this.title = title;
    this.body = body;
    this.type = type;
    this.params = params;
    this.priority = priority;
    this.ttl = ttl;
  }

  public NotificationTitle title() {
    return title;
  }

  public NotificationBody body() {
    return body;
  }

  public PushNotificationType type() {
    return type;
  }

  public Map<String, Object> params() {
    return params;
  }

  public PushNotificationPriority priority() {
    return priority;
  }

  public PushNotificationTtl ttl() {
    return ttl;
  }
}
