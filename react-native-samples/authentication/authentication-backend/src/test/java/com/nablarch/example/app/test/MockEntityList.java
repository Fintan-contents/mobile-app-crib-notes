package com.nablarch.example.app.test;

import nablarch.common.dao.EntityList;

/**
 * ページングを含むリクエスト単体テストで使用する{@link EntityList}のMockクラス。
 * <p>
 * セッション上のエンティティリストを描画する画面では、本クラスを生成してセッションに登録する。
 */
public class MockEntityList<ENTITY> extends EntityList<ENTITY> {

    public void setUpMockList(int page, long max, int resultCount) {
        setPage(page);
        setMax(max);
        setResultCount(resultCount);
    }

}
