import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { loanDetails } from '../loan-details';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-loan-app',
  templateUrl: './loan-app.component.html',
  styleUrls: ['./loan-app.component.css']
})
export class LoanAppComponent implements OnInit {

  constructor(private CookieFactory:CookieService, private http:HttpClient) { }

  ngOnInit(): void {
    sessionStorage.removeItem("verified");
    sessionStorage.removeItem("id");
  }
  loan = new loanDetails();
  username = this.CookieFactory.get("username");
  firstName = this.CookieFactory.get("firstName");
  lastName = this.CookieFactory.get("lastName");
  loggedIn = this.CookieFactory.get("loggedIn");
  ID = this.CookieFactory.get("ID");
  formStatus = "";




  onApply(){   let parameters = new HttpParams()
    .set('fname',this.loan.firstName)
    .set('minit',this.loan.midInitial)
    .set('lname',this.loan.lastName)
    .set('dob',this.loan.birthDate)
    .set('email',this.loan.email)
    .set('maritalStatus',this.loan.maritalStatus)
    .set('street',this.loan.street)
    .set('city',this.loan.city)
    .set('state',this.loan.state)
    .set('zip',this.loan.zip)
    .set('ssNum',this.loan.ssNum)
    .set('phone',this.loan.phone)
    .set('loanAmount',this.loan.loanAmount)
    .set('loanPurpose',this.loan.loanPurpose)
    .set('salary',this.loan.salary)
    .set('decision',this.loan.decisionDetails)
    .set('status',this.loan.decisionStatus);


    this.http.post(environment.loanApplication,parameters).subscribe(
      success => this.formStatus = "success",
      fail =>  this.formStatus = "error"

    );


  }





}
