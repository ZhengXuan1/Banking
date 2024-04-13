import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { Profile } from '../register/profileModel';
import { AuthService } from '../auth.service';
import { User } from '../user';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private http:HttpClient, private authService:AuthService) { }

  
  


   currentDetails:User;
   passConfirm:string;


   ngOnInit(): void {
    
    if(this.authService.isLoggedIn())
    {
        let parameters = new HttpParams().set('ID',this.authService.currentUser!.id);

        this.http.post<User>(environment.profilePage,parameters).subscribe(
          responseBody => {
              this.currentDetails = responseBody;


          },
          responseError => {console.error()}

        );
        console.log(this.currentDetails);
    }

    else
    {


    }




  }

  onUpdate() {
    if(this.currentDetails.pass == this.passConfirm){
    
            let parameters = new HttpParams()
            .set('fname',this.currentDetails.fname)
            .set('midInitial',this.currentDetails.middleInit)
            .set('lname',this.currentDetails.lname)
            .set('email',this.currentDetails.email)
            .set('phone',this.currentDetails.phone)
            .set('street',this.currentDetails.street)
            .set('city',this.currentDetails.city)
            .set('state',this.currentDetails.state)
            .set('zipcode',this.currentDetails.zip)
            .set('ssNum',this.currentDetails.ssNum)
            .set('uname',this.currentDetails.uname)
            .set('pass',this.currentDetails.pass)
            .set('ID',this.currentDetails.id)
            .set('role',this.currentDetails.role);

            this.http.put(environment.updateAccount,parameters).subscribe(
              

            );

    }
    else {};

    




  }

}
