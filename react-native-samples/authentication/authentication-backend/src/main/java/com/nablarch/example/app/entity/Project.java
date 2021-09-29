package com.nablarch.example.app.entity;

import javax.annotation.Generated;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * プロジェクト
 *
 */
@Generated("GSP")
@Entity
@Table(schema = "PUBLIC", name = "PROJECT")
public class Project implements Serializable {

    private static final long serialVersionUID = 1L;

    /** プロジェクトID */
    private Integer projectId;

    /** プロジェクト名 */
    private String projectName;

    /** プロジェクト種別 */
    private String projectType;

    /** プロジェクト分類 */
    private String projectClass;

    /** プロジェクト開始日付 */
    private Date projectStartDate;

    /** プロジェクト終了日付 */
    private Date projectEndDate;

    /** 顧客ID */
    private Integer clientId;

    /** プロジェクトマネージャー */
    private String projectManager;

    /** プロジェクトリーダー */
    private String projectLeader;

    /** ユーザID */
    private Integer userId;

    /** 備考 */
    private String note;

    /** 売上高 */
    private Integer sales;

    /** 売上原価 */
    private Integer costOfGoodsSold;

    /** 販管費 */
    private Integer sga;

    /** 本社配賦 */
    private Integer allocationOfCorpExpenses;

    /** バージョン番号 */
    private Long version;

    /** client関連プロパティ */
    private Client client;

