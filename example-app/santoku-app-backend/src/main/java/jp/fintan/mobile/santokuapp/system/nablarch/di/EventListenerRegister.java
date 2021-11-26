package jp.fintan.mobile.santokuapp.system.nablarch.di;

import java.util.List;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import jp.fintan.mobile.santokuapp.domain.model.event.EventListener;
import jp.fintan.mobile.santokuapp.domain.model.event.EventPublisher;
import nablarch.core.repository.SystemRepository;

public class EventListenerRegister implements ServletContextListener {

  @Override
  public void contextInitialized(ServletContextEvent sce) {
    EventPublisher publisher = SystemRepository.get(EventPublisher.class.getName());

    List<? extends EventListener<?>> listeners = List.of();

    for (EventListener<?> listener : listeners) {
      publisher.addEventListener(listener);
    }
  }

  @Override
  public void contextDestroyed(ServletContextEvent sce) {}
}
