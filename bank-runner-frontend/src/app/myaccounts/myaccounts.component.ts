import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { checkingaccountinfo } from '../checkingaccount';
import { CheckingaccountinfoService } from '../checkingaccountinfo.service';
import { notes } from '../user';
import { savingsaccountinfo } from '../savingsaccount';
import { SavingsaccountinfoService } from '../savingsaccountinfo.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-myaccounts',
  templateUrl: './myaccounts.component.html',
  styleUrls: ['./myaccounts.component.css']
})
export class MyaccountsComponent implements OnInit {


  public checkingaccountinfo: checkingaccountinfo[];
  public savingsaccountinfo: savingsaccountinfo[];
  public notes: notes[];

  constructor(
    private checkingaccount: CheckingaccountinfoService,
    private savingsaccount: SavingsaccountinfoService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.getallcheckingaccounts();
    this.getallsavingsaccounts();
    this.getallnotifications();
  }


  public getallnotifications():void{
    this.checkingaccount.getallnotes().subscribe(
      (response: notes[]) => {
        this.notes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

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


}
