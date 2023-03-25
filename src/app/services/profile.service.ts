import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(profileId: string): Observable<any>
  {
    return this.http.get(`https://localhost:8080/profiles/${profileId}`)
  }
}
