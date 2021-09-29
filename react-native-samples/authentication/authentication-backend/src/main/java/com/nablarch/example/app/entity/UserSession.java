package com.nablarch.example.app.entity;

import javax.annotation.Generated;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * ユーザセッション
 *
 */
@Generated("GSP")
@Entity
@Table(schema = "PUBLIC", name = "USER_SESSION")
public class UserSession implements Serializable {

    private static final long serialVersionUID = 1L;

    /** セッションID */
    private String sessionId;

    /** セッションオブジェクト */
    private byte[] sessionObject;

    /** 有効期限 */
    private Date expirationDatetime;
    /**
     * セッションIDを返します。
     *
     * @return セッションID
     */
    @Id
    @Column(name = "SESSION_ID", length = 100, nullable = false, unique = true)
    public String getSessionId() {
        return sessionId;
    }

    /**
     * セッションIDを設定します。
     *
     * @param sessionId セッションID
     */
    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }
    /**
     * セッションオブジェクトを返します。
     *
     * @return セッションオブジェクト
     */
    @Column(name = "SESSION_OBJECT", length = 2147483647, nullable = true, unique = false)
    public byte[] getSessionObject() {
        return sessionObject;
    }

    /**
     * セッションオブジェクトを設定します。
     *
     * @param sessionObject セッションオブジェクト
     */
    public void setSessionObject(byte[] sessionObject) {
        this.sessionObject = sessionObject;
    }
    /**
     * 有効期限を返します。
     *
     * @return 有効期限
     */
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "EXPIRATION_DATETIME", nullable = false, unique = false)
    public Date getExpirationDatetime() {
        return expirationDatetime;
    }

    /**
     * 有効期限を設定します。
     *
     * @param expirationDatetime 有効期限
     */
    public void setExpirationDatetime(Date expirationDatetime) {
        this.expirationDatetime = expirationDatetime;
    }
}
