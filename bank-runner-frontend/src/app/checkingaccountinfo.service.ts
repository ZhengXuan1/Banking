import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { checkingaccountinfo } from './checkingaccount';
import { environment } from 'src/environments/environment';
import { User, notes } from './user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class CheckingaccountinfoService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private noteurl= environment.bankRunnerBasePath+'/notifications/create';

  public getbyid(url: string){
    return this.http.get<checkingaccountinfo>(url);
  }

  public getbyemail(url:string):Observable<User>{
    return this.http.get<User>(url);
  }

  public getbycID(url:string):Observable<User>{
    return this.http.get<User>(url);
  }

  public getCheckingaccountinfo(): Observable<checkingaccountinfo[]> {
    return this.http.get<checkingaccountinfo[]>(environment.checking.findall(Number(this.authService.currentUser!.id)));
  }

  public getallnotes(): Observable<notes[]> {
    return this.http.get<notes[]>(environment.bankRunnerBasePath+'/notifications/findall/'+Number(this.authService.currentUser!.id))
  }


  public createCheckingaccount(checkingaccountinfo:checkingaccountinfo): Observable<checkingaccountinfo> {
    return this.http.post<checkingaccountinfo>(environment.checking.create, checkingaccountinfo);
  }

  public createNotifications(notes:notes): Observable<notes>{
    return this.http.post<notes>(this.noteurl,notes);
  }

  public updateCheckingaccount(checkingaccountinfo:checkingaccountinfo): Observable<checkingaccountinfo> {
    return this.http.put<checkingaccountinfo>(environment.checking.update, checkingaccountinfo);
  }

  public deleteCheckingaccount(dummy_pk: number): Observable<void> {
    return this.http.delete<void>(environment.checking.delete(dummy_pk));
  }
}
