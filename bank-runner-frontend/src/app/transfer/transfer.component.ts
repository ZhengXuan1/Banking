import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { checkingaccountinfo } from '../checkingaccount';
import { CheckingaccountinfoService } from '../checkingaccountinfo.service';
import { savingsaccountinfo } from '../savingsaccount';
import { SavingsaccountinfoService } from '../savingsaccountinfo.service';
import { data3 } from './data3';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private checkingaccount: CheckingaccountinfoService, private CookieFactory:CookieService,
    private savingsaccount: SavingsaccountinfoService,private checkingaccount1: CheckingaccountinfoService, private savingsaccount1: SavingsaccountinfoService,) { }

  ngOnInit(){
    this.getallcheckingaccounts();
    this.getallsavingsaccounts();

  }
  newdata2 = new data3();
  idid : number;
  idid2 : number;
  Url1 : string;
  Url2 : string;
  Url3 : string;
  Url4 : string;
  amount : number;
  ID = Number(sessionStorage.getItem("id"));



  public savingsaccountinfo: savingsaccountinfo[];
  public checkingaccountinfo: checkingaccountinfo[];
  public savingsaccountinfo1: savingsaccountinfo;
  public checkingaccountinfo1: checkingaccountinfo;
  public savingsaccountinfo2: savingsaccountinfo;
  public checkingaccountinfo2: checkingaccountinfo;

  public getallcheckingaccounts():void {
    this.checkingaccount.getCheckingaccountinfo().subscribe(
      (response: checkingaccountinfo[]) => {
        this.checkingaccountinfo = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getallsavingsaccounts():void {
    this.savingsaccount.getsavingsaccountinfo().subscribe(
      (response: savingsaccountinfo[]) => {
        this.savingsaccountinfo = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  onTransfer() {

    this.idid= Number(this.newdata2.amount);
    this.idid2= Number(this.newdata2.accountid2);
    var num1 = this.newdata2.accounttype.replace(/\D/g, "");
    var accm = num1.slice(1);
    var accm1 = Number(num1.slice(10));
    var accn = accm.substring(0,9);
    var choice = num1.substring(1,2);
    if(this.newdata2.amount == undefined || this.newdata2.accounttype == undefined || this.newdata2.accountid2 == undefined){
      alert("please fill the requested field");
                return;
    };
    if(this.idid > accm1){
      alert("you don't have enough balance");
                return;
    };
    if (choice == '1' && this.newdata2.amount !== undefined && this.newdata2.accountid2 !== undefined && Number(this.newdata2.amount) <= accm1)  {
      if (this.idid <= 0){
        alert("Please enter the amount you want to send greater than 0");
                  return;
      }
      if (this.idid > 0){
        var choice2 = this.newdata2.accountid2.substring(0,1);
        if (choice2 != '1' && choice2 != '2'){
          alert("Cannot find the account you are looking for");
                    return;
        }
        if (choice2 == '1'){
          this.Url1 = environment.bankRunnerBasePath+'/checking/findbyid/'+accn;
          this.Url3 = environment.bankRunnerBasePath+'/checking/findbyid/'+this.newdata2.accountid2;
          this.amount = Number(this.newdata2.amount);
          this.checkingaccount1.getbyid(this.Url1).subscribe(
              response => {
              this.checkingaccountinfo1 = response;
              if (this.checkingaccountinfo1 == undefined){
               alert("Cannot find the account you are looking for");
                         return;
              }
              this.checkingaccount1.getbyid(this.Url3).subscribe(
                response => {
                this.checkingaccountinfo2 = response;
                if (this.checkingaccountinfo2 == undefined){
                  alert("Cannot find the account you are looking for");
                            return;
                }
                let checkingaccountinfo3: checkingaccountinfo =  {dummy_PK: this.checkingaccountinfo1.dummy_PK,
                  chkAccBal: this.checkingaccountinfo1.chkAccBal-this.amount,
                  chkAccNum: this.checkingaccountinfo1.chkAccNum,
                  routNum: this.checkingaccountinfo1.routNum,
                  clientId: this.checkingaccountinfo1.clientId}
                this.checkingaccount.updateCheckingaccount(checkingaccountinfo3).subscribe(
                    response => {
                    console.log(response);
                    let checkingaccountinfo5: checkingaccountinfo =  {dummy_PK: this.checkingaccountinfo2.dummy_PK,
                      chkAccBal: this.checkingaccountinfo2.chkAccBal+this.amount,
                      chkAccNum: this.checkingaccountinfo2.chkAccNum,
                      routNum: this.checkingaccountinfo2.routNum,
                      clientId: this.checkingaccountinfo2.clientId}
                    this.checkingaccount.updateCheckingaccount(checkingaccountinfo5).subscribe(
                      (response:checkingaccountinfo) => {
                        console.log(response);
                        alert("Successfully transfered "+this.idid+" dollars from account " +accn+" to account "+this.newdata2.accountid2);
                                  return;
                      },
                    );

                  },
                );

              },
            );
            },
          );


          }
        if (choice2 == '2'){
          this.Url2 = environment.bankRunnerBasePath+'/checking/findbyid/'+accn;
          this.Url4 = environment.bankRunnerBasePath+'/savings/findbyid/'+this.newdata2.accountid2;
          this.amount = Number(this.newdata2.amount);
          this.checkingaccount1.getbyid(this.Url2).subscribe(
            (response: checkingaccountinfo) => {
              this.checkingaccountinfo1 = response;
              if (this.checkingaccountinfo1 == undefined){
                alert("Cannot find the account you are looking for");
                          return;
              }
              this.savingsaccount1.getbyid(this.Url4).subscribe(
                (response: savingsaccountinfo) => {
                  this.savingsaccountinfo1 = response;
                  if (this.savingsaccountinfo1 == undefined){
                    alert("Cannot find the account you are looking for");
                              return;
                  }
                  let savingsaccountinfo3: savingsaccountinfo =  {dummy_PK: this.savingsaccountinfo1.dummy_PK,
                    savAccBal: this.savingsaccountinfo1.savAccBal+this.amount,
                    savAccNum: this.savingsaccountinfo1.savAccNum,
                    routNum: this.savingsaccountinfo1.routNum,
                    clientId: this.savingsaccountinfo1.clientId}
                  this.savingsaccount.updatesavingsaccount(savingsaccountinfo3).subscribe(
                    (response:savingsaccountinfo) => {
                      console.log(response);
                      let checkingaccountinfo5: checkingaccountinfo =  {dummy_PK: this.checkingaccountinfo1.dummy_PK,
                        chkAccBal: this.checkingaccountinfo1.chkAccBal-this.amount,
                        chkAccNum: this.checkingaccountinfo1.chkAccNum,
                        routNum: this.checkingaccountinfo1.routNum,
                        clientId: this.checkingaccountinfo1.clientId}
                      this.checkingaccount.updateCheckingaccount(checkingaccountinfo5).subscribe(
                        (response:checkingaccountinfo) => {
                          console.log(response);
                          alert("Successfully transfered "+this.idid+" dollars from account " +accn+" to account "+this.newdata2.accountid2);
                                    return;
                        },
                      );

                    },
                  );

                },
              );
            },
          );


        }
      }
  }

  if (choice == '2' && this.newdata2.amount !== undefined && this.newdata2.accountid2 !== undefined && Number(this.newdata2.amount) <= accm1)  {
    if (this.idid <= 0){
      alert("Please enter the amount you want to send greater than 0")
    }
    if (this.idid > 0){
      var choice2 = this.newdata2.accountid2.substring(0,1);
      if (choice2 !== '1' && choice2 !== '2'){
        alert("Cannot find the account you are looking for");
                          return;
      }
      if (choice2 == '1'){
        this.Url1 = environment.bankRunnerBasePath+'/savings/findbyid/'+accn;
        this.Url3 = environment.bankRunnerBasePath+'/checking/findbyid/'+this.newdata2.accountid2;
        this.amount = Number(this.newdata2.amount);
        this.savingsaccount1.getbyid(this.Url1).subscribe(
          (response: savingsaccountinfo) => {
            this.savingsaccountinfo1 = response;
            if (this.savingsaccountinfo1 == undefined){
              alert("Cannot find the account you are looking for");
                        return;
            }
            this.checkingaccount1.getbyid(this.Url3).subscribe(
              (response: checkingaccountinfo) => {
                this.checkingaccountinfo2 = response;
                if (this.checkingaccountinfo2 == undefined){
                  alert("Cannot find the account you are looking for");
                            return;
                }
                let savingsaccountinfo3: savingsaccountinfo =  {dummy_PK: this.savingsaccountinfo1.dummy_PK,
                  savAccBal: this.savingsaccountinfo1.savAccBal-this.amount,
                  savAccNum: this.savingsaccountinfo1.savAccNum,
                  routNum: this.savingsaccountinfo1.routNum,
                  clientId: this.savingsaccountinfo1.clientId}
                this.savingsaccount.updatesavingsaccount(savingsaccountinfo3).subscribe(
                  (response:savingsaccountinfo) => {
                    console.log(response);
                    let checkingaccountinfo5: checkingaccountinfo =  {dummy_PK: this.checkingaccountinfo2.dummy_PK,
                      chkAccBal: this.checkingaccountinfo2.chkAccBal+this.amount,
                      chkAccNum: this.checkingaccountinfo2.chkAccNum,
                      routNum: this.checkingaccountinfo2.routNum,
                      clientId: this.checkingaccountinfo2.clientId}
                    this.checkingaccount.updateCheckingaccount(checkingaccountinfo5).subscribe(
                      (response:checkingaccountinfo) => {
                        console.log(response);
                        alert("Successfully transfered "+this.idid+" dollars from account " +accn+" to account "+this.newdata2.accountid2);
                                  return;
                      }
                    );

                  },
                );

          },
        );

          },

        );

        }
      if (choice2 == '2'){
        this.Url2 = environment.bankRunnerBasePath+'/savings/findbyid/'+accn;
        this.Url4 = environment.bankRunnerBasePath+'/savings/findbyid/'+this.newdata2.accountid2;
        this.amount = Number(this.newdata2.amount);
        this.savingsaccount1.getbyid(this.Url2).subscribe(
          (response: savingsaccountinfo) => {
            this.savingsaccountinfo1 = response;
            if (this.savingsaccountinfo1 == undefined){
              alert("Cannot find the account you are looking for");
                        return;
            }
            this.savingsaccount1.getbyid(this.Url4).subscribe(
              (response: savingsaccountinfo) => {
                this.savingsaccountinfo2 = response;
                if (this.savingsaccountinfo2 == undefined){
                  alert("Cannot find the account you are looking for");
                            return;
                }
                let savingsaccountinfo3: savingsaccountinfo =  {dummy_PK: this.savingsaccountinfo1.dummy_PK,
                  savAccBal: this.savingsaccountinfo1.savAccBal-this.amount,
                  savAccNum: this.savingsaccountinfo1.savAccNum,
                  routNum: this.savingsaccountinfo1.routNum,
                  clientId: this.savingsaccountinfo1.clientId}
                this.savingsaccount.updatesavingsaccount(savingsaccountinfo3).subscribe(
                  (response:savingsaccountinfo) => {
                    console.log(response);
                    let savingsaccountinfo5: savingsaccountinfo =  {dummy_PK: this.savingsaccountinfo2.dummy_PK,
                      savAccBal: this.savingsaccountinfo2.savAccBal+this.amount,
                      savAccNum: this.savingsaccountinfo2.savAccNum,
                      routNum: this.savingsaccountinfo2.routNum,
                      clientId: this.savingsaccountinfo2.clientId}
                    this.savingsaccount.updatesavingsaccount(savingsaccountinfo5).subscribe(
                      (response:savingsaccountinfo) => {
                        console.log(response);
                        alert("Successfully transfered "+this.idid+" dollars from account " +accn+" to account "+this.newdata2.accountid2);
                                  return;
                      },
                    );
                  },
                );

              },
            );
          },
        );





      }
    }
}


  }




}
