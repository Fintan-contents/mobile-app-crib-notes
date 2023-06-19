package jp.fintan.mobile.santokuapp.domain.model.core;

import java.util.Map;

public abstract class MapValue<K, V> extends ValueObject<Map<K, V>> {
  protected MapValue(Map<K, V> value) {
    super(value);
  }
}
