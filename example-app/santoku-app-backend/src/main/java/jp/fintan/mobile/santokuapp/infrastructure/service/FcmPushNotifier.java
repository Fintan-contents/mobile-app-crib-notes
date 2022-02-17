package jp.fintan.mobile.santokuapp.infrastructure.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.firebase.messaging.AndroidConfig;
import com.google.firebase.messaging.AndroidConfig.Priority;
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
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationPriority;
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
  // APNSの通知優先度:NORMAL
  private static final String APNS_PRIORITY_NORMAL = "5";
  // APNSの通知優先度:HIGH
  private static final String APNS_PRIORITY_HIGH = "10";
  // 1度に送信可能なデバイス最大数
  private static final int MAX_SEND_COUNT = 500;
  // データに設定するキー：type
  private static final String DATA_KEY_TYPE = "type";
  // データに設定するキー：params
  private static final String DATA_KEY_PARAMS = "params";
  // APNsの通知優先度を設定するHTTPヘッダキー
  private static final String APNS_HEADER_KEY_APNS_PRIORITY = "apns-priority";
  // APNsの1度に送信可能なデバイス最大数を設定するHTTPヘッダキー
  private static final String APNS_HEADER_KEY_APNS_EXPIRATION = "apns-expiration";
  private final ObjectMapper objectMapper = new ObjectMapper();

  @Override
  public PushNotificationResult notifyToDevice(
      PushNotification pushNotification, List<DeviceToken> deviceTokens) {

    final List<DeviceToken> successDeviceTokens = new ArrayList<>();
    final List<DeviceToken> failureDeviceTokens = new ArrayList<>();
    final List<DeviceToken> unregisteredDeviceTokens = new ArrayList<>();

    String params = translateParams(pushNotification.params());

    // FCMに1度のリクエストで送信できるMAX数の単位でマルチキャスト送信する
    for (int i = 0; i < deviceTokens.size(); i += MAX_SEND_COUNT) {
      List<DeviceToken> requestFcmTokens =
          deviceTokens.subList(i, Math.min(i + MAX_SEND_COUNT, deviceTokens.size()));

      final List<String> fcmTokens =
          requestFcmTokens.stream().map(ValueObject::value).collect(Collectors.toList());

      MulticastMessage.Builder multicastMessageBuilder = MulticastMessage.builder();
      multicastMessageBuilder.addAllTokens(fcmTokens);
      multicastMessageBuilder.putData(DATA_KEY_TYPE, pushNotification.type().value());
      if (params != null) {
        multicastMessageBuilder.putData(DATA_KEY_PARAMS, params);
      }
      multicastMessageBuilder.setNotification(createNotification(pushNotification));
      multicastMessageBuilder.setApnsConfig(createApnsConfig(pushNotification));
      multicastMessageBuilder.setAndroidConfig(createAndroidConfig(pushNotification));
      MulticastMessage multicastMessage = multicastMessageBuilder.build();

      sendMulticast(multicastMessage, requestFcmTokens, successDeviceTokens, failureDeviceTokens, unregisteredDeviceTokens);
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
      BatchResponse batchResponse = FirebaseMessaging.getInstance().sendMulticast(multicastMessage);
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

  private String translateParams(Map<String, Object> params) {
    if (params != null) {
      try {
        return objectMapper.writeValueAsString(params);
      } catch (JsonProcessingException e) {
        throw new RuntimeException("Failed to parse params of notification data.", e);
      }
    }
    return null;
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
    notificationBuilder.setTitle(pushNotification.title().value());
    notificationBuilder.setBody(pushNotification.body().value());
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
      headers.put(APNS_HEADER_KEY_APNS_PRIORITY, getApnsPriority(pushNotification.priority()));
    }
    ApnsConfig.Builder apnsConfigBuilder = ApnsConfig.builder();
    apnsConfigBuilder.putAllHeaders(headers);
    Aps aps = Aps.builder().build();
    apnsConfigBuilder.setAps(aps);
    return apnsConfigBuilder.build();
  }

  private AndroidConfig createAndroidConfig(PushNotification pushNotification) {

    AndroidConfig.Builder androidConfigBuilder = AndroidConfig.builder();
    if (pushNotification.ttl() != null) {
      androidConfigBuilder.setTtl(pushNotification.ttl().value());
    }
    if (pushNotification.priority() != null) {
      androidConfigBuilder.setPriority(getAndroidPriority(pushNotification.priority()));
    }
    return androidConfigBuilder.build();
  }

  private String getApnsPriority(PushNotificationPriority priority) {
    if (priority == PushNotificationPriority.NORMAL) {
      return APNS_PRIORITY_NORMAL;
    }
    return APNS_PRIORITY_HIGH;
  }

  private Priority getAndroidPriority(PushNotificationPriority priority) {
    if (priority == PushNotificationPriority.NORMAL) {
      return Priority.NORMAL;
    }
    return Priority.HIGH;
  }
}
