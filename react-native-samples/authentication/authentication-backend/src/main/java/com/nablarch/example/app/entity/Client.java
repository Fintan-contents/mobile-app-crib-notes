package com.nablarch.example.app.entity;

import javax.annotation.Generated;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * 顧客
 *
 */
@Generated("GSP")
@Entity
@Table(schema = "PUBLIC", name = "CLIENT")
public class Client implements Serializable {

    private static final long serialVersionUID = 1L;

    /** 顧客ID */
    private Integer clientId;

    /** 顧客名 */
    private String clientName;

    /** 業種コード */
    private String industryCode;

    /** industry関連プロパティ */
    private Industry industry;

    /** projectList関連プロパティ */
    private List<Project> projectList;
    /**
     * 顧客IDを返します。
     *
     * @return 顧客ID
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CLIENT_ID", precision = 10, nullable = false, unique = true)
    public Integer getClientId() {
        return clientId;
    }

    /**
     * 顧客IDを設定します。
     *
     * @param clientId 顧客ID
     */
    public void setClientId(Integer clientId) {
        this.clientId = clientId;
    }
    /**
     * 顧客名を返します。
     *
     * @return 顧客名
     */
    @Column(name = "CLIENT_NAME", length = 128, nullable = false, unique = false)
    public String getClientName() {
        return clientName;
    }

    /**
     * 顧客名を設定します。
     *
     * @param clientName 顧客名
     */
    public void setClientName(String clientName) {
        this.clientName = clientName;
    }
    /**
     * 業種コードを返します。
     *
     * @return 業種コード
     */
    @Column(name = "INDUSTRY_CODE", length = 2, nullable = false, unique = false, insertable = false, updatable = false)
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
     * industryを返します。
     *
     * @return industry
     */
    @ManyToOne
    @JoinColumn(name = "INDUSTRY_CODE", referencedColumnName = "INDUSTRY_CODE")
    public Industry getIndustry() {
        return industry;
    }

    /**
     * industryを設定します。
     *
     * @param industry industry
     */
    public void setIndustry(Industry industry) {
        this.industry = industry;
    }

    /**
     * projectListを返します。
     *
     * @return projectList
     */
    @OneToMany(mappedBy = "client")
    public List<Project> getProjectList() {
        return projectList;
    }

    /**
     * projectListを設定します。
     *
     * @param projectList projectList
     */
    public void setProjectList(List<Project> projectList) {
        this.projectList = projectList;
    }
}