    /** systemAccount関連プロパティ */
    private SystemAccount systemAccount;
    /**
     * プロジェクトIDを返します。
     *
     * @return プロジェクトID
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PROJECT_ID", precision = 10, nullable = false, unique = true)
    public Integer getProjectId() {
        return projectId;
    }

    /**
     * プロジェクトIDを設定します。
     *
     * @param projectId プロジェクトID
     */
    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }
    /**
     * プロジェクト名を返します。
     *
     * @return プロジェクト名
     */
    @Column(name = "PROJECT_NAME", length = 128, nullable = false, unique = false)
    public String getProjectName() {
        return projectName;
    }

    /**
     * プロジェクト名を設定します。
     *
     * @param projectName プロジェクト名
     */
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
    /**
     * プロジェクト種別を返します。
     *
     * @return プロジェクト種別
     */
    @Column(name = "PROJECT_TYPE", length = 128, nullable = false, unique = false)
    public String getProjectType() {
        return projectType;
    }

    /**
     * プロジェクト種別を設定します。
     *
     * @param projectType プロジェクト種別
     */
    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }
    /**
     * プロジェクト分類を返します。
     *
     * @return プロジェクト分類
     */
    @Column(name = "PROJECT_CLASS", length = 128, nullable = false, unique = false)
    public String getProjectClass() {
        return projectClass;
    }

    /**
     * プロジェクト分類を設定します。
     *
     * @param projectClass プロジェクト分類
     */
    public void setProjectClass(String projectClass) {
        this.projectClass = projectClass;
    }
    /**
     * プロジェクト開始日付を返します。
     *
     * @return プロジェクト開始日付
     */
    @Temporal(TemporalType.DATE)
    @Column(name = "PROJECT_START_DATE", nullable = true, unique = false)
    public Date getProjectStartDate() {
        return projectStartDate;
    }

    /**
     * プロジェクト開始日付を設定します。
     *
     * @param projectStartDate プロジェクト開始日付
     */
    public void setProjectStartDate(Date projectStartDate) {
        this.projectStartDate = projectStartDate;
    }
    /**
     * プロジェクト終了日付を返します。
     *
     * @return プロジェクト終了日付
     */
    @Temporal(TemporalType.DATE)
    @Column(name = "PROJECT_END_DATE", nullable = true, unique = false)
    public Date getProjectEndDate() {
        return projectEndDate;
    }

    /**
     * プロジェクト終了日付を設定します。
     *
     * @param projectEndDate プロジェクト終了日付
     */
    public void setProjectEndDate(Date projectEndDate) {
        this.projectEndDate = projectEndDate;
    }
    /**
     * 顧客IDを返します。
     *
     * @return 顧客ID
     */
    @Column(name = "CLIENT_ID", precision = 10, nullable = true, unique = false, insertable = false, updatable = false)
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
     * プロジェクトマネージャーを返します。
     *
     * @return プロジェクトマネージャー
     */
    @Column(name = "PROJECT_MANAGER", length = 128, nullable = true, unique = false)
    public String getProjectManager() {
        return projectManager;
    }

    /**
     * プロジェクトマネージャーを設定します。
     *
     * @param projectManager プロジェクトマネージャー
     */
    public void setProjectManager(String projectManager) {
        this.projectManager = projectManager;
    }
    /**
     * プロジェクトリーダーを返します。
     *
     * @return プロジェクトリーダー
     */
    @Column(name = "PROJECT_LEADER", length = 128, nullable = true, unique = false)
    public String getProjectLeader() {
        return projectLeader;
    }

    /**
     * プロジェクトリーダーを設定します。
     *
     * @param projectLeader プロジェクトリーダー
     */
    public void setProjectLeader(String projectLeader) {
        this.projectLeader = projectLeader;
    }
    /**
     * ユーザIDを返します。
     *
     * @return ユーザID
     */
    @Column(name = "USER_ID", precision = 10, nullable = true, unique = false, insertable = false, updatable = false)
    public Integer getUserId() {
        return userId;
    }

    /**
     * ユーザIDを設定します。
     *
     * @param userId ユーザID
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    /**
     * 備考を返します。
     *
     * @return 備考
     */
    @Column(name = "NOTE", length = 512, nullable = true, unique = false)
    public String getNote() {
        return note;
    }

    /**
     * 備考を設定します。
     *
     * @param note 備考
     */
    public void setNote(String note) {
        this.note = note;
    }
    /**
     * 売上高を返します。
     *
     * @return 売上高
     */
    @Column(name = "SALES", precision = 10, nullable = true, unique = false)
    public Integer getSales() {
        return sales;
    }

    /**
     * 売上高を設定します。
     *
     * @param sales 売上高
     */
    public void setSales(Integer sales) {
        this.sales = sales;
    }
    /**
     * 売上原価を返します。
     *
     * @return 売上原価
     */
    @Column(name = "COST_OF_GOODS_SOLD", precision = 10, nullable = true, unique = false)
    public Integer getCostOfGoodsSold() {
        return costOfGoodsSold;
    }

    /**
     * 売上原価を設定します。
     *
     * @param costOfGoodsSold 売上原価
     */
    public void setCostOfGoodsSold(Integer costOfGoodsSold) {
        this.costOfGoodsSold = costOfGoodsSold;
    }
    /**
     * 販管費を返します。
     *
     * @return 販管費
     */
    @Column(name = "SGA", precision = 10, nullable = true, unique = false)
    public Integer getSga() {
        return sga;
    }

    /**
     * 販管費を設定します。
     *
     * @param sga 販管費
     */
    public void setSga(Integer sga) {
        this.sga = sga;
    }
    /**
     * 本社配賦を返します。
     *
     * @return 本社配賦
     */
    @Column(name = "ALLOCATION_OF_CORP_EXPENSES", precision = 10, nullable = true, unique = false)
    public Integer getAllocationOfCorpExpenses() {
        return allocationOfCorpExpenses;
    }

    /**
     * 本社配賦を設定します。
     *
     * @param allocationOfCorpExpenses 本社配賦
     */
    public void setAllocationOfCorpExpenses(Integer allocationOfCorpExpenses) {
        this.allocationOfCorpExpenses = allocationOfCorpExpenses;
    }
    /**
     * バージョン番号を返します。
     *
     * @return バージョン番号
     */
    @Version
    @Column(name = "VERSION", precision = 19, nullable = false, unique = false)
    public Long getVersion() {
        return version;
    }

    /**
     * バージョン番号を設定します。
     *
     * @param version バージョン番号
     */
    public void setVersion(Long version) {
        this.version = version;
    }

    /**
     * clientを返します。
     *
     * @return client
     */
    @ManyToOne
    @JoinColumn(name = "CLIENT_ID", referencedColumnName = "CLIENT_ID")
    public Client getClient() {
        return client;
    }

    /**
     * clientを設定します。
     *
     * @param client client
     */
    public void setClient(Client client) {
        this.client = client;
    }

    /**
     * systemAccountを返します。
     *
     * @return systemAccount
     */
    @ManyToOne
    @JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID")
    public SystemAccount getSystemAccount() {
        return systemAccount;
    }

    /**
     * systemAccountを設定します。
     *
     * @param systemAccount systemAccount
     */
    public void setSystemAccount(SystemAccount systemAccount) {
        this.systemAccount = systemAccount;
    }
}
