package jp.fintan.mobile.santokuapp.domain.model.core;

import java.util.List;

public abstract class ListValue<T> extends ValueObject<List<T>> {
  protected ListValue(List<T> value) {
    super(value);
  }
}
