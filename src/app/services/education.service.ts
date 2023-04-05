import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education.interface';

@Injectable({
  providedIn: 'root'
})
export class EducationService 
{
  rootUrl: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  getEducationList(): Observable<Education[]>
  {
    return this.httpClient.get<Education[]>(this.rootUrl + "education");
  }

  addEducation(education: Education): Observable<Education>
  {
    return this.httpClient.post<Education>(this.rootUrl + "education", education);
  }
}
