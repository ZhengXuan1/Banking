import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { checkingaccountinfo } from '../checkingaccount';
import { CheckingaccountinfoService } from '../checkingaccountinfo.service';
import { savingsaccountinfo } from '../savingsaccount';
import { SavingsaccountinfoService } from '../savingsaccountinfo.service';
import { data1 } from './data1';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private checkingaccount: CheckingaccountinfoService, private CookieFactory:CookieService,
    private savingsaccount: SavingsaccountinfoService,private checkingaccount1: CheckingaccountinfoService, private savingsaccount1: SavingsaccountinfoService,) { }

  ngOnInit(): void {
    this.getallcheckingaccounts();
    this.getallsavingsaccounts();

  }
  newdata = new data1();
  idid : number;
  Url1 : string;
  Url2 : string;
  amount : number;
  ID = Number(this.CookieFactory.get("ID"));



  public savingsaccountinfo: savingsaccountinfo[];
  public checkingaccountinfo: checkingaccountinfo[];
  public savingsaccountinfo1: savingsaccountinfo;
  public checkingaccountinfo1: checkingaccountinfo;

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



  onDeposit() {
    this.idid= Number(this.newdata.accountid);
    if (this.newdata.accounttype == '2'){
      this.Url1 = environment.bankRunnerBasePath+'/checking/findbyid/'+this.newdata.accountid;
      console.log(this.Url1);
      this.amount = Number(this.newdata.amount);
      this.checkingaccount1.getbyid(this.Url1).subscribe(
        (response: checkingaccountinfo) => {
          this.checkingaccountinfo1 = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      console.log(this.checkingaccountinfo1)
      let checkingaccountinfo: checkingaccountinfo =  {dummy_PK: this.checkingaccountinfo1.dummy_PK,
        chkAccBal: this.checkingaccountinfo1.chkAccBal+this.amount,
        chkAccNum: this.checkingaccountinfo1.chkAccNum,
        routNum: this.checkingaccountinfo1.routNum,
        clientId: this.checkingaccountinfo1.clientId}
      this.checkingaccount.updateCheckingaccount(checkingaccountinfo).subscribe(
        (response:checkingaccountinfo) => {
          console.log(response);

        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }

    if (this.newdata.accounttype == '3'){
      this.Url2 =  environment.bankRunnerBasePath+'/savings/findbyid/'+this.newdata.accountid;
      console.log(this.Url2);
      this.amount = Number(this.newdata.amount);
      this.savingsaccount1.getbyid(this.Url2).subscribe(
        (response: savingsaccountinfo) => {
          this.savingsaccountinfo1 = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      console.log(this.savingsaccountinfo1)
      let savingsaccountinfo: savingsaccountinfo =  {dummy_PK: this.savingsaccountinfo1.dummy_PK,
        savAccBal: this.savingsaccountinfo1.savAccBal+this.amount,
        savAccNum: this.savingsaccountinfo1.savAccNum,
        routNum: this.savingsaccountinfo1.routNum,
        clientId: this.savingsaccountinfo1.clientId}
      this.savingsaccount.updatesavingsaccount(savingsaccountinfo).subscribe(
        (response:savingsaccountinfo) => {
          console.log(response);

        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }



  }

}
