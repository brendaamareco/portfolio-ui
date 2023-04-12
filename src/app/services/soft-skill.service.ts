import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../models/softSkill.interface';
import { AbstractService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService extends AbstractService<SoftSkill> 
{
  constructor(protected override httpClient: HttpClient) 
  { 
    super(httpClient, "http://localhost:8080/api/soft-skills");
  }
}
