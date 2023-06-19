package jp.fintan.mobile.santokuapp.sandbox.presentation.restapi;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.core.ValueObject;
import jp.fintan.mobile.santokuapp.domain.model.notification.NotificationBody;
import jp.fintan.mobile.santokuapp.domain.model.notification.NotificationTitle;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationBadge;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationChannelId;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationCollapseId;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationCollapseKey;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationContentAvailable;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationData;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationInterruptionLevel;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationNotificationCount;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationPriority;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationRelevanceScore;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationResult;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationTtl;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotifier;
import jp.fintan.mobile.santokuapp.domain.model.notification.UnregisteredDeviceTokens;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.AccountDeviceTokenEntity;
import nablarch.common.dao.UniversalDao;
import nablarch.core.db.connection.AppDbConnection;
import nablarch.core.db.connection.DbConnectionContext;
import nablarch.core.db.statement.ParameterizedSqlPStatement;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;

@SystemRepositoryComponent
@Path("/sandbox/push-notification")
public class PushNotificationTestAction {

  private final PushNotifier pushNotifier;

  public PushNotificationTestAction(PushNotifier pushNotifier) {
    this.pushNotifier = pushNotifier;
  }

  @PUT
  @Path("/all")
  @Consumes(MediaType.APPLICATION_JSON)
  public void all(ExecutionContext context, PushNotificationRequest requestBody) {

    final List<AccountDeviceTokenEntity> devices =
        UniversalDao.findAll(AccountDeviceTokenEntity.class);
    final List<DeviceToken> deviceTokens =
        devices.stream()
            .map(
                accountDeviceTokenEntity ->
                    new DeviceToken(accountDeviceTokenEntity.getDeviceToken()))
            .collect(Collectors.toList());

    PushNotification pushNotification = translate(requestBody);

    PushNotificationResult pushNotificationResult =
        pushNotifier.notifyToDevice(pushNotification, deviceTokens);
    removeUnregisteredDeviceTokens(pushNotificationResult.unregisteredDeviceTokens());
  }

  @PUT
  @Path("/single/{deviceToken}")
  @Consumes(MediaType.APPLICATION_JSON)
  public void single(
      ExecutionContext context, HttpRequest request, PushNotificationRequest requestBody) {
    final DeviceToken deviceToken = new DeviceToken(request.getParam("deviceToken")[0]);

    PushNotification pushNotification = translate(requestBody);

    PushNotificationResult pushNotificationResult =
        pushNotifier.notifyToDevice(pushNotification, List.of(deviceToken));
    removeUnregisteredDeviceTokens(pushNotificationResult.unregisteredDeviceTokens());
  }

  private PushNotification translate(PushNotificationRequest request) {
    return new PushNotification(
        request.notificationTitle == null ? null : new NotificationTitle(request.notificationTitle),
        request.notificationBody == null ? null : new NotificationBody(request.notificationBody),
        request.data == null
            ? null
            : new PushNotificationData(
                request.data.stream().collect(Collectors.toMap(d -> d.key, d -> d.value))),
        request.badge == null ? null : new PushNotificationBadge(request.badge),
        request.collapseId == null ? null : new PushNotificationCollapseId(request.collapseId),
        request.contentAvailable == null
            ? null
            : new PushNotificationContentAvailable(request.contentAvailable),
        request.priority == null ? null : new PushNotificationPriority(request.priority),
        request.interruptionLevel == null
            ? null
            : new PushNotificationInterruptionLevel(request.interruptionLevel),
        request.relevanceScore == null
            ? null
            : new PushNotificationRelevanceScore(request.relevanceScore),
        request.notificationCount == null
            ? null
            : new PushNotificationNotificationCount(request.notificationCount),
        request.collapseKey == null ? null : new PushNotificationCollapseKey(request.collapseKey),
        request.channelId == null ? null : new PushNotificationChannelId(request.channelId),
        new PushNotificationTtl(43200L));
  }

  private void removeUnregisteredDeviceTokens(UnregisteredDeviceTokens unregisteredDeviceTokens) {
    // デバイストークンに紐づくアカウントIDがわからないので、デバイストークンを条件にdeviceテーブルから削除する
    // UniversalDaoの機能では実現できなかったので、JDBCラッパーを使用する
    final Map<String, List<String>> condition =
        Map.of(
            "deviceTokens",
            unregisteredDeviceTokens.value().stream()
                .map(ValueObject::value)
                .collect(Collectors.toList()));
    AppDbConnection connection = DbConnectionContext.getConnection();
    ParameterizedSqlPStatement statement =
        connection.prepareParameterizedSqlStatementBySqlId(
            "db.sql.sandbox.device#delete_by_device_tokens", condition);
    statement.executeUpdateByMap(condition);
  }

  static class PushNotificationRequest {
    public String notificationTitle;
    public String notificationBody;
    public List<PushNotificationDataRequest> data;
    public Integer badge;
    public String collapseId;
    public Boolean contentAvailable;
    public Integer priority;
    public String interruptionLevel;
    public Double relevanceScore;
    public Integer notificationCount;
    public String collapseKey;
    public String channelId;
  }

  static class PushNotificationDataRequest {
    public String key;
    public String value;
  }
}
