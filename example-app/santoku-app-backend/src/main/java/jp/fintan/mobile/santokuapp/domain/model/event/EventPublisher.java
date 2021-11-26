package jp.fintan.mobile.santokuapp.domain.model.event;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class EventPublisher {

  private final Map<Class<Event>, List<EventListener>> eventListenerMapping = new HashMap<>();

  public void publish(Event event) {
    List<EventListener> handlers = eventListenerMapping.get(event.getClass());
    for (EventListener handler : handlers) {
      handler.handle(event);
    }
  }

  public void addEventListener(EventListener handler) {
    Class<Event> eventType = getEventType(handler.getClass());

    eventListenerMapping.computeIfAbsent(eventType, k -> new ArrayList<>());
    List<EventListener> listeners = eventListenerMapping.get(eventType);
    listeners.add(handler);
  }

  private Class<Event> getEventType(Class<?> type) {
    for (Type genericInterface : type.getGenericInterfaces()) {
      if (genericInterface instanceof ParameterizedType) {
        ParameterizedType parameterizedType = (ParameterizedType) genericInterface;
        if (parameterizedType.getRawType().equals(EventListener.class)) {
          Type[] typeArguments = parameterizedType.getActualTypeArguments();
          if (typeArguments == null) {
            break;
          }
          return (Class<Event>) typeArguments[0];
        }
      }
    }
    if (!type.isInterface()) {
      Class<Event> eventType = getEventType(type.getSuperclass());
      if (eventType != null) {
        return eventType;
      }
    }
    throw new IllegalStateException("EventType is missing.");
  }
}
