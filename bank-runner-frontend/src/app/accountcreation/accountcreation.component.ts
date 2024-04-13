import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { checkingaccountinfo } from '../checkingaccount';
import { CheckingaccountinfoService } from '../checkingaccountinfo.service';
import { savingsaccountinfo } from '../savingsaccount';
import { SavingsaccountinfoService } from '../savingsaccountinfo.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { saving } from './saving';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accoutcreation',
  templateUrl: './accountcreation.component.html',
  styleUrls: ['./accountcreation.component.css']
})
export class AccoutcreationComponent implements OnInit {


  constructor(
    private checkingaccount: CheckingaccountinfoService,
    private authService: AuthService,
    private savingsaccount: SavingsaccountinfoService
  ) { }

  ngOnInit(): void {
  }

  newsave = new saving();

  public savingsaccountinfo: savingsaccountinfo[];
  public checkingaccountinfo: checkingaccountinfo[];
  val = Math.floor(1000 + Math.random() * 9000);
  val1 = Math.floor(1000 + Math.random() * 9000);


  onCreate() {
    console.log(this.newsave.accounttype)


    if (this.newsave.accounttype == '2'){
      let checkingaccountinfo: checkingaccountinfo =  {dummy_PK: 0,
        chkAccBal: 1000,
        chkAccNum: 100000000+ this.val+this.val1*10000,
        routNum: 21000021,
        clientId: this.authService.currentUser!.id}
      this.checkingaccount.createCheckingaccount(checkingaccountinfo).subscribe(
        (response:checkingaccountinfo) => {
          console.log(response);
          alert("success!");
          return;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }

    if (this.newsave.accounttype == '3'){
      let savingsaccountinfo: savingsaccountinfo =  {dummy_PK: 0,
        savAccBal: 500,
        savAccNum: 200000000+ this.val+this.val1*10000,
        routNum: 21000021,
        clientId: this.authService.currentUser!.id}
      this.savingsaccount.createsavingsaccount(savingsaccountinfo).subscribe(
        (response:savingsaccountinfo) => {
          console.log(response);
          alert("success!");
          return;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }
  }

}
