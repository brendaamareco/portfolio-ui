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

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(username: string, password: string)
  {
    this.httpClient.post(this.uri + '/auth', {username: username, password: password}, {withCredentials:true})
    .subscribe( ((resp: any) => 
    {
      localStorage.setItem('auth_token', resp.jwtToken);
      this.router.navigateByUrl('/')
      .then(() => { window.location.reload();}); 
    }));
  }

  logOut()
  { localStorage.removeItem('auth_token'); }

  public get loggedIn(): boolean
  { return (localStorage.getItem('auth_token') != null); }
}
