package jp.fintan.mobile.santokuapp.domain.model.core;

public abstract class LongValue extends ValueObject<Long> {
  protected LongValue(Long value) {
    super(value);
  }
}
