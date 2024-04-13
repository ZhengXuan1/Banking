import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { LoanDecision } from '../loan-decision';
import { loanDetails } from '../loan-details';
import { LoanDetailsList } from '../loan-details-list';
import { ManagerDetails } from '../manager-details';
import { User } from '../user';

@Component({
  selector: 'app-manager-portal',
  templateUrl: './manager-portal.component.html',
  styleUrls: ['./manager-portal.component.css']
})
export class ManagerPortalComponent implements OnInit {

  constructor(private http:HttpClient, public authService: AuthService) { }

  loginCreds = {
    uname: "",
    pass: ""
  };

  error = "no";
          
  destination = environment.bankRunnerBasePath+'/managerLogin';
  loanUpdateDestination = environment.bankRunnerBasePath+'/loanUpdate';
  loanDestination = environment.bankRunnerBasePath+'/loanFind';
  loanFindError = "no";
  showDecisionOptions = sessionStorage.getItem("showDecisionOptions");
  submissionMade = "no";
  decision = new LoanDecision;

  public loanList:LoanDetailsList[];

  ngOnInit(): void {
    this.showDecisionOptions = "no";
  }

  onManagerLogin(){
      this.authService.login(this.loginCreds.uname, this.loginCreds.pass).subscribe(
        () => {
          this.error = "no";
        },
        () => {
          this.error = "yes";
        }
      );
  }

  loadLoans(){this.showDecisionOptions="yes";

    this.http.get<any>(environment.loanFind).subscribe(
    (response: LoanDetailsList[]) =>{
      this.loanList = response;
    },
      responseFail =>  console.error()
    )
  }

  onStatusUpdate(){
    this.submissionMade = "yes";
    this.showDecisionOptions = "no";
    let parameters = new HttpParams()
    .set('appId',this.decision.appId)
    .set('status',this.decision.status)
    .set('description',this.decision.description);

    this.http.put(environment.loanUpdate,parameters).subscribe(
      success => {console.log("yay")},
      fail => console.error()
    );
  }

  again() {
    this.submissionMade = "no";
    
    this.loadLoans();
  }

}
