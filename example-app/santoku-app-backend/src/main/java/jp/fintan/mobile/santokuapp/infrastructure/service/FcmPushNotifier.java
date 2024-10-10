package jp.fintan.mobile.santokuapp.infrastructure.service;

import com.google.firebase.messaging.AndroidConfig;
import com.google.firebase.messaging.AndroidNotification;
import com.google.firebase.messaging.ApnsConfig;
import com.google.firebase.messaging.Aps;
import com.google.firebase.messaging.BatchResponse;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.MessagingErrorCode;
import com.google.firebase.messaging.MulticastMessage;
import com.google.firebase.messaging.Notification;
import com.google.firebase.messaging.SendResponse;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.core.ValueObject;
import jp.fintan.mobile.santokuapp.domain.model.notification.FailureDeviceTokens;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationResult;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotifier;
import jp.fintan.mobile.santokuapp.domain.model.notification.SuccessDeviceTokens;
import jp.fintan.mobile.santokuapp.domain.model.notification.UnregisteredDeviceTokens;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class FcmPushNotifier implements PushNotifier {
  private static final Logger LOGGER = LoggerManager.get(FcmPushNotifier.class);
  // 1度に送信可能なデバイス最大数
  private static final int MAX_SEND_COUNT = 500;
  // APNsの通知優先度を設定するHTTPヘッダキー
  private static final String APNS_HEADER_KEY_APNS_PRIORITY = "apns-priority";
  // APNsの1度に送信可能なデバイス最大数を設定するHTTPヘッダキー
  private static final String APNS_HEADER_KEY_APNS_EXPIRATION = "apns-expiration";
  // APNsの折りたたみIDを設定するHTTPヘッダキー
  private static final String APNS_HEADER_KEY_APNS_COLLAPSE_ID = "apns-collapse-id";
  // APNsのInterruptionLevelを設定するキー
  // Firebase Admin SDKで定義されていない項目は、カスタムデータとして設定する
  private static final String APNS_CUSTOM_DATA_KEY_INTERRUPTION_LEVEL = "interruption-level";
  // APNsのRelevanceScoreを設定するキー
  // Firebase Admin SDKで定義されていない項目は、カスタムデータとして設定する
  private static final String APNS_CUSTOM_DATA_KEY_RELEVANCE_SCORE = "relevance-score";

  @Override
  public PushNotificationResult notifyToDevice(
      PushNotification pushNotification, List<DeviceToken> deviceTokens) {

    final List<DeviceToken> successDeviceTokens = new ArrayList<>();
    final List<DeviceToken> failureDeviceTokens = new ArrayList<>();
    final List<DeviceToken> unregisteredDeviceTokens = new ArrayList<>();

    // FCMに1度のリクエストで送信できるMAX数の単位でマルチキャスト送信する
    for (int i = 0; i < deviceTokens.size(); i += MAX_SEND_COUNT) {
      List<DeviceToken> requestFcmTokens =
          deviceTokens.subList(i, Math.min(i + MAX_SEND_COUNT, deviceTokens.size()));

      final List<String> fcmTokens =
          requestFcmTokens.stream().map(ValueObject::value).collect(Collectors.toList());

      MulticastMessage.Builder multicastMessageBuilder = MulticastMessage.builder();
      multicastMessageBuilder.addAllTokens(fcmTokens);
      if (pushNotification.data() != null) {
        multicastMessageBuilder.putAllData(pushNotification.data().value());
      }
      multicastMessageBuilder.setNotification(createNotification(pushNotification));
      multicastMessageBuilder.setApnsConfig(createApnsConfig(pushNotification));
      multicastMessageBuilder.setAndroidConfig(createAndroidConfig(pushNotification));
      MulticastMessage multicastMessage = multicastMessageBuilder.build();

      sendMulticast(
          multicastMessage,
          requestFcmTokens,
          successDeviceTokens,
          failureDeviceTokens,
          unregisteredDeviceTokens);
    }

    return new PushNotificationResult(
        new SuccessDeviceTokens(successDeviceTokens),
        new FailureDeviceTokens(failureDeviceTokens),
        new UnregisteredDeviceTokens(unregisteredDeviceTokens));
  }

  private void sendMulticast(
      MulticastMessage multicastMessage,
      List<DeviceToken> fcmTokens,
      List<DeviceToken> successDeviceTokens,
      List<DeviceToken> failureDeviceTokens,
      List<DeviceToken> unregisteredDeviceTokens) {
    try {
      BatchResponse batchResponse = FirebaseMessaging.getInstance().sendEachForMulticast(multicastMessage);
      final List<SendResponse> responses = batchResponse.getResponses();
      for (int i = 0; i < responses.size(); i++) {
        final SendResponse response = responses.get(i);
        final DeviceToken fcmToken = fcmTokens.get(i);
        if (response.isSuccessful()) {
          LOGGER.logDebug(
              String.format(
                  "Successfully sent message to Firebase Cloud Messaging. fcmToken=[%s]",
                  fcmToken.value()));
          successDeviceTokens.add(fcmToken);
          continue;
        }

        final MessagingErrorCode messagingErrorCode =
            response.getException().getMessagingErrorCode();
        LOGGER.logWarn(
            String.format(
                "Failed to sent message to Firebase Cloud Messaging. fcmToken=[%s] errorCode=[%s]",
                fcmToken.value(), messagingErrorCode.name()),
            response.getException());

        if (messagingErrorCode == MessagingErrorCode.UNREGISTERED) {
          // 利用されていないトークンの場合
          unregisteredDeviceTokens.add(fcmToken);
        }
        failureDeviceTokens.add(fcmToken);
      }
    } catch (FirebaseMessagingException e) {
      LOGGER.logWarn("Failed to sent message to Firebase Cloud Messaging.", e);
      failureDeviceTokens.addAll(fcmTokens);
    }
  }

  /**
   * FCMのSDKを利用して、dry-run（実際に送信はしないでリクエストを検証）実行してデバイストークンの検証をします
   * dry-run実行後に、エラーコードが「UNREGISTERED」「INVALID_ARGUMENT」の場合は不正なデバイストークンとします
   *
   * <p>「INVALID_ARGUMENT」はデバイストークン以外のパラメータが不正の場合も返却されますが、
   * ここで実施するdry-runのリクエストにはデバイストークンしか含めないため、不正なデバイストークン以外では返却されない想定です
   * なお、これら以外のエラーコードに関しては不正なデバイストークンとは判断できないため、検証結果としてtrueを返却します
   *
   * @see <a href="https://firebase.google.com/docs/cloud-messaging/http-server-ref#error-codes">FCM
   *     Downstream message error response code</a>
   * @see <a href="https://firebase.google.com/docs/reference/fcm/rest/v1/ErrorCode">FCM
   *     ErrorCode</a>
   */
  @Override
  public boolean verifyDeviceToken(DeviceToken deviceToken) {
    // デバイストークンのみを指定して、dry-run（実際に送信はしないでリクエストを検証）実行する
    Message.Builder messageBuilder = Message.builder();
    messageBuilder.setToken(deviceToken.value());
    Message message = messageBuilder.build();
    try {
      FirebaseMessaging.getInstance().send(message, true);
    } catch (FirebaseMessagingException e) {
      final MessagingErrorCode errorCode = e.getMessagingErrorCode();
      // FCMに登録されていないデバイストークンの場合は、エラーコード「UNREGISTERED」が返却される
      // リクエストのパラメータ不正の場合は「INVALID_ARGUMENT」が返却される
      if (errorCode == MessagingErrorCode.UNREGISTERED
          || errorCode == MessagingErrorCode.INVALID_ARGUMENT) {
        return false;
      }
    }
    return true;
  }

  private Notification createNotification(PushNotification pushNotification) {
    Notification.Builder notificationBuilder = Notification.builder();
    if (pushNotification.title() != null) {
      notificationBuilder.setTitle(pushNotification.title().value());
    }
    if (pushNotification.body() != null) {
      notificationBuilder.setBody(pushNotification.body().value());
    }
    return notificationBuilder.build();
  }

  private ApnsConfig createApnsConfig(PushNotification pushNotification) {
    Map<String, String> headers = new HashMap<>();
    if (pushNotification.ttl() != null) {
      // APNSは有効期限をエポック秒で指定する必要がある
      final String apnsExpiration =
          Long.toString(Instant.now().plusSeconds(pushNotification.ttl().value()).getEpochSecond());
      headers.put(APNS_HEADER_KEY_APNS_EXPIRATION, apnsExpiration);
    }
    if (pushNotification.priority() != null) {
      headers.put(APNS_HEADER_KEY_APNS_PRIORITY, pushNotification.priority().value().toString());
    }
    if (pushNotification.collapseId() != null) {
      headers.put(APNS_HEADER_KEY_APNS_COLLAPSE_ID, pushNotification.collapseId().value());
    }

    Map<String, Object> customData = new HashMap<>();
    if (pushNotification.interruptionLevel() != null) {
      customData.put(
          APNS_CUSTOM_DATA_KEY_INTERRUPTION_LEVEL, pushNotification.interruptionLevel().value());
    }
    if (pushNotification.relevanceScore() != null) {
      customData.put(
          APNS_CUSTOM_DATA_KEY_RELEVANCE_SCORE, pushNotification.relevanceScore().value());
    }

    ApnsConfig.Builder apnsConfigBuilder = ApnsConfig.builder();
    apnsConfigBuilder.putAllHeaders(headers);
    Aps.Builder apsBuilder = Aps.builder();
    if (pushNotification.badge() != null) {
      apsBuilder.setBadge(pushNotification.badge().value());
    }
    if (pushNotification.contentAvailable() != null) {
      apsBuilder.setContentAvailable(pushNotification.contentAvailable().value());
    }
    apsBuilder.putAllCustomData(customData);
    Aps aps = apsBuilder.build();
    apnsConfigBuilder.setAps(aps);
    return apnsConfigBuilder.build();
  }

  private AndroidConfig createAndroidConfig(PushNotification pushNotification) {

    AndroidConfig.Builder androidConfigBuilder = AndroidConfig.builder();
    if (pushNotification.collapseKey() != null) {
      androidConfigBuilder.setCollapseKey(pushNotification.collapseKey().value());
    }
    if (pushNotification.ttl() != null) {
      androidConfigBuilder.setTtl(pushNotification.ttl().value());
    }

    AndroidNotification.Builder androidNotificationBuilder = AndroidNotification.builder();
    if (pushNotification.notificationCount() != null) {
      androidNotificationBuilder.setNotificationCount(pushNotification.notificationCount().value());
    }
    if (pushNotification.channelId() != null) {
      androidNotificationBuilder.setChannelId(pushNotification.channelId().value());
    }
    androidConfigBuilder.setNotification(androidNotificationBuilder.build());
    return androidConfigBuilder.build();
  }
}
