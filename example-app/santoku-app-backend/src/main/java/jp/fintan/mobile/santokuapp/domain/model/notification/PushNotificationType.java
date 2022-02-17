package jp.fintan.mobile.santokuapp.domain.model.notification;

public enum PushNotificationType {
  STARTED_TIMETABLE("StartedTimetable");
  private final String value;

  PushNotificationType(final String value) {
    this.value = value;
  }

  public String value() {
    return this.value;
  }
}
