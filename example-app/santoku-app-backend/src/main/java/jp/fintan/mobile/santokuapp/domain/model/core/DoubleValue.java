package jp.fintan.mobile.santokuapp.domain.model.core;

public abstract class DoubleValue extends ValueObject<Double> {
  protected DoubleValue(Double value) {
    super(value);
  }
}
