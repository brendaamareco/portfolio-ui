import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(profileId: number): Observable<any>
  {
    return this.http.get(`http://localhost:8080/api/profiles/${profileId}`)
  }
}
