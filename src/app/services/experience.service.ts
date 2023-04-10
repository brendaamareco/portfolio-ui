import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  rootUrl: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  getExperienceList(): Observable<Experience[]>
  {
    return this.httpClient.get<Experience[]>(this.rootUrl + "experience");
  }

  addExperience(experience: Experience): Observable<Experience>
  {
    return this.httpClient.post<Experience>(this.rootUrl + "experience", experience);
  }

  updateExperience(experience: Experience): Observable<Experience>
  {
    return this.httpClient.put<Experience>(this.rootUrl + "experience", experience);
  }

}
