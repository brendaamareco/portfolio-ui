import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  uri: string = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<boolean>
  {
    this.httpClient.post(this.uri + '/auth', {username: username, password: password})
    .subscribe( ((resp: any) => 
    {
      localStorage.setItem('auth_token', resp.jwtToken)
      return new Observable<true>
    })); 

    return new Observable<false>
  }

  logOut()
  { localStorage.removeItem('auth_token'); }

  public get loggedIn(): boolean
  { return (localStorage.getItem('auth_token') != null); }
}
