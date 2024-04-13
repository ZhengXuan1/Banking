import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: null | User = null;

  constructor(private http: HttpClient, private router: Router) {
    const sessionData = sessionStorage.getItem("user");
    if(sessionData) {
      this.currentUser = JSON.parse(sessionData);
    }
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  isManager(): boolean {
    return this.currentUser ? this.currentUser.role === 'Manager' : false;
  }

  isClient(): boolean {
    return this.currentUser ? this.currentUser.role === 'Client' : false;
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(environment.login, null, {
        withCredentials: true,
        params: {
          uname: username,
          pass: password
        }
      }).pipe(
      tap((response) => {
        this.currentUser = response;
        sessionStorage.setItem("user", JSON.stringify(response));
      })
    );
  }

  logout(): void {
    this.currentUser = null;
    sessionStorage.removeItem("user");
    this.router.navigate(['login'])
  }
}
