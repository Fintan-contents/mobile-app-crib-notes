package jp.fintan.mobile.santokuapp.domain.model.notification;

public class PushNotificationResult {

  private final SuccessDeviceTokens successDeviceTokens;

  private final FailureDeviceTokens failureDeviceTokens;

  private final UnregisteredDeviceTokens unregisteredDeviceTokens;

  public PushNotificationResult(
      SuccessDeviceTokens successDeviceTokens,
      FailureDeviceTokens failureDeviceTokens,
      UnregisteredDeviceTokens unregisteredDeviceTokens) {
    this.successDeviceTokens = successDeviceTokens;
    this.failureDeviceTokens = failureDeviceTokens;
    this.unregisteredDeviceTokens = unregisteredDeviceTokens;
  }

  public SuccessDeviceTokens successDeviceTokens() {
    return successDeviceTokens;
  }

  public FailureDeviceTokens failureDeviceTokens() {
    return failureDeviceTokens;
  }

  public UnregisteredDeviceTokens unregisteredDeviceTokens() {
    return unregisteredDeviceTokens;
  }
}
