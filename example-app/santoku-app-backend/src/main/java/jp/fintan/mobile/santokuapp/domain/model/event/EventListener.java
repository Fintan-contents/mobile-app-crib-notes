package jp.fintan.mobile.santokuapp.domain.model.event;

public interface EventListener<T extends Event> {

  void handle(T event);
}
