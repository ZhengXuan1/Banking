package com.banking.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="CHECKING_ACCTS")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class checkingAccountInfo {


    @Column(name="CLIENT_ID")
    @NotNull
    private int clientId;

    @Column(name="ROUT_NUM")
    @NotNull
    private long routNum;

    @Column(name="CHK_ACC_NUM",unique = true)
    @NotNull
    private long chkAccNum;

    @Column(name="CHK_ACC_BAL")
    @NotNull
    private long chkAccBal;

    @Id
    @Column(name="dummy_PK")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int dummy_PK;


    public int getClientId() {
        return clientId;
    }

    public void setClientId(int clientId) {
        this.clientId = clientId;
    }

    public long getRoutNum() {
        return routNum;
    }

    public void setRoutNum(long routNum) {
        this.routNum = routNum;
    }

    public long getChkAccNum() {
        return chkAccNum;
    }

    public void setChkAccNum(long chkAccNum) {
        this.chkAccNum = chkAccNum;
    }

    public long getChkAccBal() {
        return chkAccBal;
    }

    public void setChkAccBal(long chkAccBal) {
        this.chkAccBal = chkAccBal;
    }

    public int getDummy_PK() {
        return dummy_PK;
    }

    public void setDummy_PK(int dummy_PK) {
        this.dummy_PK = dummy_PK;
    }


}
