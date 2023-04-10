import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../models/softSkill.interface';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {

  rootUrl: string = "http://localhost:8080/api/";

  constructor(private httpClient: HttpClient) { }

  getSkills(): Observable<SoftSkill[]>
  {
    return this.httpClient.get<SoftSkill[]>(this.rootUrl + "soft-skills");
  }
}
