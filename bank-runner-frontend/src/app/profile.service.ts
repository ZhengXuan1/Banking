import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './register/profileModel';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) {}



  createNewProfile(profile:Profile){

    return this.http.post<any>(environment.register,profile);


  }

}
