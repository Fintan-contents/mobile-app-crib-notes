package com.nablarch.example.app.entity.core.validation.validator;

import nablarch.core.validation.ee.DomainManager;

/**
 * {@link DomainManager} の実装クラス。
 * <p/>
 * ドメインを定義したBeanクラスを返却する。
 *
 * @author Nabu Rakutaro
 */
public class ExampleDomainManager implements DomainManager<ExampleDomainType> {
    @Override
    public Class<ExampleDomainType> getDomainBean() {
        // ドメインBeanのClassオブジェクトを返す
        return ExampleDomainType.class;
    }
}
