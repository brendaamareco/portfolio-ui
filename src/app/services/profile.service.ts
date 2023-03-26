import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(profileId: number): Observable<Profile>
  {
    return this.http.get<Profile>(`http://localhost:8080/api/profiles/${profileId}`)
  }

  updateProfile(profile: Profile): Observable<Profile>
  {
    return this.http.put<Profile>("http://localhost:8080/api/profiles", profile);
  }
}
