package jp.fintan.mobile.santokuapp.domain.model.core;

import java.time.OffsetDateTime;

public abstract class OffsetDateTimeValue extends ValueObject<OffsetDateTime> {
  protected OffsetDateTimeValue(OffsetDateTime value) {
    super(value);
  }
}
