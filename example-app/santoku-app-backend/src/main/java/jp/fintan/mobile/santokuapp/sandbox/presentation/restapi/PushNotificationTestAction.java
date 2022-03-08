package jp.fintan.mobile.santokuapp.sandbox.presentation.restapi;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.core.ValueObject;
import jp.fintan.mobile.santokuapp.domain.model.notification.NotificationBody;
import jp.fintan.mobile.santokuapp.domain.model.notification.NotificationTitle;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationPriority;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationResult;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationTtl;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationType;
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
  public void all(ExecutionContext context) {

    final List<AccountDeviceTokenEntity> devices = UniversalDao.findAll(AccountDeviceTokenEntity.class);
    final List<DeviceToken> deviceTokens =
        devices.stream()
            .map(accountDeviceTokenEntity -> new DeviceToken(accountDeviceTokenEntity.getDeviceToken()))
            .collect(Collectors.toList());

    final PushNotification pushNotification =
        new PushNotification(
            new NotificationTitle("一斉通知テスト"),
            new NotificationBody("一斉通知を受信できましたか？"),
            PushNotificationType.STARTED_TIMETABLE,
            Map.of("testKey", "testValue"),
            PushNotificationPriority.HIGH,
            new PushNotificationTtl(43200L));
    PushNotificationResult pushNotificationResult =
        pushNotifier.notifyToDevice(pushNotification, deviceTokens);
    removeUnregisteredDeviceTokens(pushNotificationResult.unregisteredDeviceTokens());
  }

  @PUT
  @Path("/single/{deviceToken}")
  public void single(ExecutionContext context, HttpRequest request) {
    final DeviceToken deviceToken = new DeviceToken(request.getParam("deviceToken")[0]);

    final PushNotification pushNotification =
        new PushNotification(
            new NotificationTitle("特定デバイス通知テスト"),
            new NotificationBody("特定デバイス通知を受信できましたか？"),
            PushNotificationType.STARTED_TIMETABLE,
            Map.of("testKey", "testValue"),
            null,
            null);
    PushNotificationResult pushNotificationResult =
        pushNotifier.notifyToDevice(pushNotification, List.of(deviceToken));
    removeUnregisteredDeviceTokens(pushNotificationResult.unregisteredDeviceTokens());
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
}
