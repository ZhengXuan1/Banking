import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { checkingaccountinfo } from '../checkingaccount';
import { CheckingaccountinfoService } from '../checkingaccountinfo.service';
import { User, notes } from '../user';
import { savingsaccountinfo } from '../savingsaccount';
import { SavingsaccountinfoService } from '../savingsaccountinfo.service';
import { data2 } from './data2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private checkingaccount: CheckingaccountinfoService,
    private savingsaccount: SavingsaccountinfoService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getallcheckingaccounts();
    this.getallsavingsaccounts();
  }
  newdata1 = new data2();


  public savingsaccountinfo: savingsaccountinfo[];
  public checkingaccountinfo: checkingaccountinfo[];
  public savingsaccountinfo1: savingsaccountinfo;
  public checkingaccountinfo1: checkingaccountinfo;
  public client1 : User;
  public client2 : User;
  public note2 : notes;

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
  onmake(){
    var amount = this.newdata1.amount;
    var email = this.newdata1.email;
    var reason = this.newdata1.description;
    var accountnumber = Number(this.newdata1.accountnumber.replace(/\D/g, "").slice(1).substring(0,9));
    if (accountnumber == undefined || amount == undefined || email == undefined || reason == undefined){
      alert("Please fill all the requested fields");
                return;
    }
    console.log(amount);
    console.log(email);
    console.log(reason);
    console.log(accountnumber);
    var IDUrl = environment.bankRunnerBasePath+'/findbyCid/'+this.authService.currentUser!.id;
    var EmailUrl = environment.bankRunnerBasePath+'/findbyemail/'+email;
    this.checkingaccount.getbycID(IDUrl).subscribe(
      (response: User) => {
      this.client1 = response;
      if (this.client1 == undefined){
        alert('You are not logged in!');
                  return;
      }
      console.log(this.client1);
      this.checkingaccount.getbyemail(EmailUrl).subscribe(
        (response: User) => {
          this.client2 = response;
          var requestername = this.client1.fname+" "+this.client1.lname;
          var requesteremail = this.client1.email;
          let notes1:notes = {
            clientId: this.client2.id,
            clientName: requestername,
            email: requesteremail,
            description: reason,
            accNum: accountnumber,
            amount: amount,
            id: 1,
          }
          this.checkingaccount.createNotifications(notes1).subscribe(
            (response: notes) => {
              this.note2 = response;
              console.log(this.note2);
              alert('Success!!');
                        return;
            }
          );
        },
        (error: HttpErrorResponse) =>{
          alert('Cannot find the client with the email you provided!');
                    return;
        }
      )
      }
    )
  }
}
