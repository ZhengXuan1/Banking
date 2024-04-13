import { Component, OnInit } from '@angular/core';
import { Profile } from './profileModel';
import { ProfileService } from '../profile.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http:HttpClient, private router:Router) { }
  
  profileDetails = new Profile();

    onSubmit(){
      
      let parameters = new HttpParams()
      .set('fname',this.profileDetails.fname)
      .set('midInitial',this.profileDetails.midInitial)
      .set('lname',this.profileDetails.lname)
      .set('email',this.profileDetails.email)
      .set('phone',this.profileDetails.phone)
      .set('street',this.profileDetails.street)
      .set('city',this.profileDetails.city)
      .set('state',this.profileDetails.state)
      .set('zipcode',this.profileDetails.zipcode)
      .set('ssNum',this.profileDetails.ssNum)
      .set('uname',this.profileDetails.uname)
      .set('pass',this.profileDetails.pass)
      .set('passConfirm',this.profileDetails.passConfirm)
      .set('role', 'Client');

      this.http.post(environment.register,parameters).subscribe(
        success => this.router.navigate(['login']),
        error => console.error()

      );
  }
}
