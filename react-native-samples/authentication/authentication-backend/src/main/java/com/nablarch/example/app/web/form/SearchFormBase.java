package com.nablarch.example.app.web.form;

import nablarch.core.validation.ee.Domain;
import nablarch.core.validation.ee.Required;


/**
 * 基本フォームクラス。
 *
 * @author Nabu Rakutaro
 */
public abstract class SearchFormBase {

    /** ページ番号 */
    @Required
    @Domain("pageNumber")
    private String pageNumber;

    /**
     * ページ番号を取得する。
     *
     * @return ページ番号
     */
    public String getPageNumber() {
        return pageNumber;
    }

    /**
     * ページ番号を設定する。
     *
     * @param pageNumber 設定したいページ番号
     */
    public void setPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
    }
}
