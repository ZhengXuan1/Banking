import { Component, OnInit } from '@angular/core';
import { login } from '../login-model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService, private router: Router) { }

  loginDetails = new login();
  

  onLogin() {
    this.authService.login(this.loginDetails.uname, this.loginDetails.pass).subscribe(
      () => {
        if(this.authService.currentUser!.role == "Client") {this.router.navigate(['myaccounts'])}
        else if(this.authService.currentUser!.role == "Manager")  {this.router.navigate(['manager'])}
        
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
