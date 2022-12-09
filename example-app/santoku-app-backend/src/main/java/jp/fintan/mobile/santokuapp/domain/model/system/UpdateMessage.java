package jp.fintan.mobile.santokuapp.domain.model.system;

import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;
import nablarch.core.message.Message;
import nablarch.core.message.MessageLevel;
import nablarch.core.message.MessageUtil;

public class UpdateMessage extends StringValue {
  private UpdateMessage(String value) {
    super(value);
  }

  public static UpdateMessage createUpdateRequestMessage(AppVersion appVersion) {
    Message message = MessageUtil.createMessage(MessageLevel.INFO, "backend.info.update.request", appVersion.value());
    return new UpdateMessage(message.formatMessage());
  }

  public static UpdateMessage createNotNeedMessage(AppVersion appVersion) {
    Message message = MessageUtil.createMessage(MessageLevel.INFO, "backend.info.update.not", appVersion.value());
    return new UpdateMessage(message.formatMessage());
  }
}
