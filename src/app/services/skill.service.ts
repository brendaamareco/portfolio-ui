import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillService 
{
  rootUrl: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  getSkills(): Observable<Skill[]>
  {
    return this.httpClient.get<Skill[]>(this.rootUrl + "skills");
  }
}
