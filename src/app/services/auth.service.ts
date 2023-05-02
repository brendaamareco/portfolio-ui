import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uri: string = environment.apiURL + "/api";

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<boolean> 
  {
    return this.httpClient
      .post(
        this.uri + '/auth',
        { username: username, password: password },
        httpOptions
      )
      .pipe(
        map((resp: any) => {
          localStorage.setItem('auth_token', resp.jwtToken);
          return true;
        }),
        catchError((err) => {
          return of(false);
        })
      );
  }

  logOut() 
  { localStorage.removeItem('auth_token'); }

  public get loggedIn(): boolean 
  { return localStorage.getItem('auth_token') != null; }

  get token(): string | null 
  { return localStorage.getItem('auth_token'); }
}
