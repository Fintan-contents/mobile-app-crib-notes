package com.nablarch.example.app.entity;

import javax.annotation.Generated;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * 業種
 *
 */
@Generated("GSP")
@Entity
@Table(schema = "PUBLIC", name = "INDUSTRY")
public class Industry implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 業種コード */
    private String industryCode;

    /** 業種名 */
    private String industryName;

    /** clientList関連プロパティ */
    private List<Client> clientList;
    /**
     * 業種コードを返します。
     *
     * @return 業種コード
     */
    @Id
    @Column(name = "INDUSTRY_CODE", length = 2, nullable = false, unique = true)
    public String getIndustryCode() {
        return industryCode;
    }

    /**
     * 業種コードを設定します。
     *
     * @param industryCode 業種コード
     */
    public void setIndustryCode(String industryCode) {
        this.industryCode = industryCode;
    }
    /**
     * 業種名を返します。
     *
     * @return 業種名
     */
    @Column(name = "INDUSTRY_NAME", length = 50, nullable = true, unique = false)
    public String getIndustryName() {
        return industryName;
    }

    /**
     * 業種名を設定します。
     *
     * @param industryName 業種名
     */
    public void setIndustryName(String industryName) {
        this.industryName = industryName;
    }

    /**
     * clientListを返します。
     *
     * @return clientList
     */
    @OneToMany(mappedBy = "industry")
    public List<Client> getClientList() {
        return clientList;
    }

    /**
     * clientListを設定します。
     *
     * @param clientList clientList
     */
    public void setClientList(List<Client> clientList) {
        this.clientList = clientList;
    }
}
