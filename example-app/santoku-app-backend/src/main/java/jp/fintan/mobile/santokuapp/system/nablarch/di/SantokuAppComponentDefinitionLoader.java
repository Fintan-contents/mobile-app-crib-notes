package jp.fintan.mobile.santokuapp.system.nablarch.di;

import nablarch.core.repository.di.config.externalize.AnnotationComponentDefinitionLoader;

public class SantokuAppComponentDefinitionLoader extends AnnotationComponentDefinitionLoader {

  @Override
  protected String getBasePackage() {
    return "jp.fintan.mobile.santokuapp";
  }
}
