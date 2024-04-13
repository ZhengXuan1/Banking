import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  constructor(private http:HttpClient, public authService: AuthService) { }

    email: string;
    verified = "";

    updated = "";

    pass1: string;
    pass2: string;
    

    currentDetails: User;


  onVerify(){
    let parameter = new HttpParams().set("email",this.email);

    this.http.post<User>(environment.verifyEmail, parameter, {withCredentials:true}).subscribe(
      success => {
        this.currentDetails = success;
        
         
        this.verified = "true";

      },
      fail => console.error()
    );
}

  onUpdate(){
    let parameters = new HttpParams().set("pass",this.pass1)
                                    .set("passConfirm",this.pass2)
                                    .set("ID",this.currentDetails.id);
      if(this.pass1 == this.pass2){
    this.http.put(environment.updatePassword, parameters, {withCredentials:true}).subscribe();
          this.updated = "yes";
      }
      if(this.pass1 != this.pass2)

      { this.updated = "no";}
      
    
    
  }
}
