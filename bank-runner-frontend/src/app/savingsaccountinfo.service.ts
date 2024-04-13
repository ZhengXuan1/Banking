import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { savingsaccountinfo } from './savingsaccount';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class SavingsaccountinfoService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private bUrl = environment.bankRunnerBasePath+'/savings/create';
  private dUrl = environment.bankRunnerBasePath+'/savings/update';

  public getbyid(url:string): Observable<savingsaccountinfo> {
    return this.http.get<savingsaccountinfo>(url);
  }


  public getsavingsaccountinfo(): Observable<savingsaccountinfo[]> {
    return this.http.get<savingsaccountinfo[]>(environment.bankRunnerBasePath+'/savings/findall/'+this.authService.currentUser!.id);
  }


  public createsavingsaccount(savingsaccountinfo:savingsaccountinfo): Observable<savingsaccountinfo> {
    return this.http.post<savingsaccountinfo>(this.bUrl,savingsaccountinfo);
  }

  public updatesavingsaccount(savingsaccountinfo:savingsaccountinfo): Observable<savingsaccountinfo> {
    return this.http.put<savingsaccountinfo>(this.dUrl,savingsaccountinfo);
  }

  public deletesavingsaccount(dummy_pk: number): Observable<void> {
    return this.http.delete<void>(this.dUrl);
  }
}
