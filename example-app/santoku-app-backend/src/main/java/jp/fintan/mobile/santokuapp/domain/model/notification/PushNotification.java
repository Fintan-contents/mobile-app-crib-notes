package jp.fintan.mobile.santokuapp.domain.model.notification;

public class PushNotification {

  private final NotificationTitle title;

  private final NotificationBody body;

  private final PushNotificationData data;

  private final PushNotificationBadge badge;

  private final PushNotificationCollapseId collapseId;

  private final PushNotificationContentAvailable contentAvailable;

  private final PushNotificationPriority priority;

  private final PushNotificationInterruptionLevel interruptionLevel;

  private final PushNotificationRelevanceScore relevanceScore;

  private final PushNotificationNotificationCount notificationCount;

  private final PushNotificationCollapseKey collapseKey;

  private final PushNotificationChannelId channelId;

  private final PushNotificationTtl ttl;

  public PushNotification(
      NotificationTitle title,
      NotificationBody body,
      PushNotificationData data,
      PushNotificationBadge badge,
      PushNotificationCollapseId collapseId,
      PushNotificationContentAvailable contentAvailable,
      PushNotificationPriority priority,
      PushNotificationInterruptionLevel interruptionLevel,
      PushNotificationRelevanceScore relevanceScore,
      PushNotificationNotificationCount notificationCount,
      PushNotificationCollapseKey collapseKey,
      PushNotificationChannelId channelId,
      PushNotificationTtl ttl) {
    this.title = title;
    this.body = body;
    this.data = data;
    this.badge = badge;
    this.collapseId = collapseId;
    this.contentAvailable = contentAvailable;
    this.priority = priority;
    this.interruptionLevel = interruptionLevel;
    this.relevanceScore = relevanceScore;
    this.notificationCount = notificationCount;
    this.collapseKey = collapseKey;
    this.channelId = channelId;
    this.ttl = ttl;
  }

  public NotificationTitle title() {
    return title;
  }

  public NotificationBody body() {
    return body;
  }

  public PushNotificationData data() {
    return data;
  }

  public PushNotificationBadge badge() {
    return badge;
  }

  public PushNotificationCollapseId collapseId() {
    return collapseId;
  }

  public PushNotificationContentAvailable contentAvailable() {
    return contentAvailable;
  }

  public PushNotificationPriority priority() {
    return priority;
  }

  public PushNotificationInterruptionLevel interruptionLevel() {
    return interruptionLevel;
  }

  public PushNotificationRelevanceScore relevanceScore() {
    return relevanceScore;
  }

  public PushNotificationNotificationCount notificationCount() {
    return notificationCount;
  }

  public PushNotificationCollapseKey collapseKey() {
    return collapseKey;
  }

  public PushNotificationChannelId channelId() {
    return channelId;
  }

  public PushNotificationTtl ttl() {
    return ttl;
  }
}
