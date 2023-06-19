package jp.fintan.mobile.santokuapp.domain.model.notification;

import jp.fintan.mobile.santokuapp.domain.model.core.DoubleValue;

/**
 * Push通知のRelevanceScoreを指定します。
 */
public class PushNotificationRelevanceScore extends DoubleValue {

  public PushNotificationRelevanceScore(Double value) {
    super(value);
  }
}
